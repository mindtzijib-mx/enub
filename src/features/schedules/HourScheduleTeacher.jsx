import { FaTrash } from "react-icons/fa";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteScheduleTeacher } from "./useDeleteScheduleTeacher";
import { useState } from "react";

function HourScheduleSubjectTeacher({ schedules, weekday, startTime }) {
  const [deleteModal, setDeleteModal] = useState(false);
  const { isDeleting, deleteScheduleTeachers } = useDeleteScheduleTeacher();
  const activitiesHour = schedules.filter((schedule) => {
    return schedule.weekday === weekday && schedule.start_time === startTime;
  });

  if (activitiesHour.length > 0)
    return (
      <>
        {activitiesHour.map((activity) => (
          <>
            <b>{activity.activity}</b>
            <br />
            <Modal>
              <Modal.Open opens="activity-schedule-delete-form">
                <FaTrash />
              </Modal.Open>
              <Modal.Window name="activity-schedule-delete-form">
                <ConfirmDelete
                  resourceName="actividad"
                  disabled={isDeleting}
                  onCloseModal={() => setDeleteModal(false)}
                  onConfirm={() => deleteScheduleTeachers(activity.id)}
                />
              </Modal.Window>
            </Modal>
          </>
        ))}
      </>
    );

  return <p></p>;
}

export default HourScheduleSubjectTeacher;

{
  /* <b>{activitytHour[0].activity}</b>
        <br />
        <FaTrash onClick={() => setDeleteModal(!deleteModal)} />
        deleteModal && (
          <Modal onClose={() => setDeleteModal(false)}>
            <ConfirmDelete
              resourceName="actividad"
              disabled={isDeleting}
              onCloseModal={() => setDeleteModal(false)}
              onConfirm={() => deleteScheduleTeachers(activitytHour[0].id)}
            />
          </Modal>
        ) */
}
