import styled from "styled-components";
import HourScheduleSubjectGroup from "./HourScheduleSubjectGroup";
import HourScheduleSubjectTeacher from "./HourScheduleTeacher";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;
  text-align: center;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const LongRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;
  text-align: center;
`;

function RowTeacherSchedule({ schedulesScholar, scheduleTeacher }) {
  console.log(schedulesScholar, scheduleTeacher);

  return (
    <>
      <TableRow role="row">
        <p>7:00 - 8:50</p>
        <p>
          <b>Homenaje / Tutoria</b>
        </p>
        <div>
          <HourScheduleSubjectGroup
            schedules={schedulesScholar}
            weekday="Martes"
            startTime="07:00:00"
          />
          <HourScheduleSubjectTeacher
            schedules={scheduleTeacher}
            weekday="Martes"
            startTime="07:00:00"
          />
        </div>
        <div>
          <HourScheduleSubjectGroup
            schedules={schedulesScholar}
            weekday="Miercoles"
            startTime="07:00:00"
          />
          <HourScheduleSubjectTeacher
            schedules={scheduleTeacher}
            weekday="Miercoles"
            startTime="07:00:00"
          />
        </div>
        <div>
          <HourScheduleSubjectGroup
            schedules={schedulesScholar}
            weekday="Jueves"
            startTime="07:00:00"
          />
          <HourScheduleSubjectTeacher
            schedules={scheduleTeacher}
            weekday="Jueves"
            startTime="07:00:00"
          />
        </div>
        <div>
          <HourScheduleSubjectGroup
            schedules={schedulesScholar}
            weekday="Viernes"
            startTime="07:00:00"
          />
          <HourScheduleSubjectTeacher
            schedules={scheduleTeacher}
            weekday="Viernes"
            startTime="07:00:00"
          />
        </div>
      </TableRow>
      <LongRow role="row">
        <p>8:50 - 9:20</p>
        <p>Recreo</p>
      </LongRow>
      <TableRow role="row">
        <p>9:20 - 11:10</p>
        <div>
          <HourScheduleSubjectGroup
            schedules={schedulesScholar}
            weekday="Lunes"
            startTime="09:20:00"
          />
          <HourScheduleSubjectTeacher
            schedules={scheduleTeacher}
            weekday="Lunes"
            startTime="09:20:00"
          />
        </div>
        <div>
          <HourScheduleSubjectGroup
            schedules={schedulesScholar}
            weekday="Martes"
            startTime="09:20:00"
          />
          <HourScheduleSubjectTeacher
            schedules={scheduleTeacher}
            weekday="Martes"
            startTime="09:20:00"
          />
        </div>
        <div>
          <HourScheduleSubjectGroup
            schedules={schedulesScholar}
            weekday="Miercoles"
            startTime="09:20:00"
          />
          <HourScheduleSubjectTeacher
            schedules={scheduleTeacher}
            weekday="Miercoles"
            startTime="09:20:00"
          />
        </div>
        <div>
          <HourScheduleSubjectGroup
            schedules={schedulesScholar}
            weekday="Jueves"
            startTime="09:20:00"
          />
          <HourScheduleSubjectTeacher
            schedules={scheduleTeacher}
            weekday="Jueves"
            startTime="09:20:00"
          />
        </div>
        <div>
          <HourScheduleSubjectGroup
            schedules={schedulesScholar}
            weekday="Viernes"
            startTime="09:20:00"
          />
          <HourScheduleSubjectTeacher
            schedules={scheduleTeacher}
            weekday="Viernes"
            startTime="09:20:00"
          />
        </div>
      </TableRow>
      <TableRow role="row">
        <p>11:10 - 13:00</p>
        <div>
          <HourScheduleSubjectGroup
            schedules={schedulesScholar}
            weekday="Lunes"
            startTime="11:10:00"
          />
          <HourScheduleSubjectTeacher
            schedules={scheduleTeacher}
            weekday="Lunes"
            startTime="11:10:00"
          />
        </div>
        <div>
          <HourScheduleSubjectGroup
            schedules={schedulesScholar}
            weekday="Martes"
            startTime="11:10:00"
          />
          <HourScheduleSubjectTeacher
            schedules={scheduleTeacher}
            weekday="Martes"
            startTime="11:10:00"
          />
        </div>
        <div>
          <HourScheduleSubjectGroup
            schedules={schedulesScholar}
            weekday="Miercoles"
            startTime="11:10:00"
          />
          <HourScheduleSubjectTeacher
            schedules={scheduleTeacher}
            weekday="Miercoles"
            startTime="11:10:00"
          />
        </div>
        <div>
          <HourScheduleSubjectGroup
            schedules={schedulesScholar}
            weekday="Jueves"
            startTime="11:10:00"
          />
          <HourScheduleSubjectTeacher
            schedules={scheduleTeacher}
            weekday="Jueves"
            startTime="11:10:00"
          />
        </div>
        <div>
          <HourScheduleSubjectGroup
            schedules={schedulesScholar}
            weekday="Viernes"
            startTime="11:10:00"
          />
          <HourScheduleSubjectTeacher
            schedules={scheduleTeacher}
            weekday="Viernes"
            startTime="11:10:00"
          />
        </div>
      </TableRow>
      <LongRow role="row">
        <p>13:00 - 13:10</p>
        <p>Recreo</p>
      </LongRow>
      <TableRow role="row">
        <p>13:10 - 15:00</p>
        <div>
          <HourScheduleSubjectGroup
            schedules={schedulesScholar}
            weekday="Lunes"
            startTime="13:10:00"
          />
          <HourScheduleSubjectTeacher
            schedules={scheduleTeacher}
            weekday="Lunes"
            startTime="13:10:00"
          />
        </div>
        <div>
          <HourScheduleSubjectGroup
            schedules={schedulesScholar}
            weekday="Martes"
            startTime="13:10:00"
          />
          <HourScheduleSubjectTeacher
            schedules={scheduleTeacher}
            weekday="Martes"
            startTime="13:10:00"
          />
        </div>
        <div>
          <HourScheduleSubjectGroup
            schedules={schedulesScholar}
            weekday="Miercoles"
            startTime="13:10:00"
          />
          <HourScheduleSubjectTeacher
            schedules={scheduleTeacher}
            weekday="Miercoles"
            startTime="13:10:00"
          />
        </div>
        <div>
          <HourScheduleSubjectGroup
            schedules={schedulesScholar}
            weekday="Jueves"
            startTime="13:10:00"
          />
          <HourScheduleSubjectTeacher
            schedules={scheduleTeacher}
            weekday="Jueves"
            startTime="13:10:00"
          />
        </div>
        <div>
          <HourScheduleSubjectGroup
            schedules={schedulesScholar}
            weekday="Viernes"
            startTime="13:10:00"
          />
          <HourScheduleSubjectTeacher
            schedules={scheduleTeacher}
            weekday="Viernes"
            startTime="13:10:00"
          />
        </div>
      </TableRow>
    </>
  );
}

export default RowTeacherSchedule;
