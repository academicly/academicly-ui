import React, { useState, useRef } from "react";
import { Button, Form, Input, Checkbox, Icon } from "antd";
import { login } from "../services/auth";
import { Link } from "@reach/router";

const LoginForm = (props: { form: { getFieldDecorator: any } }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<{ message: string } | null>(null);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { getFieldDecorator } = props.form;

  const handleLogin = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setLoading(true);
    try {
      if (emailRef.current && passwordRef.current) {
        const res = await login(
          emailRef.current.value,
          passwordRef.current.value
        );

        console.log(res);
      }
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  return (
    <div className="loginForm-container">
      {error && (
        <div>
          <p>Oops, there was an error.</p>
          <p>
            <i>{error.message}</i>
          </p>
        </div>
      )}

      <Form onSubmit={handleLogin} className="loginForm">
        <Form.Item>
          {getFieldDecorator("email", {
            rules: [{ required: true, message: "Please enter your email!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="example@email.com"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(<Checkbox>Remember me</Checkbox>)}
          <Link className="loginForm-forgot" to="/forgot">
            Forgot password
          </Link>
          <Button type="primary" htmlType="submit" className="loginForm-button">
            Log in
          </Button>
          Or <Link to="/signup">sign up now!</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Form.create({ name: "normal_login" })(LoginForm);
