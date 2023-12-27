import Image from "next/image";
import Container from "../global/Container";

const SAMPLE_DATA = [
  {
    id: 1,
    title: "Community Cleanup asdf asldkfja flaksdj falkdjf aldskjf ",
    location: "City Park",
    organizationName: "Green Earth Society",
    logo: "/logo-sample.svg",
    description:
      "Join us in cleaning up the park and promoting environmental awareness.",
    startDate: "2023-02-15",
    endDate: "2023-02-15",
    numberOfVolunteers: 25,
  },
  // {
  //   id: 2,
  //   title: "Food Drive",
  //   location: "Local Food Bank",
  //   organizationName: "Helping Hands Foundation",
  //   logo: "/logo-sample.svg",
  //   description: "Collecting non-perishable food items for families in need.",
  //   startDate: "2023-03-10",
  //   endDate: "2023-03-12",
  //   numberOfVolunteers: 15,
  // },
  // {
  //   id: 3,
  //   title: "Educational Workshop",
  //   location: "Community Center",
  //   organizationName: "Knowledge Empowerment Initiative",
  //   logo: "/logo-sample.svg",
  //   description:
  //     "Empowering youth through educational workshops and skill-building sessions.",
  //   startDate: "2023-04-05",
  //   endDate: "2023-04-07",
  //   numberOfVolunteers: 20,
  // },
  // {
  //   id: 4,
  //   title: "Senior Center Visit",
  //   location: "Sunset Care Home",
  //   organizationName: "Joyful Hearts Association",
  //   logo: "/jha-logo.png",
  //   description: "Spending quality time with seniors at the care home.",
  //   startDate: "2023-05-20",
  //   endDate: "2023-05-20",
  //   numberOfVolunteers: 10,
  // },
  // {
  //   id: 5,
  //   title: "Animal Shelter Support",
  //   location: "City Animal Shelter",
  //   organizationName: "Paws for Love",
  //   logo: "/pfl-logo.png",
  //   description: "Assisting with animal care and shelter maintenance.",
  //   startDate: "2023-06-08",
  //   endDate: "2023-06-08",
  //   numberOfVolunteers: 30,
  // },
  // {
  //   id: 6,
  //   title: "Habitat Restoration",
  //   location: "Nature Reserve",
  //   organizationName: "Wilderness Guardians",
  //   logo: "/wg-logo.png",
  //   description:
  //     "Rehabilitating natural habitats and protecting local ecosystems.",
  //   startDate: "2023-07-15",
  //   endDate: "2023-07-17",
  //   numberOfVolunteers: 40,
  // },
  // {
  //   id: 7,
  //   title: "Blood Drive",
  //   location: "Community Hospital",
  //   organizationName: "Lifeblood Association",
  //   logo: "/la-logo.png",
  //   description: "Donating blood to save lives.",
  //   startDate: "2023-08-30",
  //   endDate: "2023-09-01",
  //   numberOfVolunteers: 50,
  // },
  // {
  //   id: 8,
  //   title: "Homeless Shelter Assistance",
  //   location: "City Homeless Shelter",
  //   organizationName: "Hopeful Hearts Foundation",
  //   logo: "/hhf2-logo.png",
  //   description: "Providing support and resources to homeless individuals.",
  //   startDate: "2023-10-10",
  //   endDate: "2023-10-12",
  //   numberOfVolunteers: 20,
  // },
  // {
  //   id: 9,
  //   title: "Environmental Seminar",
  //   location: "University Auditorium",
  //   organizationName: "Green Future Initiative",
  //   logo: "/gfi-logo.png",
  //   description:
  //     "Raising awareness about environmental conservation and sustainability.",
  //   startDate: "2023-11-18",
  //   endDate: "2023-11-19",
  //   numberOfVolunteers: 30,
  // },
  // {
  //   id: 10,
  //   title: "Youth Sports Coaching",
  //   location: "City Sports Complex",
  //   organizationName: "Sports for All Foundation",
  //   logo: "/sfa-logo.png",
  //   description: "Coaching and mentoring youth in various sports activities.",
  //   startDate: "2023-12-05",
  //   endDate: "2023-12-07",
  //   numberOfVolunteers: 15,
  // },
];

export default function LatestProjects() {
  return (
    <Container classes="space-y-16">
      <h3 className="text-4xl font-semibold">Latest Projects</h3>

      <div className="flex flex-row gap-6">
        {SAMPLE_DATA.map((project) => {
          return (
            <div
              key={project.id}
              className="flex flex-row items-start w-1/3 gap-6 p-8 bg-bg-200 shadow-md rounded-md"
            >
              <Image
                src={project.logo}
                width={60}
                height={60}
                alt={`Logo of ${project.organizationName}`}
              />

              <div className="space-y-6">
                <div>
                  <p className="text-3xl line-clamp-1 text-text-200">
                    {project.title}
                  </p>
                  <div className="text-sm text-text-200 line-clamp-1">
                    <span>{project.location}</span>
                    <span className="border-r mx-2"></span>
                    <span>{project.organizationName}</span>
                  </div>
                </div>

                <div className="line-clamp-4">{project.description}</div>

                <div className="text-sm flex justify-between">
                  <div>{`${project.startDate} to ${project.endDate}`}</div>
                  <div>{project.numberOfVolunteers} volunteers</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
