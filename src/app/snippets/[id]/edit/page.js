import { db } from "@/db";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/components/snippet-edit-form";

const EditSnippet = async (props) => {
  const { id } = await props.params;

  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(id),
    },
  });

  if (!snippet) {
    return notFound();
  }
  
  return (
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
};

export default EditSnippet;

/* SnippetEditPage(Server Component)
     |
     |
     v
  SnippetEditForm(Client Component)
     |
     |
     v
  Monaco Editor 
  */
