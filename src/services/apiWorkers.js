import supabase from "./supabase";

export async function getWorkers() {
  const { data, error } = await supabase
    .from("workers")
    .select(
      "*, date_of_admissions(*), sustenance_plazas(*), schedule_teachers(*), schedule_assignments(*, subjects(*), groups(*, degrees(*)))"
    );

  if (error) {
    console.error(error);
    throw new Error("Los trabajadores no pudieron cargarse");
  }

  return data;
}
