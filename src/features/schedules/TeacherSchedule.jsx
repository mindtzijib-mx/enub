import { useState } from "react";
import Row from "../../ui/Row";
import Button from "../../ui/Button";
import CreateTeacherSchedule from "./CreateTeacherSchedule";
import ShowTeacherSchedule from "./ShowTeacherSchedule";
import TeacherAssignment from "./TeacherAssignment";

function TeacherSchedule({
  workers,
  scheduleTeachers,
  scheduleAssignments,
  semesterId,
}) {
  const [showCreate, setShowCreate] = useState(false);
  const [showScheduleTeacher, setShowScheduleTeacher] = useState(false);
  const [showAssignmentTeacher, setShowAssignmentTeacher] = useState(false);

  return (
    <Row>
      <Row>
        <Button
          variation="secondary"
          onClick={() => setShowCreate(!showCreate)}
        >
          Agregar horario de actividades del maestro
        </Button>
        {showCreate && (
          <CreateTeacherSchedule workers={workers} semesterId={semesterId} />
        )}
        <Button
          variation="secondary"
          onClick={() => setShowScheduleTeacher(!showScheduleTeacher)}
        >
          Ver horarios del maestro
        </Button>
        {showScheduleTeacher && (
          <ShowTeacherSchedule
            workers={workers}
            scheduleTeachers={scheduleTeachers}
            scheduleAssignments={scheduleAssignments}
          />
        )}
        <Button
          variation="secondary"
          onClick={() => setShowAssignmentTeacher(!showAssignmentTeacher)}
        >
          Ver asignación horaria
        </Button>
        {showAssignmentTeacher && (
          <TeacherAssignment
            workers={workers}
            scheduleTeachers={scheduleTeachers}
            scheduleAssignments={scheduleAssignments}
          />
        )}
      </Row>
    </Row>
  );
}

export default TeacherSchedule;
