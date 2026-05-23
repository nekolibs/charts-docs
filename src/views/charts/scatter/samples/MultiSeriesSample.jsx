import { ScattersChart } from '@neko-os/charts'
import { View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../components/code/SampleCodeBlock'

const CODE = `
import { ScattersChart } from '@neko-os/charts'

const data = [
  { x: 'Jan', Revenue: 80, Expenses: 50 },
  { x: 'Feb', Revenue: 95, Expenses: 60 },
  { x: 'Mar', Revenue: 110, Expenses: 55 },
  { x: 'Apr', Revenue: 130, Expenses: 70 },
  { x: 'May', Revenue: 145, Expenses: 65 },
  { x: 'Jun', Revenue: 160, Expenses: 80 },
]

<ScattersChart data={data} xLabels />
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
  <View height={300}>
    <ScattersChart data={data} xLabels />
  </View>
)

export default function MultiSeriesSample() {
  return <SampleCodeBlock title="Multi Series" code={CODE} content={CONTENT} />
}
