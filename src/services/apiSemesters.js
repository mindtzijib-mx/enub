import supabase from "./supabase";

export async function getSemesters() {
  const { data, error } = await supabase.from("semesters").select("*");

  if (error) {
    console.error(error);
    throw new Error("Los semestres no se pudieron cargar");
  }

  return data;
}

export async function createSemester(newSemester) {
  const { data, error } = await supabase
    .from("semesters")
    .insert([newSemester]);

  if (error) {
    console.error(error);
    throw new Error("Hubo un error al crear el registro");
  }

  return data;
}
