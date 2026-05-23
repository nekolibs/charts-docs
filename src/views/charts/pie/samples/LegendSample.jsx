import { View } from '@neko-os/ui'
import { PieChart } from '@neko-os/charts'

import SampleCodeBlock from '../../../../components/code/SampleCodeBlock'

const CODE = `
import { PieChart } from '@neko-os/charts'

const data = [
  { x: 'Desktop', y: 55 },
  { x: 'Mobile', y: 35 },
  { x: 'Tablet', y: 10 },
]

<PieChart data={data} size={300} legend legendPosition="right" />
`

const data = [
  { x: 'Desktop', y: 55 },
  { x: 'Mobile', y: 35 },
  { x: 'Tablet', y: 10 },
]

const CONTENT = (
  <View gap="lg" center>
    <PieChart data={data} size={300} legend legendPosition="right" />
    <PieChart data={data} size={300} legend legendPosition="bottom" />
  </View>
)

export default function LegendSample() {
  return <SampleCodeBlock title="Legend" code={CODE} content={CONTENT} />
}
