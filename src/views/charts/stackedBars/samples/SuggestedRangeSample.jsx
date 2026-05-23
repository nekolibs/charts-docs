import { StackedBarsChart } from '@neko-os/charts'
import { View, Divider } from '@neko-os/ui'

import SampleCodeBlock from '../../../../components/code/SampleCodeBlock'

const CODE = `
import { StackedBarsChart } from '@neko-os/charts'

const data = [
  { x: 'Q1', Revenue: 120, Costs: 80 },
  { x: 'Q2', Revenue: 150, Costs: 90 },
  { x: 'Q3', Revenue: 180, Costs: 100 },
  { x: 'Q4', Revenue: 200, Costs: 110 },
]

// Suggested max — baseline ceiling for stacked total
<StackedBarsChart data={data} suggestedMax={400} values totals yLabels xLabels />

// Suggested min auto — auto-fits chart floor to data minimum
<StackedBarsChart data={data} suggestedMin="auto" values totals yLabels xLabels />
`

const data = [
  { x: 'Q1', Revenue: 120, Costs: 80 },
  { x: 'Q2', Revenue: 150, Costs: 90 },
  { x: 'Q3', Revenue: 180, Costs: 100 },
  { x: 'Q4', Revenue: 200, Costs: 110 },
]

const CONTENT = (
  <View gap="lg">
    <View height={300}>
      <StackedBarsChart data={data} suggestedMax={400} values totals yLabels xLabels yGrid xGrid />
    </View>

    <Divider line />

    <View height={300}>
      <StackedBarsChart data={data} suggestedMin="auto" values totals yLabels xLabels yGrid xGrid />
    </View>
  </View>
)

export default function SuggestedRangeSample() {
  return <SampleCodeBlock title="Suggested Range" code={CODE} content={CONTENT} />
}
