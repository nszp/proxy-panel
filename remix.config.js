const {
  createRoutesFromFolders,
} = require("@remix-run/v1-route-convention");

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: [".*"],
  future: {
    // makes the warning go away in v1.15+
    v2_routeConvention: true,
    v2_dev: true,
    v2_errorBoundary: true,
    v2_headers: true,
    v2_meta: true,
    v2_normalizeFormMethod: true
  },
  serverModuleFormat: "cjs",
  tailwind: true,
  routes(defineRoutes) {
    // uses the v1 convention, works in v1.15+ and v2
    return createRoutesFromFolders(defineRoutes);
  },
};