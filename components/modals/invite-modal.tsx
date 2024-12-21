import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog";
  import { useModal } from "@/hooks/use-modal-store";
  import { Label } from "../ui/label";
  import { Input } from "../ui/input";
  import { Button } from "../ui/button";
  import { Check, Copy, RefreshCcw } from "lucide-react";
  import { useOrigin } from "@/hooks/use-origin";
  import { useState } from "react";
import axios from "axios";
  
  export const InviteModal = () => {
    const [copied, setCopied] = useState(false);
    const [loading, setLoading] = useState(false);
    const { onOpen,isOpen, onClose, type, data } = useModal();
    const isModalOpen = isOpen && type === "invite";
    const { server } = data;
  
    const origin = useOrigin();
    const inviteUrl = `${origin}/invite/${server?.inviteCode}`;
  
    const onCopy = () => {
      if (navigator.clipboard) {
        navigator.clipboard
          .writeText(inviteUrl)
          .then(() => {
            setCopied(true);
            setTimeout(() => {
              setCopied(false);
            }, 1500);
          })
          .catch((error) => {
            console.error("Error copying to clipboard:", error);
            // Handle error
          });
      } else {
        console.warn("Clipboard API not available");
        // Fallback mechanism, such as using document.execCommand('copy')
        // or displaying a message prompting the user to copy manually.
      }
    };
  
    const handleGenerateNewLink = async() => {
        try {
            setLoading(true)

            const response = await axios.patch(`/api/servers/${server?.id}/invite-code`)
            onOpen("invite", {server : response.data})
         
                
        } catch (error) {
            console.log("Generate New Link Error",error);   
        } finally {
            setLoading(false)
        }
    };
  
    return (
      <div>
        <Dialog open={isModalOpen} onOpenChange={onClose}>
          <DialogContent className="bg-white text-black p-0 overflow-hidden">
            <DialogHeader className="p-8 p-6">
              <DialogTitle className="text-2xl text-center font-bold tracking-wide">
                Invite People 🦅
              </DialogTitle>
            </DialogHeader>
  
            <div className="p-2">
              <Label className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                Server Invite Link
              </Label>
              <div className="flex items-center mt-2 gap-x-2">
                <Input
                  className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                  readOnly
                  disabled={loading}
                  value={inviteUrl}
                />
                <Button disabled={loading} onClick={onCopy} size="icon">
                  {copied ? <Check  className="w-6 h-6"/> : <Copy className="w-6 h-6" />}
                </Button>
              </div>
              <Button
              disabled={loading}
                variant="link"
                size="sm"
                className="text-xs text-zinc-500 mt-4"
                onClick={handleGenerateNewLink}
              >
                Generate a new Link
                <RefreshCcw className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  };
  