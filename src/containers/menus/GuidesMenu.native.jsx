import { Menu, View } from '@neko-os/ui'
import { ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { GUIDES_SECTIONS } from './guidesMenuItems'

const SCREEN_MAP = {
  install: 'InstallGuide',
  colorsScale: 'ColorsScale',
}

export default function GuidesMenu() {
  const { navigate } = useNavigation()

  return (
    <View flex bg="mainBG">
      <ScrollView>
        <Menu
          vertical
          items={GUIDES_SECTIONS}
          onChange={({ key }) => navigate(SCREEN_MAP[key] || key)}
          paddingB="xxxl"
          withDivider
          linkMinHeight="xl"
        />
      </ScrollView>
    </View>
  )
}
