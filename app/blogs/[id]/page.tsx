import { DeleteButton } from "@/components/DeleteButton";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Blog({ params }: { params: { id: string } }) {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: singleBlog } = await supabase
    .from("blogs")
    .select("title, content")
    .eq("id", params.id);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return singleBlog?.map((blog) => (
    <div
      className="flex flex-col justify-center items-center min-h-screen"
      key={params.id}
    >
      <div className="flex gap-44">
        <p className="text-slate-500 mb-11 mr-auto ml-11">{user?.email}</p>
        <DeleteButton blogId={params.id.toString()} />
      </div>
      <div className="flex flex-col max-w-screen-2xl">
        <h1 className="text-3xl font-bold text-center mb-9">{blog.title}</h1>
        <p className="text-xl">{blog.content}</p>
      </div>
    </div>
  ));
}
