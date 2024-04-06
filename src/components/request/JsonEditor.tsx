import { json } from "@codemirror/lang-json";
import CodeMirror from "@uiw/react-codemirror";
import { useCallback } from "react";
import { useRequest } from "../../context/utils";

export default function JsonEditor() {
  const { requestBody, setRequestBody } = useRequest();

  const onChange = useCallback(
    (val: string) => {
      setRequestBody(val);
    },
    [setRequestBody]
  );

  return (
    <CodeMirror
      value={requestBody}
      height="200px"
      extensions={[json()]}
      onChange={onChange}
    />
  );
}
