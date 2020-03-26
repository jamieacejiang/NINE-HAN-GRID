import React, {Component} from 'react';
import './App.css';
import {DatePicker} from "antd";
//引入国际化设置（中文）
import locale from 'antd/lib/date-picker/locale/zh_CN';

//人生900格
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal1: true,
            months: 0,
        }
    }

    componentWillMount() {
        document.title = '人生900格';
    }

    render() {
        let items = [];
        for (let i = 1; i <= 75; i++) {
            for (let j = 1; j <= 12; j++) {
                items.push(<div className='NINE-GRID-DIV' ref={(i - 1) * 12 + j} key={(i - 1) * 12 + j}>&nbsp;</div>)
            }
        }
        return (
            <div className='NINE-GRID-TOTAL-DIV'>
                <div>
                    <DatePicker locale={locale} onChange={(date, dateString) => this.onChange(date, dateString)}
                                picker="month" style={{width: '100%'}}/>
                    <div>您的900个月已过去{this.state.months}月，请珍惜时间。</div>
                </div>
                {items}
            </div>
        );
    }

    componentDidMount() {
        for (let i = 1; i <= this.state.months; i++) {
            this.refs[i].style.backgroundColor = "yellow"
        }
    }

    onChange(date, dateString) {
        dateString += '-1';
        let d1 = new Date(dateString);
        let d2 = new Date();
        let abs = Math.abs((d2.getFullYear() - d1.getFullYear()) * 12 + d2.getMonth() - d1.getMonth());
        this.setState({months: abs});
        for (let i = 1; i <= abs; i++) {
            this.refs[i].style.backgroundColor = "yellow"
        }
    }
}
