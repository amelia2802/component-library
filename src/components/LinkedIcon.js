import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IconContext } from "../App";

const LinkedIcon = ({ to }) => {
    const Icon = React.useContext(IconContext);

    return (
        <Link to={to}>
            <FaArrowLeft className={Icon.className} />
        </Link>
    );
};

export default LinkedIcon;