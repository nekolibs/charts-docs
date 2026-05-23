import { FloatingMenu } from '@neko-os/ui'

const ITEMS = [
  { key: 'home', _label: 'Home', icon: 'home-smile-line', path: 'home' },
  { key: 'guides', _label: 'Guides', icon: 'article-line', path: 'guides' },
  { key: 'charts', _label: 'Charts', icon: 'bar-chart-2-line', path: 'charts' },
]

export default function MainMenu({ state, navigation }) {
  return <FloatingMenu items={ITEMS} activeIndex={state.index} onChange={(item) => navigation.navigate(item.path)} />
}
