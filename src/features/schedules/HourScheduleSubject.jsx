import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteScheduleAssignment } from "./useDeleteScheduleAssignment";
import capitalizeName from "../../helpers/capitalizeFirstLetter";
import CreateEditScholarSchedule from "./CreateEditScholarSchedule";

function HourScheduleSubject({ schedules, weekday, startTime }) {
  const { isDeleting, deleteScheduleAssignment } =
    useDeleteScheduleAssignment();
  const subjectHour = schedules.filter((schedule) => {
    return schedule.weekday === weekday && schedule.start_time === startTime;
  });

  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  if (subjectHour.length > 0)
    return (
      <>
        <b>{subjectHour[0].subjects.name.toUpperCase()}</b>
        <br />
        <em>{capitalizeName(subjectHour[0].workers.name)}</em>
        <br />
        <Modal>
          <Modal.Open opens="scholar-schedule-edit-form">
            <FaEdit />
          </Modal.Open>
          <Modal.Window name="scholar-schedule-edit-form">
            <CreateEditScholarSchedule
              scheduleToEdit={subjectHour[0]}
              onCloseModal={() => setEditModal(false)}
            />
          </Modal.Window>
        </Modal>
        &nbsp; &nbsp; &nbsp;
        <Modal>
          <Modal.Open opens="scholar-schedule-delete-form">
            <FaTrash />
          </Modal.Open>
          <Modal.Window name="scholar-schedule-delete-form">
            <ConfirmDelete
              resourceName="horario"
              disabled={isDeleting}
              onCloseModal={() => setDeleteModal(false)}
              onConfirm={() => deleteScheduleAssignment(subjectHour[0].id)}
            />
          </Modal.Window>
        </Modal>
      </>
    );

  return <p>--</p>;
}

export default HourScheduleSubject;
