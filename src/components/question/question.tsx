import { useState } from "react";
import { getQuestions } from "../../questions.data";
import {
  QuizComponent,
  Scored,
  QuestionsContainer,
  CounterContainer,
  QuestionTextContainer,
  AnswerContainer,
} from "./question.styles";

function Question() {
  const questionsData = getQuestions();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showPoints, setShowPoints] = useState(false);
  const [points, setPoints] = useState(0);

  const handleAnswerOptionClick = (isCorrect: any) => {
    if (isCorrect) {
      // setPoints(Points + 1);
      setPoints(points + 1);
    } else {
      alert("Wrong answer! 🙁");
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questionsData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowPoints(true);
    }
  };

  return (
    <QuizComponent>
      <h1>JavaScript Quiz</h1>
      {showPoints ? (
        <Scored>
          Your total points is {points} out of {questionsData.length}!
        </Scored>
      ) : (
        <>
          <QuestionsContainer>
            <CounterContainer>
              <span>Question {currentQuestion + 1}</span>/{questionsData.length}
              <h3>Group: {questionsData[currentQuestion].typeQuestion}</h3>
            </CounterContainer>
            <QuestionTextContainer>
              {questionsData[currentQuestion].questionText}
            </QuestionTextContainer>
          </QuestionsContainer>
          <AnswerContainer>
            {questionsData[currentQuestion].answerOptions.map(
              (answerOption: any) => (
                <button
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              )
            )}
          </AnswerContainer>
          <p>Total points: {points}</p>
        </>
      )}
    </QuizComponent>
  );
}

export default Question;
