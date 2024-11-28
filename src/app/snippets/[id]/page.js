import Link from "next/link";
import { db } from "@/db";
import { notFound } from "next/navigation";
import * as actions from "@/actions";

const SnippetsShowPage = async (props) => {
  const { id } = await props.params;

  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(id),
    },
  });

  const deleteSnippetHandler = actions.deleteSnippet.bind(null, parseInt(id));

  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">{snippet.title}</h1>
        <div className="flex gap-4">
          <Link
            href={`/snippets/${snippet.id}/edit`}
            className="p-2 border rounded"
          >
            Edit
          </Link>
          <button className="p-2 border rounded" onClick={deleteSnippetHandler}>
            Delete
          </button>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
};

export default SnippetsShowPage;
