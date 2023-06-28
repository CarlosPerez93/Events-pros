import { Link } from "react-router-dom";
import { Button, Form, Input } from "antd";
import Icon from "@ant-design/icons/lib/components/Icon";

import img from "../../../assets/company-icon.svg";
import "./login.scss";

export const Login = () => {
  const { Item } = Form;
  const { Password } = Input;
  return (
    <div className="main">
      <div className="main__left-part" />
      <div className="main__container">
        <div className="main__presentation">
          <Icon className="main_svg-icon" component={() => <img src={img} />} />
          <h3 className="main__title">Events-Pros</h3>
          <p className="main__text">
            If you care about leaving your guests speechless, remember that
            Events-Pro is your best option
          </p>
        </div>
        <div className="main__form">
          <Form layout="vertical">
            <h2>Login</h2>
            <Item
              label={"Username"}
              rules={[{ required: true, message: "please enter username" }]}
            >
              <Input className="main__input" />
            </Item>

            <Item
              label={"Password"}
              className="main_password-item"
              rules={[{ required: true, message: "please enter password" }]}
            >
              <Password />
            </Item>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Link className="main__link" to="/">
                Forgot password?
              </Link>
              <Button type="primary" className="main__btn">
                Login
              </Button>

              <Link className="main__link-register" to="/register">
                Register
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};
