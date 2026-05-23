import { PieChart } from '@neko-os/charts'
import { View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../components/code/SampleCodeBlock'

const CODE = `
import { PieChart } from '@neko-os/charts'

const data = [
  { x: 'Q1', y: 30 },
  { x: 'Q2', y: 25 },
  { x: 'Q3', y: 28 },
  { x: 'Q4', y: 17 },
]

<PieChart data={data} size={300} sliceSpacing={3} cornerRadius={10} />
`

const data = [
  { x: 'Q1', y: 30 },
  { x: 'Q2', y: 25 },
  { x: 'Q3', y: 28 },
  { x: 'Q4', y: 17 },
]

const CONTENT = (
  <View center>
    <PieChart data={data} size={300} sliceSpacing={5} cornerRadius={5} />
  </View>
)

export default function SliceSpacingSample() {
  return <SampleCodeBlock title="Slice Spacing" code={CODE} content={CONTENT} />
}
