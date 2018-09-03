import * as React from 'react';
import { Transitions, Switch } from '@yoshino/components/';
import './index.less';

const {Slide} = Transitions;

export default class App extends React.Component {
  state = {
    active: true,
  };

  onSlide = (checked: boolean) => {
    this.setState({
      active: checked,
    });
  }

  render() {
    const {active} = this.state;
    return (
      <div>
        <Switch checked={active} onChange={this.onSlide}>开/关</Switch>
        <div className={'transitions-slide-demo-box'}>
          <div>
            <Slide
              timeout={300}
              active={active}
              direction='top'
            >
              <div className={'transitions-slide-demo-top'}>top</div>
            </Slide>
            <Slide
              timeout={300}
              active={active}
              direction='right'
            >
              <div className={'transitions-slide-demo-right'}>right</div>
            </Slide>
          </div>
          <div>
            <Slide
              timeout={300}
              active={active}
              direction='left'
            >
              <div className={'transitions-slide-demo-left'}>left</div>
            </Slide>
            <Slide
              timeout={300}
              active={active}
              direction='bottom'
            >
              <div className={'transitions-slide-demo-bottom'}>bottom</div>
            </Slide>
          </div>
        </div>
        <p>开启单方向滑动</p>
        <div className={'transitions-slide-demo-box'}>
          <div>
            <Slide
              single
              timeout={300}
              active={active}
              direction='top'
            >
              <div className={'transitions-slide-demo-top'}>top</div>
            </Slide>
            <Slide
              single
              timeout={300}
              active={active}
              direction='right'
            >
              <div className={'transitions-slide-demo-right'}>right</div>
            </Slide>
          </div>
          <div>
            <Slide
              single
              timeout={300}
              active={active}
              direction='left'
            >
              <div className={'transitions-slide-demo-left'}>left</div>
            </Slide>
            <Slide
              single
              timeout={300}
              active={active}
              direction='bottom'
            >
              <div className={'transitions-slide-demo-bottom'}>bottom</div>
            </Slide>
          </div>
        </div>
      </div>
    );
  }
}
