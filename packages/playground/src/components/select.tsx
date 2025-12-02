import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "orphos/select";

export function SelectDemo() {
  return (
    <Select items={items}>
      <SelectTrigger className="w-full max-w-xs">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {items.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

const items = [
  { label: "Select framework", value: null },
  { label: "Next.js", value: "next" },
  { label: "Vite", value: "vite" },
  { label: "Astro", value: "astro" },
];
