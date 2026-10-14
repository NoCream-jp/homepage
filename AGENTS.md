# Project conventions

- Use Tailwind CSS as the default styling approach for new and modified UI.
- Prefer Tailwind utility classes in component markup. Add custom CSS only when a utility class cannot express the required behavior clearly.
- In `src/pages/cli.astro`, frame command output with a hyphen header and a hyphen footer ending in `//`.
- In `src/pages/cli.astro`, render the user's entered command in light orange while keeping the prompt white.
