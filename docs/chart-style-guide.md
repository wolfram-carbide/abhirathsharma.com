# Editorial chart style guide

Use this guide for charts on abhirathsharma.com. It is based on the consulting salary artifact, the Airbnb ratings charts, and the design decisions from the ratings post revisions.

## Non-negotiables

These are hard requirements for any chart update.

- All bars, points, and lines must be visible. No data mark can be hidden behind labels, legends, axis text, or clipping.
- Labels must have unambiguous ownership. A number beside a bar must clearly belong to that bar; a value beside a line must clearly belong to that line.
- Numbers must be readable at 100% browser zoom. Do not use pale grey for important numbers.
- Nothing can be cut off: title, axis labels, right-side ticks, endpoint labels, tooltips, legends, captions, and annotation markers all need enough internal space.
- Every annotation needs either spatial separation or a distinct marker. If two annotations are near each other, use different colors and shapes.
- Do not place explanatory labels in the densest part of the chart. Move them into a top key, side key, or caption.
- Do not use native SVG `<title>` hover labels on marks; they create default browser tooltips that look accidental.
- If a chart is interactive, toggles must update labels, axis text, and visible values together.
- Mobile must scroll horizontally rather than compressing labels until they overlap.

## Mood

Charts should feel editorial and essay-native, not like SaaS dashboards. They should look calm, readable, and intentional inside prose.

- Prefer warm, paper-like backgrounds over stark white.
- Use fewer annotations, but make the remaining annotations impossible to miss.
- Let the chart carry one idea. Move secondary detail into tooltips, captions, or a small key.
- Avoid dense legends, boxes inside boxes, heavy borders, and large dashboard-style cards.
- Do not make legibility subordinate to prettiness. Numbers are the story.

## Typography

Use the site font stack consistently.

- Titles and axis labels: `Literata`, sentence case, medium weight.
- Body notes, captions, buttons, annotations: `DM Sans`.
- Axis tick values, exact numbers, ratios, and tooltip numeric values: `IBM Plex Mono`.
- Do not let chart typography inherit huge article heading sizes accidentally. Scope chart headings inside components.
- Minimum SVG tick size for published charts: `12px`; prefer `12.5px` for dense charts.
- Key numeric labels and endpoint values should be `14px` to `15px`, semibold where useful.
- Captions and explanatory notes should not drop below `0.85rem` when they contain source or methodology context.

## Color Palette

Core palette:

- Background: `#FAF8F5`
- Text: `#1A1A1A`
- Copper accent: `#C17F59`
- Strong copper annotation: `#B87333`
- Blue annotation / secondary series: `#2C5282`
- Muted grey: `#555555`, `#777777`, or `#888888`
- Grid lines: `#E8E3DC`
- Control inactive background: `#E8E3DC`

Usage:

- Primary bars: copper at `0.78` to `0.84` opacity.
- Primary emphasis or active controls: solid copper.
- Secondary data series, multiplier lines, or comparison marks: blue, not low-contrast grey.
- Grey is for scaffolding: ticks, captions, secondary labels, and axes.
- Grid lines: light horizontal lines only.
- Text: use black for titles and important values; use muted grey only for supporting context.

## Layout

Give every chart enough internal whitespace. Most label issues come from placing text inside the densest part of the plot.

- Reserve top space inside SVG for annotation keys or callouts when thresholds need explaining.
- Do not put labels over tall bars unless there is guaranteed empty space.
- Keep right-side axis labels inside the SVG viewBox. Increase right margin before shrinking text.
- Avoid chart-wide borders. Use the chart background and whitespace to separate it from prose.
- Use `overflow: visible` on SVGs only as a safety net; the primary fix should be proper margins.
- On mobile, allow horizontal scrolling with `min-width: 680px` rather than crushing labels.

Recommended SVG margin starting points:

- Single-axis bar chart: left `70-80`, right `70-90`, top `120-140`, bottom `110-140`.
- Dual-axis chart: left `70-80`, right `130-170`, top `95-115`, bottom `110-130`.
- Threshold annotations: reserve `60-90px` above the plot and place a key there.

## Annotation Rules

Annotations must clarify, not decorate.

- If two labels overlap once, move them out of the plot area. Do not keep nudging by a few pixels.
- Threshold labels should usually be in an annotation key above the plot, with dashed guide lines in the chart.
- Use distinct annotation colors when two thresholds or concepts sit close together. For this site, use strong copper `#B87333` and blue `#2C5282`.
- Use triangle markers or clear marker glyphs for threshold annotations. A dashed line alone is too easy to miss.
- Label only true peaks or decisive outliers. Everything else belongs in a tooltip or top key.
- Use direct labels instead of legends when there are one or two series, but only if ownership is unambiguous.
- If a legend/key is needed, keep it as a one-line key above the plot, not a boxed panel.
- Avoid native SVG `<title>` tooltips for visible chart marks; they create browser-default grey hover boxes. Use custom tooltips via `data-tooltip` instead.

## Interaction

Interactions should support reading, not become the point.

- Use toggles only when the alternate view changes interpretation, such as `Count` vs `Share`.
- Tooltips should provide exact values, not duplicate every visible label.
- Keyboard focus should show the same tooltip as hover.
- Tooltip position should work for both pointer events and focus events.
- Keep controls compact but readable: rounded `5px`, active copper, inactive warm grey, `0.9rem` text.

## Axis and Grid Treatment

- Use horizontal grid lines only unless the chart cannot be read without vertical guides.
- Axis tick values use `IBM Plex Mono` and muted grey. Use `#555555` when the chart is dense.
- Axis labels use `Literata`; y-axis labels can use copper when tied to copper bars.
- Do not over-label x axes. Use meaningful anchors, not every tick.
- If a chart has a secondary axis, label it through a key above the plot when the right gutter is tight. Use blue for an actual secondary data series.

## Data Labels

- Avoid labeling every bar or point.
- Prefer exact numbers in tooltips.
- Label a peak only when it matters to the argument, and only when it cannot be confused with a nearby threshold or series.
- Never place multiple numeric labels in the same local cluster, especially near high bars.
- Use monospaced numbers for exact values.
- If a value is important enough to label, make it readable at 100% browser zoom.

## Component Implementation Notes

- Keep charts self-contained Astro components when used in posts.
- Use MDX only when a post needs component imports.
- Avoid adding dependencies for simple SVG charts; native SVG plus small inline scripts is enough.
- Keep source data embedded in the component when the dataset is small and static.
- Scope CSS inside components so article-level typography does not leak into SVG labels.
- Use `aria-label` on the SVG and visible captions for source/method notes.

## Checklist Before Publishing

- No text is clipped at the right or top edge.
- No labels overlap at desktop width.
- Numbers are readable at 100% browser zoom.
- Mobile view scrolls horizontally instead of compressing labels.
- Native browser tooltip boxes do not appear over chart elements.
- Active controls are clear and accessible.
- Counts, shares, and axis labels update together when a toggle changes state.
- Captions state whether a model or multiplier curve is illustrative.
