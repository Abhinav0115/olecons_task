import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import apple1 from "../Images/apple1.png";
import iphone1 from "../Images/iphone1.png";

const Contact = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        dob: "",
        email: "",
        mobile: "",
        message: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here, e.g., send data to a server or perform validation
        console.log(formData);
    };

    return (
        <div>
            <h2 className="text-start ps-4 text-uppercase bg-info mb-5 py-4 text-secondary">
                {t("Contact Us")}!
                <hr className=" horiLine" />
            </h2>
            <div className="container mt-5  ">
                <h1 className="text-center fs-1">
                    {t("Let's Start a Conversation")}
                </h1>
                <div className="col-lg-6 mb-5">
                    <div className="d-flex flex-row">
                        <img
                            src={apple1}
                            alt="Apple Devices"
                            className="img-fluid"
                        />
                        <img
                            src={iphone1}
                            alt="iphone1"
                            className="img-fluid pb-5"
                        />
                    </div>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="mx-auto widthSize mb-4 bg-info-subtle p-4 rounded-4"
                >
                    <h4 className="text-center text-secondary">
                        {t("Sales and Product Inquiries")}
                    </h4>
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">
                            {t("First Name")}:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">
                            {t("Last Name")}:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {/* <div className="mb-3 ">
                    <label htmlFor="dob" className="form-label">
                        {t("Date of Birth")}:
                    </label>
                    <input
                        type="date"
                        className="form-control"
                        id="dob"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        required
                    />
                </div> */}
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            {t("Email Address")}:
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="mobile" className="form-label">
                            {t("Mobile Number")}:
                        </label>
                        <input
                            type="tel"
                            className="form-control"
                            id="mobile"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">
                            {t("Message")}:
                        </label>
                        <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary">
                            {t("Submit")}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
