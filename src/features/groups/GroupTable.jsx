import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import { useGroups } from "./useGroups";
import GroupRow from "./GroupRow";
import calculateSemesterGroup from "../../helpers/calculateSemesterGroup";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
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

function GroupTable() {
  const { isLoading, groups } = useGroups();

  if (isLoading) return <Spinner />;

  const currentGroups = groups.filter((group) => {
    // if the group is below eight semester
    return calculateSemesterGroup(group.year_of_admission) <= 8;
  });

  return (
    <Table role="table">
      <TableHeader role="row">
        <div>Año de admisión</div>
        <div>Letra (Grupo)</div>
        <div>Carrera</div>
        <div></div>
      </TableHeader>
      {currentGroups.map((group) => (
        <GroupRow group={group} key={group.id} />
      ))}
    </Table>
  );
}

export default GroupTable;
