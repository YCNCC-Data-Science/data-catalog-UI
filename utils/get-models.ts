import { Model } from "@/types/types";
import { getColor } from "@/utils/colors";
import { slugify } from "@/utils/slugify";
import { getThumbnail } from "@/utils/thumbnail";

const defaultCatalogUrl =
  "https://raw.githubusercontent.com/YCNCC-Data-Science/data-catalog/refs/heads/dev/catalogs/model-catalog.json";

export async function getModels(catalog?: string): Promise<Model[]> {
  const url = catalog || defaultCatalogUrl;

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });

    if (!res.ok) {
      throw new Error(
        `Failed to fetch models: ${res.status} ${res.statusText}`
      );
    }

    const models: Model[] = await res.json();

    return models.map((model) => ({
      ...model,
      slug: model.slug || slugify(model.title),
      color: getColor(model.title),
      thumbnail: model.thumbnail || getThumbnail(model.title),
    }));
  } catch (error) {
    throw new Error(`Failed to fetch models: ${error}`);
  }
}
