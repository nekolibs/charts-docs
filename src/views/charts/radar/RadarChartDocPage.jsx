import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import LabelsSample from './samples/LabelsSample'
import MultiSeriesSample from './samples/MultiSeriesSample'
import MaxValueSample from './samples/MaxValueSample'
import SizesSample from './samples/SizesSample'
import ResponsiveSample from './samples/ResponsiveSample'
import TooltipSample from './samples/TooltipSample'
import ColorsScaleSample from './samples/ColorsScaleSample'
import LegendSample from './samples/LegendSample'

export default function RadarChartDocPage() {
  return (
    <View flex gap={45}>
      <Text h1>Radar Chart</Text>

      <BasicUsageSample />
      <LabelsSample />
      <MultiSeriesSample />
      <MaxValueSample />
      <SizesSample />
      <ResponsiveSample />
      <TooltipSample />
      <ColorsScaleSample />
      <LegendSample />
    </View>
  )
}
