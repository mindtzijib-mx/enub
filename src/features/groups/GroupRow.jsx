import styled from "styled-components";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

function GroupRow({ group }) {
  const { year_of_admission, letter, degrees } = group;

  return (
    <>
      <TableRow role="row">
        <p>{year_of_admission}</p>
        <p>{letter}</p>
        <p>{degrees.code}</p>
        <button>Editar</button>
      </TableRow>
    </>
  );
}

export default GroupRow;
