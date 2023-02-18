import { QueryClient, QueryClientProvider } from "react-query";

export const getQueryComponent = (component: JSX.Element): JSX.Element => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{component} </QueryClientProvider>
  );
};
