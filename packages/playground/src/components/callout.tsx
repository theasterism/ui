import { Button } from "orphos/button";
import { Callout, CalloutMessage, CalloutAction } from "orphos/callout";
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from "orphos/icons";

export function CalloutDemo() {
  return (
    <>
      <Callout variant="default">
        <CalloutMessage>
          <InformationCircleIcon />
          This is an alert with icon, title.
        </CalloutMessage>
      </Callout>
      <Callout outline>
        <CalloutMessage>
          <InformationCircleIcon />
          This is an alert with icon, title and action.
        </CalloutMessage>
        <CalloutAction>Upgrade</CalloutAction>
      </Callout>
      <Callout>
        <CalloutMessage>
          <InformationCircleIcon />
          This is an alert with icon, title and action.
        </CalloutMessage>
        <CalloutAction>Upgrade</CalloutAction>
      </Callout>
      <Callout variant="primary">
        <CalloutMessage>
          <InformationCircleIcon />
          This is an alert with icon, title.
        </CalloutMessage>
      </Callout>
      <Callout variant="warning">
        <CalloutMessage>
          <ExclamationTriangleIcon />
          This is an alert with icon, title and action.
        </CalloutMessage>
        <CalloutAction>Procced</CalloutAction>
      </Callout>
      <Callout variant="danger">
        <CalloutMessage>
          <ExclamationTriangleIcon />
          This is an alert with icon, title and action.
        </CalloutMessage>
        <CalloutAction>Try again</CalloutAction>
      </Callout>
      <Callout variant="success">
        <CalloutMessage>
          <ExclamationTriangleIcon />
          This is an alert with icon, title.
        </CalloutMessage>
      </Callout>
      <Callout variant="info">
        <CalloutMessage>
          <ExclamationTriangleIcon />
          This is an alert with icon, title.
        </CalloutMessage>
      </Callout>
    </>
  );
}
