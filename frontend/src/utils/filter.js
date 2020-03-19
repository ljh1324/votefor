import { ACCEPT } from "./voted-state";

export const filterOnlyVotedItem = items => items.filter(item => item.voted);
export const filterOnlyVotedStateItem = items => items.filter(item => item.voted === ACCEPT);
export const filterOnlySelectedPartiesPromises = (promises, parties) => {
  return promises.filter(promise => parties[promise.party.name].selected);
};
export const filterOnlySelectedPartiesCategory = (categories, parties) => {
  return categories.filter(category => {
    return filterOnlySelectedPartiesPromises(category.promises, parties).length;
  });
};
