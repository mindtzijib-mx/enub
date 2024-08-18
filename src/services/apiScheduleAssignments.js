import supabase from "./supabase";

export async function getScheduleAssignments() {
  const { data, error } = await supabase
    .from("schedule_assignments")
    .select("*");

  if (error) {
    console.error(error);
    throw new Error("Los horarios no se pudieron cargar");
  }

  return data;
}

export async function createScheduleAssignments(newScheduleAssignment) {
  const { data, error } = await supabase
    .from("schedule_assignments")
    .insert([newScheduleAssignment]);

  if (error) {
    console.error(error);
    throw new Error("Hubo un error al crear el registro");
  }

  return data;
}
