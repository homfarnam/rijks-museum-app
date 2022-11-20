import React from 'react'
import ReactDOM from 'react-dom/client'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './App'
import './styles/tailwind.css'
import './styles/main.scss'
import 'react-lazy-load-image-component/src/effects/blur.css'

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 3000 } },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
)
