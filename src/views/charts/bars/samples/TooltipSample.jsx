import { BarsChart } from '@neko-os/charts'
import { View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../components/code/SampleCodeBlock'

const CODE = `
import { BarsChart } from '@neko-os/charts'

const data = [
  { x: 'Mon', Sales: 120, Returns: 30 },
  { x: 'Tue', Sales: 200, Returns: 45 },
  { x: 'Wed', Sales: 150, Returns: 25 },
  { x: 'Thu', Sales: 280, Returns: 60 },
  { x: 'Fri', Sales: 190, Returns: 35 },
]

<BarsChart data={data} tooltip xLabels />
`

const data = [
  { x: 'Mon', Sales: 120, Returns: 30 },
  { x: 'Tue', Sales: 200, Returns: 45 },
  { x: 'Wed', Sales: 150, Returns: 25 },
  { x: 'Thu', Sales: 280, Returns: 60 },
  { x: 'Fri', Sales: 190, Returns: 35 },
]

const CONTENT = (
  <View height={300}>
    <BarsChart data={data} tooltip xLabels />
  </View>
)

export default function TooltipSample() {
  return <SampleCodeBlock title="Tooltip" code={CODE} content={CONTENT} />
}
