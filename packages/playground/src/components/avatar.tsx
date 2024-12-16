import { Avatar, AvatarImage, AvatarFallback } from "@theanalog/orphos/avatar";
import { Fragment } from "react/jsx-runtime";

export function AvatarDemo() {
  return (
    <Fragment>
      <Avatar square>
        <AvatarImage src="https://github.com/bachiitter.png" alt="@bachiitter" />
        <AvatarFallback>CH</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="" alt="@shadcn" />
        <AvatarFallback>CH</AvatarFallback>
      </Avatar>
    </Fragment>
  );
}
