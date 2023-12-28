import Button from "@/components/global/Button";
import Container from "@/components/global/Container";
import Footer from "@/components/global/Footer";
import WhyVolunteer from "@/components/landing-page/WhyVolunteer";
import Link from "next/link";
import Header from "../components/landing-page/Header";
import Hero from "../components/landing-page/Hero";
import LatestProjects from "../components/landing-page/LatestProjects";
import Mission from "../components/landing-page/Mission";
import Stats from "../components/landing-page/Stats";

export default function Home() {
  return (
    <div>
      <Header />

      <Hero />

      <div className="space-y-56">
        <Stats />

        <Mission />

        <LatestProjects />

        <WhyVolunteer />

        {/* Join us section */}
        <Container classes="flex flex-col items-center justify-center gap-2">
          <h1 className="text-6xl font-semibold">
            Ready to make a difference?
          </h1>
          <p className="mb-8 text-2xl">
            Get involved today and help us build a better community.
          </p>
          <Link href="/sign-up">
            <Button variant={"filled"} size={"base"} text={"Join Us"} />
          </Link>
        </Container>

        <Footer />
      </div>
    </div>
  );
}
