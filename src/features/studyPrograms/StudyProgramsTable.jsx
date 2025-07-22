import Spinner from "../../ui/Spinner";
import { useStudyPrograms } from "./useStudyPrograms";
import Table from "../../ui/Table";
import StudyProgramRow from "./StudyProgramRow";

function StudyProgramsTable() {
  const { isLoading, studyPrograms } = useStudyPrograms();

  // Placeholder para acción de editar
  const handleEdit = (program) => {
    alert(`Editar plan: ${program.name}`);
  };

  if (isLoading) return <Spinner />;

  return (
    <Table columns="1fr 2fr 0.7fr">
      <Table.Header>
        <div>Año</div>
        <div>Nombre</div>
        <div></div>
      </Table.Header>
      <Table.Body
        data={studyPrograms}
        render={(program) => (
          <StudyProgramRow
            program={program}
            key={program.id}
          />
        )}
      />
    </Table>
  );
}

export default StudyProgramsTable;
