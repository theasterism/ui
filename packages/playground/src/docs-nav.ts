export interface DocsNavItem {
  slug: string;
  title: string;
}

export interface DocsNavSection {
  label: string;
  items: DocsNavItem[];
}

export interface DocsItemMeta extends DocsNavItem {
  description: string;
  group: string;
}

export const docsNavSections: DocsNavSection[] = [
  {
    label: "Getting Started",
    items: [
      { slug: "installation", title: "Installation" },
      { slug: "setup", title: "Setup" },
      { slug: "usage", title: "Usage" },
      { slug: "platform-notes", title: "Platform Notes" },
    ],
  },
  {
    label: "Foundations",
    items: [
      { slug: "colors", title: "Colors" },
      { slug: "typography", title: "Typography" },
    ],
  },
  {
    label: "Form Controls",
    items: [
      { slug: "button", title: "Button" },
      { slug: "input-group", title: "Input Group" },
      { slug: "select", title: "Select" },
      { slug: "checkbox", title: "Checkbox" },
      { slug: "radio", title: "Radio" },
      { slug: "switch", title: "Switch" },
      { slug: "slider", title: "Slider" },
      { slug: "textarea", title: "Textarea" },
      { slug: "field", title: "Field" },
    ],
  },
  {
    label: "Data Display",
    items: [
      { slug: "avatar", title: "Avatar" },
      { slug: "badge", title: "Badge" },
      { slug: "card", title: "Card" },
      { slug: "skeleton", title: "Skeleton" },
      { slug: "empty", title: "Empty" },
    ],
  },
  {
    label: "Feedback",
    items: [
      { slug: "toast", title: "Toast" },
      { slug: "spinner", title: "Spinner" },
    ],
  },
  {
    label: "Overlays",
    items: [
      { slug: "dialog", title: "Dialog" },
      { slug: "sheet", title: "Sheet" },
      { slug: "popover", title: "Popover" },
      { slug: "tooltip", title: "Tooltip" },
      { slug: "dropdown-menu", title: "Dropdown Menu" },
      { slug: "context-menu", title: "Context Menu" },
    ],
  },
  {
    label: "Navigation",
    items: [
      { slug: "sidebar", title: "Sidebar" },
      { slug: "tabs", title: "Tabs" },
    ],
  },
  {
    label: "Utilities",
    items: [
      { slug: "toggle", title: "Toggle" },
      { slug: "kbd", title: "Kbd" },
      { slug: "separator", title: "Separator" },
    ],
  },
];

export const docsItems: DocsItemMeta[] = docsNavSections.flatMap((section) => {
  return section.items.map((item) => {
    return {
      ...item,
      description: "",
      group: section.label,
    };
  });
});
