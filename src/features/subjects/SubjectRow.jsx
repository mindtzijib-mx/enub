import Table from "../../ui/Table";

function SubjectRow({ subject }) {
  const {
    semester,
    name,
    credits,
    hours_per_week,
    hours_per_semester,
    degrees,
    study_programs,
  } = subject;

  return (
    <>
      <Table.Row>
        <p>{semester}</p>
        <p>{name.toUpperCase()}</p>
        <p>{credits}</p>
        <p>{hours_per_week}</p>
        <p>{hours_per_semester}</p>
        <p>{study_programs.year}</p>
        <p>{degrees.code}</p>
        <button>Editar</button>
      </Table.Row>
    </>
  );
}

export default SubjectRow;
