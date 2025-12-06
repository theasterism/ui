# orphos

> A modern React UI component library built on Base UI and Tailwind CSS v4.

[![npm version](https://img.shields.io/npm/v/orphos.svg)](https://www.npmjs.com/package/orphos)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## Installation

```bash
npm install orphos
# or
bun add orphos
```

## Peer Dependencies

This library requires the following peer dependencies:

```bash
npm install react tailwindcss@^4
```

**Recommended:** For icons used in components, install [@tabler/icons-react](https://tabler.io/icons):

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

## Development

```bash
# Install dependencies
bun install

# Start development mode
bun run dev

# Build the library
bun run build

# Lint and format
bun run check
```

## License

[MIT](LICENSE) © 2025 Asterism.
