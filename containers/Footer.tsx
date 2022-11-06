import React from "react";
import Image from "next/image";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <Image
                            src="/img/logo-lg.png"
                            alt="Manual Logo"
                            width={75}
                            height={71}
                        />
                    </div>

                    <div className="footer-column">
                        <h6>Product</h6>
                        <ul>
                            <li>
                                <a href="#">Popular</a>
                            </li>
                            <li>
                                <a href="#">Trending</a>
                            </li>
                            <li>
                                <a href="#">Guided</a>
                            </li>
                            <li>
                                <a href="#">Products</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h6>Company</h6>
                        <ul>
                            <li>
                                <a href="#">Press</a>
                            </li>
                            <li>
                                <a href="#">Mission</a>
                            </li>
                            <li>
                                <a href="#">Strategy</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h6>Info</h6>
                        <ul>
                            <li>
                                <a href="#">Support</a>
                            </li>
                            <li>
                                <a href="#">Customer Service</a>
                            </li>
                            <li>
                                <a href="#">Get Started</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h6>Follow Us</h6>
                        <div className="footer-socials">
                            <a href="#">
                                <Image
                                    src="/img/social-fb.png"
                                    alt="Facebook Logo"
                                    width={14}
                                    height={20}
                                />
                            </a>

                            <a href="#">
                                <Image
                                    src="/img/social-google.png"
                                    alt="Google Logo"
                                    width={18}
                                    height={18}
                                />
                            </a>

                            <a href="#">
                                <Image
                                    src="/img/social-twitter.png"
                                    alt="Twitter Logo"
                                    width={22}
                                    height={17}
                                />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright">
                    © 2021 Manual. All rights reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer;
