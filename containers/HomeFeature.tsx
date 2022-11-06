import React from "react";
import Image from "next/image";

type HomeFeatureTypes = {
    image: string;
    number: string;
    category: string;
    title: string;
    desc: string;
    align?: string;
};

const HomeFeature = ({
    image,
    number,
    category,
    title,
    desc,
    align,
}: HomeFeatureTypes) => {
    return (
        <div className={`home-feature ${align && "align-right"}`}>
            <div className="home-feature-left">
                <Image src={image} alt={category} width={370} height={445} />
            </div>

            <div className="home-feature-right">
                <div className="home-feature-background">
                    <span>{number}</span>
                </div>
                <div className="home-feature-content">
                    <h6>{category}</h6>
                    <h4>{title}</h4>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    );
};

export default HomeFeature;
