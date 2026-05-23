import { BarsChart } from '@neko-os/charts'
import { View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../components/code/SampleCodeBlock'

const CODE = `
import { BarsChart } from '@neko-os/charts'

const data = [
  { x: 'React', y: 85, color: 'blue' },
  { x: 'Vue', y: 60, color: 'green' },
  { x: 'Angular', y: 45, color: 'red' },
  { x: 'Svelte', y: 30, color: 'orange' },
]

<BarsChart data={data} xLabels values />
`

const data = [
  { x: 'React', y: 85, color: 'blue' },
  { x: 'Vue', y: 60, color: 'green' },
  { x: 'Angular', y: 45, color: 'red' },
  { x: 'Svelte', y: 30, color: 'orange' },
]

const CONTENT = (
  <View height={300}>
    <BarsChart data={data} xLabels values />
  </View>
)

export default function CustomColorsSample() {
  return <SampleCodeBlock title="Custom Colors" code={CODE} content={CONTENT} />
}
