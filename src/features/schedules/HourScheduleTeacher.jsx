function HourScheduleSubjectTeacher({ schedules, weekday, startTime }) {
  const activitytHour = schedules.filter((schedule) => {
    return schedule.weekday === weekday && schedule.start_time === startTime;
  });

  if (activitytHour.length > 0)
    return (
      <>
        <b>{activitytHour[0].activity}</b>
      </>
    );

  return <p></p>;
}

export default HourScheduleSubjectTeacher;
