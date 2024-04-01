const setCookie = (data) => {
  document.cookie = `token=${data}; max-age=86400; path=/;`;
};
export { setCookie };
