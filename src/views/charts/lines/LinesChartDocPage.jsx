import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import ValuesSample from './samples/ValuesSample'
import MultiSeriesSample from './samples/MultiSeriesSample'
import DotsSample from './samples/DotsSample'
import XAxisSample from './samples/XAxisSample'
import YAxisSample from './samples/YAxisSample'
import SuggestedRangeSample from './samples/SuggestedRangeSample'
import HardRangeSample from './samples/HardRangeSample'
import CustomColorsSample from './samples/CustomColorsSample'
import TooltipSample from './samples/TooltipSample'
import LegendSample from './samples/LegendSample'

export default function LinesChartDocPage() {
  return (
    <View flex gap={45}>
      <Text h1>Lines Chart</Text>

      <BasicUsageSample />
      <ValuesSample />
      <MultiSeriesSample />
      <DotsSample />
      <XAxisSample />
      <YAxisSample />
      <SuggestedRangeSample />
      <HardRangeSample />
      <CustomColorsSample />
      <TooltipSample />
      <LegendSample />
    </View>
  )
}
