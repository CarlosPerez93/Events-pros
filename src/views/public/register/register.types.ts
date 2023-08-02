import propTypes from "prop-types";

export const registerProps = {
  email: propTypes.string.isRequired,
  username: propTypes.string.isRequired,
  password: propTypes.string.isRequired,
};

export type registerProps = propTypes.InferProps<typeof registerProps>;
