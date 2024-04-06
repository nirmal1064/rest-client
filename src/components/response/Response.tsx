import prettyBytes from "pretty-bytes";
import { useResponse } from "../../context/utils";
import ResponseTabs from "./ResponseTabs";

export default function Response() {
  const { response, setResponse } = useResponse();
  if (response == null) return <></>;

  function clearResponse() {
    setResponse(undefined);
  }

  return (
    <section className="mt-5">
      <h3 className="text-2xl">Response</h3>
      <div className="flex gap-2 mb-4">
        <p className="flex gap-1">
          Status: <span>{response.status}</span>
        </p>
        <p className="flex gap-1">
          Time: <span>{response.config.headers["request-totaltime"]}ms</span>
        </p>
        <p className="flex gap-1">
          Size:{" "}
          <span>
            {prettyBytes(
              JSON.stringify(response.data).length +
                JSON.stringify(response.headers).length,
              { space: false }
            )}
          </span>
        </p>
        <button
          className="bg-blue-500 px-2 rounded-md text-white"
          onClick={clearResponse}>
          Clear
        </button>
      </div>
      <ResponseTabs />
    </section>
  );
}
