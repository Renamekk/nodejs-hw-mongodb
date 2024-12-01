const parseType = (type) => {
  if (typeof type !== 'string') return;

  const isType = (type) => ['work', 'home', 'personal'].includes(type);
  if (isType(type)) return type;
};

const parseIsFavourite = (isFavourite) => {
  if (typeof isFavourite !== 'string') return;

  const isIsFavourite = (isFavourite) =>
    ['true', 'false'].includes(isFavourite);
  if (isIsFavourite(isFavourite)) return isFavourite;
};

export const parseFilterParams = ({ type, isFavourite }) => {
  const parsedType = parseType(type);
  const parsedIsFavourite = parseIsFavourite(isFavourite);

  return {
    type: parsedType,
    isFavourite: parsedIsFavourite,
  };
};