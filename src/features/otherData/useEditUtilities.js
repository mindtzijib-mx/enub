import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditUtilies } from "../../services/apiUtilities";
import { toast } from "react-hot-toast";

export function useEditUtility() {
  const queryClient = useQueryClient();

  const { mutate: editUtility, isLoading: isEditing } = useMutation({
    mutationFn: ({ newUtility, id }) => createEditUtilies(newUtility, id),
    onSuccess: () => {
      toast.success("El registro se actualizó con éxito");
      queryClient.invalidateQueries({ queryKey: ["utilities"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editUtility };
}
