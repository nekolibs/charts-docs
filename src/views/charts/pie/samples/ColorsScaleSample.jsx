import { PieChart } from '@neko-os/charts'
import { View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../components/code/SampleCodeBlock'

const CODE = `
import { PieChart } from '@neko-os/charts'

const data = [
  { x: 'Rent', y: 40 },
  { x: 'Food', y: 25 },
  { x: 'Transport', y: 15 },
  { x: 'Entertainment', y: 12 },
  { x: 'Savings', y: 8 },
]

const colors = ['orange_op90', 'green', 'blue', 'blue_op80', '#BFDBFE']

<PieChart data={data} colorsScale={colors} size={300} />
`

const data = [
  { x: 'Rent', y: 40 },
  { x: 'Food', y: 25 },
  { x: 'Transport', y: 15 },
  { x: 'Entertainment', y: 12 },
  { x: 'Savings', y: 8 },
]

const colors = ['orange_op90', 'green', 'blue', 'blue_op80', '#BFDBFE']

const CONTENT = (
  <View center>
    <PieChart data={data} colorsScale={colors} size={300} />
  </View>
)

export default function ColorsScaleSample() {
  return <SampleCodeBlock title="Colors Scale" code={CODE} content={CONTENT} />
}
