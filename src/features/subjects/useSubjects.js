import { useQuery } from "@tanstack/react-query";
import { getSubjects } from "../../services/apiSubjects";

export function useSubjects() {
  const {
    isLoading,
    data: subjects,
    error,
  } = useQuery({
    queryKey: ["subjects"],
    queryFn: getSubjects,
  });

  return { isLoading, error, subjects };
}
