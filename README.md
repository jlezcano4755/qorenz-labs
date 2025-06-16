# qorenz-labs
Qorenz Labs Company Landing Page

## Running Locally

A small Python script is included to serve the site. No Node or npm is required.
Run the server and open your browser at the displayed address:

```bash
python3 serve.py
```

The default port is 8000.
To use a different port:

```bash
python3 serve.py --port 9000
```

## Editing the Landing Page

The site is entirely static. Update the content directly in the HTML and
JavaScript files:

* **index.html** – English version of the page.
* **index_es.html** – Spanish version.

Change headlines, taglines and copy by editing these files. The arrays in
`js/main.js` control the rotating words in the hero section (`wordsEn` and
`wordsEs`).

Images are stored in the `images` folder. Replace the placeholder founder
portraits or badges here while keeping the same file names so the markup does
not change.

The early‑access form submits to Formspree. To update the endpoint or fields,
edit the `<form>` element in both HTML files.

After making changes, run the server again and reload the browser to preview
the updates.
