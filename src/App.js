import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { root } from "./router/root";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClinet = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClinet}>
      <RouterProvider router={root} />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}

export default App;
