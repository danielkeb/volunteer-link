import Image from "next/image";
import Container from "../global/Container";

export default function Mission() {
  return (
    <Container classes="flex flex-row items-center justify-around">
      <div className="w-1/3 space-y-10">
        <div className="space-y-3">
          <span className="text-base">Our Mission</span>
          <h2 className="text-4xl font-semibold">
            Empowering Communities Through Volunteering
          </h2>
        </div>
        <p className="text-base">
          Bridging the gap between passionate individuals and worthy causes,
          sparking meaningful connections and fueling collaborative action
          through a seamless platform for volunteer engagement with non-profit
          organizations. Bridging the gap between passionate individuals and
          worthy causes, sparking meaningful connections and fueling
          collaborative action through a seamless platform for volunteer
          engagement with non-profit organizations.
        </p>
      </div>
      <Image
        className="hidden md:block"
        src="/mission-image.svg"
        width={418}
        height={418}
        alt=""
      />
    </Container>
  );
}
