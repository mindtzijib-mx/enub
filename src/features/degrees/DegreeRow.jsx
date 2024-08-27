import Table from "../../ui/Table";

function DegreeRow({ degree }) {
  const { code, name } = degree;

  return (
    <>
      <Table.Row>
        <p>{code}</p>
        <p>{name}</p>
        <button>Editar</button>
      </Table.Row>
    </>
  );
}

export default DegreeRow;
