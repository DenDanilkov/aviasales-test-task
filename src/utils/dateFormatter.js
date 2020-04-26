export const dateFormater = (date, offset) => {
  const currentDate = new Date(date);

  const departureHours = currentDate.getHours();
  const departureMinutes = currentDate.getMinutes();

  currentDate.setTime(currentDate.getTime() + offset * 60000);

  const arrivalHours = currentDate.getHours();
  const arrivalMinutes = currentDate.getMinutes();

  return `${departureHours}:${departureMinutes} - ${arrivalHours}:${arrivalMinutes}`;
};

export const minutesToHours = minutes => {
  return `${Math.floor(minutes / 60)}ч ${minutes % 60}м`;
};
