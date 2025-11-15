import { Badge } from "orphos/badge";
import { IconChecks } from "orphos/icons";

export function BadgeDemo() {
  return (
    <div className="z-auto flex w-auto flex-row flex-wrap gap-4">
      <Badge>Badge</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="danger">Destructive</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="info">Info</Badge>

      <Badge variant="info">
        <IconChecks />
        Verified
      </Badge>
      <Badge className="rounded-full tabular-nums">8</Badge>
    </div>
  );
}
