import create from "zustand";
import { QuestionType } from "./useQuiz";
import { OptionType } from "../QuizOption";

export type Answers = {
    [index: number]: OptionType;
};

export type QuizStoreType = {
    questions: QuestionType[];
    current: number;
    answers: Answers;
    setQuestions: (questions: QuestionType[]) => void;
    setCurrent: (current: number) => void;
    setAnswers: (answers: Answers) => void;
};

const useQuizStore = create<QuizStoreType>((set) => ({
    questions: [],
    current: 0,
    answers: [],
    setQuestions: (questions) => set(() => ({ questions })),
    setCurrent: (current) =>
        set(() => ({
            current,
        })),
    setAnswers: (answers) => set(() => ({ answers })),
}));

export default useQuizStore;
