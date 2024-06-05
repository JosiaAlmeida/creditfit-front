export const useApi = (url, options) => {
  const {
    public: { api },
  } = useRuntimeConfig();
  return useFetch(`${api}/${url}`, options);
};
