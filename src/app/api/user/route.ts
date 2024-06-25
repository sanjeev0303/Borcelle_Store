import { ConnectDB } from "@/lib/database/DatabaseConnection";
import User from "@/lib/models/User";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";


 export const GET = async(req: NextRequest) =>{
    try {
        await ConnectDB()

        const {userId} = auth()

        if(!userId){
            return new NextResponse("Unauthoried", {status:404})
        }

        let user = await User.findOne({ clerkId: userId })

        // when the user sign-in for the first time , immediately we will create a new user for them
        if (!user) {
            user = await User.create({ clerkId: userId })
            await user.save()
        }

        return NextResponse.json(user, { status: 200 })
        
    } catch (error) {
        console.log("[User_GET]", error);
        return new NextResponse("Internal server error from user route", {status: 500})
    }
 } 