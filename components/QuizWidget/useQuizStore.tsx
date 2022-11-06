import create from "zustand";
import { QuestionType } from "./useQuiz";

export type QuizStoreType = {
    questions: QuestionType[];
    setQuestions: (questions: QuestionType[]) => void;
};

const useQuizStore = create<QuizStoreType>((set) => ({
    questions: [],
    setQuestions: (questions) => set(() => ({ questions })),
}));

export default useQuizStore;
