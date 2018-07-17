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
      () => import(/* webpackChunkName: "yoshino" */ './Yoshino')
    ),
    path: '/components/yoshino',
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "start" */ './Start')
    ),
    path: '/components/start',
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "faq" */ './FAQ')
    ),
    path: '/components/faq',
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "logs" */ './Logs')
    ),
    path: '/components/logs',
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "button" */ './Button')
    ),
    path: '/components/button'
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "icon" */ './Icon')
    ),
    path: '/components/icon'
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "autocomplete" */ './AutoComplete')
    ),
    path: '/components/autocomplete'
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "checkbox" */ './CheckBox')
    ),
    path: '/components/checkbox'
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "input" */ './Input')
    ),
    path: '/components/input'
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "inputnumber" */ './InputNumber')
    ),
    path: '/components/inputnumber'
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "rate" */ './Rate')
    ),
    path: '/components/rate'
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "radio" */ './Radio')
    ),
    path: '/components/radio'
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "slider" */ './Slider')
    ),
    path: '/components/slider'
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "switch" */ './Switch')
    ),
    path: '/components/switch'
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "avatar" */ './Avatar')
    ),
    path: '/components/avatar'
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "badge" */ './Badge')
    ),
    path: '/components/badge'
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "card" */ './Card')
    ),
    path: '/components/card'
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "collapse" */ './Collapse')
    ),
    path: '/components/collapse'
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "tag" */ './Tag')
    ),
    path: '/components/tag'
  },

  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "tooltip" */ './Tooltip')
    ),
    path: '/components/tooltip'
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "timeline" */ './Timeline')
    ),
    path: '/components/timeline'
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "breadcrumb" */ './Breadcrumb')
    ),
    path: '/components/breadcrumb'
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "menu" */ './Menu')
    ),
    path: '/components/menu'
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "pagination" */ './Pagination')
    ),
    path: '/components/pagination'
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "steps" */ './Steps')
    ),
    path: '/components/steps'
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "loading" */ './Loading')
    ),
    path: '/components/loading'
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "progress" */ './progress')
    ),
    path: '/components/progress'
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "backtop" */ './BackTop')
    ),
    path: '/components/backtop'
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "divider" */ './Divider')
    ),
    path: '/components/divider',
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "ripple" */ './Ripple')
    ),
    path: '/components/ripple',
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "alert" */ './Alert')
    ),
    path: '/components/alert',
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "notification" */ './Notification')
    ),
    path: '/components/notification',
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "transitions" */ './Transitions')
    ),
    path: '/components/transitions',
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "modal" */ './Modal')
    ),
    path: '/components/modal',
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "helpers" */ './Helpers')
    ),
    path: '/components/helpers',
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "drawer" */ './Drawer')
    ),
    path: '/components/drawer',
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "table" */ './Table')
    ),
    path: '/components/table',
  },
  {
    component: getComponentAsync(
      () => import(/* webpackChunkName: "theme" */ './Theme')
    ),
    path: '/components/theme',
  },
];
