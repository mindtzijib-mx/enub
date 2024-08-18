import SemesterTable from "../features/semesters/SemesterTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Button from "../ui/Button";
import { useState } from "react";
import CreateSemesterForm from "../features/semesters/CreateSemesterForm";

function Semesters() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">
          Cree o seleccione un semestre para gestionar el horario
        </Heading>
      </Row>
      <Row>
        <SemesterTable />
        <Button onClick={() => setShowForm((show) => !show)}>
          Agregar semestre
        </Button>
        {showForm && <CreateSemesterForm />}
      </Row>
    </>
  );
}

export default Semesters;
