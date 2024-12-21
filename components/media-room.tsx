"use client";

import { useEffect, useState } from "react";
import { LiveKitRoom, VideoConference } from "@livekit/components-react";
import "@livekit/components-styles";
import { Loader2 } from "lucide-react";
import { useUser } from "@clerk/nextjs";

interface MediaRoomProps {
  chatId: string;
  video: boolean;
  audio: boolean;
};

export const MediaRoom = ({
  chatId,
  video,
  audio
}: MediaRoomProps) => {
   const { user } = useUser();
  const [token, setToken] = useState<string | null>("");

  useEffect(() => {
    if (!user?.firstName || !user?.lastName) return;

    const name = `${user?.firstName} ${user?.lastName}`;

    (async () => {
      try {
        const resp = await fetch(`/api/livekit?room=${chatId}&username=${name}`);
        const data = await resp.json();
        if (data.token) {
          setToken(data.token);
        } else {
          console.error("Token not received from server");
          // Handle error, such as showing a message to the user
        }
      } catch (e) {
        console.error("Error fetching token:", e);
        // Handle error, such as showing a message to the user
      }
    })();
  }, [user?.firstName, user?.lastName, chatId]);

  if (!token) {
    return (
      <div className="flex flex-col flex-1 justify-center items-center">
        <Loader2
          className="h-7 w-7 text-zinc-500 animate-spin my-4"
        />
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          Loading...
        </p>
      </div>
    )
  }

  return (
    <LiveKitRoom
      data-lk-theme="default"
      serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
      token={token}
      connect={true}
      video={video}
      audio={audio}
    >
      <VideoConference />
    </LiveKitRoom>
  );
};
