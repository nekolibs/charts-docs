import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const REQUIRED_CODE = `
npm install @neko-os/ui dayjs ramda
`

const NATIVE_CODE = `
npm install react-native-svg
`

export default function PeerDependenciesSection() {
  return (
    <View gap="md">
      <View>
        <Text h3>Peer Dependencies</Text>
        <Text text3>
          NekoCharts requires @neko-os/ui and a few other peer dependencies. Some are platform-specific.
        </Text>
      </View>

      <View>
        <Text h6>Required (all platforms)</Text>
        <CodeBlock code={REQUIRED_CODE} language="bash" />
      </View>

      <View>
        <Text h6>React Native</Text>
        <CodeBlock code={NATIVE_CODE} language="bash" />
      </View>
    </View>
  )
}
