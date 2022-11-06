import React, { useEffect, useState } from "react";
import Image from "next/image";

export type OptionType = {
    display: string;
    value: string;
    isRejection: boolean;
};

type OptionProps = {
    option: OptionType;
};

const QuizOption = ({ option }: OptionProps) => {
    const [displayEl, setDisplayEl] = useState<JSX.Element>();
    const [imageDisplay, setImageDisplay] = useState(false);

    const displayIsImage = () => option.display.indexOf("<img") > -1;

    const safeStringToImg = (imgString: string) => {
        const patt = /\s+(\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/g;

        const attrs = [...imgString.matchAll(patt)];
        const imgAttr: { [key: string]: string } = {};

        attrs.forEach((attr) => {
            imgAttr[attr[1]] = attr[2];
        });

        console.log(imgAttr);

        return (
            <Image
                src={imgAttr.src || ""}
                alt={imgAttr.alt || "Option"}
                layout="fill"
                objectFit="contain"
                sizes="273px auto"
            />
        );
        return <></>;
    };

    useEffect(() => {
        if (displayIsImage()) {
            setImageDisplay(true);
            const ParsedImage: JSX.Element = safeStringToImg(option.display);
            setDisplayEl(ParsedImage);
        } else {
            setDisplayEl(() => <button>{option.display}</button>);
        }
    }, []);

    if (displayEl) {
        return (
            <div
                className={`quiz-option ${
                    imageDisplay ? "quiz-image-option" : "quiz-text-option"
                }`}
            >
                {displayEl}
            </div>
        );
    }

    return null;
};

export default QuizOption;
