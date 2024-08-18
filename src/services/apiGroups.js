import supabase from "./supabase";

export async function getGroups() {
  const { data, error } = await supabase.from("groups").select("*, degrees(*)");

  if (error) {
    console.error(error);
    throw new Error("Los grupos no se pudieron cargar");
  }

  return data;
}
