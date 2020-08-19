import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useUsers = () => {
  const { data, error } = useSWR(
    `https://jsonplaceholder.typicode.com/users`,
    fetcher
  );
  return {
    users: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useUsers;
