import { View, Text } from '@neko-os/ui'

export default function HomePage() {
  return (
    <View flex padding="xl" bg="mainBG" gap="lg" center>
      <Text h1 center>
        NekoCharts
      </Text>
      <Text text2 center>
        Documentation & Playground for @neko-os/charts
      </Text>
    </View>
  )
}
