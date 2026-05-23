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

// Suggested max — baseline ceiling, expands if data exceeds
<LinesChart data={data} suggestedMax={250} values yLabels xLabels />

// Suggested min auto — auto-fits chart floor to data minimum
<LinesChart data={data} suggestedMin="auto" values yLabels xLabels />
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
      <LinesChart data={data} suggestedMax={250} values yLabels xLabels yGrid xGrid />
    </View>

    <Divider line />

    <View height={300}>
      <LinesChart data={data} suggestedMin="auto" values yLabels xLabels yGrid xGrid />
    </View>
  </View>
)

export default function SuggestedRangeSample() {
  return <SampleCodeBlock title="Suggested Range" code={CODE} content={CONTENT} />
}
