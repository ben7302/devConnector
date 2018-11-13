// Register User
import axios from "axios";
import setAuthToken from "../../src/utils/setAuthToken";
import { SET_CURRENT_USER, GET_ERRORS } from "./types";
import jwt_decode from "jwt-decode";
export const registerUser = userData => dispatch => {
  // axios
  //   .post("http://localhost:5000/api/users/register", userData)
  //   .then(res => console.log(res.data))
  //   .catch(err => this.setState({ errors: err.response.data }));

  axios
    .post("api/users/register", userData)
    .then(res => console.log(res.data))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        paylaod: err.response.data
      })
    );
};

export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      //save to local storage
      const { token } = res.data;
      // set token to local storage
      localStorage.setItem("jwtToken", token);

      //  sset  token to auth  hader
      setAuthToken(token);
      // decode token to get user data
      const decoded = jwt_decode(token);

      // set the current user
      dispatch(setCurrentUser);
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        paylaod: err.response.data
      })
    );
};

//set logged  in user

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    paylaod: decoded
  };
};
