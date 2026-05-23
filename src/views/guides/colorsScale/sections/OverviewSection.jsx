import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../components/code/CodeBlock'

const CODE = `
import { PieChart } from '@neko-os/charts'

// String preset
<PieChart data={data} colorsScale="semaphore" />

// Custom array with theme color keys
<PieChart data={data} colorsScale={["green", "red", "yellow"]} />

// Custom array with raw hex
<PieChart data={data} colorsScale={["#FF0000", "#00FF00"]} />
`

export default function OverviewSection() {
  return (
    <View gap="md">
      <View>
        <Text h3>Overview</Text>
        <Text text3>
          The colorsScale prop controls which colors are used for chart series and data points. It accepts a preset
          string, an array of theme color keys, or an array of raw hex values.
        </Text>
      </View>
      <CodeBlock code={CODE} />
    </View>
  )
}
