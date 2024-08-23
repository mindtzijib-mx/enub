import supabase from "./supabase";

export async function getScheduleTeachers() {
  const { data, error } = await supabase
    .from("schedule_teachers")
    .select("*, workers(*), semesters(*)");

  if (error) {
    console.error(error);
    throw new Error("Los horarios no se pudieron cargar");
  }

  return data;
}

export async function createScheduleTeachers(newScheduleTeachers) {
  const { data, error } = await supabase
    .from("schedule_teachers")
    .insert([newScheduleTeachers]);

  if (error) {
    console.error(error);
    throw new Error("Hubo un error al crear el registro");
  }

  return data;
}

export async function deleteScheduleTeachers(id) {
  const { data, error } = await supabase
    .from("schedule_teachers")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Hubo un error al eleminar el registro");
  }

  return data;
}
