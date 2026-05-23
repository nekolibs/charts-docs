import { ScattersChart } from '@neko-os/charts'
import { View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../components/code/SampleCodeBlock'

const CODE = `
import { ScattersChart } from '@neko-os/charts'

const data = [
  { x: 'Jan', Sales: 80, Returns: 20 },
  { x: 'Feb', Sales: 95, Returns: 15 },
  { x: 'Mar', Sales: 110, Returns: 25 },
  { x: 'Apr', Sales: 130, Returns: 18 },
  { x: 'May', Sales: 145, Returns: 22 },
  { x: 'Jun', Sales: 160, Returns: 30 },
]

<ScattersChart data={data} legend legendPosition="right" xLabels />
`

const data = [
  { x: 'Jan', Sales: 80, Returns: 20 },
  { x: 'Feb', Sales: 95, Returns: 15 },
  { x: 'Mar', Sales: 110, Returns: 25 },
  { x: 'Apr', Sales: 130, Returns: 18 },
  { x: 'May', Sales: 145, Returns: 22 },
  { x: 'Jun', Sales: 160, Returns: 30 },
]

const CONTENT = (
  <View gap="lg">
    <View height={300}>
      <ScattersChart data={data} legend legendPosition="right" xLabels />
    </View>
    <View height={300}>
      <ScattersChart data={data} legend legendPosition="bottom" xLabels />
    </View>
  </View>
)

export default function LegendSample() {
  return <SampleCodeBlock title="Legend" code={CODE} content={CONTENT} />
}
