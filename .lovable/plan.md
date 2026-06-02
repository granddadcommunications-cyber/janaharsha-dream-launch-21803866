## Problem

The site's `/` route returns the error fallback ("This page didn't load"). The dev server log shows the actual cause:

```
[vite:css][postcss] @import must precede all other statements (besides @charset or empty @layer)
src/styles.css → @import url("https://fonts.googleapis.com/css2?family=Poppins...&family=Inter...")
```

In `src/styles.css`, the Google Fonts `@import url(...)` is placed *after* `@custom-variant` and an `@layer base { @font-face { ... } }` block. CSS requires all `@import` rules to come before any non-`@import`/`@charset` rules. PostCSS rejects the stylesheet, the SSR render throws, and the wrapper renders the generic error page.

## Fix

Move the Google Fonts `@import url(...)` line in `src/styles.css` up so it sits with the other `@import` statements at the very top of the file, before `@custom-variant` and the `@layer base` block.

Result: stylesheet parses cleanly, SSR renders the home page normally, and the error fallback goes away.

No other files need to change.
