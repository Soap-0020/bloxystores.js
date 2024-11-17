import Links from "../../classes/links";
import getUrl from "../../getUrl";
import DataStoreEntryValue from "../../types/dataStoreEntryValue";
import EntryID from "../../types/entryId";

const createDataStore = (
  dataStore: string,
  id: EntryID,
  value: DataStoreEntryValue
) =>
  getUrl(Links.dataStoreList(dataStore) + `?id=${id}`, {
    method: "POST",
    body: JSON.stringify({ value }),
  });

export default createDataStore;
