import Input from "../../ui/Input";
import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import { useQueryClient } from "@tanstack/react-query";

function CreateEditStateRoleForm({ stateRoleToEdit = {} }) {
  const { id: editId, ...editValues } = stateRoleToEdit;
  const isEditSession = Boolean(editId);

  const queryClient = useQueryClient();
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const { errors } = formState;
  const { mutate, isLoading: isCreating } = useMutation({});

  return <div>CreateEditStateRoleForm</div>;
}

export default CreateEditStateRoleForm;
