import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditStateRoles } from "../../services/apiStateRoles";
import { toast } from "react-hot-toast";

export function useEditStateRole() {
  const queryClient = useQueryClient();

  const { mutate: editStateRole, isLoading: isEditing } = useMutation({
    mutationFn: ({ newStateRole, id }) =>
      createEditStateRoles(newStateRole, id),
    onSuccess: () => {
      toast.success("El registro se actualizó con éxito");
      queryClient.invalidateQueries({ queryKey: ["stateRoles"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editStateRole };
}
