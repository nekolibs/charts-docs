import { Text, View } from '@neko-os/ui'

import CodeBlock from './CodeBlock'

export default function SampleCodeBlock({ title, code, content }) {
  return (
    <View gap="md">
      <Text h4 text3>
        {title}
      </Text>
      <View padding="md" bg="overlayBG" br="lg">
        {content}
      </View>
      <CodeBlock code={code} />
    </View>
  )
}
