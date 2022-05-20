import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";


const Monaco = () => {
    return (
        <Editor
          height="90vh"
          defaultLanguage="javascript"
          defaultValue="// some comment"
        />
       );
}

export default Monaco