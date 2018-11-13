// Register User
import axios from "axios";
import { GET_ERRORS } from "./types";

export const registerUser = userData => dispatch => {
  // axios
  //   .post("http://localhost:5000/api/users/register", userData)
  //   .then(res => console.log(res.data))
  //   .catch(err => this.setState({ errors: err.response.data }));

  axios
    .post("api/users/register", userData)
    .then(res => console.log(res.data))
    .catch(errors =>
      dispatch({
        type: GET_ERRORS,
        paylaod: errors.response.data
      })
    );
};
 