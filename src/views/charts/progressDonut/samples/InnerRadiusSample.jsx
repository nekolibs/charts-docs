import { View } from '@neko-os/ui'
import { ProgressDonutChart } from '@neko-os/charts'

import SampleCodeBlock from '../../../../components/code/SampleCodeBlock'

const CODE = `
import { View } from '@neko-os/ui'
import { ProgressDonutChart } from '@neko-os/charts'

<View row gap="lg" center>
  <ProgressDonutChart value={70} color="#FF6B6B" size={100} innerRadiusRatio={0.5} />
  <ProgressDonutChart value={70} color="#FF6B6B" size={100} innerRadiusRatio={0.75} />
  <ProgressDonutChart value={70} color="#FF6B6B" size={100} innerRadiusRatio={0.9} />
</View>
`

const CONTENT = (
  <View row gap="lg" center padding="xl">
    <ProgressDonutChart value={70} color="#FF6B6B" size={100} innerRadiusRatio={0.5} />
    <ProgressDonutChart value={70} color="#FF6B6B" size={100} innerRadiusRatio={0.75} />
    <ProgressDonutChart value={70} color="#FF6B6B" size={100} innerRadiusRatio={0.9} />
  </View>
)

export default function InnerRadiusSample() {
  return <SampleCodeBlock title="Inner Radius" code={CODE} content={CONTENT} />
}
