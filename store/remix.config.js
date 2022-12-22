const _serverBuildTarget =
  process.env.NODE_ENV === "development"
    ? undefined
    : process.env.SERVER_BUILD_TARGET

const serverBuildTarget = ["vercel"].includes(_serverBuildTarget) ? _serverBuildTarget : undefined

const serverMap = {
  vercel: "./server.vercel.ts"
}
/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget,
  server: serverMap[serverBuildTarget],
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
};
