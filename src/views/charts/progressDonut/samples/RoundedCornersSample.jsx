import { View } from '@neko-os/ui'
import { ProgressDonutChart } from '@neko-os/charts'

import SampleCodeBlock from '../../../../components/code/SampleCodeBlock'

const CODE = `
import { ProgressDonutChart } from '@neko-os/charts'

<ProgressDonutChart value={75} size={120} cornerRadius={10} />
`

const CONTENT = (
  <View center padding="xl">
    <ProgressDonutChart value={75} size={120} cornerRadius={10} />
  </View>
)

export default function RoundedCornersSample() {
  return <SampleCodeBlock title="Rounded Corners" code={CODE} content={CONTENT} />
}
