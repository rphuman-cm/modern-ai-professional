# /public — Static Assets

## Placeholder Images

Replace the following files with real production assets:

| Filename            | Usage                              | Recommended size  |
|---------------------|------------------------------------|-------------------|
| `about-image.jpg`   | About section — brand/author photo | 800×600px min     |
| `og-image.jpg`      | Open Graph / social share card     | 1200×630px        |
| `favicon.svg`       | Browser tab icon (included)        | 32×32px SVG       |

## Notes

- Use `next/image` for all raster images to get automatic optimization.
- Replace the `imagePlaceholder` div in `About.jsx` with a `<Image>` component
  once the real photo is available.
- The `og-image.jpg` should be referenced in `app/layout.jsx` under
  `openGraph.images`.
