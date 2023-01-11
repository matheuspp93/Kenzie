export const verifyUser = (authenticated, verifyUserLogged) => {
  if (authenticated && verifyUserLogged) {
    return true;
  }
  return false;
};
