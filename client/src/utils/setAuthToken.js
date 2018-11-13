import axios from "axios";

const setAuthToken = token => {
  if (token) {
    //aplly to every request
    axios.defaults.headers.commom["Authorization"] = token;
  } else {
    // delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
