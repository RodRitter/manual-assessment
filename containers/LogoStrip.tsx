import React from "react";
import Image from "next/image";

const LogoStrip = () => {
    return (
        <div className="logo-strip">
            <Image
                width={40}
                height={38}
                alt="Manual Logo"
                src="/img/logo.png"
            />
        </div>
    );
};

export default LogoStrip;
