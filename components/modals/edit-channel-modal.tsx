"use client";

import { useForm } from "react-hook-form";
import * as z from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import axios from "axios"


import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
  } from "@/components/ui/dialog"

  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"


  import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
  } from "@/components/ui/form"

import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import { useRouter } from "next/navigation";
import { useModal } from "@/hooks/use-modal-store";
import { ChannelType } from "@prisma/client";
import { useEffect } from "react";


  const formSchema = z.object({
    name : z.string().min(1,{
        message : "*Channel name is required"
    }).refine(
        name => name !== "general",
        {
            message : "Channel name cannot be 'General'"
        }
    ),
    type : z.nativeEnum(ChannelType)
  })

  

export const EditChannelModal = () => {

    const { isOpen,onClose,type,data} = useModal();

    const isModalOpen = isOpen && type === "editChannel";
    const { channel,server} = data;
    const router = useRouter();

  
    

const form = useForm({
    resolver: zodResolver((formSchema)),
    defaultValues : {
        name : "",
        type :  channel?.type || ChannelType.TEXT ,
    }
});


    useEffect(() => {
        if (channel) {
            form.setValue("name",channel.name)
            form.setValue("type",channel.type)
        }
    }, [form,channel])
    


const isLoading = form.formState.isSubmitting;

const onSubmit = async(values : z.infer<typeof formSchema>) => {
   try {
    // const Url = qs.stringify({
    //     url : "/api/channels",
    //     query : {
    //         serverId : params?.serverId
    //     } 
//  })
        const Url = `/api/channels/${channel?.id}?serverId=${server?.id}`
    await axios.patch(Url,values)
    form.reset();
    router.refresh(); 
    onClose();

   } catch (error){
    console.log(error)
   }
    
}

const handleClose = () => {
    form.reset();
    onClose();
}




    return (
       <div>
        <Dialog open={isModalOpen} onOpenChange={handleClose}>
            <DialogContent className="bg-white text-black p-0 overflow-hidden">
            <DialogHeader className="p-8 p-6">
        <DialogTitle className="text-2xl text-center font-bold tracking-wide">
        🎗️ Edit Your Channel 🎗️
        </DialogTitle>
        <DialogDescription className="text-center text-zinc-500 ">
            Give your channel a personality with a name. You can always change it later.
        </DialogDescription>
            </DialogHeader>

{/* form  */}


<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-8 px-6">
           

            <FormField 
            control={form.control}
            name="name"
            render={({field})=> (
                <FormItem>
                    <FormLabel className="uppercase  text-xs font-bold text-zinc-500 dark:text-secondary/70">Name Of Channel</FormLabel>
                    <FormControl>
                        <Input 
                        className="bg-zinc-400/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                        placeholder="#E.g. Enter channel name"
                        {...field}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem> 
            )}
            />


            <FormField 
            control={form.control}
            name="type"
            render={({field})=> (
                <FormItem>
                    <FormLabel className="uppercase  text-xs font-bold text-zinc-500 dark:text-secondary/70">Channel Type</FormLabel>
                   <Select
                    disabled={isLoading}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                   >
                    <FormControl>
                      <SelectTrigger className="bg-zinc-300/50 border-0 focus:ring-0 text-black ring-offset-0 focus:ring-ofset-0 capitalize outline-none">
                        <SelectValue placeholder="Channel Variation" />
                        </SelectTrigger>  
                    </FormControl>
                    <SelectContent>
                       {
                           Object.values(ChannelType).map((type)=>(
                                <SelectItem
                                key={type}
                                value={type}
                                className="capitalize"
                                >
                                   {type === "TEXT" ?  "Communication Hub 🍁" : 
                                   type === "AUDIO" ?  "Voice Stream  📞" : 
                                   type === "VIDEO" && "Video Stream  🎥"
    }
                                </SelectItem>
                           ))
                       } 
                    </SelectContent>
                   </Select>
                    <FormMessage />
                </FormItem> 
            )}
            />

             




        </div>
        <DialogFooter className="bg-gray-100 px-6 py-4">
                <Button variant="primary" disabled={isLoading}>
                    Save 
                </Button>
        </DialogFooter>
  </form>
</Form>

            </DialogContent>
       </Dialog>
       </div>
    )
}

