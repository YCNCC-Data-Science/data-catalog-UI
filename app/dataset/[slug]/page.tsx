import { getDatasets } from "@/utils/get-datasets";
import { Metadata } from "next";
//import { notFound } from 'next/navigation'
import ClientDatasetPage from "./client-dataset-page";

export async function generateStaticParams() {
  const feedstocks = await getDatasets();
  return feedstocks.map((feedstock) => ({
    slug: feedstock.slug,
  }));
}

async function getFeedstock(slug: string, catalog?: string) {
  const feedstocks = await getDatasets(catalog);
  return feedstocks.find((f) => f.slug === slug);
}

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ catalog?: string }>;
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const { catalog } = await searchParams;
  return {
    title: `Feedstock: ${slug}${catalog ? ` (${catalog})` : ""}`,
  };
}

export default async function FeedstockPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { catalog } = await searchParams;
  const feedstock = await getFeedstock(slug, catalog);

  //if (!feedstock) {
  //  notFound()
  // }

  return <ClientDatasetPage feedstock={feedstock} />;
}
