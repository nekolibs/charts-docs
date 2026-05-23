import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { View } from '@neko-os/ui'
import { BarsChart } from '@neko-os/charts'

const data = [
  { label: 'Mon', value: 10 },
  { label: 'Tue', value: 25 },
  { label: 'Wed', value: 18 },
  { label: 'Thu', value: 32 },
  { label: 'Fri', value: 22 },
]

function MyChart() {
  return (
    <View padding="lg">
      <BarsChart data={data} height={200} />
    </View>
  )
}
`

export default function BasicUsageSection() {
  return (
    <View gap="md">
      <View>
        <Text h3>Basic Usage</Text>
        <Text text3>
          Import chart components from @neko-os/charts. All charts are cross-platform and work on both web and React
          Native.
        </Text>
      </View>
      <CodeBlock code={CODE} />
    </View>
  )
}
