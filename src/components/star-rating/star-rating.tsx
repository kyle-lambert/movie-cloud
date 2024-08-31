// @ts-expect-error: No types provided by this library
import Ratings from "react-ratings-declarative";

export type StarRatingProps = {
  rating: number;
  width?: number;
};

export const StarRating = ({ rating = 0, width = 15 }: StarRatingProps) => {
  return (
    <Ratings
      rating={rating / 2}
      widgetRatedColors="#24baef"
      widgetEmptyColors="#949cb0"
      widgetDimensions={`${width}px`}
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
