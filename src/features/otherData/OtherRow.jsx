import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import Table from "../../ui/Table";
import CreateEditOtherForm from "./CreateEditOtherForm";

function OtherRow({ utility }) {
  const { description, value } = utility;
  const [showEditForm, setShowEditForm] = useState(false);

  return (
    <>
      <Table.Row role="row">
        <p>{description}</p>
        <p>{value}</p>
        <Modal>
          <Modal.Open opens="scholar-schedule-form">
            <Button variation="secondary">Editar</Button>
          </Modal.Open>
          <Modal.Window name="scholar-schedule-form">
            <CreateEditOtherForm
              otherToEdit={utility}
              onCloseModal={() => showEditForm(false)}
            />
          </Modal.Window>
        </Modal>
      </Table.Row>
    </>
  );
}

export default OtherRow;
