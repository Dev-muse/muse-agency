 
import Container from "./Container";
import FadeIn from "./FadeIn";
import clsx from "clsx";

const PageIntro = ({ title, header, children, centered = false }) => {
  return (
    <Container
      className={clsx("mt-24 sm:mt-32 lg:mt-40", centered && "text-center")}
    >
      <FadeIn>
        <h1>
          <span className="block font-display text-base font-semibold text-neutral-950">
            {title}
          </span>
          <span className="sr-only"> - </span>
          <span
            className={clsx(
              "mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 hover:text-primary transition-colors duration-500 [text-wrap:balance] sm:text-6xl",
              centered && "mx-auto"
            )}
          >
            {header}
          </span>
        </h1>
        <div
          className={clsx(
            "mt-6 max-w-3xl text-xl text-neutral-600",
            centered && "mx-auto"
          )}
        >
          {children}
        </div>
      </FadeIn>
    </Container>
  );
};

export default PageIntro;