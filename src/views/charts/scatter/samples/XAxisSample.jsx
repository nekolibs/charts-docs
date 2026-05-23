import { ScattersChart } from '@neko-os/charts'
import { View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../components/code/SampleCodeBlock'

const CODE = `
import { ScattersChart } from '@neko-os/charts'

const data = [
  { x: 'Jan', y: 40 },
  { x: 'Feb', y: 80 },
  { x: 'Mar', y: 60 },
  { x: 'Apr', y: 120 },
  { x: 'May', y: 100 },
  { x: 'Jun', y: 90 },
]

<ScattersChart data={data} xLabels xGrid />
`

const data = [
  { x: 'Jan', y: 40 },
  { x: 'Feb', y: 80 },
  { x: 'Mar', y: 60 },
  { x: 'Apr', y: 120 },
  { x: 'May', y: 100 },
  { x: 'Jun', y: 90 },
]

const CONTENT = (
  <View height={300}>
    <ScattersChart data={data} xLabels xGrid />
  </View>
)

export default function XAxisSample() {
  return <SampleCodeBlock title="X Axis" code={CODE} content={CONTENT} />
}
