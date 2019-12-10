import { GET_ALL_ITEMS } from '../action/types'

const initialState = {
  // items: testitems,
  items: [],
  searched: null,
  categorized: null,
  newItem: [],
  favorites: [],
  itemInfo: null,
  allUsers:[],
}

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ITEMS:
      return {
        ...state,
        items: action.payload
      }
    case 'FILTER_ITEM_BY_SEARCH':
      let search = state.items.filter(item => {
        return item.title.toLowerCase().includes(action.input)
      });
      return {
        ...state,
        searched: search
      }
    case 'FILTER_ITEM_BY_CATEGORY':
      let category = state.items.filter(item => {
        return item.category === action.Category
      });
      return {
        ...state,
        categorized: category
      };
    case 'GET_ITEM_BY_ID':
      let fav = state.items.filter(item => {
        return (action.idList).includes(item.id)
      })
      return {
        ...state,
        favorites: fav
      };
    case 'GET_ALL_USERS':
      return {
        ...state,
        allUsers: action.payload
      }
    case 'GET_ITEM_INFO':
      let info = state.items.find(i => i.id === action.id)
      return {
        ...state,
        itemInfo: info
      }
    default:
      return state;
  }
}

export default itemReducer