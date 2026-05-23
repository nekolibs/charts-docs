import { HideOn, LayoutContent, View } from '@neko-os/ui'
import { Outlet } from 'react-router'

import GuidesMenu from '../menus/GuidesMenu'

export default function GuidesLayout() {
  return (
    <View row flex>
      <HideOn mdd>
        <GuidesMenu />
      </HideOn>
      <LayoutContent flex padding={40} bg="overlayBG">
        <Outlet />
      </LayoutContent>
    </View>
  )
}
