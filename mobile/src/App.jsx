import { NavigationContainer } from '@react-navigation/native'
import { NekoUI } from '@neko-os/ui'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import AppRoutes from './AppRoutes'

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <NekoUI initTheme="dark">
          <AppRoutes />
        </NekoUI>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
