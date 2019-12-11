import axios from 'axios';
import {GET_ERRORS, GET_ALL_ITEMS} from './types'
import qs from 'qs';
// 'https://jsonplaceholder.typicode.com/posts'

// export const addItem = (item, history) => async dispatch => {
//   try {
//     await axios.post("https://my-json-server.typicode.com/kimsoojee/demo/items", item);
//     history.push("/");
//     dispatch({
//       type: GET_ERRORS,
//       payload: {}
//     })
//   } catch (error) {
//     dispatch({
//       type: GET_ERRORS,
//       payload: error.response.data
//     })
//   }
// }; 

export const addItem = (item, history) => async dispatch => {
    try {
    await axios("https://my-json-server.typicode.com/kimsoojee/demo/items", {
      method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
      data: qs.stringify(item),
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
    })
    history.push("/");
    dispatch({
      type: GET_ERRORS,
      payload: {}
    })
    } catch (error) {
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data
      })
    }
}; 

export const getAllItems = () => async dispatch => {
  // const res = await axios.get("https://my-json-server.typicode.com/kimsoojee/demo/items")
  var db = openDatabase("db", '1.0', "My WebSQL Database", 3 * 1024 * 1024);
  var allItems=null;
  db.transaction(function (tx) {
    tx.executeSql("SELECT * FROM products", [], function(tx, results) {
      allItems = results.rows;
      dispatch({
        type: GET_ALL_ITEMS,
        payload: allItems
      })
    });
  }); 
}

export const filterItemBySearch = (input) => {
  return (dispatch, getState) => {
    dispatch({ type: 'FILTER_ITEM_BY_SEARCH', input })
  }
};

export const filterItemByCategory = (Category) => {
  return (dispatch, getState) => {
    dispatch({ type: 'FILTER_ITEM_BY_CATEGORY', Category })
  }
};

export const getItemById = (idList) => {
  return (dispatch, getState) => {
    dispatch({type: 'GET_ITEM_BY_ID', idList})
  }
}

export const getAllUsers = () => async dispatch => {
  const res = await axios.get("https://my-json-server.typicode.com/kimsoojee/demo/users")
  dispatch({
    type: 'GET_ALL_USERS',
    payload: res.data
  })
}

export const getItemInfo = (id) => {
  return (dispatch, getState) => {
    dispatch({type: 'GET_ITEM_INFO', id})
  }
}

export const getItemDetail = (id) => dispatch => {
  var db = openDatabase("db", '1.0', "My WebSQL Database", 3 * 1024 * 1024);
  var detail=null;
  db.transaction(function (tx) {
    tx.executeSql(`SELECT * FROM products WHERE id="${id}"`, [], function(tx, results) {
      detail = results.rows;
      dispatch({
        type: 'GET_ITEM_DETAIL',
        payload: detail
      })
    });
  }); 
}