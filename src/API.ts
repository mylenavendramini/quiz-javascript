import axios from "axios";

const baseURL = "http://localhost:4001";

export interface IQuestion {
  _id?: string;
  typeQuestion: string;
  questionText: string;
  answerText: string;
  answerOptions: {
    answer: string;
    isCorrect: boolean;
  }[];
}

// export interface IQuestionId extends IQuestion {
//   id: number | any;
// }

export const getQuestions2 = async () => {
  try {
    const questions: IQuestion = await axios.get(baseURL);

    return questions;
  } catch (error) {
    console.log(error);
  }
};

export const createQuestion = async (formValue: any) => {
  try {
    const question: IQuestion = {
      typeQuestion: formValue.typeQuestion,
      questionText: formValue.questionText,
      answerText: formValue.answerText,
      answerOptions: formValue.answerOptions,
    };

    const saveQuestion = await axios.post(
      baseURL + "/create-question",
      question
    );
    return saveQuestion;
  } catch (error) {
    console.log(error);
  }
};

export const updateQuestion = async (formValue: any) => {
  try {
    console.log(formValue);
    // console.log(question); //undefined
    const questionUpdate = {
      typeQuestion: formValue.typeQuestion,
      questionText: formValue.questionText,
      answerText: formValue.answerText,
      answerOptions: formValue.answerOptions,
    };
    const updatedQuestion = await axios.put(
      `${baseURL}/update-question/${formValue._id}`,
      questionUpdate
    );
    return updatedQuestion;
  } catch (error) {
    throw error;
  }
};
