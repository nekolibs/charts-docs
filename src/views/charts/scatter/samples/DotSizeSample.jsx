import { ScattersChart } from '@neko-os/charts'
import { View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../components/code/SampleCodeBlock'

const CODE = `
import { ScattersChart } from '@neko-os/charts'

const data = [
  { x: 'Mon', y: 120 },
  { x: 'Tue', y: 200 },
  { x: 'Wed', y: 150 },
  { x: 'Thu', y: 280 },
  { x: 'Fri', y: 190 },
]

<ScattersChart data={data} dotSize={6} xLabels />
`

const data = [
  { x: 'Mon', y: 120 },
  { x: 'Tue', y: 200 },
  { x: 'Wed', y: 150 },
  { x: 'Thu', y: 280 },
  { x: 'Fri', y: 190 },
]

const CONTENT = (
  <View height={300}>
    <ScattersChart data={data} dotSize={6} xLabels />
  </View>
)

export default function DotSizeSample() {
  return <SampleCodeBlock title="Dot Size" code={CODE} content={CONTENT} />
}
