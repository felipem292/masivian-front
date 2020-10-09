import ReactStars from "react-rating-stars-component";
import React from "react";

const ratingChanged = (newRating) => {
  console.log(newRating);
};
export const Stars = () => {
  return (
    <div>
      <ReactStars
        count={5}
        value={3}
        onChange={ratingChanged}
        size={40}
        color="#000000"
        activeColor="#ffd700"
      />
    </div>
  );
};
