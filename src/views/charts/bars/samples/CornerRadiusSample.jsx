import { BarsChart } from '@neko-os/charts'
import { View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../components/code/SampleCodeBlock'

const CODE = `
import { BarsChart } from '@neko-os/charts'

const data = [
  { x: 'Jan', y: 80 },
  { x: 'Feb', y: 95 },
  { x: 'Mar', y: 60 },
  { x: 'Apr', y: 130 },
  { x: 'May', y: 105 },
  { x: 'Jun', y: 140 },
]

<BarsChart data={data} cornerRadius={0} xLabels values />
`

const data = [
  { x: 'Jan', y: 80 },
  { x: 'Feb', y: 95 },
  { x: 'Mar', y: 60 },
  { x: 'Apr', y: 130 },
  { x: 'May', y: 105 },
  { x: 'Jun', y: 140 },
]

const CONTENT = (
  <View height={300}>
    <BarsChart data={data} cornerRadius={0} xLabels values />
  </View>
)

export default function CornerRadiusSample() {
  return <SampleCodeBlock title="Corner Radius" code={CODE} content={CONTENT} />
}
