import { PropsWithChildren } from "react";
import "./styles.scss";
import { Carousel } from "@/components/carousel";

type ShowcaseProps = PropsWithChildren<{
  heading?: string;
}>;
export const Showcase = ({
  heading = "Heading unavailable",
  children,
}: ShowcaseProps) => {
  return (
    <div className="showcase-items">
      <h2 className="showcase-items-head">{heading}</h2>
      <Carousel>{children}</Carousel>
    </div>
  );
};
