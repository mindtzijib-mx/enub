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
        <Heading as="h1">Semestres Escolares</Heading>
        <Button onClick={() => setShowForm((show) => !show)}>
          Agregar semestre
        </Button>
      </Row>
      {showForm && <CreateSemesterForm />}
      <Row>
        <SemesterTable />
      </Row>
    </>
  );
}

export default Semesters;
