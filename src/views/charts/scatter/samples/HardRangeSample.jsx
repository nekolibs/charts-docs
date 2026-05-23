import { ScattersChart } from '@neko-os/charts'
import { View, Divider } from '@neko-os/ui'

import SampleCodeBlock from '../../../../components/code/SampleCodeBlock'

const CODE = `
import { ScattersChart } from '@neko-os/charts'

const data = [
  { x: 'Jan', y: 45 },
  { x: 'Feb', y: 62 },
  { x: 'Mar', y: 38 },
  { x: 'Apr', y: 71 },
  { x: 'May', y: 55 },
  { x: 'Jun', y: 83 },
]

// Hard max — fixed ceiling
<ScattersChart data={data} max={70} values yLabels xLabels />

// Hard min — fixed floor, zooms into range
<ScattersChart data={data} min={30} values yLabels xLabels />
`

const data = [
  { x: 'Jan', y: 45 },
  { x: 'Feb', y: 62 },
  { x: 'Mar', y: 38 },
  { x: 'Apr', y: 71 },
  { x: 'May', y: 55 },
  { x: 'Jun', y: 83 },
]

const CONTENT = (
  <View gap="lg">
    <View height={300}>
      <ScattersChart data={data} max={70} values yLabels xLabels yGrid xGrid />
    </View>

    <Divider line />

    <View height={300}>
      <ScattersChart data={data} min={30} values yLabels xLabels yGrid xGrid />
    </View>
  </View>
)

export default function HardRangeSample() {
  return <SampleCodeBlock title="Hard Range" code={CODE} content={CONTENT} />
}
