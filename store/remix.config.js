const serverBuildTarget =
  process.env.NODE_ENV === "development"
    ? undefined
    : process.env.SERVER_TARGET_NODE === "true"
      ? undefined
      : "vercel";

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget,
  server: serverBuildTarget === "vercel" ? "./server.vercel.ts" : undefined,
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
};
