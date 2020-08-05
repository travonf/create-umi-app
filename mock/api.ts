import mockjs from "mockjs";

const resp = mockjs.mock({
  code: 200,
  "data|10-20": [
    {
      // Basic
      boolean: "@boolean",
      natural: "@natural",
      integer: "@integer",
      float: "@float",
      character: "@character",
      string: "@string",
      range: "@range(5)",
      // Date
      date: "@date",
      time: "@time",
      datetime: "@datetime",
      now: "@now",
      // Image
      img: "@img",
      // dataImage: '@dataImage',
      // Color
      color: "@color",
      hex: "@hex",
      rgb: "@rgb",
      rgba: "@rgba",
      hsl: "@hsl",
      // Text
      paragraph: "@paragraph",
      sentence: "@sentence",
      word: "@word",
      title: "@title",
      cparagraph: "@cparagraph",
      csentence: "@csentence",
      cword: "@cword",
      ctitle: "@ctitle",
      // Name
      first: "@first",
      last: "@last",
      name: "@name",
      cfirst: "@cfirst",
      clast: "@clast",
      cname: "@cname",
      // Web
      url: "@url",
      domain: "@domain",
      protocol: "@protocol",
      tld: "@tld",
      email: "@email",
      ip: "@ip",
      // Address
      region: "@region",
      province: "@province",
      city: "@city",
      county: "@county",
      zip: "@zip",
      // Helper
      capitalize: "@capitalize(capitalize)",
      upper: "@upper(upper)",
      lower: "@lower(lower)",
      pick: '@pick(["a", "e", "i", "o", "u"])',
      shuffle: '@shuffle(["a", "e", "i", "o", "u"])',
      // Miscellaneous
      guid: "@guid",
      id: "@id",
      increment: "@increment"
    }
  ],
  mesg: "[模拟]数据获取成功"
});

const proxy = {
  "/api/data": resp
};

export default proxy;
