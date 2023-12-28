import Image from "next/image";
import Button from "../global/Button";
import Container from "../global/Container";

export default function WhyVolunteer() {
  return (
    <div className="bg-info py-16">
      <Container classes="flex flex-col items-center justify-between md:flex-row">
        <div className="w-1/2 space-y-16 text-bg-100">
          <div className="space-y-2">
            <span className="text-base">Benefits of Volunteering</span>
            <h4 className="text-5xl">Why Volunteer?</h4>
          </div>
          <div>
            Volunteering provides valuable community services, so more money can
            be spent on local improvements. It is not just about the community,
            but also about the volunteer. Volunteering allows you to connect
            with your community and make it a better place.
          </div>

          <div>
            <Button
              variant={"filled"}
              size={"base"}
              text={"Find out more..."}
            />
          </div>
        </div>

        <div>
          <Image src="" alt="" />
        </div>
      </Container>
    </div>
  );
}
