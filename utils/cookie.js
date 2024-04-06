const setCookie = (data) => {
  document.cookie = `token=${data}; max-age=86400; path=/;`;
};
const getCookie = () => {
  const cookie = document.cookie;
  if (cookie) {
    const cookieArray = cookie.split("=");
    return {
      [cookieArray[0]]: cookieArray[1],
    };
  } else {
    return false;
  }
};
const deleteCookie = () => {
  document.cookie = "token=; max-age=0";
  location.assign("./index.html")
};
export { setCookie, getCookie, deleteCookie };
