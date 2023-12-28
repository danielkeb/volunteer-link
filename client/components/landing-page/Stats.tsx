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
      <div className="-mt-16 flex flex-col justify-center gap-16 md:flex-row">
        {TEMP_DATA.map((item) => {
          return (
            <div
              key={item.key}
              className="flex w-[400px] max-w-full flex-shrink flex-col items-center gap-8 rounded-lg bg-bg-100 px-6 py-12 shadow-lg duration-200  hover:scale-105 hover:bg-info hover:text-bg-200 hover:shadow-2xl"
            >
              <div className="flex flex-col items-center gap-2">
                <span className="text-4xl font-semibold">{item.value}</span>
                <span className="text-text-200">{item.key}</span>
              </div>
              <p className="w-4/5 text-center text-sm text-text-200">
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
