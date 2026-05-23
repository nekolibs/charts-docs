import { View } from '@neko-os/ui'
import { DonutChart } from '@neko-os/charts'

import SampleCodeBlock from '../../../../components/code/SampleCodeBlock'

const CODE = `
import { DonutChart } from '@neko-os/charts'

const data = [
  { x: 'React', y: 45 },
  { x: 'Vue', y: 30 },
  { x: 'Angular', y: 15 },
  { x: 'Svelte', y: 10 },
]

<DonutChart data={data} size={300} legend legendPosition="right" />
`

const data = [
  { x: 'React', y: 45 },
  { x: 'Vue', y: 30 },
  { x: 'Angular', y: 15 },
  { x: 'Svelte', y: 10 },
]

const CONTENT = (
  <View gap="lg" center>
    <DonutChart data={data} size={300} legend legendPosition="right" />
    <DonutChart data={data} size={300} legend legendPosition="bottom" />
  </View>
)

export default function LegendSample() {
  return <SampleCodeBlock title="Legend" code={CODE} content={CONTENT} />
}
