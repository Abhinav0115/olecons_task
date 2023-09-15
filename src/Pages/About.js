// About.js
import React from "react";
import { useTranslation } from "react-i18next";
import apple1 from "../Images/apple1.png";

const About = () => {
    const { t } = useTranslation();
    return (
        <div>
            <h2 className="text-start text-uppercase ps-4 bg-primary-subtle py-4 mb-0 text-secondary">
                {t("About Us")}!
                <hr className=" horiLine" />
            </h2>
            <div>
                <header className="bg-light text-black text-center py-5">
                    <div className="container py-lg-5 py-md-1 ">
                        <h1 className="display-4 fw-bold">
                            {t("We Create Trends")}
                        </h1>
                        <p className="lead">
                            {t(
                                "Apple Inc. (Apple) designs, manufactures and markets smartphones, personal computers, tablets, wearables and accessories and sells a range of related services. The Company's products include iPhone, Mac, iPad, AirPods, Apple TV, Apple Watch, Beats products, HomePod, iPod touch and accessories"
                            )}
                            .
                        </p>
                        <a href="#features" className="btn btn-primary btn-lg">
                            {t("Learn More")}
                        </a>
                    </div>
                </header>

                <section
                    id="features"
                    className="py-5 bg-primary-subtle text-black"
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <h2>{t("Smartphone")}</h2>
                                <p>
                                    {t(
                                        "What is an Apple smartphone? iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007"
                                    )}
                                    .
                                </p>
                            </div>
                            <div className="col-lg-4">
                                <h2>{t("Personal Computers")}</h2>
                                <p>
                                    {t(
                                        "The Macintosh, or Mac, is Apple's line of personal computers. Its main product types are the iMac all-in-one desktop, Mac mini standard desktop, Mac Studio media-focused desktop, Mac Pro professional production workstation desktop, MacBook Air consumer laptop and MacBook Pro professional laptop"
                                    )}
                                    .
                                </p>
                            </div>
                            <div className="col-lg-4">
                                <h2>{t("wearables")}</h2>
                                <p>
                                    {t(
                                        "Apple Watch is a wearable smartwatch that allows users to accomplish a variety of tasks, including making phone calls, sending text messages and reading email. Apple released the first Apple Watch on April 24, 2015"
                                    )}
                                    .
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-light py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h2>{t("Why Choose Us")}</h2>
                                <ul className="list-group">
                                    <li className="list-group-item mb-1 bg-primary-subtle">
                                        {t("Security and Privacy")}.
                                    </li>
                                    <li className="list-group-item mb-1">
                                        {t("Better Performance")}.
                                    </li>
                                    <li className="list-group-item mb-1 bg-primary-subtle">
                                        {t("No Bloatware")}.
                                    </li>
                                    <li className="list-group-item mb-1">
                                        {t("The Apple Ecosystem")}.
                                    </li>
                                    <li className="list-group-item mb-1 bg-primary-subtle">
                                        {t("Retain Value")}.
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <img
                                    src={apple1}
                                    alt="Apple Devices"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
