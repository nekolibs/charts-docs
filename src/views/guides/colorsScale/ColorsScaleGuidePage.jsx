import { Text, View } from '@neko-os/ui'

import OverviewSection from './sections/OverviewSection'
import PresetsSection from './sections/PresetsSection'
import ThemeKeysSection from './sections/ThemeKeysSection'
import CustomHexSection from './sections/CustomHexSection'
import ProviderSection from './sections/ProviderSection'

export default function ColorsScaleGuidePage() {
  return (
    <View flex gap={45} maxWidth={1200}>
      <Text h1>Colors Scale</Text>

      <OverviewSection />
      <PresetsSection />
      <ThemeKeysSection />
      <CustomHexSection />
      <ProviderSection />
    </View>
  )
}
