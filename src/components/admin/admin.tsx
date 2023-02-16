import { useState, useEffect } from "react";

import { getQuestions2, createQuestion, updateQuestion } from "../../API";
import { IQuestion } from "../../API";
import QuestionTable from "../questionsCRUD/questionTable";
import AddQuestionForm from "../questionsCRUD/addQuestionForm";
import EditQuestionForm from "../questionsCRUD/editQuestionForm";
import { useParams } from "react-router-dom";

// interface IQuestionProps {
//   question: IQuestion;
//   onUpdate(question: IQuestion, index: number): void;
// }

export const initCurrentQuestion: IQuestion = {
  typeQuestion: "",
  answerText: "",
  questionText: "",
  answerOptions: [
    {
      answer: "",
      isCorrect: false,
    },
    {
      answer: "",
      isCorrect: false,
    },
    {
      answer: "",
      isCorrect: false,
    },
    {
      answer: "",
      isCorrect: false,
    },
  ],
  // id: null,
  // id: 0,
};

function Admin() {
  const questionsData2: Promise<IQuestion | any> = getQuestions2();
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  // const [questions, setQuestions] = useState(defaultQuestions);
  const [editQuestion, setEditQuestion] = useState(initCurrentQuestion);
  const [editing, setEditing] = useState(false);

  const { questionId } = useParams();

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = () => {
    questionsData2
      .then(({ data: { questions } }) => {
        setQuestions(questions);
        // console.log(questions[0].answerOptions);
      })
      .catch((error) => console.log(error));
  };
  const onAddQuestion = (newQuestion: IQuestion) => {
    console.log(newQuestion);
    setQuestions([...questions, { ...newQuestion }]);
    createQuestion(newQuestion)
      .then((response) => {
        if (!response || !response.data || !response.data.questions) {
          throw new Error("Error! Question not saved!");
        }
        if (response.status !== 201) {
          throw new Error("Error! Question not saved!");
        }
        setQuestions(response.data.questions);
      })
      .catch((error) => console.log(error));
  };

  const onCurrentQuestion = (question: IQuestion) => {
    setEditQuestion(question);
    setEditing(true);
  };

  const onUpdateQuestion = (newQuestion: IQuestion) => {
    setEditing(false);
    updateQuestion(newQuestion)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Question not updated!");
        }
        setQuestions(data.questions);
      })
      .catch((error) => console.log(error));
  };

  const onDeleteQuestion = (currentQuestion: IQuestion) => {
    setQuestions(questions.filter((i) => i._id !== currentQuestion._id));
  };

  console.log(questions);

  return (
    <div>
      <h1>Admin</h1>

      {editing ? (
        <EditQuestionForm
          question={editQuestion}
          onUpdateQuestion={onUpdateQuestion}
          setEditing={setEditing}
        />
      ) : (
        <AddQuestionForm onAddQuestion={onAddQuestion} />
      )}
      <QuestionTable
        questions={questions}
        onEditing={onCurrentQuestion}
        onDelete={onDeleteQuestion}
      />
    </div>
  );
}

export default Admin;
