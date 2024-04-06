import React from "react";
import { useResponse } from "../../context/utils";

export default function ResponseHeaders() {
  const { response } = useResponse();

  return (
    <div className="grid grid-cols-[auto,1fr] gap-x-5 gap-y-2">
      {Object.entries(response!.headers).map(([key, value]) => (
        <React.Fragment key={key}>
          <div>{key}</div>
          <div>{value}</div>
        </React.Fragment>
      ))}
    </div>
  );
}
