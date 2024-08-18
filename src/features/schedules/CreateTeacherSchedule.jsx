import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import Select from "../../ui/Select";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useState } from "react";
import Input from "../../ui/Input";
import Textarea from "../../ui/Textarea";
import { createScheduleTeachers } from "../../services/apiScheduleTeachers";

function CreateTeacherSchedule({ workers, semesterId }) {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;
  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createScheduleTeachers,
    onSuccess: () => {
      toast.success("El registro se creó correctamente");
      queryClient.invalidateQueries({ queryKey: ["scheduleTeachers"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    data.semester_id = semesterId;
    mutate(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Dia de la semana" error={errors?.weekday?.message}>
        <Select
          id="weekday"
          disabled={isCreating}
          {...register("weekday", {
            required: "Este campo es requerido",
          })}
        >
          <option value="">Seleccione...</option>
          <option value="Lunes">Lunes</option>
          <option value="Martes">Martes</option>
          <option value="Miercoles">Miercoles</option>
          <option value="Jueves">Jueves</option>
          <option value="Viernes">Viernes</option>
        </Select>
      </FormRow>
      <FormRow label="Maestro" error={errors?.worker_id?.message}>
        <Select
          id="worker_id"
          disabled={isCreating}
          {...register("worker_id", {
            required: "Este campo es requerido",
          })}
        >
          <option value="">Seleccione...</option>
          {workers.map((worker) => (
            <option key={worker.id} value={worker.id}>
              {worker.name}
            </option>
          ))}
        </Select>
      </FormRow>
      <FormRow label="Actividad" error={errors?.activity?.message}>
        <Textarea
          id="activity"
          {...register("activity", {
            required: "Este campo es requerido",
          })}
        />
      </FormRow>
      <FormRow
        label="Hora Inicio (Agregue por módulo de 2 horas, según corresponda)"
        error={errors?.start_time?.message}
      >
        <Select
          id="start_time"
          disabled={isCreating}
          {...register("start_time", {
            required: "Este campo es requerido",
          })}
        >
          <option value="">Seleccione...</option>
          <option value="07:00:00">7:00</option>
          <option value="09:20:00">9:20</option>
          <option value="11:10:00">11:10</option>
          <option value="13:10:00">13:10</option>
        </Select>
      </FormRow>
      <FormRow
        label="Hora Fin (Agregue por módulo de 2 horas, según corresponda)"
        error={errors?.end_time?.message}
      >
        <Select
          id="end_time"
          disabled={isCreating}
          {...register("end_time", {
            required: "Este campo es requerido",
          })}
        >
          <option value="">Seleccione...</option>
          <option value="08:50:00">8:50</option>
          <option value="11:10:00">11:10</option>
          <option value="13:00:00">13:00</option>
          <option value="15:00:00">15:00</option>
        </Select>
      </FormRow>
      <FormRow>
        <Button variation="secondary" type="reset">
          Cancelar
        </Button>
        <Button>Agregar Actividad Horaria</Button>
      </FormRow>
    </Form>
  );
}

export default CreateTeacherSchedule;
