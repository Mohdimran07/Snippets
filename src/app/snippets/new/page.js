"use client";

import { useActionState, startTransition } from "react";
import * as actions from "@/actions";

export default function snippetCreate() {
  const [formState, action] = useActionState(actions.createSnippet, {
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(() => {
      action(formData);
    });
  };
  return (
    <form onSubmit={handleSubmit}>
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
        <div>
          {formState.message && (
            <div className="my-2 p-2 bg-red-200 border rounded border-red-400">
              {formState.message}
            </div>
          )}
        </div>
        <button type="submit" className="rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  );
}
