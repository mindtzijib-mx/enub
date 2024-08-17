import styled from "styled-components";
import DegreeRow from "./DegreeRow";
import Spinner from "../../ui/Spinner";
import { useDegrees } from "./useDegrees";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 3fr 0.5fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

function DegreeTable() {
  const { isLoading, degrees } = useDegrees();

  if (isLoading) return <Spinner />;

  return (
    <Table role="table">
      <TableHeader role="row">
        <div>Código</div>
        <div>Nombre</div>
        <div></div>
      </TableHeader>
      {degrees.map((degree) => (
        <DegreeRow degree={degree} key={degree.id} />
      ))}
    </Table>
  );
}

export default DegreeTable;
