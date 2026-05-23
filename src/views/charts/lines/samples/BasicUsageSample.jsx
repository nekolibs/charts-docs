import { LinesChart } from '@neko-os/charts'
import { View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../components/code/SampleCodeBlock'

const CODE = `
import { LinesChart } from '@neko-os/charts'

const data = [
  { x: 'Mon', y: 120 },
  { x: 'Tue', y: 200 },
  { x: 'Wed', y: 150 },
  { x: 'Thu', y: 280 },
  { x: 'Fri', y: 190 },
]

<LinesChart data={data} />
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
    <LinesChart data={data} />
  </View>
)

export default function BasicUsageSample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} />
}
