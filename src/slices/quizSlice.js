
import { createSlice } from "@reduxjs/toolkit";
import questions from "../data/questions";

const initialState = {
  currentQuestion: 0,
  answers: [],
  submitted: false,
  score: 0,
};

const calculateScore = (answers) => {
  const score = answers.reduce((score, answer, idx) => {
    debugger
    let ques = questions[idx];
    let cAns = questions[idx]?.correctAnswer;
    if (answer === ques.options[cAns]) {
      return score + 1;
    }
    return score;
  }, 0);
  return (score / questions.length) * 100;
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    answerQuestion: (state, action) => {
      state.answers[state.currentQuestion] = action.payload;
      state.score = calculateScore(state.answers);
    },
    nextQuestion: (state) => {
      if (state.answers[state.currentQuestion]) {
        state.currentQuestion += 1;
      }
    },
    previousQuestion: (state) => {
      state.currentQuestion -= 1;
    },
    submitQuiz: (state) => {
        state.submitted = true;
    },
    resetQuiz: (state) => {
      if (state.submitted) {
        state.currentQuestion = 0;
        state.submitted = false;
        state.answers =[];
        state.score = 0;
      }
    },
  },
});

export const {
  answerQuestion,
  nextQuestion,
  previousQuestion,
  submitQuiz,
  resetQuiz,
} = quizSlice.actions;
export default quizSlice.reducer;
