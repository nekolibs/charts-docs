import { LayoutSider, Menu } from '@neko-os/ui'
import { useNavigate, useLocation } from 'react-router'

import { CHARTS_SECTIONS } from './chartsMenuItems'

export default function ChartsMenu() {
  const navigate = useNavigate()
  const location = useLocation()

  const activeKey = location.pathname.split('/charts/')[1] || ''

  return (
    <LayoutSider width={300} borderR scrollY sticky bg="overlayBG">
      <Menu
        vertical
        items={CHARTS_SECTIONS}
        onChange={({ key }) => navigate(`/charts/${key}`)}
        activeKey={activeKey}
        paddingB="xxxl"
      />
    </LayoutSider>
  )
}
