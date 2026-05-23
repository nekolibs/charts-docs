import { RadarChart } from '@neko-os/charts'
import { View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../components/code/SampleCodeBlock'

const CODE = `
import { RadarChart } from '@neko-os/charts'
import { View } from '@neko-os/ui'

const data = [
  { x: 'Speed', y: 80 },
  { x: 'Strength', y: 65 },
  { x: 'Defense', y: 90 },
  { x: 'Magic', y: 50 },
  { x: 'Stamina', y: 75 },
]

<View height={300}>
  <RadarChart data={data} />
</View>
`

const data = [
  { x: 'Speed', y: 80 },
  { x: 'Strength', y: 65 },
  { x: 'Defense', y: 90 },
  { x: 'Magic', y: 50 },
  { x: 'Stamina', y: 75 },
]

const CONTENT = (
  <View height={300}>
    <RadarChart data={data} />
  </View>
)

export default function ResponsiveSample() {
  return <SampleCodeBlock title="Responsive" code={CODE} content={CONTENT} />
}
