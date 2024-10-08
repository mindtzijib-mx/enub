import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditRoles } from "../../services/apiRoles";
import { toast } from "react-hot-toast";

export function useEditRole() {
  const queryClient = useQueryClient();

  const { mutate: editRole, isLoading: isEditing } = useMutation({
    mutationFn: ({ newRole, id }) => createEditRoles(newRole, id),
    onSuccess: () => {
      toast.success("El registro se actualizó con éxito");
      queryClient.invalidateQueries({ queryKey: ["roles"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editRole };
}
