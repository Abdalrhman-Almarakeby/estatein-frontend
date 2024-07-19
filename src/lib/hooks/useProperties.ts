import { useQuery } from "@tanstack/react-query";
import { type Property } from "@/types/property";
import { axios } from "@/lib/axios";

export function useProperties(limit = 60) {
  return useQuery({
    queryKey: ["properties"],
    queryFn: async () => {
      const { data } = await axios.get<Property[]>(`/properties?limit=${limit}`);
      return data;
    },
  });
}