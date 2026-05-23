import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import ColorsScaleSample from './samples/ColorsScaleSample'
import CustomColorsSample from './samples/CustomColorsSample'
import LabelsSample from './samples/LabelsSample'
import InnerRadiusSample from './samples/InnerRadiusSample'
import LegendSample from './samples/LegendSample'
import ResponsiveSample from './samples/ResponsiveSample'
import SizesSample from './samples/SizesSample'
import SliceSpacingSample from './samples/SliceSpacingSample'
import TooltipSample from './samples/TooltipSample'

export default function DonutChartDocPage() {
  return (
    <View flex gap={45}>
      <Text h1>Donut Chart</Text>

      <BasicUsageSample />
      <InnerRadiusSample />
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
