import { ScrollView } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { Divider, Icon, Link, TopBar, View, useColors, useThemeHandler } from '@neko-os/ui'

import ChartsMenu from '@src/containers/menus/ChartsMenu'
import GuidesMenu from '@src/containers/menus/GuidesMenu'
import MainMenu from '@src/containers/menus/MainMenu'
import HomePage from '@src/views/home/HomePage'
import ColorsScaleGuidePage from '@src/views/guides/colorsScale/ColorsScaleGuidePage'
import InstallGuidePage from '@src/views/guides/install/intro/InstallGuidePage'
import BarsChartDocPage from '@src/views/charts/bars/BarsChartDocPage'
import DonutChartDocPage from '@src/views/charts/donut/DonutChartDocPage'
import PieChartDocPage from '@src/views/charts/pie/PieChartDocPage'
import ProgressDonutDocPage from '@src/views/charts/progressDonut/ProgressDonutDocPage'
import LinesChartDocPage from '@src/views/charts/lines/LinesChartDocPage'
import StackedBarsDocPage from '@src/views/charts/stackedBars/StackedBarsDocPage'
import RadarChartDocPage from '@src/views/charts/radar/RadarChartDocPage'
import ScatterChartDocPage from '@src/views/charts/scatter/ScatterChartDocPage'
import StackedLinesDocPage from '@src/views/charts/stackedLines/StackedLinesDocPage'
import ComposableDocPage from '@src/views/charts/composable/ComposableDocPage'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

function DocView({ Component, title }) {
  const { goBack } = useNavigation()
  const { openThemePicker } = useThemeHandler()

  return (
    <View flex bg="mainBG">
      <TopBar
        title={title}
        left={
          <Link onPress={goBack}>
            <Icon name="arrow-left-s-line" xl />
          </Link>
        }
        right={
          <Link onPress={openThemePicker}>
            <Icon name="paint-fill" />
          </Link>
        }
        bg="overlayBG"
        borderB
      />
      <ScrollView>
        <View padding="md">
          <Component />
        </View>
        <Divider height="lg" />
      </ScrollView>
    </View>
  )
}

function TabRoutes() {
  const colors = useColors()

  return (
    <Tab.Navigator
      tabBar={(props) => <MainMenu {...props} />}
      screenOptions={{
        headerStyle: { backgroundColor: colors.overlayBG },
        headerTintColor: colors.text3,
      }}
    >
      <Tab.Screen name="home" component={HomePage} options={{ title: 'NekoCharts' }} />
      <Tab.Screen name="guides" component={GuidesMenu} options={{ title: 'Guides' }} />
      <Tab.Screen name="charts" component={ChartsMenu} options={{ title: 'Charts' }} />
    </Tab.Navigator>
  )
}

export default function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={TabRoutes} />

      {/* Guides */}
      <Stack.Screen name="InstallGuide">
        {() => <DocView Component={InstallGuidePage} title="Installation & Setup" />}
      </Stack.Screen>
      <Stack.Screen name="ColorsScale">
        {() => <DocView Component={ColorsScaleGuidePage} title="Colors Scale" />}
      </Stack.Screen>

      {/* Charts */}
      <Stack.Screen name="Bars">
        {() => <DocView Component={BarsChartDocPage} title="Bars Chart" />}
      </Stack.Screen>
      <Stack.Screen name="Pie">
        {() => <DocView Component={PieChartDocPage} title="Pie Chart" />}
      </Stack.Screen>
      <Stack.Screen name="Donut">
        {() => <DocView Component={DonutChartDocPage} title="Donut Chart" />}
      </Stack.Screen>
      <Stack.Screen name="ProgressDonut">
        {() => <DocView Component={ProgressDonutDocPage} title="Progress Donut" />}
      </Stack.Screen>
      <Stack.Screen name="Lines">
        {() => <DocView Component={LinesChartDocPage} title="Lines Chart" />}
      </Stack.Screen>
      <Stack.Screen name="StackedBars">
        {() => <DocView Component={StackedBarsDocPage} title="Stacked Bars Chart" />}
      </Stack.Screen>
      <Stack.Screen name="StackedLines">
        {() => <DocView Component={StackedLinesDocPage} title="Stacked Lines Chart" />}
      </Stack.Screen>
      <Stack.Screen name="Scatter">
        {() => <DocView Component={ScatterChartDocPage} title="Scatter Chart" />}
      </Stack.Screen>
      <Stack.Screen name="Radar">
        {() => <DocView Component={RadarChartDocPage} title="Radar Chart" />}
      </Stack.Screen>
      <Stack.Screen name="Composable">
        {() => <DocView Component={ComposableDocPage} title="Composable Charts" />}
      </Stack.Screen>
    </Stack.Navigator>
  )
}
