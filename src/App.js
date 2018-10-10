import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'antd/dist/antd.css'

import './App.css';

import MyForm from './Form';

const formData = {
  name: {
    title: '公司中文名',
    type: ['Input'],
    valueKey: ['name']
  },
  enName: {
    title: '公司英文名',
    type: ['Input'],
    valueKey: ['englishName']
  },
  registerPlace: {
    title: '注册地址',
    type: ['Input'],
    valueKey: ['registerPlace']
  },
  registerTime: {
    title: '注册时间',
    type: ['DatePicker'],
    valueKey: ['registerTime']
  },
  stock: {
    title: '公司简称及代码',
    type: ['Input'],
    valueKey: ['stock']
  },
  zipCode: {
    title: '邮政编码',
    type: ['InputNumber'],
    valueKey: ['zipCode']
  },
  stockRate: {
    title: '持股比例',
    type: ['Input', 'Select'],
    valueKey: ['stockRate', 'stockRateUnit']
  },
  other: {
    title: '其他描述',
    type: ['Input'],
    valueKey: ['other']
  }
}

class App extends Component {
  render() {
    const data = this.props.data;
    console.log('data', data);
    return (
      <div className="App">
        <MyForm
          data={data}
          formData={formData}
        />
      </div>
    );
  }
}

App.defaultProps = {
  data: {
    name: '茅台集团',
    englishName: 'Mao Tai Ji Tuan',
    registerPlace: '四川省黄样式',
    registerTime: moment('2019-10-10'),
    stock: '004006',
    stockRate: 12.4,
    zipCode: '4000000',
    other: '',
    stockRateUnit: '万'
  }
}

App.propTypes = {
  data: PropTypes.object
}

export default App;
