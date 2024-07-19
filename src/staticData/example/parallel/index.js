/*
 * @Name: 平行坐标图集静态数据
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2024-07-18
*/

import parallel1Img from "@/assets/image/example/parallel/parallel1.png";

export const ParallelChartData = [
  {
    id: "parallel1",
    name: "基础平行坐标图",
    type: "parallel",
    date: "2023.12.25",
    exampleImg: parallel1Img,
    remark: "基础平行坐标图",
    renderer: "svg",
    code: "const line1 = [\n  '博士后流动站',\n  '财经研究所',\n  '长三角与长江经济带发展研究院',\n  '城乡发展研究院',\n  '党委教师工作部'\n];\nconst line2 = [126, 26, 50, 44, 38];\nconst line3 = [1.6, 2.6, 1, 1, 1];\nconst line4 = [106, 206, 50, 44, 38];\nconst line5 = [10, 20, 50, 40, 30];\nconst pj = ['校均值', 40.5625, 1.8787805, 43.9279167, 26.2790244];\n\nconst schema = [\n  {\n    name: '部门',\n    index: 0,\n    text: '部门'\n  },\n  {\n    name: '项目数量',\n    index: 1,\n    text: '项目数量'\n  },\n  {\n    name: '人均项目数',\n    index: 2,\n    text: '人均项目数'\n  },\n  {\n    name: '合同经费',\n    index: 3,\n    text: '合同经费'\n  },\n  {\n    name: '人均合同经费',\n    index: 4,\n    text: ' 人均合同经费'\n  }\n];\n\nfunction getdata() {\n  let arr = [];\n  for (let i = 0; i < line1.length; i++) {\n    arr.push([line1[i], line2[i], line3[i], line4[i], line5[i]]);\n  }\n  return arr;\n}\n\nlet labelBuld = [];\nvar lineStyle = {\n  width: 2,\n  color: function (params) {\n    let xmss = params.data[1]; // 项目数量值\n    let color = xmss >= pj[1] ? '#61ddaa' : '#74A0F9';\n    if (xmss < pj[1]) {\n      labelBuld.push(params.data[0]);\n    }\n    return color;\n  }\n};\n\noption = {\n  tooltip: {\n    show: true,\n    formatter: function (params) {\n      let name = params.name;\n      let data = params.value;\n      return `<div>\n        <div>部门：${name}</div>\n        <div>项目数量：${data[1]}个</div>\n        <div>人均项目数：${data[2]}个</div>\n        <div>合同经费：${data[3]}万元</div>\n        <div>人均合同经费：${data[4]}万元</div>\n      </div>`;\n    }\n  },\n  parallelAxis: [\n    {\n      dim: 0,\n      name: schema[0].text,\n      type: 'category',\n      data: [...line1, '校均值'],\n      axisLabel: {\n        align: 'right',\n        padding: [2, 5, 0, 0],\n        formatter: function (params, index) {\n          let newParamsName = params;\n          let paramsNameNumber = params.length; // 实际标签的个数\n          let provideNumber = 8; // 每行能显示的字的个数\n          /**\n           * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签\n           */\n          // 条件等同于rowNumber>1\n          if (paramsNameNumber > provideNumber) {\n            newParamsName = params.substring(0, 8) + '...'; // 最终拼接成的字符串\n          } else {\n            // 将旧标签的值赋给新标签\n            newParamsName = params;\n          }\n          //将最终的字符串返回\n          if (params === '校均值') {\n            return `{a|${params}} {b0|}`;\n          } else {\n            if (labelBuld.indexOf(params) > -1) {\n              return `{a|${newParamsName}} {b1|}`;\n            } else {\n              return `{a|${newParamsName}} {b2|}`;\n            }\n          }\n        },\n        rich: {\n          b0: {\n            width: 8,\n            height: 8,\n            backgroundColor: '#fff',\n            borderColor: '#F7CB46',\n            borderWidth: 3,\n            borderRadius: [50, 50, 50, 50]\n          },\n          b1: {\n            width: 8,\n            height: 8,\n            backgroundColor: '#fff',\n            borderColor: '#74a0f9',\n            borderWidth: 3,\n            borderRadius: [50, 50, 50, 50]\n          },\n          b2: {\n            width: 8,\n            height: 8,\n            backgroundColor: '#fff',\n            borderColor: '#61ddaa',\n            borderWidth: 3,\n            borderRadius: [50, 50, 50, 50]\n          },\n          a: {\n            padding: [0, 5, 0, 0],\n            lineHeight: 16\n          }\n        }\n      }\n    },\n    {\n      dim: 1,\n      name: schema[1].text\n    },\n    {\n      dim: 2,\n      name: schema[2].text\n    },\n    {\n      dim: 3,\n      name: schema[3].text\n    },\n    {\n      dim: 4,\n      name: schema[4].text\n    }\n  ],\n  parallel: {\n    left: '15%',\n    bottom: '24'\n  },\n  series: [\n    {\n      name: 'parallel',\n      type: 'parallel',\n      lineStyle: lineStyle,\n      data: getdata(),\n      emphasis: {\n        focus: 'self'\n      }\n    },\n    {\n      name: 'parallel',\n      type: 'parallel',\n      lineStyle: {\n        width: 2,\n        opacity: 1,\n        color: '#F7CB46'\n      },\n      data: [pj],\n      emphasis: {\n        disabled: true\n      }\n    }\n  ]\n};"
  },
]