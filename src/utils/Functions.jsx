export const formatShipDate = (dateString) => {
  // Create a new Date object from the date string
  const date = new Date(dateString);

  // Get day of the week (e.g., "Thu")
  const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "short" });

  // Get the month (e.g., "Oct")
  const month = date.toLocaleDateString("en-US", { month: "short" });

  // Get the day of the month (e.g., "02")
  const dayOfMonth = date.toLocaleDateString("en-US", { day: "2-digit" });

  // Get the year (e.g., "2024")
  const year = date.getFullYear();

  // Return the formatted date in "Thu Oct/02/2024" format
  return `${dayOfWeek} ${month}/${dayOfMonth}/${year}`;
};
