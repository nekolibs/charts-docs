import { Route, Routes } from 'react-router'

import BaseLayout from '@src/containers/layouts/BaseLayout'
import ChartsLayout from '@src/containers/layouts/ChartsLayout'
import GuidesLayout from '@src/containers/layouts/GuidesLayout'
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

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<BaseLayout />} path="">
        <Route path="/" element={<HomePage />} />

        <Route element={<GuidesLayout />} path="guides">
          <Route path="" element={<InstallGuidePage />} />
          <Route path="install" element={<InstallGuidePage />} />
          <Route path="colorsScale" element={<ColorsScaleGuidePage />} />
        </Route>

        <Route element={<ChartsLayout />} path="charts">
          <Route path="bars" element={<BarsChartDocPage />} />
          <Route path="pie" element={<PieChartDocPage />} />
          <Route path="donut" element={<DonutChartDocPage />} />
          <Route path="progressDonut" element={<ProgressDonutDocPage />} />
          <Route path="lines" element={<LinesChartDocPage />} />
          <Route path="stackedBars" element={<StackedBarsDocPage />} />
          <Route path="stackedLines" element={<StackedLinesDocPage />} />
          <Route path="scatter" element={<ScatterChartDocPage />} />
          <Route path="radar" element={<RadarChartDocPage />} />
          <Route path="composable" element={<ComposableDocPage />} />
        </Route>
      </Route>
    </Routes>
  )
}
