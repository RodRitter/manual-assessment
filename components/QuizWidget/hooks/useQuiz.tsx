import React, { useState, useEffect } from "react";
import { OptionType } from "../QuizOption";
import useQuizStore from "./useQuizStore";

export type QuestionType = {
    question: string;
    type: string;
    options: OptionType[];
};

const useQuiz = () => {
    const [fetching, setFetching] = useState(true);
    const [error, setError] = useState<{ error: any }>();

    const {
        questions,
        current,
        answers,
        setQuestions,
        setCurrent,
        setAnswers,
    } = useQuizStore((state) => state);

    const getQuestions = async () => {
        try {
            const response: Response = await fetch("/api/questions");
            const questionData: QuestionType[] = await response.json();

            if (questionData) {
                setQuestions(questionData);
            }
        } catch (err: any) {
            setError({
                error: "Something went wrong. Please refresh your browser.",
            });
        }

        setFetching(false);
    };

    const nextQuestion = () => {
        const target = current + 1;
        if (target < questions.length) {
            setCurrent(target);
        }
    };

    const prevQuestion = () => {
        const target = current - 1;
        if (target > -1) {
            setCurrent(target);
        }
    };

    const answerQuestion = (questionIndex: number, choice: OptionType) => {
        const answersObj = { ...answers };
        answersObj[questionIndex] = choice;
        setAnswers(answersObj);
        nextQuestion();
    };

    const reset = () => {
        setAnswers({});
        setCurrent(0);
    };

    const canProceed = () => {
        const nextExists = current + 1 < questions.length;
        const hasAnsweredCurrent = answers[current] !== undefined;
        return nextExists && hasAnsweredCurrent;
    };

    useEffect(() => {
        if (questions && questions.length <= 0) {
            getQuestions();
        }
    }, []);

    return {
        answerQuestion,
        current,
        fetching,
        questions,
        answers,
        error,
        canProceed,
        nextQuestion,
        prevQuestion,
        reset,
        setCurrent,
    };
};

export default useQuiz;
