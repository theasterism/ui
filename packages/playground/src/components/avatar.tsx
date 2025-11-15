import { Avatar, AvatarFallback, AvatarImage } from "orphos/avatar";

export function AvatarDemo() {
  return (
    <>
      <Avatar>
        <AvatarImage
          src="https://github.com/bachiitter.png"
          alt="@bachiitter"
        />
        <AvatarFallback value="B" />
      </Avatar>
      <Avatar>
        <AvatarImage src="" alt="@bachiitter" />
        <AvatarFallback value="B" />
      </Avatar>
    </>
  );
}
