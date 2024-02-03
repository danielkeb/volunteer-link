export async function fetchLocations() {
  const res = await fetch(`${process.env.API_URL}/locations`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  const sortedLocations = data.sort(
    (a: { name: string }, b: { name: string }) => {
      return a.name.localeCompare(b.name);
    },
  );

  return sortedLocations;
}
