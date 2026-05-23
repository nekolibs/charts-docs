import { DonutChart } from '@neko-os/charts'
import { View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../components/code/SampleCodeBlock'

const CODE = `
import { DonutChart } from '@neko-os/charts'

const data = [
  { x: 'Revenue', y: 45, color: '#4CAF50' },
  { x: 'Expenses', y: 30, color: '#F44336' },
  { x: 'Savings', y: 25, color: '#2196F3' },
]

<DonutChart data={data} size={300} />
`

const data = [
  { x: 'Revenue', y: 45, color: '#4CAF50' },
  { x: 'Expenses', y: 30, color: '#F44336' },
  { x: 'Savings', y: 25, color: '#2196F3' },
]

const CONTENT = (
  <View center>
    <DonutChart data={data} size={300} />
  </View>
)

export default function CustomColorsSample() {
  return <SampleCodeBlock title="Custom Colors" code={CODE} content={CONTENT} />
}
