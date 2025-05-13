import { LoginOutlined } from "@ant-design/icons";
import { Button, Flex, Input, Typography } from "antd";
// import "./App.css";

function App() {

  // display -> flex, grid, inline-flex, block, inline-block
  // padding -> TROBLE -> Top, Right, bottom, left -> spacing between container and it's content
  // Margin -> TROUBLE -> Top, Right, bottom, left -> spacing

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        gap: "20px",
      }}
    >
      <Flex vertical gap={20} style={{ width: "25%", margin: "auto auto" }}>
        <Typography.Title level={3}>Login</Typography.Title>
        <Input placeholder="username" />

        <Input placeholder="password" />

        <Flex justify="space-between">
          <Typography.Link>Forgot Password</Typography.Link>
          <Button
            type="primary"
            icon={<LoginOutlined />}
            style={{ alignSelf: "end" }}
          >
            Login
          </Button>
        </Flex>
      </Flex>
    </div>
  );
}

export default App;
