import { View } from '@neko-os/ui'
import { DonutChart } from '@neko-os/charts'

import SampleCodeBlock from '../../../../components/code/SampleCodeBlock'

const CODE = `
import { DonutChart } from '@neko-os/charts'

const data = [
  { x: 'Chrome', y: 65 },
  { x: 'Safari', y: 19 },
  { x: 'Firefox', y: 10 },
  { x: 'Edge', y: 6 },
]

<DonutChart data={data} size={150} />
<DonutChart data={data} size={200} />
<DonutChart data={data} size={300} />
`

const data = [
  { x: 'Chrome', y: 65 },
  { x: 'Safari', y: 19 },
  { x: 'Firefox', y: 10 },
  { x: 'Edge', y: 6 },
]

const CONTENT = (
  <View center flex row gap={20} wrap>
    <DonutChart data={data} size={150} />
    <DonutChart data={data} size={200} />
    <DonutChart data={data} size={300} />
  </View>
)

export default function SizesSample() {
  return <SampleCodeBlock title="Sizes" code={CODE} content={CONTENT} />
}
