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

const colors = ['#3CA1FF', '#FF6B6B']

<BarsChart data={data} colorsScale={colors} xLabels />
`

const data = [
  { x: 'Q1', Revenue: 80, Expenses: 50 },
  { x: 'Q2', Revenue: 95, Expenses: 60 },
  { x: 'Q3', Revenue: 110, Expenses: 55 },
  { x: 'Q4', Revenue: 130, Expenses: 70 },
]

const colors = ['#3CA1FF', '#FF6B6B']

const CONTENT = (
  <View height={300}>
    <BarsChart data={data} colorsScale={colors} xLabels />
  </View>
)

export default function ColorsScaleSample() {
  return <SampleCodeBlock title="Colors Scale" code={CODE} content={CONTENT} />
}
