type DataStoreEntryValue =
  | null
  | boolean
  | string
  | number
  | any[]
  | { [key: string]: any };

export default DataStoreEntryValue;
