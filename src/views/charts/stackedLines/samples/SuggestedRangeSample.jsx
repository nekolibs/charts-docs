import { StackedLinesChart } from '@neko-os/charts'
import { View, Divider } from '@neko-os/ui'

import SampleCodeBlock from '../../../../components/code/SampleCodeBlock'

const CODE = `
import { StackedLinesChart } from '@neko-os/charts'

const data = [
  { x: 'Jan', Revenue: 80, Costs: 50 },
  { x: 'Feb', Revenue: 95, Costs: 60 },
  { x: 'Mar', Revenue: 110, Costs: 55 },
  { x: 'Apr', Revenue: 130, Costs: 70 },
  { x: 'May', Revenue: 145, Costs: 65 },
  { x: 'Jun', Revenue: 160, Costs: 80 },
]

// Suggested max — baseline ceiling for stacked total
<StackedLinesChart data={data} suggestedMax={300} values yLabels xLabels />

// Suggested min auto — auto-fits chart floor to data minimum
<StackedLinesChart data={data} suggestedMin="auto" values yLabels xLabels />
`

const data = [
  { x: 'Jan', Revenue: 80, Costs: 50 },
  { x: 'Feb', Revenue: 95, Costs: 60 },
  { x: 'Mar', Revenue: 110, Costs: 55 },
  { x: 'Apr', Revenue: 130, Costs: 70 },
  { x: 'May', Revenue: 145, Costs: 65 },
  { x: 'Jun', Revenue: 160, Costs: 80 },
]

const CONTENT = (
  <View gap="lg">
    <View height={300}>
      <StackedLinesChart data={data} suggestedMax={300} values yLabels xLabels yGrid xGrid />
    </View>

    <Divider line />

    <View height={300}>
      <StackedLinesChart data={data} suggestedMin="auto" values yLabels xLabels yGrid xGrid />
    </View>
  </View>
)

export default function SuggestedRangeSample() {
  return <SampleCodeBlock title="Suggested Range" code={CODE} content={CONTENT} />
}
