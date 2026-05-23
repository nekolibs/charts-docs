import { HideOn, LayoutContent, View } from '@neko-os/ui'
import { Outlet } from 'react-router'

import ChartsMenu from '../menus/ChartsMenu'

export default function ChartsLayout() {
  return (
    <View row flex>
      <HideOn mdd>
        <ChartsMenu />
      </HideOn>
      <LayoutContent flex padding={40} bg="mainBG">
        <Outlet />
      </LayoutContent>
    </View>
  )
}
