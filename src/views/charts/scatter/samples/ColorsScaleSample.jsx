import { ScattersChart } from '@neko-os/charts'
import { View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../components/code/SampleCodeBlock'

const CODE = `
import { ScattersChart } from '@neko-os/charts'

const data = [
  { x: 'Jan', Sales: 80, Returns: 20 },
  { x: 'Feb', Sales: 95, Returns: 15 },
  { x: 'Mar', Sales: 110, Returns: 25 },
  { x: 'Apr', Sales: 130, Returns: 18 },
  { x: 'May', Sales: 145, Returns: 22 },
  { x: 'Jun', Sales: 160, Returns: 30 },
]

const colors = ['#3CA1FF', '#FF6B6B']

<ScattersChart data={data} colorsScale={colors} xLabels />
`

const data = [
  { x: 'Jan', Sales: 80, Returns: 20 },
  { x: 'Feb', Sales: 95, Returns: 15 },
  { x: 'Mar', Sales: 110, Returns: 25 },
  { x: 'Apr', Sales: 130, Returns: 18 },
  { x: 'May', Sales: 145, Returns: 22 },
  { x: 'Jun', Sales: 160, Returns: 30 },
]

const colors = ['#3CA1FF', '#FF6B6B']

const CONTENT = (
  <View height={300}>
    <ScattersChart data={data} colorsScale={colors} xLabels />
  </View>
)

export default function ColorsScaleSample() {
  return <SampleCodeBlock title="Colors Scale" code={CODE} content={CONTENT} />
}
