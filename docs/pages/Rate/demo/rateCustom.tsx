import * as React from 'react';
import { Rate, Icon} from '../../../../components/';

export default function () {
  return (
    <div>
      <Rate value={2} character="牛" clear onChange={(v) => console.log(`当前得分：${v}`)}/>
      <Rate
        value={2}
        character={<Icon type="social-github" style={{fontSize: '20px'}}/>}
        clear
        half
        onChange={(v) => console.log(`当前得分：${v}`)}
      />
    </div>
  )
}
