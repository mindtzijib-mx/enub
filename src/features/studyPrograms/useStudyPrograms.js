import { useQuery } from "@tanstack/react-query";
import { getStudyPrograms } from "../../services/apiStudyPrograms";

export function useStudyPrograms() {
  const {
    isLoading,
    data: studyPrograms,
    error,
  } = useQuery({
    queryKey: ["studyPrograms"],
    queryFn: getStudyPrograms,
  });

  return { isLoading, error, studyPrograms };
}
