import React, { useState, useEffect } from "react";
import { OptionType } from "./QuizOption";
import useQuizStore, { QuizStoreType } from "./useQuizStore";

export type QuestionType = {
    question: string;
    type: string;
    options: OptionType[];
};

type Answers = {
    [index: number]: number;
};

const useQuiz = (questionEndpoint: string) => {
    const [fetching, setFetching] = useState(true);
    const [error, setError] = useState<{ error: any }>();

    const [current, setCurrent] = useState<number>(0);
    const [answers, setAnswers] = useState<Answers>({});

    const { questions, setQuestions } = useQuizStore((state) => state);

    const getQuestions = async () => {
        try {
            const response: Response = await fetch(questionEndpoint);
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

    const answer = (questionIndex: number, answerIndex: number) => {
        const answersObj = { ...answers };
        answersObj[questionIndex] = answerIndex;
        setAnswers(answersObj);
    };

    useEffect(() => {
        if (questions && questions.length <= 0) {
            getQuestions();
        }
    }, []);

    return {
        answer,
        current,
        fetching,
        questions,
        error,
    };
};

export default useQuiz;
