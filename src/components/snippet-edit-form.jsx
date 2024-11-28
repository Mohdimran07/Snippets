"use client";

import { Editor } from "@monaco-editor/react";
import { useState } from "react";

import * as actions from "@/actions";

const SnippetEditForm = ({ snippet }) => {
  const [code, setCode] = useState(snippet.code);

  const EditorHandlerChange = (value) => {
    setCode(value);
  };

  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code);
  return (
    <div className="m-4">
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        options={{ minimap: { enable: false } }}
        onChange={EditorHandlerChange}
      />
      <form className="m-2" action={editSnippetAction}>
        <button className="p-2 border ">Save</button>
      </form>
    </div>
  );
};

export default SnippetEditForm;
