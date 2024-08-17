import { useQuery } from "@tanstack/react-query";
import { getDegrees } from "../../services/apiDegrees";

export function useDegrees() {
  const {
    isLoading,
    data: degrees,
    error,
  } = useQuery({
    queryKey: ["degrees"],
    queryFn: getDegrees,
  });

  return { isLoading, error, degrees };
}
