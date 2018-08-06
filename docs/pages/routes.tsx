import getComponentAsync from 'get-component-async';
// import Yoshino from './Yoshino';
// import Logs from './Logs/index';
// import FAQ from './FAQ/index';
// import Theme from './Theme/index';
// import Start from './Start/index';
// import Button from './Button';
// import Icon from './Icon';
// import AutoComplete from './AutoComplete';
// import CheckBox from './CheckBox';
// import Input from './Input';
// import InputNumber from './InputNumber';
// import Rate from './Rate';
// import Radio from './Radio';
// import Slider from './Slider';
// import Switch from './Switch';
// import Avatar from './Avatar';
// import Badge from './Badge';
// import Card from './Card';
// import Collapse from './Collapse';
// import Tag from './Tag';
// import Tooltip from './Tooltip';
// import Timeline from './Timeline';
// import Breadcrumb from './Breadcrumb';
// import Menu from './Menu/';
// import Pagination from './Pagination';
// import Steps from './Steps';
// import Loading from './Loading';
// import Progress from './Progress';
// import BackTop from './BackTop';
// import Divider from './Divider';
// import Ripple from './Ripple';
// import Alert from './Alert';
// import Notification from './Notification';
// import Transitions from './Transitions';
// import Modal from './Modal';
// import Helpers from './Helpers';
// import Drawer from './Drawer';
// import Table from './Table';

export default [
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "yoshino-yoshino" */ './Yoshino')
    ),
    path: '/components/yoshino',
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "yoshino-start" */ './Start')
    ),
    path: '/components/start',
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "yoshino-faq" */ './FAQ')
    ),
    path: '/components/faq',
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "yoshino-logs" */ './Logs')
    ),
    path: '/components/logs',
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "yoshino-button" */ './Button')
    ),
    path: '/components/button'
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "yoshino-icon" */ './Icon')
    ),
    path: '/components/icon'
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "yoshino-autocomplete" */ './AutoComplete')
    ),
    path: '/components/autocomplete'
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "yoshino-checkbox" */ './CheckBox')
    ),
    path: '/components/checkbox'
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "yoshino-input" */ './Input')
    ),
    path: '/components/input'
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "yoshino-inputnumber" */ './InputNumber')
    ),
    path: '/components/inputnumber'
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "yoshino-rate" */ './Rate')
    ),
    path: '/components/rate'
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "yoshino-radio" */ './Radio')
    ),
    path: '/components/radio'
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "yoshino-slider" */ './Slider')
    ),
    path: '/components/slider'
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "yoshino-switch" */ './Switch')
    ),
    path: '/components/switch'
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "yoshino-avatar" */ './Avatar')
    ),
    path: '/components/avatar'
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "yoshino-badge" */ './Badge')
    ),
    path: '/components/badge'
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "yoshino-card" */ './Card')
    ),
    path: '/components/card'
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "yoshino-collapse" */ './Collapse')
    ),
    path: '/components/collapse'
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "yoshino-tag" */ './Tag')
    ),
    path: '/components/tag'
  },

  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "yoshino-tooltip" */ './Tooltip')
    ),
    path: '/components/tooltip'
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "yoshino-timeline" */ './Timeline')
    ),
    path: '/components/timeline'
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "yoshino-breadcrumb" */ './Breadcrumb')
    ),
    path: '/components/breadcrumb'
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "yoshino-menu" */ './Menu')
    ),
    path: '/components/menu'
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "yoshino-pagination" */ './Pagination')
    ),
    path: '/components/pagination'
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "yoshino-steps" */ './Steps')
    ),
    path: '/components/steps'
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "yoshino-loading" */ './Loading')
    ),
    path: '/components/loading'
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "yoshino-progress" */ './progress')
    ),
    path: '/components/progress'
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "yoshino-backtop" */ './BackTop')
    ),
    path: '/components/backtop'
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "yoshino-divider" */ './Divider')
    ),
    path: '/components/divider',
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "yoshino-ripple" */ './Ripple')
    ),
    path: '/components/ripple',
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "yoshino-alert" */ './Alert')
    ),
    path: '/components/alert',
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "yoshino-notification" */ './Notification')
    ),
    path: '/components/notification',
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "yoshino-transitions" */ './Transitions')
    ),
    path: '/components/transitions',
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "yoshino-modal" */ './Modal')
    ),
    path: '/components/modal',
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "yoshino-helpers" */ './Helpers')
    ),
    path: '/components/helpers',
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "yoshino-drawer" */ './Drawer')
    ),
    path: '/components/drawer',
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "yoshino-table" */ './Table')
    ),
    path: '/components/table',
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "yoshino-theme" */ './Theme')
    ),
    path: '/components/theme',
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "yoshino-select" */ './Select')
    ),
    path: '/components/select',
  },
];
