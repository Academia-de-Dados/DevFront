/* eslint-disable import/no-extraneous-dependencies */
import React, { useCallback, useState } from 'react';
import { Button, Form, Input, Row, Col, message } from 'antd';
import { useNavigate } from 'react-router-dom';

import { UserOutlined } from '@ant-design/icons';
import imageLogo from '../../assets/logo.png';

import { Container } from './styles/styles';

import { useAuth } from '../../Context/AuthContext/useAuth';

function Login() {
  const auth = useAuth();
  const navigate = useNavigate();

  const [form] = Form.useForm();

  const [submitDisabled, setSubmitDisabled] = useState(true);

  const handleFormChange = useCallback(() => {
    const { email, password } = form.getFieldsValue();
    if (email && password) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [form]);

  const onFinish = async (values: { email: string; password: string }) => {
    try {
      await auth.authenticate(values.email, values.password);
      message.success('Login realizado com sucesso!');
      navigate('/Home');
    } catch (error) {
      message.error('Ops! Verifique email ou senha!');
    }
  };

  return (
    <Container>
      <div className="Logo">
        <img src={imageLogo} alt="logo" />
      </div>
      <div className="FormContainer">
        <Row
          align="middle"
          style={{
            height: '100vh',
          }}
        >
          <Col span={20}>
            <Form
              name="basic"
              form={form}
              labelCol={{ span: 10 }}
              wrapperCol={{ span: 12 }}
              onFinish={onFinish}
              onFieldsChange={handleFormChange}
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: 'Please input your email!' },
                ]}
              >
                <Input
                  placeholder="Digite seu email"
                  prefix={<UserOutlined style={{ color: '#6a5acd' }} />}
                />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: 'Please input your password!' },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item wrapperCol={{ span: 12 }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: '100%' }}
                  disabled={submitDisabled}
                >
                  Entrar
                </Button>
                <Button style={{ width: '100%' }} className="ant-btn-link">
                  Sou novo por aqui!
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Login;
