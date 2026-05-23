import { Icon, LayoutHeader, Link, Menu, View, useThemeHandler } from '@neko-os/ui'
import { useLocation, useNavigate } from 'react-router'

const ITEMS = [
  { label: 'Home', icon: 'home-smile-line', key: '' },
  { label: 'Guides', icon: 'article-line', key: 'guides', path: 'guides/install' },
  { label: 'Charts', icon: 'bar-chart-2-line', key: 'charts', path: 'charts/bars' },
]

export default function TopBarMenu() {
  const { openThemePicker } = useThemeHandler()
  const navigate = useNavigate()
  const location = useLocation()

  const activePath = location.pathname.split('/')[1] || ''

  return (
    <LayoutHeader height={65} borderB>
      <View flex row>
        <Link strong h5 onPress={() => navigate('/')}>
          NekoCharts
        </Link>
      </View>

      <View center row gap={30} flex>
        <Menu
          items={ITEMS}
          activeKey={activePath}
          onChange={({ key, path }) => navigate(`/${path || key}`)}
          height={65}
          gap="xs"
        />
      </View>

      <View toRight centerV flex row>
        <Link href="https://github.com/nekolibs/charts" target="_blank" padding="sm">
          <Icon name="github-fill" />
        </Link>
        <Link onPress={openThemePicker} padding="sm">
          <Icon name="paint-fill" />
        </Link>
      </View>
    </LayoutHeader>
  )
}
