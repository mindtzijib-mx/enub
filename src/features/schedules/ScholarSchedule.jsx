import { useState } from "react";
import Button from "../../ui/Button";
import Row from "../../ui/Row";
import CreateScholarSchedule from "./CreateScholarSchedule";

function ScholarSchedule({ workers, subjects, groups, semesterId }) {
  const [showAddSchedule, setShowAddSchedule] = useState(false);

  return (
    <Row>
      <Row type="horizontal">
        <Button onClick={() => setShowAddSchedule(!showAddSchedule)}>
          Agregar horario escolar
        </Button>
        <Button>Ver horarios del grupo</Button>
      </Row>
      {showAddSchedule && (
        <CreateScholarSchedule
          workers={workers}
          subjects={subjects}
          groups={groups}
          semesterId={semesterId}
        />
      )}
    </Row>
  );
}

export default ScholarSchedule;
