export interface IResp {
  code: number;
  data: IData[];
  mesg: string;
}

export interface IData {
  boolean: boolean;
  natural: number;
  integer: number;
  float: number;
  character: string;
  string: string;
  range: number[];

  date: string;
  time: string;
  datetime: string;
  now: string;

  img: string;
  dataImage: string;

  color: string;
  hex: string;
  rgb: string;
  rgba: string;
  hsl: string;

  paragraph: string;
  sentence: string;
  word: string;
  title: string;
  cparagraph: string;
  csentence: string;
  cword: string;
  ctitle: string;

  first: string;
  last: string;
  name: string;
  cfirst: string;
  clast: string;
  cname: string;

  url: string;
  domain: string;
  protocol: string;
  tld: string;
  email: string;
  ip: string;

  region: string;
  province: string;
  city: string;
  county: string;
  zip: string;

  capitalize: string;
  upper: string;
  lower: string;
  pick: string;
  shuffle: string[];

  guid: string;
  id: string;
  increment: number;
}
