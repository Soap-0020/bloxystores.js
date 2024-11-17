import DataStoreEntryValue from "../types/dataStoreEntryValue";
import EntryID from "../types/entryId";
import FindOptions from "../types/findOptions";
import createDataStore from "./methods/createOne";
import deleteDataStore from "./methods/delete";
import findDataStore from "./methods/find";
import findDataStoreEntry from "./methods/findOne";
import updateDataStoreEntry from "./methods/updateOne";

const dataStore = (dataStore: string) => {
  return {
    find: (options?: Partial<FindOptions>) => findDataStore(dataStore, options),
    findOne: (id: EntryID) => findDataStoreEntry(dataStore, id),
    deleteOne: (id: EntryID) => deleteDataStore(dataStore, id),
    createOne: (id: EntryID, data: DataStoreEntryValue) =>
      createDataStore(dataStore, id, data),
    updateOne: (
      id: EntryID,
      value: DataStoreEntryValue,
      allowMissing?: boolean
    ) => updateDataStoreEntry(dataStore, id, value, allowMissing ?? false),
  };
};

export default dataStore;
