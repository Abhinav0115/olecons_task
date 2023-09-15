// Home.js
import React from "react";
import { useTranslation } from "react-i18next";
import iphone1 from "../Images/iphone1.png";

const Home = () => {
    const { t } = useTranslation();
    return (
        <div>
            <h2 className="text-start text-uppercase ps-4 bg-secondary-subtle py-4 mb-0 text-secondary">
                {t("Welcome")}
                <hr className=" horiLine" />
            </h2>
            <header className="bg-dark text-white text-center py-5">
                <div className="container py-lg-5 py-md-1 ">
                    <h1 className="display-4 mt-3 ">
                        {t("Your Awesome IPhone 15")}
                    </h1>
                    <p className="lead">
                        {t(
                            "The iPhone 15 Pro models feature the A17 Pro, complete with a new GPU. The industry's first 3 nanometer chip has a 6-core CPU which is 10 per cent faster than its predecessor, a neural engine that's up to twice as fast, and USB speeds of up to 10Gbps"
                        )}
                        .
                    </p>
                    <a href="#features" className="btn btn-primary btn-lg">
                        {t("Learn More")}
                    </a>
                </div>
            </header>

            <section id="features" className="py-5">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-4">
                            <h2>{t("Dynamic Island")}</h2>
                            <p>
                                {t(
                                    "Dynamic Island the new pill-shaped area on the iPhone not only has camera hardware but also serves as a shape-changing hub for key iPhone alerts"
                                )}
                                .
                            </p>
                        </div>
                        <div className="col-lg-4">
                            <h2>{t("Satellite connectivity")}</h2>
                            <p>
                                {t(
                                    "you can use a satellite connection when you have no cellular and Wi-Fi coverage to text emergency services, request roadside assistance, and share your location"
                                )}
                                .
                            </p>
                        </div>
                        <div className="col-lg-4">
                            <h2>{t("A17 Pro chipset")}</h2>
                            <p>
                                {t(
                                    "The A17 Pro is a first 3nm smartphone chipset, redesigned GPU that offers sustained graphical performance"
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
                        <div className="col-lg-6 mb-3">
                            <h2>{t("Why Choose Us")}</h2>
                            <li className="mt-4 mb-3">
                                {t(
                                    "Aerospace‑grade titanium design, using the same alloy that spacecraft use for missions to Mars"
                                )}
                                .
                            </li>
                            <li>
                                {t(
                                    "The Action button lets you set shortcuts to access the camera or flashlight quickly, Translate, as well as set Focus modes"
                                )}
                                .
                            </li>
                        </div>
                        <div className="col-lg-6">
                            <img
                                src={iphone1}
                                alt="IPhone 15 Pro"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
