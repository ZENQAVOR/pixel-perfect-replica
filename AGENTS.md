<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- All visible copy lives in src/i18n/dictionary.ts (es default, en typed to the same shape) — keeps translations complete and centralized.
- Public contact values live in src/config/site.ts; empty values disable the related actions — never show fake contact links.
- Shared brand artwork lives in src/components/brand/BrandMark.tsx (ZSymbol + Wordmark), importing a Lovable Assets pointer — one replacement point preserves the supplied symbol across all placements.
- Visual finishes are centralized in src/styles.css and shared site button variants — refinements remain consistent across sections without changing content.
- Static site, no backend — the spec forbids unnecessary backend/tracking.
