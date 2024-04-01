const validateusername = (username) => {
  const regex = /^[A-Za-z\d_]{4,16}$/;
  const result = regex.test(username);
  return result;
};
const validatepassword = (password) => {
  const regex = /^[A-Za-z\d!@#$%^&*()_]{6,20}/;
  const result = regex.test(password);
  return result;
};

const validateForm = (username, password) => {
  const usernameResult = validateusername(username);
  const passwordResult = validatepassword(password);
  if (usernameResult && passwordResult) {
    return true;
  } else if (!usernameResult) {
    alert("Username is not valid!");
    return false;
  } else if (!passwordResult) {
    alert("Password is not valid!");
    return false;
  }
};
export { validateForm };
