// LanguageSelector.js
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const [isOpen, setIsOpen] = useState(false);
    const [language, setLanguage] = useState("English");

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="dropdown text-success">
                <button
                    className="btn dropdown-toggle text-uppercase"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    onClick={toggleDropdown}
                >
                    {language}
                </button>
                <div
                    className={`dropdown-menu${
                        isOpen ? " show" : ""
                    } bg-transparent text-white`}
                    aria-labelledby="dropdownMenuButton"
                >
                    <Link
                        className="dropdown-item text-uppercase"
                        href="#"
                        onClick={() => {
                            changeLanguage("en");
                            setIsOpen(!isOpen);
                            setLanguage("English");
                        }}
                    >
                        English
                    </Link>
                    <Link
                        className="dropdown-item text-uppercase"
                        onClick={() => {
                            changeLanguage("hi");
                            setIsOpen(!isOpen);
                            setLanguage("हिंदी (Hindi)");
                        }}
                    >
                        हिंदी (Hindi)
                    </Link>
                    <Link
                        className="dropdown-item text-uppercase"
                        href="#"
                        onClick={() => {
                            changeLanguage("ta");
                            setIsOpen(!isOpen);
                            setLanguage("தமிழ் (Tamil)");
                        }}
                    >
                        தமிழ் (Tamil)
                    </Link>
                    <Link
                        className="dropdown-item text-uppercase"
                        href="#"
                        onClick={() => {
                            changeLanguage("fr");
                            setIsOpen(!isOpen);
                            setLanguage("Français (French)");
                        }}
                    >
                        Français (French)
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LanguageSelector;
