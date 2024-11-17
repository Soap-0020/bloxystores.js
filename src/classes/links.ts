import GlobalData from "../globalData";
import EntryID from "../types/entryId";

class Links {
  static baseUrl = () =>
    `https://apis.roblox.com/cloud/v2/universes/${GlobalData.universeId}`;
  static dataStores = () => this.baseUrl() + "/data-stores";
  static dataStoreList = (dataStore: string) =>
    this.dataStores() + "/" + dataStore + "/entries";

  static dataStoreEntry = (dataStore: string, id: EntryID) =>
    this.dataStoreList(dataStore) + "/" + id;
}

export default Links;
