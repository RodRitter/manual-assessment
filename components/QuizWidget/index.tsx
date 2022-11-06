import React from "react";
import useQuiz from "./useQuiz";
import QuizQuestion from "./QuizQuestion";

type QuizProps = {
    questionEndpoint: string;
};

const QuizWidget = ({ questionEndpoint }: QuizProps) => {
    const { fetching, questions, current, answer, error } =
        useQuiz(questionEndpoint);

    return (
        <div className="quiz">
            {fetching && <h1>Fetching questions</h1>}
            {!fetching &&
                questions &&
                questions.map((data, index) => {
                    const { question, options } = data;
                    return (
                        <QuizQuestion
                            key={question}
                            question={question}
                            options={options}
                            active={current === index}
                        />
                    );
                })}
        </div>
    );
};

export default QuizWidget;
