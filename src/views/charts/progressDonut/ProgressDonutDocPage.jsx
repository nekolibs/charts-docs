import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import CustomLabelSample from './samples/CustomLabelSample'
import InnerRadiusSample from './samples/InnerRadiusSample'
import RoundedCornersSample from './samples/RoundedCornersSample'
import TargetSample from './samples/TargetSample'
import TrackColorSample from './samples/TrackColorSample'

export default function ProgressDonutDocPage() {
  return (
    <View flex gap={45}>
      <Text h1>Progress Donut</Text>

      <BasicUsageSample />
      <TrackColorSample />
      <CustomLabelSample />
      <RoundedCornersSample />
      <InnerRadiusSample />
      <TargetSample />
    </View>
  )
}
