import { Avatar, AvatarFallback, AvatarImage } from "@theanalog/orphos/avatar";
import { Fragment } from "react/jsx-runtime";

export function AvatarDemo() {
  return (
    <Fragment>
      <Avatar>
        <AvatarImage src="https://github.com/bachiitter.png" alt="@bachiitter" />
        <AvatarFallback>B</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="" alt="@bachiitter" />
        <AvatarFallback>B</AvatarFallback>
      </Avatar>
    </Fragment>
  );
}
