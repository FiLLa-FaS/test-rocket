import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const usePosts = () => {
  const { data, error } = useSWR(
    `https://jsonplaceholder.typicode.com/posts`,
    fetcher
  );
  return {
    posts: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default usePosts;
