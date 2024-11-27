import { redirect } from "next/navigation";
import { db } from "@/db";

export default function snippetCreate() {
  const createSnippet = async (formData) => {
    "use server";

    const title = formData.get("title");
    const code = formData.get("code");

     await db.snippet.create({
      data: {
        title,
        code,
      },
    });

    redirect('/')
  };
  return (
    <form action={createSnippet}>
      <h3 className="font-bold m-3"> Create snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input name="title" className="border rounded p-2 w-full" />
        </div>
        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea name="code" className="border rounded p-2 w-full" />
        </div>
        <button type="submit" className="rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  );
}
