# Orphos

A modern React UI component library built on Base UI and Tailwind CSS v4.

## Installation

```bash
npm install orphos
# or
bun add orphos
```

## Peer Dependencies

```bash
npm install react tailwindcss@^4
```

Recommended: for the icon examples used in the docs, install `@tabler/icons-react`.

```bash
npm install @tabler/icons-react
```

## Setup

Import Tailwind CSS and the theme in your main CSS file:

```css
@import "tailwindcss";
@import "orphos/theme.css";
@source "../node_modules/orphos/dist";
```

### Portal stacking context

Base UI uses portals for components that render popups (Dialog, Popover, Select, etc.).
To ensure portaled components appear on top of the entire page, add:

```tsx
// layout.tsx
<body>
  <div className="root">
    {children}
  </div>
</body>
```

```css
/* styles.css */
.root {
  isolation: isolate;
}
```

### iOS 26+ Safari support

Starting with iOS 26, Safari allows content beneath the UI chrome to be visible.
For backdrops (Dialog, Sheet, etc.) to cover the entire visual viewport after scrolling, add:

```css
/* styles.css */
body {
  position: relative;
}
```

## Usage

```tsx
import { Button } from "orphos/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "orphos/card";
import { Input } from "orphos/input";
import { Label } from "orphos/label";

function LoginCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-6">
          <div className="grid gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-1.5">
        <Button variant="primary" className="w-full">
          Login
        </Button>
      </CardFooter>
    </Card>
  );
}
```

## Typography

`typographyVariants` maps semantic content to a consistent type scale.

Use semantic HTML and apply classes per element role.

Available variants: `small`, `strong`, `paragraph`, `heading-1`, `heading-2`, `heading-3`, `heading-4`, `heading-5`, `link`, `blockquote`, `ul`, `ol`, `code`, `lead`, `large`, `muted`.

```tsx
import { typographyVariants } from 'orphos/typography'

function Article() {
  return (
    <article>
      <h1 className={typographyVariants({ variant: "heading-1" })}>
        Design system foundations
      </h1>
      <h2 className={typographyVariants({ variant: "heading-2" })}>
        Build consistent interfaces
      </h2>
      <h3 className={typographyVariants({ variant: "heading-3" })}>Compose reusable primitives</h3>
      <h4 className={typographyVariants({ variant: "heading-4" })}>Ship polished details</h4>
      <h5 className={typographyVariants({ variant: "heading-5" })}>Implementation notes</h5>
      <p className={typographyVariants({ variant: "lead" })}>
        Orphos provides composable primitives with consistent spacing and
        interaction states.
      </p>
      <p className={typographyVariants({ variant: "paragraph" })}>
        Use typography variants to keep hierarchy and readability consistent
        across your app.
      </p>
      <p className={typographyVariants({ variant: "large" })}>This release is ready for QA.</p>
      <p className={typographyVariants({ variant: "muted" })}>Secondary details belong in muted text.</p>
      <p className={typographyVariants({ variant: "small" })}>Workspace slug</p>
      <strong className={typographyVariants({ variant: "strong" })}>API keys are write-only.</strong>
      <blockquote className={typographyVariants({ variant: "blockquote" })}>
        Consistency is what makes a design system dependable.
      </blockquote>
      <ul className={typographyVariants({ variant: "ul" })}>
        <li>Tokenized colors and spacing</li>
        <li>Accessible interaction states</li>
      </ul>
      <ol className={typographyVariants({ variant: "ol" })}>
        <li>Install dependencies</li>
        <li>Import theme styles</li>
      </ol>
      <code className={typographyVariants({ variant: "code" })}>bun add orphos</code>
      <a href="#" className={typographyVariants({ variant: "link" })}>
        Open component docs
      </a>
    </article>
  )
}
```

## Components

| Component | Description |
|-----------|-------------|
| Avatar | User avatar with fallback support |
| Badge | Status indicators and labels |
| Button | Primary action component with variants |
| Card | Content container with header/footer |
| Checkbox | Checkbox input control |
| Context Menu | Right-click context menus |
| Cropper | Image cropping utility |
| Dialog | Modal dialogs |
| Dropdown Menu | Dropdown menus with triggers |
| Empty | Empty state placeholders |
| Field | Form field wrapper with labels |
| Input | Text input component |
| Input Group | Grouped input with addons |
| Kbd | Keyboard shortcut display |
| Label | Form labels |
| Popover | Floating popover panels |
| Radio Group | Radio button groups |
| Select | Select dropdown component |
| Separator | Visual divider |
| Sheet | Slide-out side panels |
| Sidebar | Navigation sidebar |
| Skeleton | Loading skeleton placeholders |
| Slider | Range slider input |
| Spinner | Loading spinner |
| Switch | Toggle switch component |
| Tabs | Tabbed navigation |
| Textarea | Multi-line text input |
| Toast | Toast notifications |
| Toggle | Toggle button |
| Tooltip | Hover tooltips |
| Typography | Text styling components |

## Local docs

The `playground` package contains the live component docs and examples.

```bash
bun install
bun run dev --filter=playground
```

## License

MIT © 2025 Asterism.
