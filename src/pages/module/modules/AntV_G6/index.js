/*
 * @Name: AntV_G6
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2025-05-20
*/

import styles from "./index.less";
import {useEffect, useRef, useState} from "react";
import {Spin, Tooltip} from "antd";
import {ConcentricLayout, ExtensionCategory, Graph, register} from '@antv/g6';
import { ReactNode } from '@antv/g6-extension-react';
import {useDispatch} from "react-redux";
import CustomizeNode from "./CustomizeNode";
import {AimOutlined, ExportOutlined, InfoCircleOutlined, ZoomInOutlined, ZoomOutOutlined} from "@ant-design/icons";

// 注册react节点
register(ExtensionCategory.NODE, 'react', ReactNode);

const AntV_G6 = (props) => {
  const dispatch = useDispatch();

  const treeRef = useRef(null);
  const graphRef = useRef(null);
  const [treeLoading, setTreeLoading] = useState(true);
  const [treeData, setTreeData] = useState({});

  useEffect(() => {
    getTreeData();
  }, []);
  // 获取树数据
  const getTreeData = () => {
    setTreeLoading(true);

    dispatch({
      type: "AntV_G6/fetchGetTreeData",
    }).then(res => {
      setTreeData(res);
      setTreeLoading(false);
    });
  }

  // 渲染树图
  useEffect(() => {
    if (!treeRef.current) return;

    // 销毁旧实例
    if (graphRef.current) {
      graphRef.current.destroy();
    }

    // 获取画布信息
    const containerWidth = treeRef.current.clientWidth;
    const containerHeight = treeRef.current.clientHeight;

    // 渲染树图画布
    const graph = new Graph({
      container: treeRef.current,
      autoFit: 'view',
      padding: 50,
      width: containerWidth,
      height: containerHeight,
      data: treeData,
      node: {
        type: 'react',
        style: {
          size: data => {
            if (data.data.level < 2) {
              return 48
            }else {
              return 18
            }
          },
          component: (data) =>
            <CustomizeNode
              graph={graph}
              nodeId={data.id}
              nodeStates={data.states}
              nodeData = {data.data}
            />,
        },
      },
      edge: {
        type: "line",
        style: {
          lineWidth: 1,
          stroke: '#CADDFC'
        },
        state: {
          highlight: {
            lineWidth: 3,
            stroke: (d) => {
              const targetData = graph.getNodeData(d.target);
              return targetData.data.color
            },
          },
        },
      },
      layout: {
        type: 'compact-box',
        radial: true,
        direction: 'RL',
        getVGap: (data) => {
          return 30
        },
        getHGap: (data) => {
          if (data.data.level === 1) {
            return 80
          }
          return 50
        },
      },
      behaviors: [
        'zoom-canvas',
        'drag-canvas',
        {
          key: 'drag-element',
          type: 'drag-element',
          state: 'dragActive',
          enable: event => {
            const targetData = graph.getNodeData(event.target?.id);
            return targetData.data.level > 0
          },
        },
        {
          key: 'hover-activate',
          type: 'hover-activate',
          degree: 5,
          direction: 'in',
          state: 'highlight',
          enable: (e) => {
            if (e.targetType === 'node') {
              return true;
            }
            return false;
          },
          // onHover: (event) => {
          //   event.view.setCursor('pointer');
          // },
          // onHoverEnd: (event) => {
          //   event.view.setCursor('default');
          // },
        },
      ],
      plugins: [

      ],
      animation: false,
    });

    graphRef.current = graph;

    graph.render();
  },[treeData]);

  const toolData = [
    {key: 'zoom-in', icon: <ZoomInOutlined />, tip: "放大"},
    {key: 'zoom-out', icon: <ZoomOutOutlined />, tip: "缩小"},
    {key: 'auto-fit', icon: <AimOutlined />, tip: "自适应画布"},
    {key: 'export', icon: <ExportOutlined />, tip: "导出图片"},
  ]

  const toolSelect = (type) => {
    switch (type) {
      case 'zoom-in':
        graphRef.current.zoomBy(1.2, {duration: 300,});
        break;
      case 'zoom-out':
        graphRef.current.zoomBy(0.8, {duration: 300,});
        break;
      case 'auto-fit':
        graphRef.current.fitView();
        break;
      case 'export':
        downloadImage();
        break;
    }
  }

  const downloadImage = () => {
    const dataURL = graphRef.current.toDataURL();
    console.log(dataURL)
    // const [head, content] = dataURL.split(',');
    // const contentType = head.match(/:(.*?);/)?.[1];
    //
    // const bstr = atob(content);
    // let length = bstr.length;
    // const u8arr = new Uint8Array(length);
    //
    // while (length--) {
    //   u8arr[length] = bstr.charCodeAt(length);
    // }
    //
    // const blob = new Blob([u8arr], { type: contentType });
    //
    // const url = URL.createObjectURL(blob);
    // const a = document.createElement('a');
    // a.href = url;
    // a.download = 'graph.png';
    // a.click();
  }

  return (
    <div className={styles.g6}>
      <div className={styles.toolbar}>
        {toolData.map((item,index) => {
          return <div onClick={() => toolSelect(item.key)}>
            <Tooltip title={item.tip} placement={"right"}>
              {item.icon}
            </Tooltip>
          </div>
        })}
      </div>
      <div className={styles.tips}>
        <div className={styles.icon}>
          <InfoCircleOutlined />
        </div>
        双击可收起/展开节点
      </div>
      {treeLoading ? <Spin/> : <>
        <div className={styles.treeMap} ref={treeRef}/>
      </>}
    </div>
  )
}
export default AntV_G6;