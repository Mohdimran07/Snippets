"use server";

import { redirect } from "next/navigation";
import { db } from "@/db";

const createSnippet = async (formState, formData) => {
  try {
    const title = formData.get("title");
    const code = formData.get("code");

    if (typeof title !== "string" || title.length < 3) {
      return {
        message: "Title must be longer",
      };
    }
    if (typeof code !== "string" || code.length < 10) {
      return {
        message: "Code must be longer",
      };
    }

    await db.snippet.create({
      data: {
        title,
        code,
      },
    });
  } catch (error) {
    if (error) {
      return {
        message: error.message,
      };
    }
    return {
      message: "Something went wrong...!!!",
    };
  }

  redirect("/");
};

const editSnippet = async (id, code) => {
  await db.snippet.update({
    where: { id },
    data: { code },
  });

  redirect(`/snippets/${id}`);
};

const deleteSnippet = async (id) => {
  await db.snippet.delete({
    where: { id },
  });

  redirect("/");
};

export { createSnippet, editSnippet, deleteSnippet };
