import '@neko-os/ui/src/index.css'

import { BrowserRouter } from 'react-router'
import { NekoUI, Storage } from '@neko-os/ui'

import AppRoutes from './AppRoutes'

export default function App() {
  return (
    <BrowserRouter>
      <NekoUI initTheme={Storage.get('theme') || 'dark'} onChangeTheme={(key) => Storage.set('theme', key)}>
        <AppRoutes />
      </NekoUI>
    </BrowserRouter>
  )
}
