import axios from 'axios';
// import jwt_decode from "jwt-decode";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";

export const signUp = (newUser, history) => async dispatch => {
  try {
    await axios.post("/customer/registration", newUser);
    history.push("/onlineShop");
    dispatch({ type: GET_ERRORS, payload: {} });
  } catch (error) {
    dispatch({ type: GET_ERRORS, payload: error });
  }
};

// const setJWTToken = token => {
//   if (token) {
//     axios.defaults.headers.common["Authorization"] = token;
//   } else {
//     delete axios.defaults.headers.common["Authorization"];
//   }
// };

// export const signIn = SigninRequest => async dispatch => {
//   try {
//     // post => Login Request
//     const res = await axios.post("https://jsonplaceholder.typicode.com/users", SigninRequest);
//     // extract token from res.data
//     const { token } = res.data;
//     // store the token in the localStorage
//     localStorage.setItem("jwtToken", token);
//     // set our token in header ***
//     setJWTToken(token);
//     // decode token on React
//     const decoded = jwt_decode(token);
//     // dispatch to our securityReducer
//     dispatch({
//       type: SET_CURRENT_USER,
//       payload: decoded
//     });
//   } catch (error) {
//     dispatch({ type: GET_ERRORS, payload: error.response.data });
//   }
// };

export const signIn = SigninRequest => async dispatch => {
  const url = "https://my-json-server.typicode.com/kimsoojee/demo/users?email=" + SigninRequest.email
  const res = await axios.get(url)
  try {
    const { token } = res.data;
    // localStorage.setItem("currentUser", token);
    localStorage.setItem("currentUser", JSON.stringify(res.data));
    dispatch({
      type: SET_CURRENT_USER, payload: res.data
    })

  } catch(error) {
    dispatch({ type: GET_ERRORS, payload: error });
  }
}

export const signOut = () => dispatch => {
  localStorage.removeItem("currentUser");
  dispatch({
    type: SET_CURRENT_USER,
    payload: {}
  });
};
