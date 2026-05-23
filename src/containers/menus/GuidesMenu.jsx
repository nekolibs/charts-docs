import { LayoutSider, Menu } from '@neko-os/ui'
import { useNavigate, useLocation } from 'react-router'

import { GUIDES_SECTIONS } from './guidesMenuItems'

export default function GuidesMenu() {
  const navigate = useNavigate()
  const location = useLocation()

  const activeKey = location.pathname.split('/guides/')[1] || ''

  return (
    <LayoutSider width={300} borderR scrollY sticky bg="overlayBG">
      <Menu
        vertical
        items={GUIDES_SECTIONS}
        onChange={({ key }) => navigate(`/guides/${key}`)}
        activeKey={activeKey}
        paddingB="xxxl"
      />
    </LayoutSider>
  )
}
