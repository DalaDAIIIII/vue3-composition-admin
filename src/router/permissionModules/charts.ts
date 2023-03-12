/*
 * @Description:
 * @Author: ZY
 * @Date: 2021-01-08 19:21:46
 * @LastEditors: zhouda
 * @LastEditTime: 2023-03-12 19:55:17
 */
import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Index.vue'

const chartsRouter: Array<RouteRecordRaw> = [
  {
    path: '/charts',
    component: Layout,
    redirect: 'noredirect',
    name: 'Charts',
    meta: {
      title: 'charts',
      icon: '#iconchart1'
    },
    children: [
      {
        path: 'bar-chart',
        component: () =>
          import(
            /* webpackChunkName: "BarChart" */ '@/views/charts/BarChartDemo.vue'
          ),
        name: 'BarChartDemo',
        meta: {
          title: 'barChart',
          noCache: true
        }
      },
      {
        path: 'line-chart',
        component: () =>
          import(
            /* webpackChunkName: "LineChart" */ '@/views/charts/LineChartDemo.vue'
          ),
        name: 'LineChartDemo',
        meta: {
          title: 'lineChart',
          noCache: true
        }
      },
      {
        path: 'mixed-chart',
        component: () =>
          import(
            /* webpackChunkName: "MixedChat" */ '@/views/charts/MixedChatDemo.vue'
          ),
        name: 'MixedChartDemo',
        meta: {
          title: 'mixedChart',
          noCache: true
        }
      }, {
        path: 'hot-map-chart',
        component: () =>
          import(
            /* webpackChunkName: "MixedChat" */ '@/views/charts/HotMapChartDemo.vue'
          ),
        name: 'HotMapChartDemo',
        meta: {
          title: 'hotMapChart',
          noCache: true
        }
      }, {
        path: 'effect-scatter-chart',
        component: () =>
          import(
            /* webpackChunkName: "MixedChat" */ '@/views/charts/EffectScatterChartDemo.vue'
          ),
        name: 'EffectScatterChartDemo',
        meta: {
          title: 'effectScatterChart',
          noCache: true
        }
      }
    ]
  }
]

export default chartsRouter
