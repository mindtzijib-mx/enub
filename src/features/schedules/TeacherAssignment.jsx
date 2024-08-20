import { useState } from "react";
import Select from "../../ui/Select";
import styled from "styled-components";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
  text-align: center;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

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
  grid-template-columns: 1fr 4fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;
  text-align: center;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

function TeacherAssignment({ workers, scheduleTeachers, scheduleAssignments }) {
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

    console.log(scheduleTeacherFilter, scheduleAssignmentsFilter);

    setFilteredSchedulesTeacher(scheduleTeacherFilter);
    setFilteredSchedulesAssignments(scheduleAssignmentsFilter);
  }

  // Extract Subjects

  const groupData = (array, key) => {
    return array.reduce((result, currentValue) => {
      // Obtén el valor de la propiedad por la que vamos a agrupar
      const groupKey = currentValue[key];

      // Si el grupo aún no existe, créalo
      if (!result[groupKey]) {
        result[groupKey] = [];
      }

      // Agrega el elemento actual al grupo correspondiente
      result[groupKey].push(currentValue);

      return result;
    }, {});
  };

  const groupedSubjects = groupData(filteredSchedulesAssignments, "subject_id");

  /*const countSubjects = filteredSchedulesAssignments.reduce((acc, item) => {
    if (acc[item.subject_id]) {
      acc[item.subject_id]++;
    } else {
      acc[item.subject_id] = 1;
    }
    return acc;
  }, {});

  const uniqueSubjects = Object.keys(countSubjects); */

  console.log(groupedSubjects);

  // Extract Teacher Schedules

  const countTeacherSchedules = filteredSchedulesTeacher.reduce((acc, item) => {
    if (acc[item.activity]) {
      acc[item.activity]++;
    } else {
      acc[item.activity] = 1;
    }
    return acc;
  }, {});

  const uniqueTeacherSchedule = Object.keys(countTeacherSchedules).map(
    (schedule) => {
      return {
        name: schedule,
        quantity: countTeacherSchedules[schedule],
      };
    }
  );

  // console.log(countTeacherSchedules, uniqueTeacherSchedule);

  return (
    <>
      <Select id="worker_id" onChange={(e) => selectingWorker(e.target.value)}>
        <option value="">Seleccione trabajador</option>
        {workers.map((worker) => (
          <option key={worker.id} value={worker.id}>
            {worker.name}
          </option>
        ))}
      </Select>
      <Table role="table">
        <TableHeader role="row">
          <div>Nombre del curso</div>
          <div>Licenciatura</div>
          <div>Semestre y Grupo</div>
          <div>Duración de la semana</div>
          <div>Horas por semestre</div>
          <div>Hrs. semanales dedicadas al curso, actividad o comisión</div>
        </TableHeader>
        {Object.keys(groupedSubjects).map((subject) => (
          <TableRow key={subject}>
            <p>{groupedSubjects[subject][0].subjects.name}</p>
            <p>{groupedSubjects[subject][0].groups.degrees.code}</p>
            <p></p>
            <p></p>
            <p></p>
            <p>1</p>
          </TableRow>
        ))}
        {uniqueTeacherSchedule.map((schedule) => (
          <TableRow key={schedule.name}>
            <p>{schedule.name}</p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p>{schedule.quantity * 2}</p>
          </TableRow>
        ))}
        <TableRow>
          <p>Tutoria</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p>1</p>
        </TableRow>
        <LongRow>
          <p>Acto cívico</p>
          <p>Lunes y fechas conmemorativas</p>
          <p>1</p>
        </LongRow>
        <LongRow>
          <p>Academia</p>
          <p>(General, licenciatura, semestre y trayecto formativo)</p>
          <p>2</p>
        </LongRow>
        <TableRow>
          <b>Total</b>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p>0 hrs</p>
        </TableRow>
      </Table>
    </>
  );
}

export default TeacherAssignment;
