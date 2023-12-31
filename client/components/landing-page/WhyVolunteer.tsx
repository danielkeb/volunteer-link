"use client";

import Link from "next/link";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import Button from "../global/Button";

export default function WhyVolunteer() {
  return (
    <div className="bg-info py-16">
      <div className="container flex flex-row items-center justify-between gap-10">
        <div className="w-full space-y-16 text-bg-100 lg:w-1/2">
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
            <Link
              href="https://www.youtube.com/watch?v=jbV1TDZQAFc"
              target="_blank"
            >
              <Button
                variant={"filled"}
                size={"base"}
                text={"Find out more..."}
              />
            </Link>
          </div>
        </div>

        <div className="hidden h-auto w-1/2 lg:block">
          <LiteYouTubeEmbed
            aspectHeight={9}
            aspectWidth={16}
            id="jbV1TDZQAFc"
            title="{video_title}"
          />
        </div>
      </div>
    </div>
  );
}
