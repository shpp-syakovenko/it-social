export const required = (value) => {
  if(value) return undefined;
  return "Error Filed";
};

export const maxLengthCreator = (maxLength) => (value) => {
  if(value.length > maxLength) return `Max length more ${maxLength}`;
  return undefined;

};
