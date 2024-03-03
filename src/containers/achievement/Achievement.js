import React, { useState, useContext } from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import { achievementSection } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import ShowCard from "../../components/achievementCard/ShowCard";
export default function Achievement() {
  const { isDark } = useContext(StyleContext);
  const [showAllCards, setShowAllCards] = useState(false);

  if (!achievementSection.display) {
    return null;
  }

  const displayedCards = showAllCards
    ? achievementSection.achievementsCards
    : achievementSection.achievementsCards.slice(0, 5);

  return (
    <div className="main" id="achievements">
      <div className="achievement-main-div">
        <div className="achievement-header">
          <h1
            className={
              isDark
                ? "dark-mode heading achievement-heading"
                : "heading achievement-heading"
            }
          >
            {achievementSection.title}
          </h1>
          <p
            className={
              isDark
                ? "dark-mode subTitle achievement-subtitle"
                : "subTitle achievement-subtitle"
            }
          >
            {achievementSection.subtitle}
          </p>
        </div>
        <div className="achievement-cards-div">
          {displayedCards.map((card, i) => (
            <AchievementCard
              key={i}
              isDark={isDark}
              cardInfo={{
                title: card.title,
                description: card.subtitle,
                image: card.image,
                imageAlt: card.imageAlt,
                footer: card.footerLink
              }}
            />
          ))}
           {achievementSection.achievementsCards.length > 3 && (
            <ShowCard isDark={isDark} showMore={showAllCards} toggleShowMore={() => setShowAllCards(!showAllCards)} />
          )}
        </div>
      </div>
    </div>
  );
}