"use client"

import { Smile } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

import Picker from "@emoji-mart/react"
import data from "@emoji-mart/data"
import { useTheme } from "next-themes";


interface EmojiPickerProps { 
    onchange: (value : string) => void;
}

const EmojiPicker = ({
    onchange,
}: EmojiPickerProps) => {
const Theme = useTheme()

  return (
   <Popover>
    <PopoverTrigger>
    <Smile 
    className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition duration-300 ease-in-out transform hover:scale-110"
/>
    </PopoverTrigger>
    <PopoverContent
    side="right"
    sideOffset={40}
    className="bg-transparent border-none shadow-none drop-shadow-none mb-16"
    >
       <Picker 
       themes={Theme}
       data={data}
       onEmojiSelect={(emoji: any)=> onchange(emoji.native)}
       /> 
    </PopoverContent>
   </Popover>
  )
}

export default EmojiPicker