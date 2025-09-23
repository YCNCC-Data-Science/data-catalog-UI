import { Catalog } from "@/components/catalog";
import { getDatasets } from "@/utils/get-datasets";

type SearchParams = {
  catalog?: string;
  [key: string]: string | string[] | undefined;
};

type Props = {
  searchParams: Promise<SearchParams>;
};

export default async function HomePage({ searchParams }: Props) {
  const { catalog } = await searchParams;
  try {
    const feedstocks = catalog
      ? await getDatasets(catalog)
      : await getDatasets();

    return (
      <>
        <Catalog feedstocks={feedstocks} catalog={catalog} />
      </>
    );
  } catch (error) {
    throw new Error(`${error}`);
  }
}
