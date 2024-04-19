import React from "react";
import TravelPlanCard from "./TravelPlanCard";
import travelPlansDataDB from "../assets/travel-plans.json";

function TravelList() {
  return <TravelPlanCard plan={travelPlansDataDB} />;
}

export default TravelList;
