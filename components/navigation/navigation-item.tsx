"use client";


import Image from "next/image";
import { useParams,useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { ActionTooltip } from "../action-tooltip";

interface NavigationItemProps {
    id: string;
    imageUrl:string;
    name:string
}

export const NavigationItem = ({
    id,
    imageUrl,
    name,
}:NavigationItemProps) => {

    const params = useParams();
    const router = useRouter();


    const onClick = () => {
        router.push(`/servers/${id}`);
    }

    return (
      <ActionTooltip side="right" align="center" label={name}>
         <button 
         onClick={onClick}
         className="group wonderServer relative flex item-center"
         
         >
            <div className={cn("absolute left-0 bg-zinc-500 rounded-r-full transition-all duration-300 w-[4px]",
            params?.serverId !== id && "group-hover:h-[20px]",
            params?.serverId === id ? "h-[36px] " : "h-[8px]"

            )}  />
               <div className={cn(
                "relative group flex mx-3 h-[48px] w-[48px] rounded-[24px] transition-all overflow-hidden",
                params?.serverId === id && "bg-primary/10 text-primary rounded-[8px] transition-all",
               )}>

                <Image  
                fill
                src={imageUrl}
                alt={`server of ${name}`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

               </div>

         </button>
      </ActionTooltip>
    )
}