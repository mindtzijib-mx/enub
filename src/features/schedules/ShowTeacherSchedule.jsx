import styled from "styled-components";
import RowScholarSchedule from "./RowScholarSchedule";
import Select from "../../ui/Select";
import calculateSemesterGroup from "../../helpers/calculateSemesterGroup";
import { useState } from "react";
import RowTeacherSchedule from "./RowTeacherSchedule";
import ScheduleTeacherPDF from "../../pdf/Schedules/ScheduleTeacherPDF";
import capitalizeName from "../../helpers/capitalizeFirstLetter";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  text-align: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

function ShowTeacherSchedule({
  workers,
  scheduleTeachers,
  scheduleAssignments,
}) {
  const [filteredSchedulesTeacher, setFilteredSchedulesTeacher] = useState([]);
  const [filteredSchedulesAssignments, setFilteredSchedulesAssignments] =
    useState([]);

  function selectingWorker(workerId) {
    const scheduleTeacherFilter = scheduleTeachers.filter((schedule) => {
      return schedule.worker_id === +workerId;
    });

    const scheduleAssignmentsFilter = scheduleAssignments.filter((schedule) => {
      return schedule.worker_id === +workerId;
    });
    setFilteredSchedulesTeacher(scheduleTeacherFilter);
    setFilteredSchedulesAssignments(scheduleAssignmentsFilter);
  }

  const recordExist =
    filteredSchedulesTeacher.length > 0 ||
    filteredSchedulesAssignments.length > 0;

  return (
    <>
      <Select id="worker_id" onChange={(e) => selectingWorker(e.target.value)}>
        <option value="">Seleccione trabajador</option>
        {workers.map((worker) => (
          <option key={worker.id} value={worker.id}>
            {capitalizeName(worker.name)}
          </option>
        ))}
      </Select>
      <Table role="table">
        <TableHeader role="row">
          <div></div>
          <div>Lunes</div>
          <div>Martes</div>
          <div>Miércoles</div>
          <div>Jueves</div>
          <div>Viernes</div>
        </TableHeader>
        {recordExist && (
          <RowTeacherSchedule
            schedulesScholar={filteredSchedulesAssignments}
            scheduleTeacher={filteredSchedulesTeacher}
          />
        )}
      </Table>
      {recordExist && (
        <ScheduleTeacherPDF
          schedulesScholar={filteredSchedulesAssignments}
          scheduleTeacher={filteredSchedulesTeacher}
        />
      )}
    </>
  );
}

export default ShowTeacherSchedule;
