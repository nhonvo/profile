import React from "react";
import "./ShowCard.scss";

export default function ShowCard({ isDark, showMore, toggleShowMore }) {
    const buttonText = showMore ? "Show Less" : "Show More";

    return (
        <div className="show-card-image">
            <div className="show-more-button">
                <button onClick={toggleShowMore} className={`${isDark ? "dark-mode-button" : ""}`}>
                    {buttonText}
                </button>
            </div>
        </div>
    );
}
