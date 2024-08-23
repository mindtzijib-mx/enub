import { FaTrash } from "react-icons/fa";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteScheduleTeacher } from "./useDeleteScheduleTeacher";
import { useState } from "react";

function HourScheduleSubjectTeacher({ schedules, weekday, startTime }) {
  const [deleteModal, setDeleteModal] = useState(false);
  const { isDeleting, deleteScheduleTeachers } = useDeleteScheduleTeacher();
  const activitytHour = schedules.filter((schedule) => {
    return schedule.weekday === weekday && schedule.start_time === startTime;
  });

  if (activitytHour.length > 0)
    return (
      <>
        <b>{activitytHour[0].activity}</b>
        <br />
        <FaTrash onClick={() => setDeleteModal(!deleteModal)} />
        {deleteModal && (
          <Modal onClose={() => setDeleteModal(false)}>
            <ConfirmDelete
              resourceName="actividad"
              disabled={isDeleting}
              onCloseModal={() => setDeleteModal(false)}
              onConfirm={() => deleteScheduleTeachers(activitytHour[0].id)}
            />
          </Modal>
        )}
      </>
    );

  return <p></p>;
}

export default HourScheduleSubjectTeacher;
