import Api from "../common/Api";
import { loginProps } from "../views/public/login/login.types";

export const useSignIn = async (values: loginProps) => {
  await Api({
    data: values,
    params: "auth/login",
    patch: "post",
    token: undefined,
  });
};
export const useSignUp = async (values: loginProps) => {
  await Api({
    data: values,
    params: "auth/register",
    patch: "post",
    token: undefined,
  });
};
