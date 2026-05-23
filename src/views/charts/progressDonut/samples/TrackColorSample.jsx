import { View } from '@neko-os/ui'
import { ProgressDonutChart } from '@neko-os/charts'

import SampleCodeBlock from '../../../../components/code/SampleCodeBlock'

const CODE = `
import { View } from '@neko-os/ui'
import { ProgressDonutChart } from '@neko-os/charts'

<View row gap="lg" center>
  <ProgressDonutChart value={65} color="#3CA1FF" size={100} />
  <ProgressDonutChart value={65} color="#3CA1FF" trackColor="#1A3A5C" size={100} />
  <ProgressDonutChart value={65} color="#29D975" trackColor="#1A3D2A" size={100} />
  <ProgressDonutChart value={65} color="#FF6B6B" size={100} hideTrack />
</View>
`

const CONTENT = (
  <View row gap="lg" center padding="xl">
    <ProgressDonutChart value={65} color="red" size={100} />
    <ProgressDonutChart value={65} color="green" trackColor="red" size={100} />
    <ProgressDonutChart value={65} color="#29D975" trackColor="#1A3D2A" size={100} />
    <ProgressDonutChart value={65} color="orange" size={100} hideTrack />
  </View>
)

export default function TrackColorSample() {
  return <SampleCodeBlock title="Track Color" code={CODE} content={CONTENT} />
}
