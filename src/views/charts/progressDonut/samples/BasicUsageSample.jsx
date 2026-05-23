import { View } from '@neko-os/ui'
import { ProgressDonutChart } from '@neko-os/charts'

import SampleCodeBlock from '../../../../components/code/SampleCodeBlock'

const CODE = `
import { View } from '@neko-os/ui'
import { ProgressDonutChart } from '@neko-os/charts'

<View row gap="lg" center>
  <ProgressDonutChart value={75} color="blue" size={80} />
  <ProgressDonutChart value={42} color="green" size={100} />
  <ProgressDonutChart value={90} color="red" size={120} />
</View>
`

const CONTENT = (
  <View row gap="lg" center padding="xl">
    <ProgressDonutChart value={75} color="blue" size={80} />
    <ProgressDonutChart value={42} color="green" size={100} />
    <ProgressDonutChart value={90} color="red" size={120} />
  </View>
)

export default function BasicUsageSample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} />
}
