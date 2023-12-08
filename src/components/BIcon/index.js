/*
 * @Name: 自定义图标
 * @Description: 引用svg格式, antd的Icon组件
 * @Author: biubiu
 * @Date: 2023-12-08
*/

import React, { Component } from 'react';
import Icon from '@ant-design/icons';

/* 引入svg */
// Echarts图集
import { ReactComponent as menuIcon } from '@/assets/icon/menu.svg';
import { ReactComponent as barIcon } from '@/assets/icon/bar.svg';
import { ReactComponent as lineIcon } from '@/assets/icon/line.svg';
import { ReactComponent as pieIcon } from '@/assets/icon/pie.svg';
import { ReactComponent as mapIcon } from '@/assets/icon/map.svg';
import { ReactComponent as elseIcon } from '@/assets/icon/else.svg';

// 图标列表
const iconList = {
  menuIcon: menuIcon,
  barIcon: barIcon,
  lineIcon: lineIcon,
  pieIcon: pieIcon,
  mapIcon: mapIcon,
  elseIcon: elseIcon,
}

const BIcon = props => {
  const { type, ...other } = props;
  if (iconList[type]) {
    return <Icon component={iconList[type]} {...other} />;
  } else {
    return <Icon type={type} {...other} />;
  }
};

export default BIcon;