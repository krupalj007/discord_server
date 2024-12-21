"use client";

import { Member, Message, Profile } from "@prisma/client";
import ChatWelcome from "./chat-welcome";
import { useChatQuery } from "@/hooks/use-chat-query";
import { Loader2, ServerCrash } from "lucide-react";
import { ElementRef, Fragment,useRef } from "react";
import ChatItem from "./chat-item";
import {format} from "date-fns"
import { useChatSocket } from "@/hooks/use-chat-socket";
import { useChatScroll } from "@/hooks/use-chat-scroll";


const DATE_FORMAT = "d MMM yyyy, HH:mm"

type MessageWithMemberWithProfile = Message & {
    member: Member & {
        profile : Profile
    }
}

interface ChatMessagesProps {
    name: string;
    member: Member;
    chatId: string;
    apiUrl: string;
    socketUrl: string;
    socketQuery: Record<string, string>;
    paramKey: "channelId" | "conversationId";
    paramValue: string;
    type: "channel" | "conversation";
}

const ChatMessages =({
    name,
    member,
    chatId,
    apiUrl,
    socketUrl,
    socketQuery,
    paramKey,
    paramValue,
    type,
}: ChatMessagesProps) => {

    const queryKey = `chat:${chatId}`;
    const addKey = `chat:${chatId}:messages`;
    const updateKey = `chat:${chatId}:messages:update`

    const chatRef = useRef<ElementRef<"div">>(null);
    const bottomRef = useRef<ElementRef<"div">>(null);

    const { 
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status
    } = useChatQuery({
        queryKey,
        apiUrl,
        paramKey,
        paramValue,
    });

    const dataMessage = data?.pages?.[0]?.items?.length

    useChatSocket({queryKey,addKey,updateKey})
    useChatScroll({
        chatRef,
        bottomRef,
        loadMore: fetchNextPage,
        shouldLoadMore: !isFetchingNextPage && !!hasNextPage,
        count: dataMessage ?? 0,
    })

    // Render SVG background with blur effect and opacity if status is pending
    if (status === "pending") {
        return (
            <div className="relative flex-1 flex flex-col overflow-y-auto">
                <svg className="absolute inset-0 w-full h-full z-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#ACC0B4" fillOpacity="0.3" filter="blur(5px)" d="M0,192L48,202.7C96,213,192,235,288,218.7C384,203,480,149,576,128C672,107,768,117,864,144C960,171,1056,213,1152,208C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                <div className="flex flex-col flex-1 justify-center items-center z-10">
                    <Loader2 className="h-7 w-7 text-zinc-500 animate-spin my-4" />
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                        Load Messages...
                    </p>
                </div>
            </div>
        );
    }

    if (status === "error") {
        return (
            <div className="relative flex-1 flex flex-col overflow-y-auto">
                <svg className="absolute inset-0 w-full h-full z-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#ACC0B4" fillOpacity="0.3" filter="blur(5px)" d="M0,192L48,202.7C96,213,192,235,288,218.7C384,203,480,149,576,128C672,107,768,117,864,144C960,171,1056,213,1152,208C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                <div className="flex flex-col flex-1 justify-center items-center z-10">
                    <ServerCrash className="h-7 w-7 text-zinc-500 my-4" />
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    🌐 Something Went Wrong! 🌐
                    </p>
                </div>
            </div>
        );
    }

    // Render main content when status is not pending
    return (
        // <div ref={chatRef} className="relative flex-1 flex flex-col overflow-y-auto">
        //     {/* SVG Background */}
        //     <svg className="absolute inset-0 w-full h-full z-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        //         <path fill="#ACC0B4" fillOpacity="1" d="M0,192L48,202.7C96,213,192,235,288,218.7C384,203,480,149,576,128C672,107,768,117,864,144C960,171,1056,213,1152,208C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        //     </svg>
            
        //     {/* Chat Content */}
        //     <div className="relative z-10 flex-1 flex flex-col">
        //         {/* Your chat messages content goes here */}
        //         <div className="flex-1 overflow-y-auto">
        //             {/* Your chat messages content goes here */}
               
                
        //         {/* Chat welcome component */}
        //         <ChatWelcome
        //             type={type}
        //             name={name}
        //         />

        // <div className="flex flex-col-reverse mt-auto">
        // {
        //     data?.pages?.map((group,i)=> (
        //       <Fragment key={i}>

        //         {
        //             group.items.map((message: MessageWithMemberWithProfile) => (
        //              <ChatItem 
        //                  key={message.id}
        //                  id={message.id}
        //                  currentMember={member}
        //                  member={message.member}
        //                  content={message.content}
        //                  fileUrl={message.fileUrl}
        //                  deleted={message.deleted}
        //                  timestamp={format(new Date(message.createdAt),DATE_FORMAT)}
        //                  isUpdated={message.updatedAt !== message.createdAt}
        //                  socketUrl={socketUrl}
        //                  socketQuery={socketQuery}
        //              />
        //             ))
        //         }



        //       </Fragment> 
        //     ))
        // }

        // </div>


        // </div>

        //     </div>
        //     <div  
        //     ref={bottomRef}
        //     />
        // </div>

        <div ref={chatRef} className="flex-1 flex flex-col py-4 overflow-y-auto">
      {!hasNextPage && <div className="flex-1" />}
      {!hasNextPage && (
        <ChatWelcome
          type={type}
          name={name}
        />
      )}
      {hasNextPage && (
        <div className="flex justify-center">
          {isFetchingNextPage ? (
            <Loader2 className="h-6 w-6 text-zinc-500 animate-spin my-4" />
          ) : (
            <button
              onClick={() => fetchNextPage()}
              className="text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 text-xs my-4 dark:hover:text-zinc-300 transition"
            >
              Load previous messages
            </button>
          )}
        </div>
      )}
      <div className="flex flex-col-reverse mt-auto">
        {data?.pages?.map((group, i) => (
          <Fragment key={i}>
            { group && group.items && group.items.map((message: MessageWithMemberWithProfile) => (
              <ChatItem
                key={message.id}
                id={message.id}
                currentMember={member}
                member={message.member}
                content={message.content}
                fileUrl={message.fileUrl}
                deleted={message.deleted}
                timestamp={format(new Date(message.createdAt), DATE_FORMAT)}
                isUpdated={message.updatedAt !== message.createdAt}
                socketUrl={socketUrl}
                socketQuery={socketQuery}
              />
            ))}
          </Fragment>
        ))}
      </div>
      <div ref={bottomRef} />
    </div>
        
    );
}

export default ChatMessages;