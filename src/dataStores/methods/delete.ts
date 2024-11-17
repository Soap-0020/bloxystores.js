import Links from "../../classes/links";
import getUrl from "../../getUrl";
import EntryID from "../../types/entryId";

const deleteDataStore = (dataStore: string, id: EntryID) =>
  getUrl(Links.dataStoreEntry(dataStore, id), {
    method: "DELETE",
  });

export default deleteDataStore;
