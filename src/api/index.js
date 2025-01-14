import axios from "axios";
import urls from "../utils/urls";

const request = async ({
  method = "GET",
  authToken = null,
  data = null,
  params = null,
  url,
  type = true
}) => {

  console.log("Method: ", method);
  console.log("Data: ", data);
  console.log("URL: ", url);
  console.log("AuthToken: ", authToken);

  return await axios({
    baseURL: urls.main.developmentBaseUrl || urls.main.productionBaseUrl,
    url,
    method,
    headers: {
      "Content-Type": type ? "application/json" : 'multipart/form-data',
      ...(authToken && { Authorization: `Bearer ${authToken}` }),
    },
    data,
    params,
  });
};

export default request;
