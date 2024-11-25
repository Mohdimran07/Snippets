import { db } from "@/db";

const Home = async () => {
  const snippets = await db.snippet.findMany();

  const renederSnippets = snippets?.map((snippet) => {
    return <div id={snippet.id}>{snippet.title}</div>;
  });

  return <div className="container mx-auto ">{renederSnippets}</div>;
};

export default Home;
