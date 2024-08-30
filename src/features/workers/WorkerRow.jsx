import Table from "../../ui/Table";

function WorkerRow({ worker }) {
  const { profile_picture, name, type_worker, status } = worker;

  return (
    <>
      <Table.Row>
        <p>{profile_picture}</p>
        <p>{name}</p>
        <p>{type_worker}</p>
        <p>{status === 1 ? "Activo" : "Inactivo"}</p>
        <button>Editar</button>
      </Table.Row>
    </>
  );
}

export default WorkerRow;
