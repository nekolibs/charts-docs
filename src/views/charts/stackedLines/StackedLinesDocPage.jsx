import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import ValuesSample from './samples/ValuesSample'
import TotalValuesSample from './samples/TotalValuesSample'
import XAxisSample from './samples/XAxisSample'
import YAxisSample from './samples/YAxisSample'
import SuggestedRangeSample from './samples/SuggestedRangeSample'
import HardRangeSample from './samples/HardRangeSample'
import ColorsScaleSample from './samples/ColorsScaleSample'
import LegendSample from './samples/LegendSample'

export default function StackedLinesDocPage() {
  return (
    <View flex gap={45}>
      <Text h1>Stacked Lines Chart</Text>

      <BasicUsageSample />
      <ValuesSample />
      <TotalValuesSample />
      <XAxisSample />
      <YAxisSample />
      <SuggestedRangeSample />
      <HardRangeSample />
      <ColorsScaleSample />
      <LegendSample />
    </View>
  )
}
