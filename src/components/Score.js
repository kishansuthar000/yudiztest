import React from "react";
import { SmileOutlined } from "@ant-design/icons";
import { Row, Col, Result, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { resetQuiz } from "../slices/quizSlice";

function Score() {
  const dispatch = useDispatch();
  const score = useSelector((state) => state.quiz.score);

  const restartQuiz = () => {
    dispatch(resetQuiz());
  };

  return (
    <Row align="middle" justify="center">
      <Col span={24}>
        <Result
          icon={<SmileOutlined />}
          title="Your Score"
          extra=<h1>{score}%</h1>
        />
      </Col>

      <Col span={24}>
        <Row justify="center">
          <Button type="primary" className="submit-btn" onClick={restartQuiz}>
            Reset
          </Button>
        </Row>
      </Col>
    </Row>
  );
}

export default Score;
