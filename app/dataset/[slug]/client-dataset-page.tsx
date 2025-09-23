"use client";

import { SectionDivider } from "@/components/divider";
import React from "react";
import { Container } from "theme-ui";
import { Dataset } from "@/types/types";
import { DatasetDescription } from "./description";
import { DatasetDetails } from "./details";
import { DatasetHeader } from "./header";
import { Manuscripts } from "./manuscripts";

interface ClientFeedstockPageProps {
  feedstock: Dataset;
}

const ClientDatasetPage: React.FC<ClientFeedstockPageProps> = ({
  feedstock,
}) => {
  return (
    <>
      <DatasetHeader feedstock={feedstock} />
      <Container>
        <DatasetDescription feedstock={feedstock} />
        <SectionDivider sx={{ mb: 4, mt: 5 }} />
        <DatasetDetails feedstock={feedstock} />

        <SectionDivider sx={{ mb: 4, mt: 5 }} />
        <Manuscripts feedstock={feedstock} />
      </Container>
    </>
  );
};

export default ClientDatasetPage;
