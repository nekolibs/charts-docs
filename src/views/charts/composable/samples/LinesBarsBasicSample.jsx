import { NekoChart, Axis, Bars, Lines, Scatters, LabelsChart, LegendWrapper } from '@neko-os/charts'
import { View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../components/code/SampleCodeBlock'

const CODE = `
import { NekoChart, Axis, Bars, Lines, Scatters, LabelsChart } from '@neko-os/charts'

const data = [
  { x: 'Jan', Revenue: 45, Target: 50 },
  { x: 'Feb', Revenue: 62, Target: 55 },
  { x: 'Mar', Revenue: 78, Target: 60 },
  { x: 'Apr', Revenue: 55, Target: 65 },
  { x: 'May', Revenue: 90, Target: 70 },
  { x: 'Jun', Revenue: 72, Target: 75 },
]

<NekoChart data={data}>
  <Axis spaceAround yLabels xLabels yGrid>
    <Bars pick={['Revenue']} />
    <Lines pick={['Target']} />
    <Scatters pick={['Target']} />
    <LabelsChart pick={['Revenue']} />
  </Axis>
</NekoChart>
`

const data = [
  { x: 'Jan', Revenue: 45, Target: 50 },
  { x: 'Feb', Revenue: 62, Target: 55 },
  { x: 'Mar', Revenue: 78, Target: 60 },
  { x: 'Apr', Revenue: 55, Target: 65 },
  { x: 'May', Revenue: 90, Target: 70 },
  { x: 'Jun', Revenue: 72, Target: 75 },
]

const CONTENT = (
  <View height={350}>
    <LegendWrapper data={data} legendPosition="bottom">
      <NekoChart data={data}>
        <Axis spaceAround yLabels xLabels yGrid>
          <Bars pick={['Revenue']} />
          <Lines pick={['Target']} />
          <Scatters pick={['Target']} />
          <LabelsChart pick={['Revenue']} />
        </Axis>
      </NekoChart>
    </LegendWrapper>
  </View>
)

export default function LinesBarsBasicSample() {
  return <SampleCodeBlock title="Lines + Bars" code={CODE} content={CONTENT} />
}
