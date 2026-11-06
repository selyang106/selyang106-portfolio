# Selena's portfolio site

A plain HTML, CSS and JavaScript site. No installs needed. Muted, off-white, image-first (the "Quiet" design).

## Open it
Double-click `index.html`. It opens in your browser. After you edit and save a file, refresh the page (F5).

## The four files
| File | What it does | Do you edit it? |
|------|--------------|-----------------|
| `content.js` | All your text, links, projects and blog posts | **Yes, this is the main one** |
| `style.css` | Colors, fonts, spacing | Sometimes (change the colors at the top) |
| `index.html` | The page structure (the cards) | Rarely |
| `script.js` | Reads `content.js` and builds the page; runs the live clock | Rarely |

## Adding your information
1. Open `content.js` in VS Code or Notepad.
2. Replace anything in `[BRACKETS]`.
3. Fill in `links` (email, LinkedIn, GitHub, resume). Empty links hide themselves.
4. Put images in this folder, then write the file name in `content.js`. Your headshot is already set: `photo: "selena.jpg"`. For projects set `image: "solar-map.png"`; `ratio` ("4/5", "3/2", "1/1", "4/3") sets the frame shape.
5. Don't want a section? Empty its list (`blog: []`) or clear `status: ""`.

## Change the look
Open `style.css`. The colors are at the top in `:root`. Try `--page` (background around the white sheet) or `--frame` (empty image frames).

## Next steps
- Add real map screenshots from your projects as project images.
- Give each project its own page (the arrow on each tile will link to it).
- Put the folder on GitHub and turn on GitHub Pages to get a public link.

## Decisions log
- Plain HTML/CSS/JS instead of a framework: easiest to learn, opens by double-click, free hosting on GitHub Pages.
- All text lives in `content.js` so updating the site never means editing page structure.
- Nov 4: removed the interactive sample map section.
- Nov 4: switched to a dark, simple stacked-card layout (top bar, profile, overview, projects) based on a reference she liked.
- Project tiles show only image, title and category for now. Descriptions and tags can go on project pages later.
- Placeholder thumbnails are drawings, not real data.
- Nov 4: switched to the muted, image-first "Quiet" layout: little color so map screenshots are the focus.
- Nov 4: headshot saved as `selena.jpg` (resized to 800px wide, ~95 KB) and set in `content.js` as `photo`.
- Works filters are built from `filters` in `content.js`; masonry uses CSS columns.
- Nov 4: added a black-and-white line mark (topographic contours + location crosshair + sun) in the intro's left column. It's inline SVG in index.html using currentColor, styled by .mark in style.css.
- Nov 4: removed the graphic's caption (kept the graphic).
- Nov 4: GitHub button always shows in Contact; with no link it stays on the page, and it opens GitHub once links.github is filled in content.js.
- Nov 4: LinkedIn, GitHub and Resume buttons always show in Contact; each stays on the page until its link is set in content.js.
- Nov 4: pixel-art cursors (cursor-arrow.png, cursor-hand.png) via CSS 'cursor: url(...)'. Hand shows on links/buttons. Hotspots set in style.css.
- Nov 4: replaced the Illinois tile with 'New York wind site suitability' (image ny-wind-suitability.jpg). Tiles with a `study` block in content.js open project.html?p=<id>, a template page (project.js) with meta, summary, hero image, written sections and extra figures. Write methodology/results/thought process in that block.
