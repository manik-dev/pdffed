

export const isString = (str) => new RegExp("[a-zA-Z]").test(str) || '' === str;
