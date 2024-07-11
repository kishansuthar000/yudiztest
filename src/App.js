import React from "react";
import { Layout, Row, Col, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Question from "./components/Question";
import Score from "./components/Score";
import Navigation from "./components/Navigation";
import { useSelector } from "react-redux";

const { Header, Content } = Layout;

function App() {

  const submitted = useSelector((state) => state.quiz.submitted);

  return (
    <Layout className="layout">
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          height: "65px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Row style={{ width: "100%" }} justify="space-between">
          <Col className="logo">Yudiz Quiz App</Col>
          <Col>
            <Avatar
              style={{ backgroundColor: "#87d068" }}
              icon={<UserOutlined />}
            />
          </Col>
        </Row>
      </Header>
      <Content className="content">
        <Row justify="center" align="middle" style={{ height: "100%" }}>
          <Col xs={24} sm={24} md={18} lg={8} className="question-container">
            <Row>
              {!submitted ? (
                <>
                  <Col span={24}>
                    <Question />
                  </Col>
                  <Col span={24}>
                    <Navigation />
                  </Col>
                </>
              ) : (
                <Col span={24}>
                  <Score />
                </Col>
              )}
            </Row>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;
