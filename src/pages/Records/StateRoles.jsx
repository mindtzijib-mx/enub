import StateRoleTable from "../../features/stateRoles/StateRoleTable";
import Button from "../../ui/Button";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";

function StateRoles() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Roles Estatales</Heading>
      </Row>
      <Row>
        <StateRoleTable />
      </Row>
    </>
  );
}

export default StateRoles;
