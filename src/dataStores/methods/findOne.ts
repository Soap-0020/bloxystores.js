import Links from "../../classes/links";
import getUrl from "../../getUrl";
import EntryID from "../../types/entryId";

const findDataStoreEntry = (dataStore: string, id: EntryID) =>
  getUrl(Links.dataStoreEntry(dataStore, id));

export default findDataStoreEntry;
