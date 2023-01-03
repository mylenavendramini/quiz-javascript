import styled from "styled-components";

export const QuizComponent = styled.div`
  margin: 2rem;
  padding: 2rem;
  border: 3px dotted #ffa300;
  background-color: #6f3460;
  color: #ffa300;
  letter-spacing: 1px;
`;

export const Scored = styled.div`
  font-size: 1.5rem;
  padding: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #c2ff05;
`;

export const QuestionsContainer = styled.div`
  /* border-top: 3px dotted black; */
  /* border-bottom: 3px dotted black; */
`;

export const CounterContainer = styled.div`
  padding: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #c2ff05;
`;

export const QuestionTextContainer = styled.div`
  padding: 1rem;
  font-size: 1.5rem;
`;

export const AnswerContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;

  button,
  a {
    align-items: center;
    margin: 1rem auto;
    appearance: none;
    background-color: #ffa300;
    border-radius: 5px;
    border-width: 0;
    box-shadow: none;
    box-sizing: border-box;
    color: #6f3460;

    cursor: pointer;
    display: inline-flex;
    font-size: 1rem;
    height: auto;
    justify-content: center;
    line-height: 1.5;
    padding: 6px 20px;
    position: relative;
    text-align: center;
    text-decoration: none;
  }

  button:hover {
    background-color: #c2ff05;
  }
`;
