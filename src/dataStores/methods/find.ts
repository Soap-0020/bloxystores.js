import Links from "../../classes/links";
import getUrl from "../../getUrl";
import FindOptions from "../../types/findOptions";

const findDataStore = (dataStore: string, options?: Partial<FindOptions>) =>
  getUrl(
    Links.dataStoreList(dataStore) +
      Object.entries(options ?? {})
        .map(
          ([key, value], index) =>
            (index == 0 ? "?" : "&") + key + `=${encodeURIComponent(value)}`
        )
        .join("")
  );

export default findDataStore;
