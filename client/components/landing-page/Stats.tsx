const TEMP_DATA = [
  { key: "Projects", value: 343, txt: "Number of all projects" },
  {
    key: "Volunteers",
    value: 485,
    txt: "Total count of registered volunteers",
  },
  {
    key: "Organizations",
    value: 1324,
    txt: "List of affiliated organizations",
  },
];

export default function Stats() {
  return (
    <div className="container -mt-16 flex flex-col justify-center gap-16 md:flex-row">
      {TEMP_DATA.map((item) => {
        return (
          <div
            key={item.key}
            className="flex w-[400px] max-w-full flex-shrink flex-col items-center gap-8 rounded-lg bg-bg-100 py-12 shadow-md duration-200 hover:scale-105 hover:shadow-2xl xl:max-w-[300px]"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-4xl font-semibold">{item.value}</span>
              <span className="text-text-200">{item.key}</span>
            </div>
            <p className="w-1/2 text-center text-sm text-text-200">
              {item.txt}
            </p>
          </div>
        );
      })}
    </div>
  );
}
