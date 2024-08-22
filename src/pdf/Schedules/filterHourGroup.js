import calculateSemesterGroup from "../../helpers/calculateSemesterGroup";

function filterHourGroup(schedules, weekday, startTime) {
  const subjectHour = schedules.filter((schedule) => {
    return schedule.weekday === weekday && schedule.start_time === startTime;
  });

  if (subjectHour.length > 0) {
    const textSchedule = `${subjectHour[0].subjects.name}
  
  ${calculateSemesterGroup(subjectHour[0].groups.year_of_admission)}° "${
      subjectHour[0].groups.letter
    }" - ${subjectHour[0].groups.degrees.code}`;
    return textSchedule;
  }

  return ``;
}

export default filterHourGroup;
