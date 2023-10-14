import { Spin } from "antd";

export function Loader():JSX.Element {
  return <div className="page spinner-page" >
    <Spin size="large"></Spin>
  </div>
}