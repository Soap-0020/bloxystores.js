import Links from "../../classes/links";
import getUrl from "../../getUrl";
import DataStoreEntryValue from "../../types/dataStoreEntryValue";
import EntryID from "../../types/entryId";

const updateDataStoreEntry = (
  dataStore: string,
  id: EntryID,
  value: DataStoreEntryValue,
  allowMissing: boolean
) =>
  getUrl(
    Links.dataStoreEntry(dataStore, id) + `?allowMissing=${allowMissing}`,
    {
      method: "PATCH",
      body: JSON.stringify({
        value,
      }),
    }
  );

export default updateDataStoreEntry;
