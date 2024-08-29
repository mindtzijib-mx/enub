import supabase from "./supabase";

export async function getUtilies() {
  const { data, error } = await supabase.from("utilities").select("*");

  if (error) {
    console.error(error);
    throw new Error("Los registros no pudieron cargarse");
  }

  return data;
}
