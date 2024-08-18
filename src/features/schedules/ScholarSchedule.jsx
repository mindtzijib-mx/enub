import { useState } from "react";
import Button from "../../ui/Button";
import Row from "../../ui/Row";
import CreateScholarSchedule from "./CreateScholarSchedule";
import ShowScholarSchedule from "./ShowScholarSchedule";

function ScholarSchedule({
  workers,
  subjects,
  groups,
  semesterId,
  scheduleAssignments,
}) {
  const [showAddSchedule, setShowAddSchedule] = useState(false);
  const [showScheduleGroup, setShowScheduleGroup] = useState(false);

  return (
    <Row>
      <Row type="horizontal">
        <Button onClick={() => setShowAddSchedule(!showAddSchedule)}>
          Agregar horario escolar
        </Button>
        <Button onClick={() => setShowScheduleGroup(!showScheduleGroup)}>
          Ver horarios del grupo
        </Button>
      </Row>
      {showAddSchedule && (
        <CreateScholarSchedule
          workers={workers}
          subjects={subjects}
          groups={groups}
          semesterId={semesterId}
        />
      )}
      {showScheduleGroup && (
        <ShowScholarSchedule
          scheduleAssignments={scheduleAssignments}
          groups={groups}
        />
      )}
    </Row>
  );
}

export default ScholarSchedule;
