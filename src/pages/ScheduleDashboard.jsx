import { useState } from "react";
import Button from "../ui/Button";
import Row from "../ui/Row";
import ScholarSchedule from "../features/schedules/ScholarSchedule";
import { useWorkers } from "../features/workers/useWorkers";
import Spinner from "../ui/Spinner";
import { useSubjects } from "../features/subjects/useSubjects";
import { useGroups } from "../features/groups/useGroups";
import { useParams } from "react-router-dom";

function ScheduleDashboard() {
  const { id } = useParams();
  const [showScholarSchedule, setShowScholarSchedule] = useState(false);

  const { isLoading: isLoadingWorkers, workers } = useWorkers();
  const { isLoading: isLoadingSubjects, subjects } = useSubjects();
  const { isLoading: isLoadingGroups, groups } = useGroups();

  if (isLoadingWorkers || isLoadingSubjects || isLoadingGroups)
    return <Spinner />;

  return (
    <Row>
      <Row type="horizontal">
        <Button onClick={() => setShowScholarSchedule(!showScholarSchedule)}>
          Gestionar horario escolar
        </Button>
        <Button>Gestionar horario del maestro</Button>
        <Button>Imprimir plantilla horaria</Button>
      </Row>
      <Row>
        {showScholarSchedule && (
          <ScholarSchedule
            workers={workers}
            subjects={subjects}
            groups={groups}
            semesterId={id}
          />
        )}
      </Row>
    </Row>
  );
}

export default ScheduleDashboard;
