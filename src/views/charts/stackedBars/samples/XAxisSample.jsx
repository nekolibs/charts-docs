import { StackedBarsChart } from '@neko-os/charts'
import { View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../components/code/SampleCodeBlock'

const CODE = `
import { StackedBarsChart } from '@neko-os/charts'

const data = [
  { x: 'Jan', Online: 40, Store: 30, Wholesale: 20 },
  { x: 'Feb', Online: 55, Store: 35, Wholesale: 25 },
  { x: 'Mar', Online: 45, Store: 40, Wholesale: 30 },
  { x: 'Apr', Online: 70, Store: 45, Wholesale: 20 },
  { x: 'May', Online: 60, Store: 50, Wholesale: 35 },
  { x: 'Jun', Online: 80, Store: 55, Wholesale: 25 },
]

<StackedBarsChart data={data} xLabels xGrid />
`

const data = [
  { x: 'Jan', Online: 40, Store: 30, Wholesale: 20 },
  { x: 'Feb', Online: 55, Store: 35, Wholesale: 25 },
  { x: 'Mar', Online: 45, Store: 40, Wholesale: 30 },
  { x: 'Apr', Online: 70, Store: 45, Wholesale: 20 },
  { x: 'May', Online: 60, Store: 50, Wholesale: 35 },
  { x: 'Jun', Online: 80, Store: 55, Wholesale: 25 },
]

const CONTENT = (
  <View height={300}>
    <StackedBarsChart data={data} xLabels xGrid />
  </View>
)

export default function XAxisSample() {
  return <SampleCodeBlock title="X Axis" code={CODE} content={CONTENT} />
}
