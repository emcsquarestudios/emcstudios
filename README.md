# EMC Square Studios Website

A responsive portfolio website for EMC Square Studios, built with plain HTML, CSS and JavaScript.

## Folder structure

```text
emc-square-studios-website/
├── index.html
├── styles.css
├── script.js
└── assets/
    ├── hero.jpg
    ├── emc-square-logo.png
    └── photo-01.jpg ... photo-10.jpg
```

## Before publishing

Open `index.html` and replace:

- `hello@emcsquarestudios.com` with the studio's real email address.
- Add a phone or WhatsApp link in the contact section if required.
- Update Bengaluru or any other location information.
- Add Instagram, YouTube or portfolio links in the footer if desired.

## Preview locally

Double-click `index.html`, or run a local server from this folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

1. Sign in at GitHub and click **New repository**.
2. Name it, for example, `emc-square-studios`.
3. Choose **Public** and click **Create repository**.
4. On the repository page, click **Add file → Upload files**.
5. Upload `index.html`, `styles.css`, `script.js`, `README.md`, and the complete `assets` folder.
6. Click **Commit changes**.
7. Open **Settings → Pages**.
8. Under **Build and deployment**, select **Deploy from a branch**.
9. Select branch **main** and folder **/(root)**, then click **Save**.
10. After a minute or two, GitHub will show the published website address.

The site will normally be available at:

```text
https://YOUR-GITHUB-USERNAME.github.io/emc-square-studios/
```

## Updating the live website

1. Open the repository.
2. Upload the revised file using **Add file → Upload files**, or open a file and click the pencil icon.
3. Commit the change to `main`.
4. GitHub Pages will redeploy automatically.

For replacing a photograph, keep the same filename in `assets` to avoid editing the HTML.
