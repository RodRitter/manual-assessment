import React from "react";
import { useRouter } from "next/router";
import Button from "../components/Button";
import LogoStrip from "./LogoStrip";

const Hero = () => {
    const router = useRouter();

    return (
        <div className="hero-header">
            <div className="container">
                <div className="hero-content">
                    <LogoStrip />
                    <h1>
                        Be good
                        <br />
                        to yourself
                    </h1>
                    <p>
                        We’re working around the clock to bring you a holistic
                        approach to your wellness. From top to bottom, inside
                        and out.
                    </p>
                    <Button onClick={() => router.push("/quiz")}>
                        Take the quiz
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
