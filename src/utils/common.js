// remove the token and user from the session storage
export const removeUserSession = () => {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('username');
};

// set the token and user from the session storage
export const setUserSession = (token, username) => {
  sessionStorage.setItem('token', token);
  sessionStorage.setItem('username', JSON.stringify(username));
};
