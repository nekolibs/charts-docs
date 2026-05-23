import { View } from '@neko-os/ui'
import { ProgressDonutChart } from '@neko-os/charts'

import SampleCodeBlock from '../../../../components/code/SampleCodeBlock'

const CODE = `
import { View } from '@neko-os/ui'
import { ProgressDonutChart } from '@neko-os/charts'

<View row gap="lg" center>
  <ProgressDonutChart value={30} target={50} size={100} label />
  <ProgressDonutChart value={30} target={100} size={100} label />
  <ProgressDonutChart value={30} target={200} size={100} label />
</View>
`

const CONTENT = (
  <View row gap="lg" center padding="xl">
    <ProgressDonutChart value={30} target={50} size={100} label />
    <ProgressDonutChart value={30} target={100} size={100} label />
    <ProgressDonutChart value={30} target={200} size={100} label />
  </View>
)

export default function TargetSample() {
  return <SampleCodeBlock title="Custom Target" code={CODE} content={CONTENT} />
}
