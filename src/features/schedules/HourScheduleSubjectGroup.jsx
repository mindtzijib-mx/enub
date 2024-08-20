import { FaEdit, FaTrash } from "react-icons/fa";
import Row from "../../ui/Row";
import calculateSemesterGroup from "../../helpers/calculateSemesterGroup";
import { useState } from "react";
import Modal from "../../ui/Modal";
import CreateScholarSchedule from "./EditScholarSchedule";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteScheduleAssignment } from "./useDeleteScheduleAssignment";

function HourScheduleSubjectGroup({ schedules, weekday, startTime }) {
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
        <b>{subjectHour[0]?.subjects?.name}</b>
        <br />
        <em>
          {calculateSemesterGroup(subjectHour[0]?.groups?.year_of_admission)}° "
          {subjectHour[0].groups?.letter}"{" "}
          {subjectHour[0]?.groups?.degrees?.code}
        </em>
        <br />
        <FaEdit onClick={() => setEditModal(!editModal)} />
        &nbsp; &nbsp; &nbsp;
        <FaTrash onClick={() => setDeleteModal(!deleteModal)} />
        {editModal && (
          <Modal onClose={() => setEditModal(false)}>
            <CreateScholarSchedule scheduleToEdit={subjectHour[0]} />
          </Modal>
        )}
        {deleteModal && (
          <Modal onClose={() => setDeleteModal(false)}>
            <ConfirmDelete
              resourceName="horario"
              disabled={isDeleting}
              onCloseModal={() => setDeleteModal(false)}
              onConfirm={() => deleteScheduleAssignment(subjectHour[0].id)}
            />
          </Modal>
        )}
      </>
    );

  return <p></p>;
}

export default HourScheduleSubjectGroup;
