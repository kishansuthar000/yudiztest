import React from "react";
import { Button, Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  nextQuestion,
  previousQuestion,
  submitQuiz,
} from "../slices/quizSlice";
import questions from '../data/questions';

function Navigation() {
  const dispatch = useDispatch();
  const currentQuestion = useSelector((state) => state.quiz.currentQuestion);
  const answers = useSelector((state) => state.quiz.answers);
  const totalQuestions = questions?.length;
  const handleNext = () => {
    if (answers[currentQuestion] === null) {
        alert("Please select an answer before proceeding to the next question...");
      } else {
        dispatch(nextQuestion());
      }
  };

  const handlePrevious = () => {
    dispatch(previousQuestion());
  };

  const handleSubmit = () => {
    if (answers[currentQuestion] === null) {
        alert("Please select an answer before submitting.");
      } else {
        dispatch(submitQuiz());
      }
  };
  return (
    <Row justify="space-between">
      <Col span={24}>
        <Row justify="space-between" style={{ marginTop: 10 }}>
          {currentQuestion > 0 ? (
            <Button className="btn prev-btn" onClick={handlePrevious}>
              Previous
            </Button>
          ) : (
            <span></span>
          )}
          {currentQuestion < totalQuestions - 1 && (
            <Button onClick={handleNext} className="btn next-btn">
              Next
            </Button>
          )}
          {currentQuestion === totalQuestions - 1 && (
            <Button type="primary" className="btn submit-btn" onClick={handleSubmit}>
              Submit
            </Button>
          )}
        </Row>
      </Col>
    </Row>
  );
}

export default Navigation;
