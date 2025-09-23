import { Dataset } from "@/types/types";
import { getColor } from "@/utils/colors";
import { slugify } from "@/utils/slugify";
import { getThumbnail } from "@/utils/thumbnail";

const defaultCatalogUrl =
  "https://raw.githubusercontent.com/YCNCC-Data-Science/data-catalog/refs/heads/dev/catalogs/dataset-catalog.json";

export async function getDatasets(catalog?: string): Promise<Dataset[]> {
  const url = catalog || defaultCatalogUrl;

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });

    if (!res.ok) {
      throw new Error(
        `Failed to fetch datasets: ${res.status} ${res.statusText}`
      );
    }

    const datasets: Dataset[] = await res.json();

    return datasets.map((dataset) => ({
      ...dataset,
      slug: dataset.slug || slugify(dataset.title),
      color: getColor(dataset.title),
      thumbnail: dataset.thumbnail || getThumbnail(dataset.title),
    }));
  } catch (error) {
    throw new Error(`Failed to fetch datasets: ${error}`);
  }
}
