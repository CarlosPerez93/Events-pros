import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input, Space } from "antd";
import Icon from "@ant-design/icons/lib/components/Icon";

import img from "../../../assets/company-icon.svg";
import "./register.scss";
import { registerProps } from "./register.types";
import { useSignUp } from "../../../hooks/useAuth";

export const Register = () => {
  const { Item } = Form;
  const { Password } = Input;
  const navigate = useNavigate();

  const onFinish = (values: registerProps) => {
    useSignUp(values);
    navigate("/login");
  };

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
          <Form layout="vertical" onFinish={onFinish}>
            <h2>Register</h2>

            <Item
              label={"Email"}
              name={"email"}
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "please enter email",
                },
              ]}
            >
              <Input className="main__input" />
            </Item>
            <Item
              label={"Username"}
              name={"username"}
              rules={[{ required: true, message: "please enter username" }]}
            >
              <Input className="main__input" />
            </Item>
            <Space className="main__password">
              <Item
                name={"password"}
                label={"Password"}
                className="main_password-item"
                rules={[{ required: true, message: "please enter password" }]}
              >
                <Password />
              </Item>
              <Item
                name={"password-confirm"}
                label={"Password-confirm"}
                className="main_password-item"
                rules={[
                  { required: true, message: "please enter email" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error("password do math"));
                    },
                  }),
                ]}
              >
                <Password />
              </Item>
            </Space>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Button htmlType="submit" type="primary" className="main__btn">
                Register
              </Button>
              <Link className="main__link-login" to="/">
                Login
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};
