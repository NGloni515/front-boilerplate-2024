import { Button, ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';

import theme from '@/theme';

// import { AuthProvider } from '@/libs/auth';

type Props = { children: React.ReactNode };

const queryClient = new QueryClient();

const ErrorFallback = () => {
  return (
    <div
      className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Error, reload the page: </h2>
      <Button
        className="mt-4"
        onClick={() => window.location.assign(window.location.origin)}
      >
        Reload
      </Button>
    </div>
  );
};

function AppProvider({ children }: Props) {
  return (
    <ChakraProvider theme={theme}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <QueryClientProvider client={queryClient}>
          {/* <AuthProvider> */}
          <HelmetProvider>
            <Router>{children}</Router>
          </HelmetProvider>
          {/* </AuthProvider> */}
        </QueryClientProvider>
      </ErrorBoundary>
    </ChakraProvider>
  );
}

export default AppProvider;
