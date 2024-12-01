import { sortOrderList } from '../constants/contacts.js';

export const parseSortParams = ({ sortBy, sortOrder }, sortByList) => {
  const parsedSortOrder = [sortOrderList.ASC, sortOrderList.DESC].includes(
    sortOrder,
  )
    ? sortOrder
    : sortOrderList.ASC;
  const parsedSortBy = sortByList.includes(sortBy) ? sortBy : '_id';

  return {
    sortBy: parsedSortBy,
    sortOrder: parsedSortOrder,
  };
};