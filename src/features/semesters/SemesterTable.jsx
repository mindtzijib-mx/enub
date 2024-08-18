import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import SemesterRow from "./SemesterRow";
import { useSemesters } from "./useSemesters";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 0.5fr;
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

function SemesterTable() {
  const { isLoading, semesters } = useSemesters();

  if (isLoading) return <Spinner />;

  console.log(semesters);

  return (
    <Table role="table">
      <TableHeader role="row">
        <div>Semestre</div>
        <div>Ciclo</div>
        <div></div>
      </TableHeader>
      {semesters.map((semester) => (
        <SemesterRow semester={semester} key={semester.id} />
      ))}
    </Table>
  );
}

export default SemesterTable;
