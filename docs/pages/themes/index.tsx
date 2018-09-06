import * as React from 'react';
import {Input} from '@yoshino/components/';
import themes from './themes';
import './index.less';

export default class Theme extends React.Component {
  state = {
    name: '',
  };

  render() {
    const filterTheme = themes.filter((item) => item.name.match(this.state.name));
    return (
      <div className='themes-box'>
        <div className='theme-header'>
          <h1 className='title'>Themes</h1>
          <Input
            className='theme-search-input'
            size='large'
            placeholder='Search'
            value={this.state.name}
            onChange={(v) => this.setState({name: v})}
          />
          <div className='theme-list-count'>{filterTheme.length} items</div>
        </div>
        <ul className='theme-list'>
          {
            filterTheme.map((item, index) => {
              return (
                <li className='theme-item' key={index}>
                  <div className='theme-screenshot'>
                    <img src={`https://raw.githubusercontent.com/Yoshino-UI/Yoshino/master/docs/pages/themes/screenshot/${item.preview}`}/>
                  </div>
                  <a className='theme-name' href={item.rep} target='_blank'>{item.name}</a>
                  <p className='theme-desc'>{item.desc}</p>
                  <div className='theme-tag-list'>
                    {
                      item.tags.map((item, index) => {
                        const name = `#${item}`;
                        return (
                          <span className='theme-tag' key={index}>{name}</span>
                        );
                      })
                    }
                  </div>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}
