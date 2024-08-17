import supabase from "./supabase";

export async function getSubjects() {
  const { data, error } = await supabase
    .from("subjects")
    .select("*, study_programs(*), degrees(*)");

  if (error) {
    console.error(error);
    throw new Error("Las asignaturas no pudieron cargarse");
  }

  return data;
}
