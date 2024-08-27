import "./styles.scss";

// @ts-expect-error: No types provided by this library
import Ratings from "react-ratings-declarative";

export type StarRatingProps = {
  rating: number;
};

export const StarRating = ({ rating = 0 }: StarRatingProps) => {
  return (
    <Ratings
      rating={rating}
      widgetRatedColors="#24baef"
      widgetEmptyColors="#949cb0"
      widgetDimensions="15px"
      widgetSpacings="2px"
    >
      <Ratings.Widget />
      <Ratings.Widget />
      <Ratings.Widget />
      <Ratings.Widget />
      <Ratings.Widget />
    </Ratings>
  );
};
