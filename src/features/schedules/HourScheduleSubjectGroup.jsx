import calculateSemesterGroup from "../../helpers/calculateSemesterGroup";

function HourScheduleSubjectGroup({ schedules, weekday, startTime }) {
  const subjectHour = schedules.filter((schedule) => {
    return schedule.weekday === weekday && schedule.start_time === startTime;
  });

  if (subjectHour.length > 0)
    return (
      <>
        <b>{subjectHour[0]?.subjects?.name}</b>
        <br />
        <em>
          {calculateSemesterGroup(subjectHour[0]?.groups?.year_of_admission)}° "
          {subjectHour[0].groups?.letter}"{" "}
          {subjectHour[0]?.groups?.degrees?.code}
        </em>
      </>
    );

  return <p></p>;
}

export default HourScheduleSubjectGroup;
