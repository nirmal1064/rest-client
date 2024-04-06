import { useRequest } from "../../context/utils";

export default function Headers() {
  const { headers, setHeaders } = useRequest();

  function handleEnableChange(index: number, enabled: boolean) {
    const updatedHeaders = [...headers];
    updatedHeaders[index] = { ...updatedHeaders[index], enabled };
    setHeaders(updatedHeaders);
  }

  function handleInputChange(index: number, key: string, value: string) {
    const updatedHeaders = [...headers];
    updatedHeaders[index] = {
      key,
      value,
      enabled: updatedHeaders[index].enabled
    };
    setHeaders(updatedHeaders);
  }

  function handleRemoveRow(index: number) {
    const updatedHeaders = [...headers];
    updatedHeaders.splice(index, 1);
    setHeaders(updatedHeaders);
  }

  function handleAddRow() {
    setHeaders([...headers, { key: "", value: "", enabled: false }]);
  }

  return (
    <>
      {headers.map((header, index) => (
        <div key={index} className="flex mb-2 items-center gap-2">
          <input
            type="checkbox"
            checked={header.enabled}
            onChange={(e) => handleEnableChange(index, e.target.checked)}
            className="h-6 w-6 border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            type="text"
            value={header.key}
            onChange={(e) =>
              handleInputChange(index, e.target.value, header.value)
            }
            placeholder="Key"
            className="border border-gray-400 px-2 py-1"
          />
          <input
            type="text"
            value={header.value}
            onChange={(e) =>
              handleInputChange(index, header.key, e.target.value)
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
