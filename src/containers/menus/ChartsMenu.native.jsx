import { Menu, View } from '@neko-os/ui'
import { ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { CHARTS_SECTIONS } from './chartsMenuItems'

const SCREEN_MAP = {
  bars: 'Bars',
  stackedBars: 'StackedBars',
  lines: 'Lines',
  stackedLines: 'StackedLines',
  pie: 'Pie',
  donut: 'Donut',
  progressDonut: 'ProgressDonut',
  radar: 'Radar',
  scatter: 'Scatter',
  composable: 'Composable',
}

export default function ChartsMenu() {
  const { navigate } = useNavigation()

  return (
    <View flex bg="mainBG">
      <ScrollView>
        <Menu
          vertical
          items={CHARTS_SECTIONS}
          onChange={({ key }) => navigate(SCREEN_MAP[key] || key)}
          paddingB="xxxl"
          withDivider
          linkMinHeight="xl"
        />
      </ScrollView>
    </View>
  )
}
