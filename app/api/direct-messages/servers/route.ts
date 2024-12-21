import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { ChannelType, MemberRole } from "@prisma/client";
import { profile } from "console";
import { NextResponse } from "next/server";
import {v4 as uuidv4} from "uuid"


interface RequestBody {
    name: string;
    imageUrl: string;
}



export async function POST(req:Request) {

   

    try {
        const {name,imageUrl} = await req.json();
        const profile = await currentProfile();

        if (!profile) {
            return new NextResponse("Unauthorized", {status : 401})
        }

        const server = await db.server.create({
            data : {
                profileId : profile.id,
                name,
                imageUrl,
                inviteCode : uuidv4(),
                channels: {
                    create : [
                        {type: ChannelType.TEXT, name: "general", profileId : profile.id}
                    ]
                },
                members : {
                    create : [
                        {profileId: profile.id, role: MemberRole.ADMIN}
                    ]
                }
            }
        })

        return NextResponse.json(server);

    } catch (error) {
        console.log("[SERVERS POST]",error);
        return new NextResponse("internal error", {status:500});
    }
}
 