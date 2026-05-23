import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { NekoUI } from '@neko-os/ui'

function App() {
  return (
    <NekoUI initTheme="light">
      {/* Your app content */}
    </NekoUI>
  )
}
`

export default function SetupSection() {
  return (
    <View gap="md">
      <View>
        <Text h3>Setup</Text>
        <Text text3>
          NekoCharts uses the NekoUI theme system for colors and styling. Wrap your application with the NekoUI provider
          if you haven't already.
        </Text>
      </View>
      <CodeBlock code={CODE} />
    </View>
  )
}
