import { Callout, CalloutDescription, CalloutTitle } from "orphos/callout";
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from "orphos/icons";

export function CalloutDemo() {
  return (
    <>
      <Callout variant="default">
        <InformationCircleIcon />
        <CalloutTitle>
          The selected emails have been marked as spam.
        </CalloutTitle>
        <CalloutDescription>
          This is an alert with icon, title and description.
        </CalloutDescription>
      </Callout>
      <Callout variant="primary">
        <InformationCircleIcon />
        <CalloutTitle>
          The selected emails have been marked as spam.
        </CalloutTitle>
        <CalloutDescription>
          This is an alert with icon, title and description.
        </CalloutDescription>
      </Callout>
      <Callout variant="warning">
        <ExclamationTriangleIcon />
        <CalloutTitle>
          The selected emails have been marked as spam.
        </CalloutTitle>
        <CalloutDescription>
          This is an alert with icon, title and description.
        </CalloutDescription>
      </Callout>
      <Callout variant="danger">
        <ExclamationTriangleIcon />
        <CalloutTitle>
          The selected emails have been marked as spam.
        </CalloutTitle>
        <CalloutDescription>
          This is an alert with icon, title and description.
        </CalloutDescription>
      </Callout>
      <Callout variant="success">
        <CheckCircleIcon />
        <CalloutTitle>
          The selected emails have been marked as spam.
        </CalloutTitle>
        <CalloutDescription>
          This is an alert with icon, title and description.
        </CalloutDescription>
      </Callout>
      <Callout variant="info">
        <CheckCircleIcon />
        <CalloutTitle>
          The selected emails have been marked as spam.
        </CalloutTitle>
        <CalloutDescription>
          This is an alert with icon, title and description.
        </CalloutDescription>
      </Callout>
    </>
  );
}
