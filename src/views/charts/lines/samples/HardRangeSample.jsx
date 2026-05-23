import { LinesChart } from '@neko-os/charts'
import { View, Divider } from '@neko-os/ui'

import SampleCodeBlock from '../../../../components/code/SampleCodeBlock'

const CODE = `
import { LinesChart } from '@neko-os/charts'

const data = [
  { x: 'Jan', y: 80 },
  { x: 'Feb', y: 95 },
  { x: 'Mar', y: 110 },
  { x: 'Apr', y: 130 },
  { x: 'May', y: 145 },
  { x: 'Jun', y: 160 },
]

// Hard max — fixed ceiling
<LinesChart data={data} max={200} values yLabels xLabels />

// Hard min — fixed floor, zooms into range
<LinesChart data={data} min={80} values yLabels xLabels />
`

const data = [
  { x: 'Jan', y: 80 },
  { x: 'Feb', y: 95 },
  { x: 'Mar', y: 110 },
  { x: 'Apr', y: 130 },
  { x: 'May', y: 145 },
  { x: 'Jun', y: 160 },
]

const CONTENT = (
  <View gap="lg">
    <View height={300}>
      <LinesChart data={data} max={200} values yLabels xLabels yGrid xGrid />
    </View>

    <Divider line />

    <View height={300}>
      <LinesChart data={data} min={80} values yLabels xLabels yGrid xGrid />
    </View>
  </View>
)

export default function HardRangeSample() {
  return <SampleCodeBlock title="Hard Range" code={CODE} content={CONTENT} />
}
