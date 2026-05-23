import { PieChart } from '@neko-os/charts'
import { View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../components/code/SampleCodeBlock'

const CODE = `
import { PieChart } from '@neko-os/charts'
import { View } from '@neko-os/ui'

const data = [
  { x: 'Chrome', y: 65 },
  { x: 'Safari', y: 19 },
  { x: 'Firefox', y: 10 },
  { x: 'Edge', y: 6 },
]

<View height={300}>
  <PieChart data={data} />
</View>
`

const data = [
  { x: 'Chrome', y: 65 },
  { x: 'Safari', y: 19 },
  { x: 'Firefox', y: 10 },
  { x: 'Edge', y: 6 },
]

const CONTENT = (
  <View height={300}>
    <PieChart data={data} />
  </View>
)

export default function ResponsiveSample() {
  return <SampleCodeBlock title="Responsive" code={CODE} content={CONTENT} />
}
