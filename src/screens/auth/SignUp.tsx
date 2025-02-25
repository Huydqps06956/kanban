import {
  Card,
  Typography,
  Form,
  Input,
  Button,
  Checkbox,
  Space,
  message,
} from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import SocialLogin from "./components/SocialLogin";
import "@ant-design/v5-patch-for-react-19";
import handleAPI from "../../apis/handleAPI";

const { Title, Paragraph, Text } = Typography;
const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRemember, setIsRemember] = useState(false);
  const [form] = Form.useForm();
  const handleRegister = async (values: {
    email: string;
    password: string;
  }) => {
    const api = `/auth/register`;
    setIsLoading(true);
    try {
      const res = await handleAPI(api, "POST", values);
    } catch (error: any) {
      console.log(error);
      message.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Card style={{ width: "60%" }}>
        <div className="text-center">
          <Title level={2}>Create an account</Title>
          <Paragraph type="secondary">Free trial 30-day free trial</Paragraph>
        </div>

        <Form
          layout="vertical"
          form={form}
          onFinish={handleRegister}
          disabled={isLoading}
          size="large"
        >
          {" "}
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please enter your name!",
              },
            ]}
          >
            <Input allowClear maxLength={100} type="email" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter your email!",
              },
            ]}
          >
            <Input
              placeholder="Enter your email"
              allowClear
              maxLength={100}
              type="email"
            />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please enter your password!",
              },
            ]}
          >
            <Input.Password
              placeholder="Enter your password"
              maxLength={100}
              type="text"
            />
          </Form.Item>
        </Form>

        <div className="mt-4 mb-3">
          <Button
            onClick={() => form.submit()}
            type="primary"
            style={{ width: "100%" }}
            size="large"
          >
            Login
          </Button>
        </div>
        <SocialLogin />
        <div className="mt-4 text-center">
          <Space>
            <Text type="secondary">Already an account?</Text>
            <Link to="/login">Login</Link>
          </Space>
        </div>
      </Card>
    </>
  );
};

export default SignUp;
