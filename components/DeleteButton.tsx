"use client";

import Image from "next/image";
import trash from "../public/trash-2.svg";
import { deleteBlog } from "@/app/blogs/[id]/actions";

export const DeleteButton = ({ blogId }: { blogId: string }) => {
  return (
    <form action={deleteBlog}>
      <input type="hidden" name="id" value={blogId} />
      <button className="ml-auto mr-7 mb-11" type="submit">
        <Image src={trash} alt="Delete button" />
      </button>
    </form>
  );
};
