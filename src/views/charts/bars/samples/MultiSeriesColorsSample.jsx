import { BarsChart } from '@neko-os/charts'
import { View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../components/code/SampleCodeBlock'

const CODE = `
import { BarsChart } from '@neko-os/charts'

const data = [
  { x: 'Jan', Total: 80, Expenses: 50 },
  { x: 'Feb', Total: 95, Expenses: 60 },
  { x: 'Mar', Total: 60, Expenses: 55 },
  { x: 'Apr', Total: 130, Expenses: 70 },
  { x: 'May', Total: { value: -15, color: 'red' }, Expenses: 25 },
  { x: 'Jun', Total: 140, Expenses: 75 },
]

<BarsChart data={data} xLabels values legend />
`

const data = [
  { x: 'Jan', Total: 80, Expenses: 50 },
  { x: 'Feb', Total: 95, Expenses: 60 },
  { x: 'Mar', Total: 60, Expenses: 55 },
  { x: 'Apr', Total: 130, Expenses: 70 },
  { x: 'May', Total: { value: -15, color: 'red' }, Expenses: 25 },
  { x: 'Jun', Total: 140, Expenses: 75 },
]

const CONTENT = (
  <View height={300}>
    <BarsChart data={data} xLabels values tooltip legend />
  </View>
)

export default function MultiSeriesColorsSample() {
  return <SampleCodeBlock title="Multi-Series Custom Colors" code={CODE} content={CONTENT} />
}
