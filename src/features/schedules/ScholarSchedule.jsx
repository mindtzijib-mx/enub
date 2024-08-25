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
      <Modal>
        <Modal.Open opens="scholar-schedule-form">
          <Button variation="secondary">Agregar horario escolar</Button>
        </Modal.Open>
        <Modal.Window name="scholar-schedule-form">
          <CreateScholarSchedule
            workers={workers}
            subjects={subjects}
            groups={groups}
            semesterId={semesterId}
            onCloseModal={() => setShowAddSchedule(false)}
          />
        </Modal.Window>
      </Modal>
      <Button
        variation="secondary"
        onClick={() => setShowScheduleGroup((show) => !show)}
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
