import { useRequest } from "../../context/utils";

export default function QueryParams() {
  const { queryParams, setQueryParams } = useRequest();

  function handleEnableChange(index: number, enabled: boolean) {
    const updatedParams = [...queryParams];
    updatedParams[index] = { ...updatedParams[index], enabled };
    setQueryParams(updatedParams);
  }

  function handleInputChange(index: number, key: string, value: string) {
    const updatedParams = [...queryParams];
    updatedParams[index] = {
      key,
      value,
      enabled: updatedParams[index].enabled
    };
    setQueryParams(updatedParams);
  }

  function handleRemoveRow(index: number) {
    const updatedParams = [...queryParams];
    updatedParams.splice(index, 1);
    setQueryParams(updatedParams);
  }

  function handleAddRow() {
    setQueryParams([...queryParams, { key: "", value: "", enabled: true }]);
  }

  return (
    <>
      {queryParams.map((param, index) => (
        <div key={index} className="flex mb-2 items-center gap-2">
          <input
            type="checkbox"
            checked={param.enabled}
            onChange={(e) => handleEnableChange(index, e.target.checked)}
            className="h-6 w-6 border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            type="text"
            value={param.key}
            onChange={(e) =>
              handleInputChange(index, e.target.value, param.value)
            }
            placeholder="Key"
            className="border border-gray-400 px-2 py-1"
          />
          <input
            type="text"
            value={param.value}
            onChange={(e) =>
              handleInputChange(index, param.key, e.target.value)
            }
            placeholder="Value"
            className="border border-gray-400 px-2 py-1"
          />
          <button
            onClick={() => handleRemoveRow(index)}
            className="bg-red-500 text-white px-2 py-1 rounded">
            Remove
          </button>
        </div>
      ))}
      <button
        onClick={handleAddRow}
        className="bg-blue-500 text-white px-2 py-1 rounded">
        Add
      </button>
    </>
  );
}
