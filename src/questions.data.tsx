type QuestionsData = {
  typeQuestion: string;
  questionText: string;
  answerText: string;
  answerOptions: any;
};

const questions: QuestionsData[] = [
  {
    typeQuestion: "Variables",
    questionText: `The scope of a "var" variable is...`,
    answerText: "functional",
    answerOptions: [
      { answerText: "Functional", isCorrect: true },
      { answerText: "Global", isCorrect: true },
      { answerText: "Block", isCorrect: false },
    ],
  },
  {
    typeQuestion: "Variables",
    questionText: `The scope of a "let" or "const" variable is...`,
    answerText: "block",
    answerOptions: [
      { answerText: "Block", isCorrect: true },
      { answerText: "Functional", isCorrect: false },
      { answerText: "Global", isCorrect: false },
    ],
  },
  {
    typeQuestion: "Variables",
    questionText: `Can "let" or "const" variables declared inside a curly brackets be
    accessed from outside the block?`,
    answerText: "no",
    answerOptions: [
      { answerText: "Yes", isCorrect: false },
      { answerText: "Only let", isCorrect: false },
      { answerText: "Only const", isCorrect: false },
      { answerText: "No", isCorrect: true },
    ],
  },
  {
    typeQuestion: "Variables",
    questionText: `What type of variable can be updated, but can't be re-declared into
    the scope?`,
    answerText: "let",
    answerOptions: [
      { answerText: "Const", isCorrect: false },
      { answerText: "Let", isCorrect: true },
      { answerText: "Var", isCorrect: false },
    ],
  },

  {
    typeQuestion: "OOP",
    questionText: `The benefits of __ are reduce complexity + increase reusability.`,
    answerText: "Encapsulation",
    answerOptions: [
      { answerText: "Encapsulation", isCorrect: true },
      { answerText: "Abstraction", isCorrect: false },
      { answerText: "Inheritance", isCorrect: false },
      { answerText: "Polymorphism", isCorrect: false },
    ],
  },
  {
    typeQuestion: "OOP",
    questionText: `The benefits of __ are reduce complexity + isolate impact of changes.`,
    answerText: "Abstraction",
    answerOptions: [
      { answerText: "Encapsulation", isCorrect: false },
      { answerText: "Abstraction", isCorrect: true },
      { answerText: "Inheritance", isCorrect: false },
      { answerText: "Polymorphism", isCorrect: false },
    ],
  },
  {
    typeQuestion: "OOP",
    questionText: `The benefits of __ are eliminate redundant code.`,
    answerText: "Inheritance",
    answerOptions: [
      { answerText: "Encapsulation", isCorrect: false },
      { answerText: "Abstraction", isCorrect: false },
      { answerText: "Inheritance", isCorrect: true },
      { answerText: "Polymorphism", isCorrect: false },
    ],
  },
  {
    typeQuestion: "OOP",
    questionText: `The benefits of __ are refactor ugly if/else and switch/case statements.`,
    answerText: "Polymorphism",
    answerOptions: [
      { answerText: "Encapsulation", isCorrect: false },
      { answerText: "Abstraction", isCorrect: false },
      { answerText: "Inheritance", isCorrect: false },
      { answerText: "Polymorphism", isCorrect: true },
    ],
  },
];

export function getQuestions() {
  return questions;
}

export default questions;
