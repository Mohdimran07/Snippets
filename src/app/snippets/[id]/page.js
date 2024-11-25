import { db } from "@/db";
import { notFound } from "next/navigation";

const SnippetsShowPage = async (props) => {
  const { id } = await props.params;

  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(id),
    },
  });
  console.log(snippet);

  if(!snippet){
    return notFound()
  }

  return <div>{snippet.title}</div>;
};

export default SnippetsShowPage;
