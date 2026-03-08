# Build Component

Scaffold a React component following Tivnili's frontend conventions.

## Input

Component name: $ARGUMENTS (e.g., ServiceCard, PricingCard, TestimonialBubble)

## Process

### 1. Understand Requirements
If just a name is given, infer the component's purpose from its name and context. If a description is also provided, use that.

### 2. Explore Existing Patterns
Read existing components in `client/src/components/` to understand:
- File structure (functional components, hooks usage)
- Styling patterns (Tailwind classes used)
- Import conventions
- How components handle hover/animation states

### 3. Scaffold the Component

Create `client/src/components/{ComponentName}.tsx` with:

```tsx
import { type FC } from 'react';

interface {ComponentName}Props {
  // props
}

export const {ComponentName}: FC<{ComponentName}Props> = ({ ...props }) => {
  return (
    <div className="bg-navy-800 rounded-xl p-6">
      {/* implementation */}
    </div>
  );
};
```

### 4. Conventions to Follow
- Named exports only (no default exports)
- Props interface: `{ComponentName}Props`
- Tailwind CSS for all styling — dark theme (navy base, amber accents, cream text)
- Hover effects: `hover:-translate-y-1 transition-all shadow-glow-amber`
- Framer Motion for scroll/hover animations
- Accessibility: aria labels, keyboard support, semantic HTML

### 5. Integration
- Note where in the app this component should be used
- If it's a section, add it to `client/src/sections/` instead

## Output
- The component file
- A brief note on how to integrate it
