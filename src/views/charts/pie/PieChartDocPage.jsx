import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import ColorsScaleSample from './samples/ColorsScaleSample'
import CustomColorsSample from './samples/CustomColorsSample'
import LabelsSample from './samples/LabelsSample'
import LegendSample from './samples/LegendSample'
import ResponsiveSample from './samples/ResponsiveSample'
import SizesSample from './samples/SizesSample'
import SliceSpacingSample from './samples/SliceSpacingSample'
import TooltipSample from './samples/TooltipSample'

export default function PieChartDocPage() {
  return (
    <View flex gap={45}>
      <Text h1>Pie Chart</Text>

      <BasicUsageSample />
      <SliceSpacingSample />
      <CustomColorsSample />
      <ColorsScaleSample />
      <LabelsSample />
      <TooltipSample />
      <LegendSample />
      <SizesSample />
      <ResponsiveSample />
    </View>
  )
}
