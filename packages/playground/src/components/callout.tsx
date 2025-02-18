import { CheckCircledIcon, ExclamationTriangleIcon, InfoCircledIcon } from "@radix-ui/react-icons";
import { Callout, CalloutTitle, CalloutDescription } from "@theanalog/orphos/callout";
import { Fragment } from "react/jsx-runtime";

export function CalloutDemo() {
  return (
    <Fragment>
      <Callout variant="default">
        <InfoCircledIcon />
        <CalloutTitle>The selected emails have been marked as spam.</CalloutTitle>
        <CalloutDescription>This is an alert with icon, title and description.</CalloutDescription>
      </Callout>
      <Callout bordered variant="warning">
        <ExclamationTriangleIcon />
        <CalloutTitle>The selected emails have been marked as spam.</CalloutTitle>
        <CalloutDescription>This is an alert with icon, title and description.</CalloutDescription>
      </Callout>
      <Callout bordered variant="critical">
        <ExclamationTriangleIcon />
        <CalloutTitle>The selected emails have been marked as spam.</CalloutTitle>
        <CalloutDescription>This is an alert with icon, title and description.</CalloutDescription>
      </Callout>
      <Callout transparent variant="success">
        <CheckCircledIcon />
        <CalloutTitle>The selected emails have been marked as spam.</CalloutTitle>
        <CalloutDescription>This is an alert with icon, title and description.</CalloutDescription>
      </Callout>{" "}
    </Fragment>
  );
}
