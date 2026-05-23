import { View } from '@neko-os/ui'
import { ProgressDonutChart } from '@neko-os/charts'

import SampleCodeBlock from '../../../../components/code/SampleCodeBlock'

const CODE = `
import { View } from '@neko-os/ui'
import { ProgressDonutChart } from '@neko-os/charts'

<View row gap="lg" center>
  <ProgressDonutChart value={75} size={100} />
  <ProgressDonutChart value={75} size={100} label />
  <ProgressDonutChart value={75} size={100} label="A+" />
</View>
`

const CONTENT = (
  <View row gap="lg" center padding="xl">
    <ProgressDonutChart value={75} size={100} />
    <ProgressDonutChart value={75} size={100} label />
    <ProgressDonutChart value={75} size={100} label="A+" />
  </View>
)

export default function CustomLabelSample() {
  return <SampleCodeBlock title="Labels" code={CODE} content={CONTENT} />
}
