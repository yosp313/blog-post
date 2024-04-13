"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const addBlog = async (formData: FormData) => {

    const title = String(formData.get("title"));
    const content = String(formData.get("content"));
    const supabase = createServerActionClient<Database>({ cookies });

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      await supabase
        .from("blogs")
        .insert({ title, content, author_id: user.id });
    }
  };