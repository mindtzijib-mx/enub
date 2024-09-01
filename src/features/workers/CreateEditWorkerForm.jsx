import Input from "../../ui/Input";
import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import { useEditWorker } from "./useEditWorker";
import Select from "../../ui/Select";
import Textarea from "../../ui/Textarea";

function CreateEditWorkerForm({ workerToEdit = {}, onCloseModal }) {
  // console.log(workerToEdit);

  const { id: editId, ...editValues } = workerToEdit;
  const isEditSession = Boolean(editId);
  const { isEditing, editWorker } = useEditWorker();

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);
    if (isEditSession) {
      delete data.date_of_admissions;
      delete data.schedule_assignments;
      delete data.schedule_teachers;
      delete data.sustenance_plazas;

      editWorker(
        { newWorker: { ...data }, id: editId },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );

      console.log(data);
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Nombre" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isEditing}
          {...register("name", {
            required: "Este campo es requerido",
          })}
        />
      </FormRow>
      <FormRow label="Calle" error={errors?.street?.message}>
        <Input
          type="text"
          id="street"
          disabled={isEditing}
          {...register("street", {
            required: "Este campo es requerido",
          })}
        />
      </FormRow>
      <FormRow label="Colonia" error={errors?.neighborhood?.message}>
        <Input
          type="text"
          id="neighborhood"
          disabled={isEditing}
          {...register("neighborhood", {
            required: "Este campo es requerido",
          })}
        />
      </FormRow>
      <FormRow label="Código Postal" error={errors?.post_code?.message}>
        <Input
          type="text"
          id="post_code"
          disabled={isEditing}
          {...register("post_code", {
            required: "Este campo es requerido",
          })}
        />
      </FormRow>
      <FormRow label="Ciudad" error={errors?.city?.message}>
        <Input
          type="text"
          id="city"
          disabled={isEditing}
          {...register("city", {
            required: "Este campo es requerido",
          })}
        />
      </FormRow>
      <FormRow label="Estado" error={errors?.state?.message}>
        <Input
          type="text"
          id="state"
          disabled={isEditing}
          {...register("state", {
            required: "Este campo es requerido",
          })}
        />
      </FormRow>
      <FormRow label="Télefono" error={errors?.phone?.message}>
        <Input
          type="text"
          id="phone"
          disabled={isEditing}
          {...register("phone", {
            required: "Este campo es requerido",
          })}
        />
      </FormRow>
      <FormRow label="Correo Electrónico" error={errors?.email?.message}>
        <Input
          type="text"
          id="email"
          disabled={isEditing}
          {...register("email")}
        />
      </FormRow>
      <FormRow label="RFC" error={errors?.RFC?.message}>
        <Input
          type="text"
          id="RFC"
          disabled={isEditing}
          {...register("RFC", {
            required: "Este campo es requerido",
          })}
        />
      </FormRow>
      <FormRow label="Especialidad" error={errors?.specialty?.message}>
        <Input
          type="text"
          id="specialty"
          disabled={isEditing}
          {...register("specialty", {
            required: "Este campo es requerido",
          })}
        />
      </FormRow>
      <FormRow label="Tipo de Trabajador" error={errors?.type_worker?.message}>
        <Select
          id="type_worker"
          disabled={isEditing}
          {...register("type_worker", {
            required: "Este campo es requerido",
          })}
        >
          <option value="">Seleccione...</option>
          <option value="Maestro">Maestro</option>
          <option value="Administrativo">Administrativo y de Apoyo</option>
          <option value="Contratacion">Contratación</option>
        </Select>
      </FormRow>
      <FormRow
        label="Función que desempeña"
        error={errors?.function_performed?.message}
      >
        <Textarea
          id="function_performed"
          disabled={isEditing}
          {...register("function_performed")}
        />
      </FormRow>
      <FormRow label="Observaciones" error={errors?.observations?.message}>
        <Textarea
          id="observations"
          disabled={isEditing}
          {...register("observations")}
        />
      </FormRow>
      <FormRow label="Estatus" error={errors?.status?.message}>
        <Select id="status" disabled={isEditing} {...register("status")}>
          <option value="">Seleccione...</option>
          <option value="1">Activo</option>
          <option value="0">Inactivo</option>
        </Select>
      </FormRow>
      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancelar
        </Button>
        <Button>
          {isEditSession ? "Actualizar trabajador" : "Añadir Trabajador"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateEditWorkerForm;
