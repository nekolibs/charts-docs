import { PieChart } from '@neko-os/charts'
import { View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../components/code/SampleCodeBlock'

const CODE = `
import { PieChart } from '@neko-os/charts'

const data = [
  { x: 'Chrome', y: 65 },
  { x: 'Safari', y: 19 },
  { x: 'Firefox', y: 10 },
  { x: 'Edge', y: 6 },
]

<PieChart data={data} size={300} />
`

const data = [
  { x: 'Chrome', y: 65 },
  { x: 'Safari', y: 19 },
  { x: 'Firefox', y: 10 },
  { x: 'Edge', y: 6 },
]

const CONTENT = (
  <View center>
    <PieChart data={data} size={300} />
  </View>
)

export default function BasicUsageSample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} />
}
