import Table from "../../ui/Table";

function GroupRow({ group }) {
  const { year_of_admission, letter, degrees } = group;

  return (
    <>
      <Table.Row role="row">
        <p>{year_of_admission}</p>
        <p>{letter}</p>
        <p>{degrees.code}</p>
        <button>Editar</button>
      </Table.Row>
    </>
  );
}

export default GroupRow;
