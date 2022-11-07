import React, { useEffect } from "react";
import Head from "next/head";
import QuizWidget from "../components/QuizWidget";

const Quiz = () => {
    return (
        <>
            <Head>
                <title>Manual Assessment</title>
            </Head>
            <div className="page">
                <div className="quiz-wrapper">
                    <QuizWidget />
                </div>
            </div>
        </>
    );
};

export default Quiz;
