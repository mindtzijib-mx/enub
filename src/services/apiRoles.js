import supabase from "./supabase";

export async function getRoles() {
  const { data, error } = await supabase.from("roles").select("*, workers(*)");

  if (error) {
    console.error(error);
    throw new Error("Los roles no se pudieron cargar");
  }

  return data;
}
