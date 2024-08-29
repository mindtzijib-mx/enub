import Table from "../../ui/Table";

function OtherRow({ utility }) {
  const { description, value } = utility;

  return (
    <>
      <Table.Row role="row">
        <p>{description}</p>
        <p>{value}</p>
        <button>Editar</button>
      </Table.Row>
    </>
  );
}

export default OtherRow;
