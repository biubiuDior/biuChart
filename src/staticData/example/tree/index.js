/*
 * @Name: 树图集静态数据
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2024-07-18
*/

import boxplot1Img from "@/assets/image/example/boxplot/boxplot1.png";

export const TreeChartData = [
/*  {
    id: "tree1",
    name: "树图",
    type: "tree",
    date: "2024.01.09",
    exampleImg: boxplot1Img,
    remark: "基础箱形图，均值对比，离散点对比",
    renderer: "svg",
    code: "const xData = [\n  '2017年第一学期',\n  '2017年第二学期',\n  '2018年第一学期',\n  '2018年第二学期',\n  '2019年第一学期',\n  '2019年第二学期'\n];\nconst cjjdData = [88, 94, 94, 90, 92, 94]; // 成绩均点\n// [最小值，下四分位，中位数，上四分位，最大值]\nconst xxtData = [\n  [36, 46, 60, 70, 82],\n  [38, 50, 58, 68, 86],\n  [44, 52, 60, 70, 88],\n  [40, 50, 62, 78, 90],\n  [42, 52, 64, 72, 82],\n  [34, 50, 66, 74, 84]\n]; // 箱形图\nconst lsqdData = [30, 32, 40, 35, 36, 28];\n\noption = {\n  tooltip: {\n    trigger: 'item',\n    axisPointer: {\n      type: 'shadow'\n    }\n  },\n  grid: {\n    left: '41',\n    right: '0',\n    top: '63',\n    bottom: '21'\n  },\n  legend: {\n    data: [\n      {\n        name: '离散群点'\n      },\n      {\n        name: '成绩均点'\n      }\n    ],\n    type: 'scroll',\n    right: '0',\n    top: '22',\n    itemGap: 25,\n    itemWidth: 15,\n    itemHeight: 15,\n    textStyle: {\n      fontSize: '14',\n      fontFamily: 'Source Han Sans CN-Regular',\n      color: 'rgba(0, 0, 0, 0.85)'\n    }\n  },\n  xAxis: {\n    type: 'category',\n    data: xData,\n    name: '学期',\n    axisLabel: {\n      color: 'rgba(0, 0, 0, 0.45)',\n      textStyle: {\n        fontSize: '12',\n        fontFamily: 'Source Han Sans CN-Regular'\n      }\n    },\n    axisTick: {\n      show: false\n    },\n    axisLine: {\n      lineStyle: {\n        color: 'rgba(0, 0, 0, 0.1)'\n      }\n    },\n    splitLine: {\n      show: false\n    }\n  },\n  yAxis: {\n    type: 'value',\n    name: '单位：分',\n    nameTextStyle: {\n      color: 'rgba(0, 0, 0, 0.45)',\n      fontSize: '12',\n      fontFamily: 'Source Han Sans CN-Regular',\n      align: 'left',\n      verticalAlign: 'center'\n    },\n    axisLabel: {\n      color: 'rgba(0, 0, 0, 0.45)',\n      fontSize: '12',\n      fontFamily: 'Source Han Sans CN-Regular'\n    },\n    axisTick: {\n      show: false\n    },\n    axisLine: {\n      show: false\n    },\n    splitLine: {\n      lineStyle: {\n        color: 'rgba(0, 0, 0, 0.1)'\n      }\n    }\n  },\n  series: [\n    {\n      name: '成绩趋势',\n      type: 'boxplot',\n      z: -1,\n      data: xxtData,\n      itemStyle: {\n        borderColor: 'rgba(57, 126, 240, 0.45)',\n        borderWidth: 1\n      },\n      tooltip: {\n        formatter: function (param) {\n          return [\n            '最大值: ' + param.data[5] + '分',\n            '上四分位: ' + param.data[4] + '分',\n            '中位数: ' + param.data[3] + '分',\n            '下四分位: ' + param.data[2] + '分',\n            '最小值: ' + param.data[1] + '分'\n          ].join('<br/>');\n        }\n      }\n    },\n    {\n      name: '成绩均点',\n      type: 'line',\n      data: cjjdData,\n      symbol: 'circle',\n      symbolSize: 10,\n      lineStyle: {\n        width: 2,\n        color: '#FAAD14'\n      },\n      itemStyle: {\n        color: {\n          type: 'linear',\n          x: 0,\n          y: 1,\n          x2: 0,\n          y2: 0,\n          colorStops: [\n            {\n              offset: 0,\n              color: '#FFB536' // 0% 处的颜色\n            },\n            {\n              offset: 1,\n              color: '#FF7B36' // 100% 处的颜色\n            }\n          ],\n          global: false // 缺省为 false\n        },\n        borderColor: {\n          type: 'linear',\n          x: 0,\n          y: 0,\n          x2: 1,\n          y2: 0,\n          colorStops: [\n            {\n              offset: 0,\n              color: '#FFB536' // 0% 处的颜色\n            },\n            {\n              offset: 1,\n              color: '#FF7B36' // 100% 处的颜色\n            }\n          ],\n          global: false // 缺省为 false\n        },\n        borderWidth: 2\n      }\n    },\n    {\n      name: '离散群点',\n      type: 'scatter',\n      symbolSize: 12,\n      itemStyle: {\n        color: {\n          type: 'linear',\n          x: 0,\n          y: 1,\n          x2: 0,\n          y2: 0,\n          colorStops: [\n            {\n              offset: 0,\n              color: '#59EBD7' // 0% 处的颜色\n            },\n            {\n              offset: 1,\n              color: '#3ED89B' // 100% 处的颜色\n            }\n          ],\n          global: false // 缺省为 false\n        }\n      },\n      data: lsqdData\n    }\n  ]\n};"
  },*/
]