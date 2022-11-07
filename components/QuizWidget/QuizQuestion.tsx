import React from "react";
import QuizOption, { OptionType } from "./QuizOption";

export type QuestionProps = {
    question: string;
    options: OptionType[];
    questionIndex: number;
    active: boolean;
};

const QuizQuestion = ({
    question,
    options,
    questionIndex,
    active,
}: QuestionProps) => {
    if (active) {
        return (
            <div className="question animated-intro">
                <h4 className="question-title">{question}</h4>
                <div className="question-options">
                    {options.map((option) => {
                        return (
                            <QuizOption key={option.value} option={option} />
                        );
                    })}
                </div>
            </div>
        );
    }

    return null;
};

export default QuizQuestion;
