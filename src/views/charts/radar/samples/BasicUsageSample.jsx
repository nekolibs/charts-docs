import { RadarChart } from '@neko-os/charts'
import { View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../components/code/SampleCodeBlock'

const CODE = `
import { RadarChart } from '@neko-os/charts'

const data = [
  { x: 'Speed', y: 80 },
  { x: 'Strength', y: 65 },
  { x: 'Defense', y: 90 },
  { x: 'Magic', y: 50 },
  { x: 'Stamina', y: 75 },
]

<RadarChart data={data} size={400} />
`

const data = [
  { x: 'Speed', y: 80 },
  { x: 'Strength', y: 65 },
  { x: 'Defense', y: 90 },
  { x: 'Magic', y: 50 },
  { x: 'Stamina', y: 75 },
]

const CONTENT = (
  <View center>
    <RadarChart data={data} size={400} />
  </View>
)

export default function BasicUsageSample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} />
}
