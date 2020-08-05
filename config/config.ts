import { defineConfig } from "umi";
import layout from "./layout.config";
import routes from "./routes.config";
import theme from "./theme.config";
import plugins from "./plugins.config";
import proxy from "./proxy.config";

const config = {
  title: "create-umi-app",
  favicon: "/assets/react.ico",
  nodeModulesTransform: {
    type: "none"
  },
  layout,
  routes,
  theme,
  plugins,
  proxy
};

export default defineConfig(config);
