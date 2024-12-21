"use client"

import { cn } from "@/lib/utils";
import { Channel, ChannelType, MemberRole, Server } from "@prisma/client"
import { FileEdit, Hash, HashIcon, Lock, Mic, Trash2, Video } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { ActionTooltip } from "../action-tooltip";
import { ModalType, useModal } from "@/hooks/use-modal-store";

interface ServerChannelProps {
  channel : Channel;
  server : Server;
  role? :MemberRole;
}

const iconMap = {
    [ChannelType.TEXT]: HashIcon,
    [ChannelType.AUDIO]: Mic,
    [ChannelType.VIDEO]: Video
}


const ServerChannel = ({
    channel,
    role,
    server,
}:ServerChannelProps  ) => {
    const Icon = iconMap[channel.type]

    const router = useRouter();
    const params = useParams();
    const { onOpen } = useModal();



    const onSubmit = () => {
        router.push(`/servers/${params?.serverId}/channels/${channel.id}`)
    }

    const onAction = (e: React.MouseEvent, action : ModalType) => {
        e.stopPropagation();
        onOpen(action, { channel,server })
    }

  return (
    <button
    onClick={onSubmit}
    className={cn("group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/50 transition mb-1",
    params?.channelId === channel.id && "bg-zinc-700/20 dark:bg-zinc-700"
    )}
    >
        <Icon 
        className="flex-shrink-1 w-5 h-5 text-zinc-500 dark:text-zinc-400"
        />
        <p
        className={cn("line-clamp-1 font-semibold text-sm text-zinc-500 group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300 transition",
        params?.channelId === channel.id && "text-primary dark:text-zinc-200 dark:group-hover:text-white"
        )}
        >
            {channel.name}
        </p>
        {
            channel.name !== "general" && role !== MemberRole.GUEST && (
                <div className="ml-auto flex items-center gap-x-2">
                    <ActionTooltip label="Edit">
                <FileEdit 
                onClick={(e)=> onAction(e,"editChannel")}
                className="hidden group-hover:block w-4 h-4 text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition"
                />
                    </ActionTooltip>
                    <ActionTooltip label="Delete">
                <Trash2 
                onClick={(e)=> onAction(e,"deleteChannel")}
                className="hidden group-hover:block w-4 h-4 text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition"
                />
                    </ActionTooltip>
                </div>
            )
        }
        {
            channel.name === "general"  && (
                <div className="ml-auto flex items-center gap-x-2">
                    <ActionTooltip label="Edit">
                <Lock
                className=" w-4 h-4 text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition"
                />
                    </ActionTooltip>
                </div>
            )
        }

    </button>
  )
}

export default ServerChannel