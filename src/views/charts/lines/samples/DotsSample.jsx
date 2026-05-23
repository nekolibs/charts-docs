import { LinesChart } from '@neko-os/charts'
import { View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../components/code/SampleCodeBlock'

const CODE = `
import { LinesChart } from '@neko-os/charts'

const data = [
  { x: 'Jan', Revenue: 80, Expenses: 50 },
  { x: 'Feb', Revenue: 95, Expenses: 60 },
  { x: 'Mar', Revenue: 110, Expenses: 55 },
  { x: 'Apr', Revenue: 130, Expenses: 70 },
  { x: 'May', Revenue: 145, Expenses: 65 },
  { x: 'Jun', Revenue: 160, Expenses: 80 },
]

<LinesChart data={data} dots xLabels />

// Custom dot size
<LinesChart data={data} dots dotSize={5} xLabels />
`

const data = [
  { x: 'Jan', Revenue: 80, Expenses: 50 },
  { x: 'Feb', Revenue: 95, Expenses: 60 },
  { x: 'Mar', Revenue: 110, Expenses: 55 },
  { x: 'Apr', Revenue: 130, Expenses: 70 },
  { x: 'May', Revenue: 145, Expenses: 65 },
  { x: 'Jun', Revenue: 160, Expenses: 80 },
]

const CONTENT = (
  <View gap="lg">
    <View height={300}>
      <LinesChart data={data} dots xLabels />
    </View>
    <View height={300}>
      <LinesChart data={data} dots dotSize={5} xLabels />
    </View>
  </View>
)

export default function DotsSample() {
  return <SampleCodeBlock title="Dots" code={CODE} content={CONTENT} />
}
