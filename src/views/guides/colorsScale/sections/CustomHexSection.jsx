import { BarsChart } from '@neko-os/charts'
import { Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../components/code/SampleCodeBlock'

const CODE = `
import { BarsChart } from '@neko-os/charts'

const data = [
  { x: 'Q1', Sales: 80, Returns: 20 },
  { x: 'Q2', Sales: 95, Returns: 30 },
  { x: 'Q3', Sales: 110, Returns: 25 },
  { x: 'Q4', Sales: 130, Returns: 35 },
]

// Raw hex values
<BarsChart
  data={data}
  colorsScale={["#3CA1FF", "#FF6B6B"]}
  xLabels
/>
`

const data = [
  { x: 'Q1', Sales: 80, Returns: 20 },
  { x: 'Q2', Sales: 95, Returns: 30 },
  { x: 'Q3', Sales: 110, Returns: 25 },
  { x: 'Q4', Sales: 130, Returns: 35 },
]

const CONTENT = (
  <View height={250}>
    <BarsChart data={data} colorsScale={['#3CA1FF', '#FF6B6B']} xLabels />
  </View>
)

export default function CustomHexSection() {
  return (
    <View gap="md">
      <View>
        <Text h3>Custom Hex Colors</Text>
        <Text text3>
          Pass an array of raw hex values for full control. These are used as-is and do not adapt to theme changes.
        </Text>
      </View>
      <SampleCodeBlock title="Hex Colors" code={CODE} content={CONTENT} />
    </View>
  )
}
