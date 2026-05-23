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

// Suggested max — baseline ceiling, expands if data exceeds
<ScattersChart data={data} suggestedMax={100} values yLabels xLabels />

// Suggested min auto — auto-fits chart floor to data minimum
<ScattersChart data={data} suggestedMin="auto" values yLabels xLabels />
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
      <ScattersChart data={data} suggestedMax={100} values yLabels xLabels yGrid xGrid />
    </View>

    <Divider line />

    <View height={300}>
      <ScattersChart data={data} suggestedMin="auto" values yLabels xLabels yGrid xGrid />
    </View>
  </View>
)

export default function SuggestedRangeSample() {
  return <SampleCodeBlock title="Suggested Range" code={CODE} content={CONTENT} />
}
