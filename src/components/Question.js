import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'antd';
import { answerQuestion } from '../slices/quizSlice';
import questions from '../data/questions';

function Question() {

    const dispatch = useDispatch();
    const currentQuestion = useSelector((state) => state.quiz.currentQuestion);
    const answers = useSelector((state) => state.quiz.answers);
    const question = questions[currentQuestion];
  
  return (
    <Row>
      <Col span={24}>
        <h3>
          {question?.id}&nbsp;.&nbsp;{question?.question}{" "}
        </h3>
      </Col>
      <Col span={24}>
        <Row>
          {question?.options?.map((option, i) => (
            <Col
              onClick={() => dispatch(answerQuestion(option))}
              className={`option ${
                answers[currentQuestion] === option ? "selected-option" : ""
              }`}
              span={24}
              key={i}
            >
              {option}
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
}

export default Question;
