import Head from "next/head";

import Hero from "../containers/Hero";
import HomeFeature from "../containers/HomeFeature";
import Footer from "../containers/Footer";

export default function Home() {
    return (
        <>
            <Head>
                <title>Manual Assessment</title>
            </Head>
            <div className="page">
                <Hero />
                <div className="container-inner">
                    <h3 className="text-center">What we can help with</h3>

                    <HomeFeature
                        image="/img/man-01.png"
                        number="01"
                        category="Hair Loss"
                        title="Hair loss needn’t be irreversible. We can help!"
                        desc="We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out."
                    />

                    <HomeFeature
                        image="/img/man-02.png"
                        number="02"
                        category="Erecetile dysfunction"
                        title="Erections can be a tricky thing. But no need to feel down!"
                        desc="We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out."
                        align="right"
                    />
                </div>

                <Footer />
            </div>
        </>
    );
}
