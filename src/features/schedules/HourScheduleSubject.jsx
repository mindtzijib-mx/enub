import React from "react";

function HourScheduleSubject({ schedules, weekday, startTime }) {
  const subjectHour = schedules.filter((schedule) => {
    return schedule.weekday === weekday && schedule.start_time === startTime;
  });

  console.log(subjectHour);

  if (subjectHour.length > 0)
    return (
      <>
        <b>{subjectHour[0].subjects.name}</b>
        <br />
        <em>{subjectHour[0].workers.name}</em>
      </>
    );

  return <p>--</p>;
}

export default HourScheduleSubject;
