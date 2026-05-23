import { View } from '@neko-os/ui'
import { DonutChart } from '@neko-os/charts'

import SampleCodeBlock from '../../../../components/code/SampleCodeBlock'

const CODE = `
import { DonutChart } from '@neko-os/charts'

const data = [
  { x: 'Online', y: 72 },
  { x: 'Offline', y: 28 },
]

<DonutChart data={data} size={300} labels />
`

const data = [
  { x: 'Online', y: 72 },
  { x: 'Offline', y: 28 },
]

const CONTENT = (
  <View center>
    <DonutChart data={data} size={300} labels />
  </View>
)

export default function LabelsSample() {
  return <SampleCodeBlock title="Labels" code={CODE} content={CONTENT} />
}
