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

const colors = ['#3CA1FF', '#FF6B6B']

<RadarChart data={data} size={300} colorsScale={colors} labels />
`

const data = [
  { x: 'Speed', Player: 80, Enemy: 60 },
  { x: 'Strength', Player: 65, Enemy: 85 },
  { x: 'Defense', Player: 90, Enemy: 50 },
  { x: 'Magic', Player: 50, Enemy: 70 },
  { x: 'Stamina', Player: 75, Enemy: 55 },
]

const colors = ['#3CA1FF', '#FF6B6B']

const CONTENT = (
  <View center>
    <RadarChart data={data} size={300} colorsScale={colors} labels />
  </View>
)

export default function ColorsScaleSample() {
  return <SampleCodeBlock title="Colors Scale" code={CODE} content={CONTENT} />
}
