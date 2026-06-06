# Editorial chart style guide

Use this guide for charts on abhirathsharma.com. It is based on the consulting salary artifact, the Airbnb ratings charts, and the design decisions from the ratings post revisions.

## Mood

Charts should feel editorial and essay-native, not like SaaS dashboards. They should look calm, readable, and intentional inside prose.

- Prefer warm, paper-like backgrounds over stark white.
- Use fewer annotations, but make the remaining annotations impossible to miss.
- Let the chart carry one idea. Move secondary detail into tooltips, captions, or a small key.
- Avoid dense legends, boxes inside boxes, heavy borders, and large dashboard-style cards.

## Typography

Use the site font stack consistently.

- Titles and axis labels: `Literata`, sentence case, medium weight.
- Body notes, captions, buttons, annotations: `DM Sans`.
- Axis tick values, exact numbers, ratios, and tooltip numeric values: `IBM Plex Mono`.
- Do not let chart typography inherit huge article heading sizes accidentally. Scope chart headings inside components.
- Keep SVG labels small: roughly `10.5px` to `12px` inside the SVG viewBox.

## Color palette

Core palette:

- Background: `#FAF8F5`
- Text: `#1A1A1A`
- Copper accent: `#C17F59`
- Muted grey: `#888888`
- Soft grey line: `#6F6F6F` or `#737373`
- Grid lines: `#E8E3DC`
- Control inactive background: `#E8E3DC`

Usage:

- Primary bars: copper at `0.72` to `0.80` opacity.
- Primary emphasis or active controls: solid copper.
- Secondary/reference lines: grey, not black.
- Grid lines: light horizontal lines only.
- Text: use black only for titles and important values; use muted grey for scaffolding.

## Layout

Give every chart enough internal whitespace. Most label issues come from placing text inside the densest part of the plot.

- Reserve top space inside SVG for annotation keys or callouts when thresholds need explaining.
- Do not put labels over tall bars unless there is guaranteed empty space.
- Keep right-side axis labels inside the SVG viewBox. Increase right margin before shrinking text.
- Avoid chart-wide borders. Use the chart background and whitespace to separate it from prose.
- Use `overflow: visible` on SVGs only as a safety net; the primary fix should be proper margins.
- On mobile, allow horizontal scrolling with `min-width: 640px` rather than crushing labels.

Recommended SVG margin starting points:

- Single-axis bar chart: left `60-70`, right `40-70`, top `70-120`, bottom `90-130`.
- Dual-axis chart: left `60-70`, right `130-160`, top `60-90`, bottom `100-130`.
- Threshold annotations: reserve `40-70px` above the plot and place a key there.

## Annotation rules

Annotations must clarify, not decorate.

- If two labels overlap once, move them out of the plot area. Do not keep nudging by a few pixels.
- Threshold labels should usually be in an annotation key above the plot, with dashed guide lines in the chart.
- Label only true peaks or decisive outliers. Everything else belongs in a tooltip.
- Use direct labels instead of legends when there are one or two series.
- If a legend is needed, keep it as a one-line key below or above the plot, not a boxed panel.
- Avoid native SVG `<title>` tooltips for visible chart marks; they create browser-default grey hover boxes. Use custom tooltips via `data-tooltip` instead.

## Interaction

Interactions should support reading, not become the point.

- Use toggles only when the alternate view changes interpretation, such as `Count` vs `Share`.
- Tooltips should provide exact values, not duplicate every visible label.
- Keyboard focus should show the same tooltip as hover.
- Tooltip position should work for both pointer events and focus events.
- Keep controls compact: rounded `4px`, active copper, inactive warm grey.

## Axis and grid treatment

- Use horizontal grid lines only unless the chart cannot be read without vertical guides.
- Axis tick values use `IBM Plex Mono` and muted grey.
- Axis labels use `Literata`; y-axis labels can use copper when tied to copper bars.
- Do not over-label x axes. Use meaningful anchors, not every tick.
- If a chart has a secondary axis, label it clearly in grey and reserve right-side margin.

## Data labels

- Avoid labeling every bar or point.
- Prefer exact numbers in tooltips.
- Label a peak only when it matters to the argument.
- Never place multiple numeric labels in the same local cluster, especially near high bars.
- Use monospaced numbers for exact values.

## Component implementation notes

- Keep charts self-contained Astro components when used in posts.
- Use MDX only when a post needs component imports.
- Avoid adding dependencies for simple SVG charts; native SVG plus small inline scripts is enough.
- Keep source data embedded in the component when the dataset is small and static.
- Scope CSS inside components so article-level typography does not leak into SVG labels.
- Use `aria-label` on the SVG and visible captions for source/method notes.

## Checklist before publishing

- No text is clipped at the right or top edge.
- No labels overlap at desktop width.
- Mobile view scrolls horizontally instead of compressing labels.
- Native browser tooltip boxes do not appear over chart elements.
- Active controls are clear and accessible.
- Counts, shares, and axis labels update together when a toggle changes state.
- Captions state whether a model or multiplier curve is illustrative.
