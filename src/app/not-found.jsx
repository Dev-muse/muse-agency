import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import { RiArrowLeftCircleFill  } from "react-icons/ri";



const NotFound = () => {
  return (
    <Container className="flex h-full items-center pt-20 sm:pt-24 lg:pt-32">
      <FadeIn className="flex flex-col items-center">
        <p className="font-display text-4xl font-semibold text-neutral-950 sm:text-5xl">
          404
        </p>
        <h1 className="mt-4 font-display text-2xl font-semibold text-neutral-950">
          Page not found
        </h1>
        <p className="mt-2 text-sm text-neutral-600">
          Sorry, we could not find the page you are looking for.
        </p>
        <Link
          href="/"
          className="  mt-4 text-sm font-semibold hover:text-primary text-neutral-950 transition"
        >
           <RiArrowLeftCircleFill  className="inline-block text-lg mr-2"/>Back to homepage 
        </Link>
      </FadeIn>
    </Container>
  );
};

export default NotFound;