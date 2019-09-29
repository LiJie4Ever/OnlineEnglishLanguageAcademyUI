import React, {PureComponent} from 'react';
import style from './index.css';
import pic1 from 'images/a.jpg';
import pic2 from 'images/b.jpg';

export default class Page extends PureComponent {
    render() {
        return (
            <div className={style["page-box"]}>
                <p>I am too difficult</p>
                <ul>
                    <li><img src={pic1}/></li>
                    <li><img src={pic2}/></li>
                </ul>
            </div>
        )
    }
}