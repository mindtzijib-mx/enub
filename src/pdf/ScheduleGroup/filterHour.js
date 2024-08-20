function filterHour(schedules, weekday, startTime) {
  const subjectHour = schedules.filter((schedule) => {
    return schedule.weekday === weekday && schedule.start_time === startTime;
  });

  if (subjectHour.length > 0) {
    const textSchedule = `${subjectHour[0].subjects.name}`;
    return textSchedule;
  }

  return "--";
}

export default filterHour;
