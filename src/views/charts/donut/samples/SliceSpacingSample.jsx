import { DonutChart } from '@neko-os/charts'
import { View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../components/code/SampleCodeBlock'

const CODE = `
import { DonutChart } from '@neko-os/charts'

const data = [
  { x: 'Q1', y: 30 },
  { x: 'Q2', y: 25 },
  { x: 'Q3', y: 28 },
  { x: 'Q4', y: 17 },
]

<DonutChart data={data} size={300} sliceSpacing={3} cornerRadius={10} />
`

const data = [
  { x: 'Q1', y: 30 },
  { x: 'Q2', y: 25 },
  { x: 'Q3', y: 28 },
  { x: 'Q4', y: 17 },
]

const CONTENT = (
  <View center>
    <DonutChart data={data} size={300} sliceSpacing={3} cornerRadius={10} />
  </View>
)

export default function SliceSpacingSample() {
  return <SampleCodeBlock title="Slice Spacing & Corner Radius" code={CODE} content={CONTENT} />
}
