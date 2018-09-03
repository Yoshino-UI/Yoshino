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
    path: '/components/yoshino',
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-start" */ './Start')
    ),
    path: '/components/start',
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-faq" */ './FAQ')
    ),
    path: '/components/faq',
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-logs" */ './Logs')
    ),
    path: '/components/logs',
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-button" */ './Button')
    ),
    path: '/components/button'
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-icon" */ './Icon')
    ),
    path: '/components/icon'
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-autocomplete" */ './AutoComplete')
    ),
    path: '/components/autocomplete'
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-checkbox" */ './CheckBox')
    ),
    path: '/components/checkbox'
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-input" */ './Input')
    ),
    path: '/components/input'
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-inputnumber" */ './InputNumber')
    ),
    path: '/components/inputnumber'
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-rate" */ './Rate')
    ),
    path: '/components/rate'
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-radio" */ './Radio')
    ),
    path: '/components/radio'
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-slider" */ './Slider')
    ),
    path: '/components/slider'
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-switch" */ './Switch')
    ),
    path: '/components/switch'
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-avatar" */ './Avatar')
    ),
    path: '/components/avatar'
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-badge" */ './Badge')
    ),
    path: '/components/badge'
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-card" */ './Card')
    ),
    path: '/components/card'
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-collapse" */ './Collapse')
    ),
    path: '/components/collapse'
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-tag" */ './Tag')
    ),
    path: '/components/tag'
  },

  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-tooltip" */ './Tooltip')
    ),
    path: '/components/tooltip'
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-timeline" */ './Timeline')
    ),
    path: '/components/timeline'
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-breadcrumb" */ './Breadcrumb')
    ),
    path: '/components/breadcrumb'
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-menu" */ './Menu')
    ),
    path: '/components/menu'
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-pagination" */ './Pagination')
    ),
    path: '/components/pagination'
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-steps" */ './Steps')
    ),
    path: '/components/steps'
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-loading" */ './Loading')
    ),
    path: '/components/loading'
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-progress" */ './progress')
    ),
    path: '/components/progress'
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-backtop" */ './BackTop')
    ),
    path: '/components/backtop'
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-divider" */ './Divider')
    ),
    path: '/components/divider',
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-ripple" */ './Ripple')
    ),
    path: '/components/ripple',
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-alert" */ './Alert')
    ),
    path: '/components/alert',
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-notification" */ './Notification')
    ),
    path: '/components/notification',
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-transitions" */ './Transitions')
    ),
    path: '/components/transitions',
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-modal" */ './Modal')
    ),
    path: '/components/modal',
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-helpers" */ './Helpers')
    ),
    path: '/components/helpers',
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-drawer" */ './Drawer')
    ),
    path: '/components/drawer',
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-table" */ './Table')
    ),
    path: '/components/table',
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-theme" */ './Theme')
    ),
    path: '/components/theme',
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-select" */ './Select')
    ),
    path: '/components/select',
  },
  {
    component: getComponentAsyncLoading(
      () => import(/* webpackChunkName: "yoshino-message" */ './Message')
    ),
    path: '/components/message',
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "yoshino-carousel" */ './Carousel')
    ),
    path: '/components/carousel',
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "yoshino-tabs" */ './Tabs')
    ),
    path: '/components/tabs',
  },
];
