import propTypes from "prop-types";

export const LoginProps = {
  username: propTypes.string.isRequired,
  password: propTypes.string.isRequired,
};

export type LoginProps = propTypes.InferProps<typeof LoginProps>;
