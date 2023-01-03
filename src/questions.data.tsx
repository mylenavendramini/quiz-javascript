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
    questionText: `What is OOP?`,
    answerText:
      "It's a computer programming model that organizes software design around data or objects, rather than functions and logic. An object can be defined as a data field that has unique attributes and behavior.",
    answerOptions: [
      {
        answerText:
          "It's a computer programming model that organizes software design around data or objects, rather than functions and logic. An object can be defined as a data field that has unique attributes and behavior.",
        isCorrect: true,
      },
      {
        answerText:
          "It's a language that organizes software design around data or objects, rather than functions and logic.",
        isCorrect: false,
      },
      {
        answerText: "OOP focuses on the logic to manipulate objects.",
        isCorrect: false,
      },
    ],
  },
  {
    typeQuestion: "OOP",
    questionText: `What is encapsulation in OOP?`,
    answerText:
      "Encapsulation is binding of data and methods together and keep both safe from outside.",
    answerOptions: [
      {
        answerText:
          "It means that the object's internal state is kept private, so it can only be accessed by the object's own methods and other object's methods.",
        isCorrect: false,
      },
      {
        answerText:
          "Encapsulation is binding of data and methods together and keep both safe from outside.",
        isCorrect: true,
      },
      {
        answerText:
          "Encapsulation is hiding information, so each object should only reveal operations that are relevant for the other objects.",
        isCorrect: false,
      },
    ],
  },
  {
    typeQuestion: "OOP",
    questionText: `What is inheritance in OOP?`,
    answerText:
      "Inheritance enables new objects to take on the properties of existing objects and classes to reuse the code from other classes.",
    answerOptions: [
      {
        answerText:
          "Inheritance enables new objects to take on the properties of existing objects, but not classes to reuse the code from other classes.",
        isCorrect: false,
      },
      {
        answerText:
          "Inheritance is a pillar of OOP that can't force a more thorough data analysis, reduces development time and ensures a higher level of accuracy.",
        isCorrect: false,
      },
      {
        answerText:
          "Inheritance enables new objects to take on the properties of existing objects and classes to reuse the code from other classes.",
        isCorrect: true,
      },
    ],
  },
  {
    typeQuestion: "OOP",
    questionText: `What is abstraction in OOP?`,
    answerText:
      "Abstraction is hiding information that are unnecessary to show. It means that each object should only expose operations that are relevant for the other objects.",
    answerOptions: [
      {
        answerText:
          "Abstraction is binding of data and methods together and keep both safe from outside interference and misuse.",
        isCorrect: false,
      },
      {
        answerText:
          "Abstraction is hiding information that are unnecessary to show. It means that each object should only expose operations that are relevant for the other objects.",
        isCorrect: true,
      },
      {
        answerText:
          "Abstraction enables new objects to take on the properties of existing objects.",
        isCorrect: false,
      },
    ],
  },
  {
    typeQuestion: "OOP",
    questionText: `What is polymorphism in OOP?`,
    answerText:
      "Polymorphism is the ability to redefine methods for derived classes. It's when a method has the same name but a different implementation in different classes.",
    answerOptions: [
      {
        answerText:
          "Polymorphism is the ability to redefine methods for derived classes. It's when a method has the same name but a different implementation in different classes.",
        isCorrect: true,
      },
      {
        answerText:
          "Polymorphism gives a way to use a class exactly like its parent, so each child class can not keep its own methods.",
        isCorrect: false,
      },
      {
        answerText:
          "Polymorphism enables new objects to take on the properties of existing objects.",
        isCorrect: false,
      },
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
