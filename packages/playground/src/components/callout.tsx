import { Callout } from "@theanalog/orphos/callout";
import { Fragment } from "react/jsx-runtime";

export function CalloutDemo() {
  return (
    <Fragment>
      <Callout variant="default" description="You can add components to your app using the cli." />
      <Callout bordered variant="info" description="You can add components to your app using the cli." />
      <Callout
        bordered
        variant="warning"
        description="With Hidden Title! This should be much longer like 50 words or more. dismissable"
      />
      <Callout bordered variant="critical" description="With Hidden Title!" />
      <Callout bordered variant="success" description="With Hidden Title! dismissable" />
    </Fragment>
  );
}
