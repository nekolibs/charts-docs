import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import ValuesSample from './samples/ValuesSample'
import MultiSeriesSample from './samples/MultiSeriesSample'
import DotSizeSample from './samples/DotSizeSample'
import XAxisSample from './samples/XAxisSample'
import YAxisSample from './samples/YAxisSample'
import SuggestedRangeSample from './samples/SuggestedRangeSample'
import HardRangeSample from './samples/HardRangeSample'
import ColorsScaleSample from './samples/ColorsScaleSample'
import LegendSample from './samples/LegendSample'

export default function ScatterChartDocPage() {
  return (
    <View flex gap={45}>
      <Text h1>Scatter Chart</Text>

      <BasicUsageSample />
      <ValuesSample />
      <MultiSeriesSample />
      <DotSizeSample />
      <XAxisSample />
      <YAxisSample />
      <SuggestedRangeSample />
      <HardRangeSample />
      <ColorsScaleSample />
      <LegendSample />
    </View>
  )
}
