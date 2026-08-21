# Remove chat action features

## Goal

Completely remove the chat header's **Clear**, **Compare**, and **Help** features.

## Scope

- Remove the three header buttons from `index.html`.
- Remove the clear-chat handler.
- Remove the comparison modal, comparison engine, and its overlay click handler.
- Remove the help modals, help data, and associated handlers.
- Remove strings and styles that are used only by those features.

## Non-goals

- Do not change message sending, device/SN/order lookup, feedback, or the device-test tab.
- Do not remove unrelated knowledge-base content that happens to use the word "comparison".

## Verification

Load `index.html` in a browser and confirm that the chat header has no action buttons, the browser console has no JavaScript errors, and normal message sending still works.
