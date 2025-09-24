# YCNCC Data Catalog

![GitHub deployments](https://img.shields.io/github/deployments/YCNCC-Data-Science/data-catalog-UI/production?label=vercel)
[![License:MIT](https://img.shields.io/badge/License-MIT-lightgray.svg?style=flt-square)](https://opensource.org/licenses/MIT)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/YCNCC-Data-Science/data-catalog-UI/discussions)

This repository contains the code for the YCNCC Data Catalog built with [NextJS](https://nextjs.org/). The codebase is adapted from the [LEAP Data Catalog](https://github.com/carbonplan/leap-data-catalog).

## Development

To start a local development server:

```bash
npm run dev
```

Then open `http://localhost:3000` in your browser.

The catalog itself is managed in the [ycncc-data-science/data-catalog](https://github.com/YCNCC-Data-Science/data-catalog) repository. Dataset and model catalogs are fetched with:

- `utils/get-datasets.ts`
- `utils/get-models.ts`

## Contributing

- **Bugs**: Please report issues through [GitHub Issues](https://github.com/YCNCC-Data-Science/data-catalog-UI/issues)
- **Ideas / Feedback**: Start a [Discussion](https://github.com/YCNCC-Data-Science/data-catalog-UI/discussions) to suggest improvements.
- **Documentation**: See the [Wiki](https://github.com/YCNCC-Data-Science/data-catalog-UI/wiki) for developer guides and additional resources.
