import Image from "next/image";
import Link from "next/link";
import Button from "../global/Button";
import Container from "../global/Container";

export default function Hero() {
  return (
    <Container
      classes={
        "flex flex-row justify-between items-center pb-32 bg-primary-100 h-[75vh]"
      }
    >
      <div className="flex flex-col w-full md:w-1/2 gap-8">
        <h1 className="text-3xl md:text-6xl font-bold text-text-100">
          Join Our Community of Volunteers
        </h1>

        <p className="text-xl text-text-200">
          Join us in making a difference in our communities. Find opportunities
          to volunteer with non-profit organizations that match your interests.
          Volunteer Connect brings volunteers and non-profit organizations
          together. Start your journey with us today.
        </p>

        <div className="flex flex-row gap-6">
          <Link href="/projects">
            <Button
              variant={"outlined"}
              size={"base"}
              text={"Browse Projects"}
            />
          </Link>
          <Link href="/sign-up">
            <Button variant={"filled"} size={"base"} text={"Sign Up"} />
          </Link>
        </div>
      </div>

      <div>
        <Image
          className="hidden md:block"
          src={"/hero-image.svg"}
          alt={""}
          width={600}
          height={600}
        />
      </div>
    </Container>
  );
}
