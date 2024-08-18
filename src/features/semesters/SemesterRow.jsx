import styled from "styled-components";
import Button from "../../ui/Button";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 0.5fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

function SemesterRow({ semester }) {
  const { semester: semesterRecord, school_year } = semester;
  return (
    <>
      <TableRow role="row">
        <p>{semesterRecord}</p>
        <p>{school_year}</p>
        <Button>Administrar</Button>
      </TableRow>
    </>
  );
}

export default SemesterRow;
