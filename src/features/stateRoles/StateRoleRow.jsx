import styled from "styled-components";
import Button from "../../ui/Button";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

function StateRoleRow({ role }) {
  console.log(role);

  return (
    <>
      <TableRow role="row">
        <p>{role.role}</p>
        <p>{role.name_worker}</p>
        <Button>Editar</Button>
      </TableRow>
    </>
  );
}

export default StateRoleRow;
