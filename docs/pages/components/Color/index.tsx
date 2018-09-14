import * as React from 'react';
import { Component } from 'react';
import * as md from './intro.md';
import * as colorMd from './color.md';
import * as colors from './color';
import Markdown from '@docs/components/Markdown/';
import { getContrastRatio } from './colorManipulator';
import './index.less';

export default class Color extends Component {
  mainColors = [
    'Red', 'Pink', 'Purple', 'Deep Purple', 'Indigo', 'Blue', 'Light Blue',
    'Cyan', 'Teal', 'Green', 'Light Green', 'Lime', 'Yellow', 'Amber', 'Orange',
    'Deep Orange', 'Brown', 'Blue Grey', 'Grey'
  ];

  palettes = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', 'A100', 'A200', 'A400', 'A700'];

  getColorInfo = (color: string, palette: string) => {
    const cssColor = color.replace(' ', '').replace(color.charAt(0), color.charAt(0).toLowerCase());
    const key = cssColor + palette;
    const bgColor = (colors as {[index: string]: string})[key];
    let fgColor = colors.fullBlack;
    const contrastRatio = getContrastRatio(bgColor, fgColor);
    if (contrastRatio < 7) {
      fgColor = colors.fullWhite;
    }
    return {
      key,
      value: bgColor,
      style: {
        backgroundColor: bgColor,
        color: fgColor
      }
    };
  }

  hasColor = (color: string, palette: string) => {
    const cssColor = color.replace(' ', '').replace(color.charAt(0), color.charAt(0).toLowerCase());
    const key = cssColor + palette;
    const bgColor = (colors as {[index: string]: string})[key];
    return !!bgColor;
  }

  render() {
    return (
      <div>
        <Markdown text={md}/>

        <Markdown text={colorMd}/>
        <div className='color-box'>
          {
            this.mainColors.map((color, index) => {
              return (
                <div className='color-box-item' key={index}>
                  <div className='color-demo' style={this.getColorInfo(color, '500').style}>
                    <span className='color-box-title'>{color}</span>
                  </div>
                  {
                    this.palettes.filter((palett) => this.hasColor(color, palett)).map((palett, key) => {
                      const info = this.getColorInfo(color, palett);
                      return (
                        <div key={key} style={info.style} className='color-demo'>
                          <span className='color-key'>{info.key}</span>
                          <span className='color-value'>{info.value}</span>
                        </div>
                      );
                    })
                  }
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}
