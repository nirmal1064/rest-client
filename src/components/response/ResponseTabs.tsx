import JsonViewer from "@uiw/react-json-view";
import { useState } from "react";
import { useResponse } from "../../context/utils";
import ResponseHeaders from "./ResponseHeaders";

const TAB_ITEMS = { BODY: "Body", HEADERS: "Headers" } as const;

type TabItemsType = (typeof TAB_ITEMS)[keyof typeof TAB_ITEMS];

export default function ResponseTabs() {
  const { response } = useResponse();
  const [activeTab, setActiveTab] = useState<TabItemsType>("Body");

  function changeTab(tabName: TabItemsType) {
    setActiveTab(tabName);
  }

  return (
    <div className="border border-gray-300 rounded-b">
      <ul className="flex gap-2">
        {Object.values(TAB_ITEMS).map((value) => (
          <li key={value}>
            <button
              className={`${
                activeTab === value &&
                "text-blue-500 border-b-2 border-blue-500"
              } px-4 py-2`}
              onClick={() => changeTab(value)}>
              {value}
            </button>
          </li>
        ))}
      </ul>
      <div className="p-4 bg-gray-100 rounded-b">
        {activeTab === TAB_ITEMS.HEADERS && <ResponseHeaders />}
        {activeTab === TAB_ITEMS.BODY && (
          <JsonViewer
            value={response!.data}
            displayDataTypes={false}
            displayObjectSize={false}
          />
        )}
      </div>
    </div>
  );
}
