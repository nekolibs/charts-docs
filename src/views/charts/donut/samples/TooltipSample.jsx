import { View } from '@neko-os/ui'
import { DonutChart } from '@neko-os/charts'

import SampleCodeBlock from '../../../../components/code/SampleCodeBlock'

const CODE = `
import { DonutChart } from '@neko-os/charts'

const data = [
  { x: 'Completed', y: 68 },
  { x: 'In Progress', y: 22 },
  { x: 'Pending', y: 10 },
]

<DonutChart data={data} size={300} tooltip />
`

const data = [
  { x: 'Completed', y: 68 },
  { x: 'In Progress', y: 22 },
  { x: 'Pending', y: 10 },
]

const CONTENT = (
  <View center>
    <DonutChart data={data} size={300} tooltip />
  </View>
)

export default function TooltipSample() {
  return <SampleCodeBlock title="Tooltip" code={CODE} content={CONTENT} />
}
