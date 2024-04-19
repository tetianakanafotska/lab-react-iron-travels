import React from "react";
import { useState } from "react";

function TravelPlanCard({ plan }) {
  const [plan1, setPlan1] = useState(plan);
  const [favourites, setFavourites] = useState([]);
  const [color, setColor] = useState("");

  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  const addFavourites = (id) => {
    let favItem;
    const filteredPlan1 = plan1.filter((item) => {
      if (id === item.id) {
        favItem = item;
        return false;
      }
      return true;
    });
    setPlan1(filteredPlan1);
    setFavourites([...favourites, favItem]);
  };

  return (
    <div className="container">
      <div className="travel-list">
        {plan1.map((place) => {
          return (
            <article key={place.id} className="place-card">
              <img
                src={place.image}
                alt={place.destination}
                width={350}
                height={250}
              />
              <div className="place-info">
                <h2>
                  {place.destination} ({place.days} days)
                </h2>
                <i>{place.description}</i>
                <p>
                  <b>Price:</b> {place.totalCost}€
                </p>
                {place.totalCost <= 350 && (
                  <span className="great-deal">Great Deal</span>
                )}
                {place.totalCost >= 1500 && <span>Premium</span>}
                {place.allInclusive && <span>All inclusive</span>}
              </div>
              <button
                className="delete-btn"
                onClick={() => {
                  setPlan1(
                    plan1.filter((item) => {
                      return item.id !== place.id;
                    })
                  );
                }}
              >
                Delete
              </button>
              <button
                className="favourite-btn"
                style={{ backgroundColor: color }}
                onClick={() => {
                  setColor(colors[place.id % 6]);
                  addFavourites(place.id);
                }}
              >
                ♡
              </button>
            </article>
          );
        })}
      </div>
      <div className="favourites-list">
        <h2>Favourites</h2>
        {favourites.map((favourite) => {
          return (
            <div key={favourite.id} className="favourites-place-card">
              <img
                src={favourite.image}
                alt={favourite.destination}
                width={250}
                height={150}
              />
              <h4>
                {favourite.destination} ({favourite.days} days)
              </h4>
              <p>
                <b>Price:</b> {favourite.totalCost}€
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TravelPlanCard;
