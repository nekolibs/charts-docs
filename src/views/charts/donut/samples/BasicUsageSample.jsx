import { DonutChart } from '@neko-os/charts'
import { View, Text } from '@neko-os/ui'

import SampleCodeBlock from '../../../../components/code/SampleCodeBlock'

const CODE = `
import { DonutChart } from '@neko-os/charts'

const data = [
  { x: 'Desktop', y: 55 },
  { x: 'Mobile', y: 35 },
  { x: 'Tablet', y: 10 },
]

<DonutChart data={data} size={300} />
`

const data = [
  { x: 'Desktop', y: 55 },
  { x: 'Mobile', y: 35 },
  { x: 'Tablet', y: 10 },
]

const CONTENT = (
  <View center>
    <DonutChart data={data} size={300} />
  </View>
)

export default function BasicUsageSample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} />
}
