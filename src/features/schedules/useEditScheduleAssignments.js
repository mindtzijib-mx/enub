import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditScheduleAssignments } from "../../services/apiScheduleAssignments";
import { toast } from "react-hot-toast";

export function useEditScheduleAssignment() {
  const queryClient = useQueryClient();

  const { mutate: editScheduleAssignment, isLoading: isEditing } = useMutation({
    mutationFn: ({ newScheduleAssignment, id }) =>
      createEditScheduleAssignments(newScheduleAssignment, id),
    onSuccess: () => {
      toast.success("El registro se actualizó con éxito");
      queryClient.invalidateQueries({ queryKey: ["scheduleAssignments"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editScheduleAssignment };
}
