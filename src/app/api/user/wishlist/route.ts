import { ConnectDB } from "@/lib/database/DatabaseConnection";
import User from "@/lib/models/User";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest)=>{
try {
    await ConnectDB()

        const {userId} = auth()

        if(!userId){
            return new NextResponse("Unauthoried", {status:404})
        }

        const user = await User.findOne({ clerkId: userId })
        
        if (!user) {
            return new NextResponse("User not found", { status: 403 })
        }

        const { productId } = await req.json()

        if (!productId) {
            return new NextResponse("Product Id required", {status: 404})
        }

        const isLiked = user.wishlist.includes(productId)

        if (isLiked) {
            user.wishlist = user.wishlist.filter((id: string) => id !== productId)
        } else {
            user.wishlist.push(productId)
        }

        await user.save()

        return NextResponse.json(user, {status: 200})
} catch (error) {
    console.log("[Wishlist_POST]", error);
        return new NextResponse("Internal server error from wishlist route", {status: 500})
}
}