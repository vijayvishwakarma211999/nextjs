import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
//import { createApolloClient, WithTenantOuterPageProps, WithApolloOuterPageProps } from '../lib/get-server-side-props';
// type CustomAppProps = AppProps<Partial<WithTenantOuterPageProps & WithApolloOuterPageProps>>;

export default function App({ Component, pageProps }: any) {
  // if (!pageProps.tenantName) throw new Error('pageProps.tenantName is required.');
  // const apolloClient = createApolloClient(pageProps.initialApolloState, pageProps.tenantName);
  return (

    <Component {...pageProps} />
  );
}