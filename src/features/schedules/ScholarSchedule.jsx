import { useState } from "react";
import Button from "../../ui/Button";
import Row from "../../ui/Row";
import CreateScholarSchedule from "./CreateScholarSchedule";
import ShowScholarSchedule from "./ShowScholarSchedule";
import Modal from "../../ui/Modal";

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
      <Button
        variation="secondary"
        onClick={() => setShowAddSchedule(!showAddSchedule)}
      >
        Agregar horario escolar
      </Button>
      {showAddSchedule && (
        <Modal onClose={() => setShowAddSchedule((show) => !show)}>
          <CreateScholarSchedule
            workers={workers}
            subjects={subjects}
            groups={groups}
            semesterId={semesterId}
            onCloseModal={() => setShowAddSchedule(false)}
          />
        </Modal>
      )}
      <Button
        variation="secondary"
        onClick={() => setShowScheduleGroup(!showScheduleGroup)}
      >
        Ver horarios del grupo
      </Button>
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
