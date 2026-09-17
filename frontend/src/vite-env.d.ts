/// <reference types="vite/client" />

declare module "*.css";
declare module "*.scss";
declare module "*.sass";
declare module "*.less";
declare module "*.json";
declare module "*.svg";
declare module "*.jsx" {
  const Component: any;
  export default Component;
}
