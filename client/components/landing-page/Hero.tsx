import Image from "next/image";
import Link from "next/link";
import Button from "../global/Button";
import Container from "../global/Container";

export default function Hero() {
  return (
    <Container
      classes={
        "flex h-[75vh] flex-row items-center justify-between bg-primary-100 pb-32"
      }
    >
      <div className="flex w-full flex-col gap-8 xl:w-1/2">
        <h1 className="text-3xl font-bold text-text-100 md:text-6xl">
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
          className="hidden xl:block"
          src={"/hero-image.svg"}
          alt={""}
          width={600}
          height={600}
        />
      </div>
    </Container>
  );
}
