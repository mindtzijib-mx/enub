import styled from "styled-components";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

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
      <TableRow role="row">
        <p>{semester}</p>
        <p>{name.toUpperCase()}</p>
        <p>{credits}</p>
        <p>{hours_per_week}</p>
        <p>{hours_per_semester}</p>
        <p>{study_programs.year}</p>
        <p>{degrees.code}</p>
        <button>Editar</button>
      </TableRow>
    </>
  );
}

export default SubjectRow;
