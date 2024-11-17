import GlobalData from "./globalData";
import ConnectionData from "./types/connectionData";

const connect = (data: ConnectionData) => {
  GlobalData.apiKey = data.apiKey;
  GlobalData.universeId = data.universeId.toString();
};

export default connect;
