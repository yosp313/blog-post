"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";



export const deleteBlog = async(formData: FormData) =>{
    const id = formData.get("id")?.toString()!
    const supabase = createServerActionClient<Database>({cookies})
    const {error} = await supabase.from("blogs").delete().eq("id", id);

    
    if (error){
        console.log(error)
        return
    }
    
    redirect("/");
}