import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import ValuesSample from './samples/ValuesSample'
import ColorsScaleSample from './samples/ColorsScaleSample'
import CornerRadiusSample from './samples/CornerRadiusSample'
import CustomColorsSample from './samples/CustomColorsSample'
import MultiSeriesColorsSample from './samples/MultiSeriesColorsSample'
import LegendSample from './samples/LegendSample'
import MultiSeriesSample from './samples/MultiSeriesSample'
import TooltipSample from './samples/TooltipSample'
import XAxisSample from './samples/XAxisSample'
import YAxisSample from './samples/YAxisSample'
import SuggestedRangeSample from './samples/SuggestedRangeSample'
import HardRangeSample from './samples/HardRangeSample'

export default function BarsChartDocPage() {
  return (
    <View flex gap={45}>
      <Text h1>Bars Chart</Text>

      <BasicUsageSample />
      <ValuesSample />
      <MultiSeriesSample />
      <XAxisSample />
      <YAxisSample />
      <SuggestedRangeSample />
      <HardRangeSample />
      <CornerRadiusSample />
      <CustomColorsSample />
      <MultiSeriesColorsSample />
      <ColorsScaleSample />
      <TooltipSample />
      <LegendSample />
    </View>
  )
}
