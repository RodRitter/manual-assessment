import React, { useState, useEffect } from "react";
import Link from "next/link";
import useQuiz from "./hooks/useQuiz";
import QuizQuestion from "./QuizQuestion";
import QuizRejection from "./QuizRejection";
import QuizSuccess from "./QuizSuccess";

type QuizStatus = "rejected" | "successful" | "ongoing";

const QuizWidget = () => {
    const { questions, fetching, current, answers, reset, setCurrent } =
        useQuiz();
    const [status, setStatus] = useState<QuizStatus>("ongoing");

    useEffect(() => {
        reset();
        return () => reset();
    }, []);

    useEffect(() => {
        const vals = Object.values(answers);

        // Success/Rejection checks
        const allAnswered =
            vals.length === questions.length && questions.length > 0;
        const hasRejection = vals.reduce((rejected, answer) => {
            if (rejected || answer.isRejection) return true;
            return answer.isRejection;
        }, false);

        if (hasRejection) setStatus("rejected");
        else if (allAnswered) setStatus("successful");
    }, [answers]);

    return (
        <div className="quiz">
            <div className="quiz-navigation">
                <Link href="/">Leave Quiz</Link>
            </div>

            <div className="quiz-progress">
                {status === "ongoing" &&
                    questions.map((question, index) => {
                        const currentClass = current === index && "current";
                        const answeredClass =
                            answers[index] !== undefined && "answered";
                        const disabledClass = current < index && "disabled";

                        return (
                            <div
                                key={index + 1}
                                className={`quiz-progress-pill ${
                                    currentClass ||
                                    answeredClass ||
                                    disabledClass ||
                                    ""
                                }`}
                                onClick={() => {
                                    if (
                                        current >= index ||
                                        answers[index] !== undefined
                                    ) {
                                        setCurrent(index);
                                    }
                                }}
                            >
                                {index + 1}
                            </div>
                        );
                    })}
            </div>
            {status === "ongoing" &&
                questions &&
                questions.map((data, index) => {
                    const { question, options } = data;
                    return (
                        <QuizQuestion
                            key={question}
                            question={question}
                            options={options}
                            questionIndex={index}
                            active={current === index}
                        />
                    );
                })}

            {status === "rejected" && <QuizRejection />}
            {status === "successful" && <QuizSuccess />}
            {fetching && <p className="quiz-message">Preparing quiz...</p>}
        </div>
    );
};

export default QuizWidget;
