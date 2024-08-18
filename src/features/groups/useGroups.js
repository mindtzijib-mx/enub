import { useQuery } from "@tanstack/react-query";
import { getGroups } from "../../services/apiGroups";

export function useGroups() {
  const {
    isLoading,
    data: groups,
    error,
  } = useQuery({
    queryKey: ["groups"],
    queryFn: getGroups,
  });

  return { isLoading, error, groups };
}
