import * as React from 'react';
import { Tooltip, Button } from '@yoshino/components/';

export default function() {
  return (
    <div style={{padding: '30px 100px'}}>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Tooltip title='提示' placement='topLeft'><Button>topLeft</Button></Tooltip>
        <Tooltip title='提示' placement='top'><Button>top</Button></Tooltip>
        <Tooltip title='提示' placement='topRight'><Button>topRight</Button></Tooltip>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <Tooltip title='提示' placement='leftTop'><Button>leftTop</Button></Tooltip>
        <Tooltip title='提示' placement='rightTop'><Button>rightTop</Button></Tooltip>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <Tooltip title='提示' placement='left'><Button>left</Button></Tooltip>
        <Tooltip title='提示' placement='right'><Button>right</Button></Tooltip>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <Tooltip title='提示' placement='leftBottom'><Button>leftBottom</Button></Tooltip>
        <Tooltip title='提示' placement='rightBottom'><Button>rightBottom</Button></Tooltip>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Tooltip title='提示' placement='bottomLeft'><Button>bottomLeft</Button></Tooltip>
        <Tooltip title='提示' placement='bottom'><Button>bottom</Button></Tooltip>
        <Tooltip title='提示提示提示提示' placement='bottomRight'><Button>bottomRight</Button></Tooltip>
      </div>
    </div>
  );
}
