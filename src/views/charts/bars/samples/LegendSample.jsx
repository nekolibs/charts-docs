import { BarsChart } from '@neko-os/charts'
import { View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../components/code/SampleCodeBlock'

const CODE = `
import { BarsChart } from '@neko-os/charts'

const data = [
  { x: 'Q1', Revenue: 80, Expenses: 50 },
  { x: 'Q2', Revenue: 95, Expenses: 60 },
  { x: 'Q3', Revenue: 110, Expenses: 55 },
  { x: 'Q4', Revenue: 130, Expenses: 70 },
]

<BarsChart data={data} legend legendPosition="right" xLabels />
`

const data = [
  { x: 'Q1', Revenue: 80, Expenses: 50 },
  { x: 'Q2', Revenue: 95, Expenses: 60 },
  { x: 'Q3', Revenue: 110, Expenses: 55 },
  { x: 'Q4', Revenue: 130, Expenses: 70 },
]

const CONTENT = (
  <View gap="lg">
    <View height={300}>
      <BarsChart data={data} legend legendPosition="right" xLabels />
    </View>
    <View height={300}>
      <BarsChart data={data} legend legendPosition="bottom" xLabels />
    </View>
  </View>
)

export default function LegendSample() {
  return <SampleCodeBlock title="Legend" code={CODE} content={CONTENT} />
}
