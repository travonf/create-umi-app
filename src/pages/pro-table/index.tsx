import React from "react";
import { request } from "umi";
import { Tooltip, Popover } from "antd";
import { FileImageTwoTone, SkinTwoTone } from "@ant-design/icons";
import ProTable, { ProColumns } from "@ant-design/pro-table";
import { IResp, IData } from "./type";

const flatChildren = (acc: any, cur: any) => acc.concat(cur.children);

const columns: ProColumns<IData>[] = [
  {
    title: "Basic",
    children: [
      {
        title: "布尔值",
        dataIndex: "boolean",
        ellipsis: true,
        align: "center",
        renderText: (text: boolean) => String(text)
      },
      {
        title: "自然数",
        dataIndex: "natural",
        ellipsis: true,
        valueType: "digit"
      },
      {
        title: "整数",
        dataIndex: "integer",
        ellipsis: true,
        valueType: "digit"
      },
      {
        title: "浮点数",
        dataIndex: "float",
        ellipsis: true,
        valueType: "digit"
      },
      {
        title: "字符",
        dataIndex: "character",
        ellipsis: true,
        align: "center"
      },
      {
        title: "字符串",
        dataIndex: "string",
        ellipsis: true
      },
      {
        title: "范围",
        dataIndex: "range",
        ellipsis: true,
        align: "center",
        renderText: (text: number[]) => text.join(",")
      }
    ]
  },
  // Date
  {
    title: "Date",
    children: [
      {
        title: "日期",
        dataIndex: "date",
        ellipsis: true
      },
      {
        title: "时间",
        dataIndex: "time",
        ellipsis: true
      },
      {
        title: "日期和时间",
        dataIndex: "datetime",
        ellipsis: true
      },
      {
        title: "当前",
        dataIndex: "now",
        ellipsis: true
      }
    ]
  },
  {
    title: "Image",
    children: [
      {
        title: "图片地址",
        dataIndex: "img",
        ellipsis: false,
        align: "center",
        renderText: (text: string) => (
          <Popover title="Image" content={<img src={text} alt="img" />}>
            <FileImageTwoTone />
          </Popover>
        )
      },
      {
        title: "图片编码",
        dataIndex: "dataImage",
        ellipsis: false,
        align: "center",
        renderText: (text: string) => (
          <Popover title="Image" content={<img src={text} alt="img" />}>
            <FileImageTwoTone />
          </Popover>
        )
      }
    ]
  },
  {
    title: "Color",
    children: [
      {
        title: "颜色",
        dataIndex: "color",
        ellipsis: false,
        align: "center",
        renderText: (text: string) => (
          <Tooltip title={text}>
            <SkinTwoTone twoToneColor={text} />
          </Tooltip>
        )
      },
      {
        title: "hex",
        dataIndex: "hex",
        ellipsis: false,
        align: "center",
        renderText: (text: string) => (
          <Tooltip title={text}>
            <SkinTwoTone twoToneColor={text} />
          </Tooltip>
        )
      },
      {
        title: "rgb",
        dataIndex: "rgb",
        ellipsis: false,
        align: "center",
        renderText: (text: string) => (
          <Tooltip title={text}>
            <SkinTwoTone twoToneColor={text} />
          </Tooltip>
        )
      },
      {
        title: "rgba",
        dataIndex: "rgba",
        ellipsis: false,
        align: "center",
        renderText: (text: string) => (
          <Tooltip title={text}>
            <SkinTwoTone twoToneColor={text} />
          </Tooltip>
        )
      },
      {
        title: "hsl",
        dataIndex: "hsl",
        ellipsis: false,
        align: "center",
        renderText: (text: string) => (
          <Tooltip title={text}>
            <SkinTwoTone twoToneColor={text} />
          </Tooltip>
        )
      }
    ]
  },
  {
    title: "Text",
    children: [
      {
        title: "段落",
        dataIndex: "paragraph",
        copyable: true,
        ellipsis: true,
        width: 200
      },
      {
        title: "句子",
        dataIndex: "sentence",
        copyable: true,
        ellipsis: true,
        width: 200
      },
      {
        title: "单词",
        dataIndex: "word",
        ellipsis: true
      },
      {
        title: "标题",
        dataIndex: "title",
        copyable: true,
        ellipsis: true,
        width: 200
      },
      {
        title: "中文段落",
        dataIndex: "cparagraph",
        copyable: true,
        ellipsis: true,
        width: 200
      },
      {
        title: "中文句子",
        dataIndex: "csentence",
        copyable: true,
        ellipsis: true,
        width: 200
      },
      {
        title: "汉字",
        dataIndex: "cword",
        ellipsis: true
      },
      {
        title: "中文标题",
        dataIndex: "ctitle",
        copyable: true,
        ellipsis: true,
        width: 100
      }
    ]
  },
  {
    title: "Name",
    children: [
      {
        title: "名字",
        dataIndex: "first",
        ellipsis: true
      },
      {
        title: "姓氏",
        dataIndex: "last",
        ellipsis: true
      },
      {
        title: "姓名",
        dataIndex: "name",
        ellipsis: true
      },
      {
        title: "名字",
        dataIndex: "cfirst",
        ellipsis: true
      },
      {
        title: "姓氏",
        dataIndex: "clast",
        ellipsis: true
      },
      {
        title: "姓名",
        dataIndex: "cname",
        ellipsis: true
      }
    ]
  },
  {
    title: "Web",
    children: [
      {
        title: "url",
        dataIndex: "url",
        ellipsis: true
      },
      {
        title: "域名",
        dataIndex: "domain",
        ellipsis: true
      },
      {
        title: "协议",
        dataIndex: "protocol",
        ellipsis: true
      },
      {
        title: "tld",
        dataIndex: "tld",
        ellipsis: true
      },
      {
        title: "邮箱",
        dataIndex: "email",
        ellipsis: true
      },
      {
        title: "ip",
        dataIndex: "ip",
        ellipsis: true
      }
    ]
  },
  {
    title: "Address",
    children: [
      {
        title: "区域",
        dataIndex: "region",
        ellipsis: true
      },
      {
        title: "省份",
        dataIndex: "province",
        ellipsis: true
      },
      {
        title: "城市",
        dataIndex: "city",
        ellipsis: true
      },
      {
        title: "区县",
        dataIndex: "county",
        ellipsis: true
      },
      {
        title: "邮编",
        dataIndex: "zip",
        ellipsis: true
      }
    ]
  },
  {
    title: "Helper",
    children: [
      {
        title: "首字母大写",
        dataIndex: "capitalize",
        ellipsis: true
      },
      {
        title: "大写",
        dataIndex: "upper",
        ellipsis: true
      },
      {
        title: "小写",
        dataIndex: "lower",
        ellipsis: true
      },
      {
        title: "挑选",
        dataIndex: "pick",
        ellipsis: true
      },
      {
        title: "乱序",
        dataIndex: "shuffle",
        ellipsis: true
      }
    ]
  },
  {
    title: "Miscellaneous",
    children: [
      {
        title: "guid",
        dataIndex: "guid",
        ellipsis: true
      },
      {
        title: "id",
        dataIndex: "id",
        ellipsis: true
      },
      {
        title: "自增",
        dataIndex: "increment",
        ellipsis: true
      }
    ]
  }
];

export default () => (
  <ProTable
    headerTitle="高级表格"
    options={{ density: true, fullScreen: true, reload: true, setting: true }}
    rowKey="guid"
    columns={columns.reduce(flatChildren, [])}
    request={(params = {}) => request<IResp>("/api/data", { params })}
    bordered
    scroll={{ x: true }}
  />
);
