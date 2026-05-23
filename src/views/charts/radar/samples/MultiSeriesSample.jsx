import { RadarChart } from '@neko-os/charts'
import { View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../components/code/SampleCodeBlock'

const CODE = `
import { RadarChart } from '@neko-os/charts'

const data = [
  { x: 'Speed', Player: 80, Enemy: 60 },
  { x: 'Strength', Player: 65, Enemy: 85 },
  { x: 'Defense', Player: 90, Enemy: 50 },
  { x: 'Magic', Player: 50, Enemy: 70 },
  { x: 'Stamina', Player: 75, Enemy: 55 },
]

<RadarChart data={data} size={400} labels />
`

const data = [
  { x: 'Speed', Player: 80, Enemy: 60 },
  { x: 'Strength', Player: 65, Enemy: 85 },
  { x: 'Defense', Player: 90, Enemy: 50 },
  { x: 'Magic', Player: 50, Enemy: 70 },
  { x: 'Stamina', Player: 75, Enemy: 55 },
]

const CONTENT = (
  <View center>
    <RadarChart data={data} size={400} labels />
  </View>
)

export default function MultiSeriesSample() {
  return <SampleCodeBlock title="Multi Series" code={CODE} content={CONTENT} />
}
