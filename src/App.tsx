import { LoginOutlined } from "@ant-design/icons";
import { Button, Col, Flex, Input, Row, Typography } from "antd";
// import "./App.css";

function App() {
  // display -> flex, grid, inline-flex, block, inline-block
  // padding -> TROBLE -> Top, Right, bottom, left -> spacing between container and it's content
  // Margin -> TROUBLE -> Top, Right, bottom, left -> spacing

  return (
    <Flex vertical style={{ height: "100vh" }}>
      <Row>
        <Col
          xs={24}
          sm={24}
          md={8}
          style={{ height: "100vh", margin: "auto 0", padding: "20px" }}
        >
          <Flex vertical gap={20}>
            <Input placeholder="username" />

            <Input placeholder="Password" />

            <Flex justify="space-between">
              <Typography.Link>Forgot Password</Typography.Link>
              <Button type="primary" icon={<LoginOutlined />}>Login</Button>
            </Flex>
          </Flex>
        </Col>
      </Row>
    </Flex>
  );
}

export default App;
