import { View } from '@neko-os/ui'
import { ProgressDonutChart } from '@neko-os/charts'

import SampleCodeBlock from '../../../../components/code/SampleCodeBlock'

const CODE = `
import { View } from '@neko-os/ui'
import { ProgressDonutChart } from '@neko-os/charts'

<View row gap="lg" center>
  <ProgressDonutChart value={75} color="#3CA1FF" size={80} />
  <ProgressDonutChart value={42} color="#29D975" size={100} />
  <ProgressDonutChart value={90} color="#FF6B6B" size={120} />
</View>
`

const CONTENT = (
  <View row gap="lg" center padding="xl">
    <ProgressDonutChart value={75} color="#3CA1FF" size={80} />
    <ProgressDonutChart value={42} color="#29D975" size={100} />
    <ProgressDonutChart value={90} color="#FF6B6B" size={120} />
  </View>
)

export default function ProgressDonutSample() {
  return <SampleCodeBlock title="Progress Donut" code={CODE} content={CONTENT} />
}
