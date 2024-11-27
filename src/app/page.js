import Link from "next/link";
import { db } from "@/db";

const Home = async () => {
  const snippets = await db.snippet.findMany();

  const renederSnippets = snippets?.map((snippet) => {
    return (
      <Link
        id={snippet.id}
        href={`snippets/${snippet.id}`}
        className="flex justify-between items-center p-2 border rounded"
      >
        <div>{snippet.title}</div>
        <div>View</div>
      </Link>
    );
  });

  return (
    <div>
      <div className="flex m-2 justify-between items-center">
        <h1 className="text-xl font-bold">Snippets</h1>
        <Link href="/snippets/new" className="border p-2 border-rounded">
          View
        </Link>
      </div>
      <div className="flex flex-col gap-2">{renederSnippets}</div>
    </div>
  );
};

export default Home;
