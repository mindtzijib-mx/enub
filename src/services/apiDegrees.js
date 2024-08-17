import supabase from "./supabase";

export async function getDegrees() {
  const { data, error } = await supabase.from("degrees").select("*");

  if (error) {
    console.error(error);
    throw new Error("Degrees could not be loaded");
  }

  return data;
}
