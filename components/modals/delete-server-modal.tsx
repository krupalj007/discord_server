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

  
  export const DeleteServerModal = () => {
    const [loading, setLoading] = useState(false);
    const { isOpen, onClose, type, data } = useModal();
    const isModalOpen = isOpen && type === "deleteServer";
    const { server } = data;
    const router = useRouter();

    const reloadPage = () => {
      window.location.reload();
    };

const onLeave = async () => {
  try {
    setLoading(true)

    await axios.delete(`/api/servers/${server?.id}`)
    onClose();
    router.refresh();
    reloadPage();
    router.push("/")
    
  } catch (error) {
    console.log("[leave server onclick]",error);
  }finally {
    setLoading(false)
  } 
}
  

  
    return (
      <div>
        
        <Dialog open={isModalOpen} onOpenChange={onClose}>
          <DialogContent className="bg-white text-black p-0 overflow-hidden">
            <DialogHeader className="p-8 p-6">
              <DialogTitle className="text-2xl text-center font-bold tracking-wide">
              💀 Delete Server 💀
              </DialogTitle>
<DialogDescription  className="text-center text-zinc-500">
      Are you sure you want to permanently delete <span className="font-semibold text-indigo-500">{server?.name}</span>?
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
  