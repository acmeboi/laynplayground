import { Button, Col, Input, Row } from "antd";
// import "./App.css";

function App() {
  const name = "Isa Muhammed";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        gap: "20px",
      }}
    >

      <Row>
        <Col>
          <Input style={{ width: "100%" }} />
        </Col>
      </Row>

      <Row>
        <Col>
          <Input />
        </Col>
      </Row>

      <Row>
        <Col>
          <Button type="primary">Login</Button>
        </Col>
      </Row>
    </div>
  );
}

export default App;
