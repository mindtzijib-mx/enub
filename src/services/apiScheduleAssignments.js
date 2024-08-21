import supabase from "./supabase";

export async function getScheduleAssignments() {
  const { data, error } = await supabase
    .from("schedule_assignments")
    .select("*, workers(*), subjects(*), groups(*, degrees(*)), semesters(*)");

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

export async function deleteScheduleAssignment(id) {
  const { data, error } = await supabase
    .from("schedule_assignments")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Hubo un error al eleminar el registro");
  }

  return data;
}
