import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog";
  import { useModal } from "@/hooks/use-modal-store";
  import { Button } from "../ui/button";
  import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import qs from "query-string"

  
  export const DeleteMessageModal = () => {
    const [loading, setLoading] = useState(false);
    const { isOpen, onClose, type, data } = useModal();
    const isModalOpen = isOpen && type === "deleteMessage";
    const { apiUrl, query } = data;
    const router = useRouter();
   

    const reloadPage = () => {
      window.location.reload();
    };

    const onLeave = async () => {
      try {
        setLoading(true);

        const url = qs.stringifyUrl({
          url: apiUrl || "",
          query,
        })
            // router.refreh();

        await axios.delete(url);
        onClose();
      } catch (error) {
        console.error("[onLeave] Error:", error);
      } finally {
        setLoading(false);
      }
    };
    
  

  
    return (
      <div>
        
        <Dialog open={isModalOpen} onOpenChange={onClose}>
          <DialogContent className="bg-white text-black p-0 overflow-hidden">
            <DialogHeader className="p-8 p-6">
              <DialogTitle className="text-2xl text-center font-bold tracking-wide">
              💀 Can you delete message ? 💀
              </DialogTitle>
<DialogDescription  className="text-center text-zinc-500">
      Are you sure you want to permanently delete Message ?
</DialogDescription>

            </DialogHeader>
  
           <DialogFooter className="bg-gray-100 px-6 py-4">
              <div className="flex items-center justify-between w-full">
      <Button
      disabled={loading}
      onClick={onClose}
      variant="ghost"
      >
         Cancel
      </Button>
      <Button 
       disabled={loading}
       onClick={onLeave}
       variant="destructive"
      >
         OK, Go Ahead🍂
      </Button>
              </div>
           </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    );
  };
  