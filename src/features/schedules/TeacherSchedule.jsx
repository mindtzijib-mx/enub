import { useState } from "react";
import Row from "../../ui/Row";
import Button from "../../ui/Button";
import CreateTeacherSchedule from "./CreateTeacherSchedule";

function TeacherSchedule({ workers, semesterId }) {
  const [showCreate, setShowCreate] = useState(false);
  return (
    <Row>
      <Row type="horizontal">
        <Button onClick={() => setShowCreate(!showCreate)}>
          Agregar horario de actividades del maestro
        </Button>
        <Button>Ver horarios del maestro</Button>
        <Button>Ver asignación horaria</Button>
      </Row>
      {showCreate && (
        <CreateTeacherSchedule workers={workers} semesterId={semesterId} />
      )}
    </Row>
  );
}

export default TeacherSchedule;
