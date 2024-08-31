import React, { PropsWithChildren } from "react";
import "./styles.scss";

import { v4 as uuidv4 } from "uuid";

type CarouselProps = PropsWithChildren;

export const Carousel = (props: CarouselProps) => {
  return (
    <div className="carousel">
      <div className="carousel-items">
        {React.Children.map(props.children, (child) => (
          <div
            key={uuidv4()}
            className="carousel-card"
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};
