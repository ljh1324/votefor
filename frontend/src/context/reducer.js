import { deepCopy } from "../utils/copy";

const SET_CATEGORIES = "SET_CATEGORIES";
const SET_CATEGORY = "SET_CATEGORY";
const SET_PROMISES = "SET_PROMISES";
const SET_PARTIES = "SET_PARTEIS";
const SET_PARTY = "SET_PARTY";

/**
 * categories: {
 *   [category1]: {           // 카테고리(분야)명
 *     voted: false           // 카테고리(분야) 선택 여부
 *     promises: [
 *       {
 *         voted: false,      // 공약 선택 여부
 *         summary: "",       // 공약
 *         contents: "",      // 공약 설명
 *         party: {
 *           name: "",        // 정당명
 *           color: "",       // 정당 색상
 *           image: ""        // 정당 로고
 *         }
 *       }
 *     ],
 *   },
 *   [category2]: {
 *     ...
 *   }
 *   ...
 * }
 */
export const initialState = {
  categories: {},
  originalCategories: {},
  parties: {},
  originalParties: {}
};

export const handleCategoriesSet = categories => {
  return {
    type: SET_CATEGORIES,
    payload: {
      originalCategories: deepCopy(categories),
      categories
    }
  };
};

export const handleCategorySet = (categoryName, category) => {
  return {
    type: SET_CATEGORY,
    payload: {
      key: categoryName,
      category
    }
  };
};

export const handlePromisesSet = (category, promises) => {
  return {
    type: SET_PROMISES,
    payload: {
      key: category,
      category: {
        promises,
        voted: true
      }
    }
  };
};

export const handlePartiesSet = parties => {
  return {
    type: SET_PARTIES,
    payload: {
      originalParties: deepCopy(parties),
      parties
    }
  };
};

export const handlePartySet = (partyName, party) => {
  return {
    type: SET_PARTY,
    payload: {
      key: partyName,
      party
    }
  };
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_CATEGORIES:
      return { ...state, ...payload };
    case SET_CATEGORY:
      return {
        ...state,
        categories: {
          ...state.categories,
          [payload.key]: payload.category
        }
      };
    case SET_PROMISES:
      const newCategories = {...state.categories};
      newCategories[payload.key] = payload.category;
      return {
        ...state,
        categories: {
          ...newCategories
        }
      };
    case SET_PARTIES:
      return {
        ...state,
        ...payload
      };
    case SET_PARTY:
      return {
        ...state,
        parties: {
          ...state.parties,
          [payload.key]: payload.party
        }
      };
    default:
      return { ...state };
  }
};
