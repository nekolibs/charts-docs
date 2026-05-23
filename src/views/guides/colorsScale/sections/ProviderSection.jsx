import { BarsChart, PieChart, NekoChartTheme } from '@neko-os/charts'
import { Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../components/code/SampleCodeBlock'

const CODE = `
import { BarsChart, PieChart, NekoChartTheme } from '@neko-os/charts'

const barsData = [
  { x: 'Q1', Sales: 80, Costs: 50 },
  { x: 'Q2', Sales: 110, Costs: 60 },
  { x: 'Q3', Sales: 95, Costs: 55 },
]

const pieData = [
  { x: 'A', y: 40 },
  { x: 'B', y: 35 },
  { x: 'C', y: 25 },
]

// All children share the same colorsScale
<NekoChartTheme colorsScale="cool">
  <BarsChart data={barsData} xLabels />
  <PieChart data={pieData} labels />
</NekoChartTheme>
`

const barsData = [
  { x: 'Q1', Sales: 80, Costs: 50 },
  { x: 'Q2', Sales: 110, Costs: 60 },
  { x: 'Q3', Sales: 95, Costs: 55 },
]

const pieData = [
  { x: 'A', y: 40 },
  { x: 'B', y: 35 },
  { x: 'C', y: 25 },
]

const CONTENT = (
  <NekoChartTheme colorsScale="cool">
    <View gap="lg">
      <View height={200}>
        <BarsChart data={barsData} xLabels />
      </View>
      <View center>
        <View style={{ width: 160, height: 160 }}>
          <PieChart data={pieData} labels />
        </View>
      </View>
    </View>
  </NekoChartTheme>
)

export default function ProviderSection() {
  return (
    <View gap="md">
      <View>
        <Text h3>Theme Provider</Text>
        <Text text3>
          Wrap multiple charts with NekoChartTheme to share the same colorsScale across all of them. Individual charts
          can still override with their own colorsScale prop.
        </Text>
      </View>
      <SampleCodeBlock title="NekoChartTheme Provider" code={CODE} content={CONTENT} fullW />
    </View>
  )
}
