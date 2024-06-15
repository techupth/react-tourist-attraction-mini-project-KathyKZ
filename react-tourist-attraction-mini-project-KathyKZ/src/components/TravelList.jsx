import React from "react";
import { useTravel } from "../components/TravelList";

const TravelList = () => {
  const { trips, loading } = useTravel();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="travel">
      {trips.map((trip) => (
        <TripCard key={trip.id} trip={trip} />
      ))}
    </div>
  );
};

const TripCard = ( trip ) => {
  return (
    <div className="travel">
      <img src={trip.photos[0]} alt={trip.title} className="w-full" />
      <div className="text">
        <h2 className="font-bold">{trip.title}</h2>
        <p className="text-gray-700">{trip.description.substring(0, 100)}...</p>
        <a href={trip.url} onClick={() => useTravel("/")}>
          อ่านต่อ
        </a>
      </div>
    </div>
  );
};

export default TravelList;