import React from 'react';
import { Button, Form, Input, Row, Col, message } from 'antd';
import { useAuth } from '../../Context/AuthContext/useAuth';
import { useNavigate  } from 'react-router-dom';


function Login() {
  const auth = useAuth();
  const navigate = useNavigate();

  const onFinish = async (values: {email: string, password: string}) => {
    try {
        await auth.authenticate(values.email, values.password);
        message.success('Login realizado com sucesso!')
        navigate('/Home');
    } catch (error) {
        message.error('Ops! Verifique email ou senha!')
    }
  };

  return (
    <Row
      justify='center'
      align='middle'
      style={{
        height: '100vh',
      }}
    >
      <Col span={12}>
        <Form
          name='basic'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
        >
          <Form.Item
            label='Email'
            name='email'
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input /> 
          </Form.Item>

          <Form.Item
            label='Password'
            name='password'
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password /> 
          </Form.Item>

          <Form.Item wrapperCol={{ offset:8, span: 16 }}>
            <Button type='primary' htmlType='submit'>
              Entrar
            </Button>   
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

export default Login;
