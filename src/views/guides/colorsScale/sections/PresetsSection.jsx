import { PieChart } from '@neko-os/charts'
import { Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../components/code/SampleCodeBlock'

const PRESETS = ['default', 'blues', 'greens', 'reds', 'primary', 'semaphore', 'warm', 'cool', 'pastel', 'earth']

const data = [
  { x: 'A', y: 20 },
  { x: 'B', y: 18 },
  { x: 'C', y: 15 },
  { x: 'D', y: 12 },
  { x: 'E', y: 10 },
  { x: 'F', y: 8 },
  { x: 'G', y: 6 },
  { x: 'H', y: 5 },
]

function PresetChart({ name }) {
  return (
    <View gap="xs" center>
      <View style={{ width: 140, height: 140 }}>
        <PieChart data={data} colorsScale={name} />
      </View>
      <Text xs text3>
        {name}
      </Text>
    </View>
  )
}

const CODE = `
import { PieChart } from '@neko-os/charts'

<PieChart data={data} colorsScale="blues" />
<PieChart data={data} colorsScale="semaphore" />
<PieChart data={data} colorsScale="warm" />
<PieChart data={data} colorsScale="cool" />
// ... etc
`

const CONTENT = (
  <View row gap="lg" style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
    {PRESETS.map((name) => (
      <PresetChart key={name} name={name} />
    ))}
  </View>
)

export default function PresetsSection() {
  return (
    <View gap="md">
      <View>
        <Text h3>Presets</Text>
        <Text text3>
          Pass a preset name as a string. Available presets: default, blues, greens, reds, primary, semaphore, warm,
          cool, pastel, earth.
        </Text>
      </View>
      <SampleCodeBlock title="All Presets" code={CODE} content={CONTENT} fullW />
    </View>
  )
}
