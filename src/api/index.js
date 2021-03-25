import axios from "axios";
import { useQuery } from "react-query";

export function useRepositories(params) {
  return useQuery("repos", async () => {
    const { data } = await axios.get(
      "https://api.github.com/users/nana-boateng/repos"
    );
    return data;
  });
}

export function useSingleRepository(repo) {
  return useQuery(["repo", repo], async () => {
    const { data } = await axios.get(
      `https://api.github.com/repos/nana-boateng/${repo}`
    );
    return data;
  });
}
