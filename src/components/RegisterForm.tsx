import React, { useState, useRef } from 'react';
import { Button, Form, Input, Checkbox, Icon } from 'antd';
import { login } from '../services/auth';
import { Link } from '@reach/router';

const RegisterForm = (props: {
  form: {
    getFieldDecorator: any;
    getFieldValue: any;
    validateFields: any;
    validateFieldsAndScroll: any;
  };
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<{ message: string } | null>(null);
  const [dirty, setDirty] = useState<boolean>(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const {
    validateFieldsAndScroll,
    getFieldDecorator,
    getFieldValue,
    validateFields
  } = props.form;

  const handleRegister = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    validateFieldsAndScroll((err: any, values: any) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });

    setLoading(true);
    try {
      if (emailRef.current && passwordRef.current) {
        await login(emailRef.current.value, passwordRef.current.value);
      }
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  const compareToFirstPassword = (
    value: any,
    callback: { (arg0: string): void; (): void }
  ) => {
    if (value && value !== getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  const validateToNextPassword = (value: any, callback: () => void) => {
    if (value) {
      validateFields(['confirm'], { force: true });
    }
    callback();
  };

  const handleConfirmBlur = (e: { target: { value: any } }) => {
    const value = e.target.value;
    setDirty(dirty || !!value);
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

      <Form onSubmit={handleRegister} className="loginForm">
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!'
              },
              {
                required: true,
                message: 'Please enter your E-mail!'
              }
            ]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="example@email.com"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please enter your password!'
              },
              {
                validator: validateToNextPassword
              }
            ]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: 'Please confirm your password!'
              },
              {
                validator: compareToFirstPassword
              }
            ]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Confirm password"
              onBlur={handleConfirmBlur}
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked'
          })(
            <Checkbox>
              I have read the <Link to="terms">terms & conditions.</Link>
            </Checkbox>
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="loginForm-button">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Form.create({ name: 'register' })(RegisterForm);
