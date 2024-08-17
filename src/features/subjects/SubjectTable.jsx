import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import SubjectRow from "./SubjectRow";
import { useSubjects } from "./useSubjects";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
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

function SubjectTable() {
  const { isLoading, subjects } = useSubjects();

  if (isLoading) return <Spinner />;

  return (
    <Table role="table">
      <TableHeader role="row">
        <div>Semestre</div>
        <div>Nombre</div>
        <div>Créditos</div>
        <div>Horas por semana</div>
        <div>Horas por semestre</div>
        <div>Programa de estudio</div>
        <div>Licenciatura</div>
        <div></div>
      </TableHeader>
      {subjects.map((subject) => (
        <SubjectRow subject={subject} key={subject.id} />
      ))}
    </Table>
  );
}

export default SubjectTable;
