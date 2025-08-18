import { Avatar, AvatarFallback, AvatarImage } from "orphos/avatar";

export function AvatarDemo() {
  return (
    <>
      <Avatar>
        <AvatarImage
          src="https://github.com/bachiitter.png"
          alt="@bachiitter"
        />
        <AvatarFallback>B</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="" alt="@bachiitter" />
        <AvatarFallback>B</AvatarFallback>
      </Avatar>
    </>
  );
}
