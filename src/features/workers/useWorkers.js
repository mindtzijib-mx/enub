import { useQuery } from "@tanstack/react-query";
import { getWorkers } from "../../services/apiWorkers";

export function useWorkers() {
  const {
    isLoading,
    data: workers,
    error,
  } = useQuery({
    queryKey: ["workers"],
    queryFn: getWorkers,
  });

  return { isLoading, error, workers };
}
