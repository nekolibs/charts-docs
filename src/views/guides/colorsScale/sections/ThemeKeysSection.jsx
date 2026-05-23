import { PieChart } from '@neko-os/charts'
import { Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../components/code/SampleCodeBlock'

const CODE = `
import { PieChart } from '@neko-os/charts'

const data = [
  { x: 'Pass', y: 60 },
  { x: 'Warn', y: 25 },
  { x: 'Fail', y: 15 },
]

// Theme color keys — resolved from neko-ui theme
<PieChart
  data={data}
  colorsScale={["green", "yellow", "red"]}
  labels
/>
`

const data = [
  { x: 'Pass', y: 60 },
  { x: 'Warn', y: 25 },
  { x: 'Fail', y: 15 },
]

const CONTENT = (
  <View center style={{ height: 200 }}>
    <View style={{ width: 200, height: 200 }}>
      <PieChart data={data} colorsScale={['green', 'yellow', 'red']} labels />
    </View>
  </View>
)

export default function ThemeKeysSection() {
  return (
    <View gap="md">
      <View>
        <Text h3>Theme Color Keys</Text>
        <Text text3>
          Pass an array of theme color names. These are resolved from the active neko-ui theme, so they adapt to light
          and dark mode automatically.
        </Text>
      </View>
      <SampleCodeBlock title="Theme Keys" code={CODE} content={CONTENT} />
    </View>
  )
}
