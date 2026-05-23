import { DonutChart } from '@neko-os/charts'
import { View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../components/code/SampleCodeBlock'

const CODE = `
import { DonutChart } from '@neko-os/charts'
import { View } from '@neko-os/ui'

const data = [
  { x: 'Desktop', y: 55 },
  { x: 'Mobile', y: 35 },
  { x: 'Tablet', y: 10 },
]

<View height={300}>
  <DonutChart data={data} />
</View>
`

const data = [
  { x: 'Desktop', y: 55 },
  { x: 'Mobile', y: 35 },
  { x: 'Tablet', y: 10 },
]

const CONTENT = (
  <View height={300}>
    <DonutChart data={data} />
  </View>
)

export default function ResponsiveSample() {
  return <SampleCodeBlock title="Responsive" code={CODE} content={CONTENT} />
}
