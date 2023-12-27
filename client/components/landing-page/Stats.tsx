import Container from "../global/Container";

const TEMP_DATA = [
  { key: "Projects", value: 343 },
  { key: "Volunteers", value: 485 },
  { key: "Organizations", value: 1324 },
  { key: "Organizations", value: 898 },
];

export default function Stats() {
  return (
    <Container>
      <div className="flex flex-col md:flex-row justify-center gap-16 -mt-16">
        {TEMP_DATA.map((item) => {
          return (
            <div
              key={item.key}
              className="flex flex-col flex-shrink gap-8 items-center rounded-lg hover:shadow-2xl hover:bg-info hover:text-bg-200 duration-200 hover:scale-105 px-6 py-12  bg-bg-100 shadow-lg max-w-full w-[400px]"
            >
              <div className="flex flex-col gap-2 items-center">
                <span className="text-4xl font-semibold">{item.value}</span>
                <span className="text-text-200">{item.key}</span>
              </div>
              <p className="text-text-200 text-sm w-4/5 text-center">
                Neque tempora quaerat dolorem labore est magnam. Dolorem
                etincidunt voluptatem eius magnam.
              </p>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
