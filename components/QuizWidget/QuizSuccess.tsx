import React from "react";
import Link from "next/link";

const QuizSuccess = () => {
    return (
        <p className="quiz-success quiz-message">
            Great news! We have the perfect treatment for your hair loss.
            Proceed to <Link href="/">www.manual.co</Link>, and prepare to say
            hello to your new hair!
        </p>
    );
};

export default QuizSuccess;
