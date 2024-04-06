import { AxiosResponse } from "axios";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState
} from "react";

type ResponseContextType = {
  response: AxiosResponse | undefined;
  setResponse: Dispatch<SetStateAction<AxiosResponse | undefined>>;
};

export const ResponseDataContext = createContext<
  ResponseContextType | undefined
>(undefined);

type Props = { children: ReactNode };

export default function ResponseDataProvider({ children }: Props) {
  const [response, setResponse] = useState<AxiosResponse>();

  return (
    <ResponseDataContext.Provider value={{ response, setResponse }}>
      {children}
    </ResponseDataContext.Provider>
  );
}
