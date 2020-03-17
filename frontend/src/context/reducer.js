import { deepCopy } from "../utils/copy";

const SET_CATEGORIES = "SET_CATEGORIES";
const SET_PROMISES = "SET_PROMISES";

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
  originalCategories: {}
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

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_CATEGORIES:
      return { ...state, ...payload };
    case SET_PROMISES:
      return {
        ...state,
        categories: {
          ...state.categories,
          [payload.key]: payload.category
        }
      };
    default:
      return { ...state };
  }
};
