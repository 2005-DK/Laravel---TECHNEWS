Commands to update repository metadata and add topics (use locally)

If you have the GitHub CLI (`gh`) installed and authenticated, run these commands to set the repository description, homepage and topics:

1. Update repository description & visibility:

```bash
gh repo edit 2005-DK/Laravel---TECHNEWS --description "TECHNEWS - Laravel news platform demo (Laravel 10, Tailwind, Vite)" --homepage "https://your-site.example" --visibility public
```

2. Add topics (tags):

```bash
gh repo edit 2005-DK/Laravel---TECHNEWS --add-topic laravel --add-topic php --add-topic news --add-topic cms --add-topic tailwind --add-topic vite
```

3. (Optional) Set a repository homepage link shown in the GitHub UI:

```bash
gh repo edit 2005-DK/Laravel---TECHNEWS --homepage "https://your-portfolio.example" 
```

If `gh` is not available, use the GitHub web UI:
- Go to https://github.com/2005-DK/Laravel---TECHNEWS
- Click "Settings" → "Repository name & description" to edit the description and homepage.
- In the main repo page header, click "Manage topics" (tag icon) and add the topics shown above.

Add CI badge to the README (already added in this repo):

- The CI status badge is:

  [![CI](https://github.com/2005-DK/Laravel---TECHNEWS/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/2005-DK/Laravel---TECHNEWS/actions/workflows/ci.yml)

Place that near the top of `README.md` to show the build status publicly.
