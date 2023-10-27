import { QueryClient, QueryClientProvider } from "react-query";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";

import TripsGeneralView from "./views/TripsGeneralView";
import TripDetailedView from "./views/TripDetailedView";

const queryClient = new QueryClient();

export const App = () => (
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Box>
          <Routes>
            <Route path="trips" element={<TripsGeneralView />} />
            <Route path="trips/:id" element={<TripDetailedView />} />
            <Route path="*" element={<Navigate to={"/trips"} replace />} />
          </Routes>
        </Box>
      </Router>
    </QueryClientProvider>
  </ChakraProvider>
);
