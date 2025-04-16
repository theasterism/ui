import {
  Callout,
  CalloutDescription,
  CalloutTitle,
} from "@theanalog/orphos/callout";
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from "@theanalog/orphos/icons";
import { Fragment } from "react/jsx-runtime";

export function CalloutDemo() {
  return (
    <Fragment>
      <Callout variant="default" bordered>
        <InformationCircleIcon />
        <CalloutTitle>
          The selected emails have been marked as spam.
        </CalloutTitle>
        <CalloutDescription>
          This is an alert with icon, title and description.
        </CalloutDescription>
      </Callout>
      <Callout variant="primary" bordered>
        <InformationCircleIcon />
        <CalloutTitle>
          The selected emails have been marked as spam.
        </CalloutTitle>
        <CalloutDescription>
          This is an alert with icon, title and description.
        </CalloutDescription>
      </Callout>
      <Callout variant="warning" bordered>
        <ExclamationTriangleIcon />
        <CalloutTitle>
          The selected emails have been marked as spam.
        </CalloutTitle>
        <CalloutDescription>
          This is an alert with icon, title and description.
        </CalloutDescription>
      </Callout>
      <Callout variant="danger" bordered>
        <ExclamationTriangleIcon />
        <CalloutTitle>
          The selected emails have been marked as spam.
        </CalloutTitle>
        <CalloutDescription>
          This is an alert with icon, title and description.
        </CalloutDescription>
      </Callout>
      <Callout variant="success" bordered>
        <CheckCircleIcon />
        <CalloutTitle>
          The selected emails have been marked as spam.
        </CalloutTitle>
        <CalloutDescription>
          This is an alert with icon, title and description.
        </CalloutDescription>
      </Callout>
      <Callout variant="info" bordered>
        <CheckCircleIcon />
        <CalloutTitle>
          The selected emails have been marked as spam.
        </CalloutTitle>
        <CalloutDescription>
          This is an alert with icon, title and description.
        </CalloutDescription>
      </Callout>
      <Callout variant="upsell">
        <CheckCircleIcon />
        <CalloutTitle>
          The selected emails have been marked as spam.
        </CalloutTitle>
        <CalloutDescription>
          This is an alert with icon, title and description.
        </CalloutDescription>
      </Callout>
    </Fragment>
  );
}
