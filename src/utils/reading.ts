interface Reading {
  time: number;
  value: number;
}

export const getReadings = async (length = 1200): Promise<Reading[]> => {
  const current = Date.now();
  const hour = 1000 * 60 * 60;
  return [...new Array(length)].map((_, index) => ({
    time: current - index * hour,
    value: Math.random() * 0.7 + 0.4,
  }));
};

export const groupByDay = (readings: Reading[]): Reading[] => {
  const groupedByDay: { [day: number]: number } = readings.reduce(
    (curr, { time, value }) => {
      const readingDate = new Date(time);
      const day = new Date(
        readingDate.getFullYear(),
        readingDate.getMonth(),
        readingDate.getDate()
      ).getTime();
      if (!curr[day]) curr[day] = 0;
      curr[day] += value;
      return curr;
    },
    {} as { [day: number]: number }
  );

  return Object.entries(groupedByDay).map(([day, value]) => ({
    time: Number(day),
    value,
  }));
};

export const sortByTime = (readings: Reading[]): Reading[] => {
  return [...readings].sort((readingA, readingB) => readingA.time - readingB.time);
};
