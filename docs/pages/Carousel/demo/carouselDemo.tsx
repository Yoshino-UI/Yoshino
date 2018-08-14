import * as React from 'react';
import { Carousel, Button } from '../../../../components/';

export default function() {
  const img = [
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534233250539&di=ee41677311bd86256d22e8ea14e9d534&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fback_pic%2Fqk%2Fback_origin_pic%2F00%2F03%2F23%2F7cd48ff3f1eac8b803aa086fc2f505f4.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534233250539&di=c267c059b1a11c109ed642b87b440f5e&imgtype=0&src=http%3A%2F%2Fimg5.xiazaizhijia.com%2Fwalls%2F20150813%2F1440x900_9089db03e171ff2.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534233250539&di=a66cf662a460e6a1f931ec9ed1485b4f&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01f16659df31b3a8012044639768e7.png%402o.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534233250537&di=2707a57edacd9b981dbdb17a38b7f203&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F038fbce55dea4370000015995570a1d.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534233250536&di=443a0d8733ae1b731026f27fbb59fb43&imgtype=0&src=http%3A%2F%2Ftravel.cnr.cn%2Flist%2F20150320%2FW020150320422759523038.jpg',
  ];

  let dom: Carousel;

  return (
    <div>
      <Button
        style={{marginBottom: 20}}
        type='primary'
        onClick={() => dom.goto(Math.ceil(Math.random() * 4))}
      >
        随机调到某页
      </Button>
      <Carousel
        style={{textAlign: 'center'}}
        ref={(v: Carousel) => dom = v}
      >
        {
          img.map((item, key) => {
            return (
              <img src={item} style={{width: '100%', height: '100%'}} key={key}/>
            )
          })
        }
      </Carousel>
    </div>
  );
}
