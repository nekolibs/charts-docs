import { BarsChart } from '@neko-os/charts'
import { View, Divider } from '@neko-os/ui'

import SampleCodeBlock from '../../../../components/code/SampleCodeBlock'

const CODE = `
import { BarsChart } from '@neko-os/charts'

const data = [
  { x: 'Mon', y: 120 },
  { x: 'Tue', y: 200 },
  { x: 'Wed', y: 150 },
  { x: 'Thu', y: 280 },
  { x: 'Fri', y: 190 },
]

// Hard max — fixed ceiling
<BarsChart data={data} max={200} values yLabels xLabels />

// Hard min — fixed floor, zooms into high-value range
<BarsChart data={data} min={100} values yLabels xLabels />
`

const data = [
  { x: 'Mon', y: 120 },
  { x: 'Tue', y: 200 },
  { x: 'Wed', y: 150 },
  { x: 'Thu', y: 280 },
  { x: 'Fri', y: 190 },
]

const CONTENT = (
  <View gap="lg">
    <View height={300}>
      <BarsChart data={data} max={200} values yLabels xLabels yGrid xGrid />
    </View>

    <Divider line />

    <View height={300}>
      <BarsChart data={data} min={100} values yLabels xLabels yGrid xGrid />
    </View>
  </View>
)

export default function HardRangeSample() {
  return <SampleCodeBlock title="Hard Range" code={CODE} content={CONTENT} />
}
