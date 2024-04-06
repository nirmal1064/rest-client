import { useState } from "react";
import QueryParams from "./QueryParams";
import Headers from "./Headers";
import JsonEditor from "./JsonEditor";

const TAB_ITEMS = {
  QUERY_PARAMS: "Query Params",
  HEADERS: "Headers",
  BODY: "Body"
} as const;

type TabItemsType = (typeof TAB_ITEMS)[keyof typeof TAB_ITEMS];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState<TabItemsType>("Query Params");

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
        {activeTab === TAB_ITEMS.QUERY_PARAMS && <QueryParams />}
        {activeTab === TAB_ITEMS.HEADERS && <Headers />}
        {activeTab === TAB_ITEMS.BODY && <JsonEditor />}
      </div>
    </div>
  );
}
