import Layout from '@/app/components/layout/Layout'
import { firebaseConfig } from '@/app/lib/firebase'
import { store } from '@/app/redux/store'
import '@/styles/globals.scss'
import { initializeApp } from 'firebase/app'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'

initializeApp(firebaseConfig)

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </QueryClientProvider>
  )
}
