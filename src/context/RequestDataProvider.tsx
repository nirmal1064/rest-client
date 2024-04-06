import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState
} from "react";

type KeyValuePair = { key: string; value: string; enabled: boolean };
type QueryParam = KeyValuePair;
type Headers = KeyValuePair;

type RequestDataContextType = {
  queryParams: QueryParam[];
  setQueryParams: Dispatch<SetStateAction<QueryParam[]>>;
  headers: Headers[];
  setHeaders: Dispatch<SetStateAction<Headers[]>>;
  requestBody: string;
  setRequestBody: Dispatch<SetStateAction<string>>;
};

export const RequestDataContext = createContext<
  RequestDataContextType | undefined
>(undefined);

type Props = { children: ReactNode };

export default function RequestDataProvider({ children }: Props) {
  const [queryParams, setQueryParams] = useState<QueryParam[]>([
    { key: "", value: "", enabled: true }
  ]);
  const [headers, setHeaders] = useState<Headers[]>([
    { key: "", value: "", enabled: true }
  ]);
  const [requestBody, setRequestBody] = useState("");

  return (
    <RequestDataContext.Provider
      value={{
        queryParams,
        setQueryParams,
        headers,
        setHeaders,
        requestBody,
        setRequestBody
      }}>
      {children}
    </RequestDataContext.Provider>
  );
}
