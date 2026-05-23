import { Text, View } from '@neko-os/ui'

export default function CodeBlock({ code }) {
  return (
    <View bg="#0f0f0f" padding="md" br="lg">
      <Text style={{ fontFamily: 'monospace', fontSize: 12 }} color="#e4e4e4">
        {code.trim()}
      </Text>
    </View>
  )
}
