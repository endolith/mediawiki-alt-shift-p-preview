# MediaWiki Alt+Shift+P Preview

Restores the <kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> edit preview shortcut on MediaWiki sites, bypassing Chrome's native tab group keyboard shortcut conflict.

## Problem

Chrome natively intercepts <kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> to create a new tab group. This prevents the standard MediaWiki access key for "Show preview" from working on Wikipedia, RationalWiki, Wikiquote, and other MediaWiki installations.

## Solution

This userscript captures <kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> in the capture phase before Chrome processes it, then programmatically clicks the `[name="wpPreview"]` button. It only activates on matched MediaWiki domains; all other sites retain Chrome's default behavior.

## Installation

1. Install [Tampermonkey](https://www.tampermonkey.net/) or Greasemonkey.
2. Click the raw link below or install directly from [Greasy Fork](LINK_TO_YOUR_GREASYFORK_PAGE).
3. The script is active immediately on supported sites. No configuration required.

## Technical Notes

- Uses `document.addEventListener('keydown', ..., true)` (capture phase) to intercept before Chrome's built-in handler.
- Selector `[name="wpPreview"]` matches both `<input>` and `<button>` elements across all MediaWiki versions.
- `e.stopImmediatePropagation()` prevents any remaining page-level handlers from interfering.

## License

MIT
