import { useContext } from "react";
import { RequestDataContext } from "./RequestDataProvider";
import { ResponseDataContext } from "./ResponseDataProvider";

export function useRequest() {
  const context = useContext(RequestDataContext);
  if (!context) {
    throw new Error("useRequest must be used within a RequestDataContext");
  }
  return context;
}

export function useResponse() {
  const context = useContext(ResponseDataContext);
  if (!context) {
    throw new Error("useResponse must be used within a ResponseDataContext");
  }
  return context;
}
