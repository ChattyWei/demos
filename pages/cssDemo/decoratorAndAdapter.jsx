/**
 * Created by weijiahui on 2017/5/10.
 */
import React, {PropTypes} from 'react';

const Component = ({btnClick}) => (
    <div>
        <input placeholder="name" type="text" id="name_txt"/>
        <button id="A" onClick={()=>btnClick()}>测试装饰器</button>
    </div>
);

export default Component;