import * as React from 'react';
import getComponentAsync from 'get-component-async';
import Loading from '@yoshino/components/Loading';

function getComponentAsyncLoading<T>(loading: () => Promise<{
  default: T
}>) {
  return getComponentAsync(loading,  <Loading text='文档加载中！！' size='large' type='c'/>);
}

export default [
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-yoshino" */ './Yoshino')
    ),
    path: '/docs/components/yoshino',
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-start" */ './Start')
    ),
    path: '/docs/components/start',
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-faq" */ './FAQ')
    ),
    path: '/docs/components/faq',
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-logs" */ './Logs')
    ),
    path: '/docs/components/logs',
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-button" */ './Button')
    ),
    path: '/docs/components/button'
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-icon" */ './Icon')
    ),
    path: '/docs/components/icon'
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-autocomplete" */ './AutoComplete')
    ),
    path: '/docs/components/autocomplete'
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-checkbox" */ './CheckBox')
    ),
    path: '/docs/components/checkbox'
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-input" */ './Input')
    ),
    path: '/docs/components/input'
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-inputnumber" */ './InputNumber')
    ),
    path: '/docs/components/inputnumber'
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-rate" */ './Rate')
    ),
    path: '/docs/components/rate'
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-radio" */ './Radio')
    ),
    path: '/docs/components/radio'
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-slider" */ './Slider')
    ),
    path: '/docs/components/slider'
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-switch" */ './Switch')
    ),
    path: '/docs/components/switch'
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-avatar" */ './Avatar')
    ),
    path: '/docs/components/avatar'
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-badge" */ './Badge')
    ),
    path: '/docs/components/badge'
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-card" */ './Card')
    ),
    path: '/docs/components/card'
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-collapse" */ './Collapse')
    ),
    path: '/docs/components/collapse'
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-tag" */ './Tag')
    ),
    path: '/docs/components/tag'
  },

  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-tooltip" */ './Tooltip')
    ),
    path: '/docs/components/tooltip'
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-timeline" */ './Timeline')
    ),
    path: '/docs/components/timeline'
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-breadcrumb" */ './Breadcrumb')
    ),
    path: '/docs/components/breadcrumb'
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-menu" */ './Menu')
    ),
    path: '/docs/components/menu'
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-pagination" */ './Pagination')
    ),
    path: '/docs/components/pagination'
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-steps" */ './Steps')
    ),
    path: '/docs/components/steps'
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-loading" */ './Loading')
    ),
    path: '/docs/components/loading'
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-progress" */ './progress')
    ),
    path: '/docs/components/progress'
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-backtop" */ './BackTop')
    ),
    path: '/docs/components/backtop'
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-divider" */ './Divider')
    ),
    path: '/docs/components/divider',
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-ripple" */ './Ripple')
    ),
    path: '/docs/components/ripple',
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-alert" */ './Alert')
    ),
    path: '/docs/components/alert',
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-notification" */ './Notification')
    ),
    path: '/docs/components/notification',
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-transitions" */ './Transitions')
    ),
    path: '/docs/components/transitions',
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-modal" */ './Modal')
    ),
    path: '/docs/components/modal',
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-helpers" */ './Helpers')
    ),
    path: '/docs/components/helpers',
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-drawer" */ './Drawer')
    ),
    path: '/docs/components/drawer',
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-table" */ './Table')
    ),
    path: '/docs/components/table',
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-theme" */ './Theme')
    ),
    path: '/docs/components/theme',
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-select" */ './Select')
    ),
    path: '/docs/components/select',
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-message" */ './Message')
    ),
    path: '/docs/components/message',
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "yoshino-carousel" */ './Carousel')
    ),
    path: '/docs/components/carousel',
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "yoshino-tabs" */ './Tabs')
    ),
    path: '/docs/components/tabs',
  },
];
