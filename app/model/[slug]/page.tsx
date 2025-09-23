import { getModels } from "@/utils/get-models";
import { Metadata } from "next";
//import { notFound } from 'next/navigation'
import ClientModelPage from "./client-model-page";

export async function generateStaticParams() {
  const models = await getModels();
  return models.map((model) => ({
    slug: model.slug,
  }));
}

async function getModel(slug: string, catalog?: string) {
  const models = await getModels(catalog);
  return models.find((m) => m.slug === slug);
}

type Props = {
  params: { slug: string };
  searchParams?: { catalog?: string };
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const { slug } = params;
  const catalog = searchParams?.catalog;
  return {
    title: `Model: ${slug}${catalog ? ` (${catalog})` : ""}`,
  };
}

export default async function ModelPage({ params, searchParams }: Props) {
  const { slug } = params;
  const catalog = searchParams?.catalog;
  const model = await getModel(slug, catalog);

  return <ClientModelPage model={model} />;
}
