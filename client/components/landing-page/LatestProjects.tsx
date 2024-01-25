"use client";

import Image from "next/image";
import "swiper/css";
import {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/keyboard";
import "swiper/css/mousewheel";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SAMPLE_DATA = [
  {
    id: 1,
    title: "Community Cleanup",
    location: "City Park",
    organizationName: "Green Earth Society",
    logo: "/icons/logo.svg",
    description:
      "Join us in cleaning up the park and promoting environmental awareness. Join us in cleaning up the park and promoting environmental awareness. Join us in cleaning up the park and promoting environmental awareness.",
    startDate: "2023-02-15",
    endDate: "2023-02-15",
    numberOfVolunteers: 25,
  },
  {
    id: 2,
    title: "Food Drive",
    location: "Local Food Bank",
    organizationName: "Helping Hands Foundation",
    logo: "/icons/logo.svg",
    description:
      "Collecting non-perishable food items for families in need. Join us in cleaning up the park and promoting environmental awareness. Join us in cleaning up the park and promoting environmental awareness.",
    startDate: "2023-03-10",
    endDate: "2023-03-12",
    numberOfVolunteers: 15,
  },
  {
    id: 3,
    title: "Educational Workshop",
    location: "Community Center",
    organizationName: "Knowledge Empowerment Initiative",
    logo: "/icons/logo.svg",
    description:
      "Empowering youth through educational workshops and skill-building sessions. Join us in cleaning up the park and promoting environmental awareness. Join us in cleaning up the park and promoting environmental awareness.",
    startDate: "2023-04-05",
    endDate: "2023-04-07",
    numberOfVolunteers: 20,
  },
  {
    id: 4,
    title: "Senior Center Visit",
    location: "Sunset Care Home",
    organizationName: "Joyful Hearts Association",
    logo: "/icons/logo.svg",
    description: "Spending quality time with seniors at the care home.",
    startDate: "2023-05-20",
    endDate: "2023-05-20",
    numberOfVolunteers: 10,
  },
  {
    id: 5,
    title: "Animal Shelter Support",
    location: "City Animal Shelter",
    organizationName: "Paws for Love",
    logo: "/icons/logo.svg",
    description: "Assisting with animal care and shelter maintenance.",
    startDate: "2023-06-08",
    endDate: "2023-06-08",
    numberOfVolunteers: 30,
  },
  {
    id: 6,
    title: "Habitat Restoration",
    location: "Nature Reserve",
    organizationName: "Wilderness Guardians",
    logo: "/icons/logo.svg",
    description:
      "Rehabilitating natural habitats and protecting local ecosystems.",
    startDate: "2023-07-15",
    endDate: "2023-07-17",
    numberOfVolunteers: 40,
  },
  {
    id: 7,
    title: "Blood Drive",
    location: "Community Hospital",
    organizationName: "Lifeblood Association",
    logo: "/icons/logo.svg",
    description: "Donating blood to save lives.",
    startDate: "2023-08-30",
    endDate: "2023-09-01",
    numberOfVolunteers: 50,
  },
  {
    id: 8,
    title: "Homeless Shelter Assistance",
    location: "City Homeless Shelter",
    organizationName: "Hopeful Hearts Foundation",
    logo: "/icons/logo.svg",
    description: "Providing support and resources to homeless individuals.",
    startDate: "2023-10-10",
    endDate: "2023-10-12",
    numberOfVolunteers: 20,
  },
  {
    id: 9,
    title: "Environmental Seminar",
    location: "University Auditorium",
    organizationName: "Green Future Initiative",
    logo: "/icons/logo.svg",
    description:
      "Raising awareness about environmental conservation and sustainability.",
    startDate: "2023-11-18",
    endDate: "2023-11-19",
    numberOfVolunteers: 30,
  },
  {
    id: 10,
    title: "Youth Sports Coaching",
    location: "City Sports Complex",
    organizationName: "Sports for All Foundation",
    logo: "/icons/logo.svg",
    description: "Coaching and mentoring youth in various sports activities.",
    startDate: "2023-12-05",
    endDate: "2023-12-07",
    numberOfVolunteers: 15,
  },
];

export default function LatestProjects() {
  const breakpoints = {
    0: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  };

  return (
    <div className="container space-y-16">
      <h3 className="text-4xl font-semibold">Latest Projects</h3>

      <Swiper
        modules={[Autoplay, Keyboard, Mousewheel, Navigation, Pagination]}
        spaceBetween={24}
        mousewheel
        breakpoints={breakpoints}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          disableOnInteraction: false,
        }}
        keyboard={{
          enabled: true,
        }}
      >
        {SAMPLE_DATA.map((project) => {
          return (
            <SwiperSlide
              key={project.id}
              className="mb-20 space-y-6 rounded-md bg-primary-100 p-8 shadow-md"
            >
              <div className="flex flex-row gap-6">
                <Image
                  src={project.logo}
                  width={56}
                  height={56}
                  alt={`Logo of ${project.organizationName}`}
                />

                <div>
                  <p className="line-clamp-1 text-2xl font-medium text-text-100">
                    {project.title}
                  </p>
                  <div className="line-clamp-1 text-sm text-text-200">
                    <span>{project.location}</span>
                    <span className="mx-2 border-r"></span>
                    <span>{project.organizationName}</span>
                  </div>
                </div>
              </div>

              <div className="line-clamp-4 text-text-200">
                {project.description}
              </div>

              <div className="flex justify-between text-sm text-text-200">
                <div>{`${project.startDate} to ${project.endDate}`}</div>
                <div>{project.numberOfVolunteers} volunteers</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
