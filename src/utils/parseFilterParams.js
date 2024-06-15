const parseContactType = (contactType) => {
  const isString = typeof contactType === 'string';
  if (!isString) return;
  const isType = (contactType) =>
    ['work', 'home', 'personal'].includes(contactType);

  if (isType(contactType)) return contactType;
};

const parseBoolean = (boolean) => {
  const isString = typeof boolean === 'string';
  if (!isString) return;
  const isBoolean = (boolean) => ['true', 'false'].includes(boolean);
  if (isBoolean(boolean)) return boolean;
};

export const parseFilterParams = (query) => {
  const parsedType = parseContactType(query.contactType);
  const parsedIsFavourite = parseBoolean(query.isFavourite);
  return {
    contactType: parsedType,
    isFavourite: parsedIsFavourite,
  };
};
