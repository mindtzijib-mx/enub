import supabase from "./supabase";

export async function getStateRoles() {
  const { data, error } = await supabase.from("state_roles").select("*");

  if (error) {
    console.error(error);
    throw new Error("Los roles estatales no se pudieron cargar");
  }

  return data;
}
