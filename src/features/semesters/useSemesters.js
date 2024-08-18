import { useQuery } from "@tanstack/react-query";
import { getSemesters } from "../../services/apiSemesters";

export function useSemesters() {
  const {
    isLoading,
    data: semesters,
    error,
  } = useQuery({
    queryKey: ["semesters"],
    queryFn: getSemesters,
  });

  return { isLoading, error, semesters };
}
