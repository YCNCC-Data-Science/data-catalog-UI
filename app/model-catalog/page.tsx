import { Catalog } from "@/components/model-catalog";
import { getModels } from "@/utils/get-models";

// import { notFound } from 'next/navigation'

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
    const feedstocks = catalog ? await getModels(catalog) : await getModels();

    //    if (!feedstocks || feedstocks.length === 0) {
    //      notFound()
    //    }

    return (
      <>
        <Catalog feedstocks={feedstocks} catalog={catalog} />
      </>
    );
  } catch (error) {
    throw new Error(`${error}`);
  }
}
