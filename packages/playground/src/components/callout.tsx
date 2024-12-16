import { Button } from "@theanalog/orphos/button";
import { Callout } from "@theanalog/orphos/callout";
import { Fragment } from "react/jsx-runtime";

export function CalloutDemo() {
  return (
    <Fragment>
      <Callout variant="default" description="You can add components to your app using the cli." />
      <Callout
        bordered
        variant="info"
        title="Hello World"
        description="You can add components to your app using the cli."
      />
      <Callout
        onDismiss={() => alert("dismissed")}
        bordered
        transparent
        variant="warning"
        title="Not Hidden Title"
        description="With Hidden Title! This should be much longer like 50 words or more. dismissable"
      />
      <Callout bordered variant="critical" hideTitle title="Hidden Title" description="With Hidden Title!" />
      <Callout
        onDismiss={() => alert("dismissed")}
        bordered
        transparent
        variant="success"
        hideTitle
        title="Hidden Title"
        description="With Hidden Title! dismissable"
      />
    </Fragment>
  );
}
