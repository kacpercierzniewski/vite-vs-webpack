import Editor from "@monaco-editor/react";


const Monaco = () => {
    return (
        <Editor
          width={'100%'}
          height="20vh"
          defaultLanguage="javascript"
          defaultValue="// some comment"
        />
       );
}

export default Monaco