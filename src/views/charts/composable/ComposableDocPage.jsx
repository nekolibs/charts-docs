import { Text, View } from '@neko-os/ui'

import LinesBarsBasicSample from './samples/LinesBarsBasicSample'

export default function ComposableDocPage() {
  return (
    <View flex gap={45}>
      <Text h1>Composable Charts</Text>

      <LinesBarsBasicSample />
    </View>
  )
}
