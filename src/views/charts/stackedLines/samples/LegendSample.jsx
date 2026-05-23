import { StackedLinesChart } from '@neko-os/charts'
import { View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../components/code/SampleCodeBlock'

const CODE = `
import { StackedLinesChart } from '@neko-os/charts'

const data = [
  { x: 'Jan', Revenue: 80, Costs: 50, Tax: 15 },
  { x: 'Feb', Revenue: 95, Costs: 60, Tax: 18 },
  { x: 'Mar', Revenue: 110, Costs: 55, Tax: 20 },
  { x: 'Apr', Revenue: 130, Costs: 70, Tax: 22 },
  { x: 'May', Revenue: 105, Costs: 65, Tax: 19 },
  { x: 'Jun', Revenue: 140, Costs: 75, Tax: 25 },
]

<StackedLinesChart data={data} legend legendPosition="right" xLabels />
`

const data = [
  { x: 'Jan', Revenue: 80, Costs: 50, Tax: 15 },
  { x: 'Feb', Revenue: 95, Costs: 60, Tax: 18 },
  { x: 'Mar', Revenue: 110, Costs: 55, Tax: 20 },
  { x: 'Apr', Revenue: 130, Costs: 70, Tax: 22 },
  { x: 'May', Revenue: 105, Costs: 65, Tax: 19 },
  { x: 'Jun', Revenue: 140, Costs: 75, Tax: 25 },
]

const CONTENT = (
  <View gap="lg">
    <View height={300}>
      <StackedLinesChart data={data} legend legendPosition="right" xLabels />
    </View>
    <View height={300}>
      <StackedLinesChart data={data} legend legendPosition="bottom" xLabels />
    </View>
  </View>
)

export default function LegendSample() {
  return <SampleCodeBlock title="Legend" code={CODE} content={CONTENT} />
}
