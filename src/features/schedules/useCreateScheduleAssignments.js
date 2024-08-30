import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditScheduleAssignments } from "../../services/apiScheduleAssignments";

export function useCreateScheduleAssignments() {
  const queryClient = useQueryClient();

  const { mutate: createScheduleAssignments, isLoading: isCreating } =
    useMutation({
      mutationFn: createEditScheduleAssignments,
      onSuccess: () => {
        toast.success("El registro se creó con éxito");
        queryClient.invalidateQueries({ queryKey: ["scheduleAssignments"] });
      },
      onError: (err) => toast.error(err.message),
    });

  return { isCreating, createScheduleAssignments };
}
