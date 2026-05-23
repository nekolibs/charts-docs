import { View } from '@neko-os/ui'
import { DonutChart } from '@neko-os/charts'

import SampleCodeBlock from '../../../../components/code/SampleCodeBlock'

const CODE = `
import { DonutChart } from '@neko-os/charts'

const data = [
  { x: 'Used', y: 72 },
  { x: 'Free', y: 28 },
]

<DonutChart data={data} size={200} innerRadiusRatio={0.8} />
`

const data = [
  { x: 'Used', y: 72 },
  { x: 'Free', y: 28 },
]

const CONTENT = (
  <View gap="lg" center row wrap>
    <DonutChart data={data} size={200} innerRadiusRatio={0.4} />
    <DonutChart data={data} size={200} innerRadiusRatio={0.6} />
    <DonutChart data={data} size={200} innerRadiusRatio={0.8} />
  </View>
)

export default function InnerRadiusSample() {
  return <SampleCodeBlock title="Inner Radius" code={CODE} content={CONTENT} />
}
