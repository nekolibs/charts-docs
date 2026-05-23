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

// Suggested max — baseline ceiling, expands if data exceeds
<BarsChart data={data} suggestedMax={350} values yLabels xLabels />

// Suggested min auto — auto-fits chart floor to data minimum
<BarsChart data={data} suggestedMin="auto" values yLabels xLabels />
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
      <BarsChart data={data} suggestedMax={350} values yLabels xLabels yGrid xGrid />
    </View>

    <Divider line />

    <View height={300}>
      <BarsChart data={data} suggestedMin="auto" values yLabels xLabels yGrid xGrid />
    </View>
  </View>
)

export default function SuggestedRangeSample() {
  return <SampleCodeBlock title="Suggested Range" code={CODE} content={CONTENT} />
}
