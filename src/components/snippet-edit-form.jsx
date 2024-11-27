"use client";

import { Editor } from "@monaco-editor/react";
import { useState } from "react";

const SnippetEditForm = ({ snippet }) => {
  const [code, setCode] = useState(snippet.code);

  const EditorHandlerChange = (value) => {
    setCode(value);
  };
 
  
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
    </div>
  );
};

export default SnippetEditForm;
