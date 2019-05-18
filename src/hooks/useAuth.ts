import { useEffect } from "react";
import { useAuthContext } from "../providers/AuthProvider";
import { LOGIN_LOAD } from "../reducers/actions";
import { login } from "../services/auth";

export const useAuth = () => {
  const [{ isLoggedIn, user }, dispatch] = useAuthContext();
  useEffect(() => {
    const loginUser = async () => {
      const res = login("", "");
      if (res) {
        dispatch({
          type: LOGIN_LOAD,
          user: res.user,
          isLoggedIn: res.user.isLoggedIn
        });
      }
    };
    loginUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isLoggedIn, user };
};
