import { AxiosResponse } from "axios";
import { FormEvent } from "react";
import API from "./api";
import Tabs from "./components/request/Tabs";
import Response from "./components/response/Response";
import { useRequest, useResponse } from "./context/utils";

export default function App() {
  const { queryParams, headers, requestBody } = useRequest();
  const { setResponse } = useResponse();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const url = formData.get("url") as string;
    const methodType = formData.get("method-type") as string;

    const enabledQueryParams = queryParams
      .filter((q) => q.enabled)
      .reduce((data, { key, value }) => {
        if (key === "") return data;
        return { ...data, [key]: value };
      }, {});
    const enabledHeaders = headers
      .filter((h) => h.enabled)
      .reduce((data, { key, value }) => {
        if (key === "") return data;
        return { ...data, [key]: value };
      }, {});

    // const jsonBody = requestBody.replace(/[\n\t\s+]/g, "");
    // console.log(jsonBody);

    API({
      url,
      method: methodType,
      params: enabledQueryParams,
      headers: enabledHeaders,
      data: JSON.parse(requestBody)
    })
      .catch((e) => e)
      .then((response: AxiosResponse) => {
        setResponse(response);
      });
  }

  return (
    <main className="p-10 flex flex-col gap-4">
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <select
          className="border border-black p-1.5 rounded-md flex-grow-0"
          name="method-type">
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="PATCH">PATCH</option>
          <option value="DELETE">DELETE</option>
        </select>
        <input
          name="url"
          type="text"
          className="border p-1.5 border-black rounded-md grow"
          placeholder="https://www.example.com"
        />
        <button
          type="submit"
          className="border p-1.5 px-4 rounded-md bg-[#116EF9] text-white font-semibold">
          Send
        </button>
      </form>
      <Tabs />
      <Response />
    </main>
  );
}
