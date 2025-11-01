import { Badge } from "orphos/badge";

export function BadgeDemo() {
  return (
    <div className="z-auto flex w-auto flex-row flex-wrap gap-4">
      <Badge>Badge</Badge>
      <Badge variant="primary" >Primary</Badge>
      <Badge variant="danger">
        Destructive
      </Badge>
      <Badge variant="success" >Success</Badge>
      <Badge variant="warning" >Warning</Badge>
      <Badge variant="info" >Info</Badge>
    </div>
  );
}
