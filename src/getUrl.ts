import GlobalData from "./globalData";

const getUrl = async (
  url: string | (() => string),
  requestData?: RequestInit
) => {
  const data = await fetch(typeof url == "function" ? url() : url, {
    headers: {
      "x-api-key": GlobalData.apiKey ?? "",
      "content-type": "application/json",
      ...requestData?.headers,
    },
    ...requestData,
  });
  const json = await data.json();

  if (!data.ok) throw new Error(JSON.stringify(json));

  return json;
};

export default getUrl;
