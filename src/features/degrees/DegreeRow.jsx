import styled from "styled-components";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 0.5fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

function DegreeRow({ degree }) {
  const { code, name } = degree;

  return (
    <>
      <TableRow role="row">
        <p>{code}</p>
        <p>{name}</p>
        <button>Editar</button>
      </TableRow>
    </>
  );
}

export default DegreeRow;
