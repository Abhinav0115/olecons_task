import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LanguageSelector from "../locales/LanguageSelector";
import { useTranslation } from "react-i18next";

const Header = () => {
    const [bgColor, setBgColor] = useState("bg-secondary-subtle");

    // -----------experiment--------------
    // let url = window.location.href;
    // url = url.split("/")[3];

    // const [about, setAbout] = useState(false);
    // const [contact, setContact] = useState(false);
    // const [home, setHome] = useState(false);

    // if (url === "about") {
    //     setAbout(true);
    // } else if (url === "contact") {
    //     setContact(true);
    // } else {
    //     setHome(true);
    // }

    // useEffect(() => {
    //     setBgColor("bg-primary-subtle");
    //     setAbout(false);
    // }, [about]);

    // useEffect(() => {
    //     setBgColor("bg-info");
    //     setContact(false);
    // }, [contact]);

    // -----------experiment--------------

    const { t } = useTranslation();
    return (
        <header className={`${bgColor} py-2 pb-1 fs-5`}>
            <nav className="mb-4  stroke">
                <ul className="nav d-flex justify-content-center">
                    <li className="nav-item">
                        <Link
                            to="/"
                            className="nav-link bgOnHover text-uppercase text-black fw-bold"
                            onClick={() => {
                                setBgColor("bg-secondary-subtle");
                            }}
                        >
                            {t("home")}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/about"
                            className="nav-link bgOnHover text-uppercase text-black fw-bold"
                            onClick={() => {
                                setBgColor("bg-primary-subtle");
                            }}
                        >
                            {t("about")}
                        </Link>
                    </li>
                    <li className="nav-item ">
                        <Link
                            to="/contact"
                            className="nav-link bgOnHover text-uppercase text-black fw-bold"
                            onClick={() => {
                                setBgColor("bg-info");
                            }}
                        >
                            {t("contact")}
                        </Link>
                    </li>
                    <li className="nav-item pt-1">
                        <LanguageSelector />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
