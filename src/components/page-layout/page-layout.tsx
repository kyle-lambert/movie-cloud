import { PropsWithChildren } from "react";
import { Footer } from "@/components/footer";

export const PageLayout = (props: PropsWithChildren) => {
  return (
    <div>
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};
