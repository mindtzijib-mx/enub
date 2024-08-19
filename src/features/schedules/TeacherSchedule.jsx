import { useState } from "react";
import Row from "../../ui/Row";
import Button from "../../ui/Button";
import CreateTeacherSchedule from "./CreateTeacherSchedule";
import ShowTeacherSchedule from "./ShowTeacherSchedule";

function TeacherSchedule({
  workers,
  scheduleTeachers,
  scheduleAssignments,
  semesterId,
}) {
  const [showCreate, setShowCreate] = useState(false);
  const [showScheduleTeacher, setShowScheduleTeacher] = useState(false);
  return (
    <Row>
      <Row type="horizontal">
        <Button onClick={() => setShowCreate(!showCreate)}>
          Agregar horario de actividades del maestro
        </Button>
        <Button onClick={() => setShowScheduleTeacher(!showScheduleTeacher)}>
          Ver horarios del maestro
        </Button>
        <Button>Ver asignación horaria</Button>
      </Row>
      {showCreate && (
        <CreateTeacherSchedule workers={workers} semesterId={semesterId} />
      )}
      {showScheduleTeacher && (
        <ShowTeacherSchedule
          workers={workers}
          scheduleTeachers={scheduleTeachers}
          scheduleAssignments={scheduleAssignments}
        />
      )}
    </Row>
  );
}

export default TeacherSchedule;
