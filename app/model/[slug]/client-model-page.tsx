"use client";

import { SectionDivider } from "@/components/divider";
import React from "react";
import { Container } from "theme-ui";
import { Model } from "@/types/types";
import { ModelDescription } from "./description";
import { ModelDetails } from "./details";
import { ModelHeader } from "./header";
import { Manuscripts } from "./manuscripts";

//import { modelStores } from './stores'

interface ClientModelPageProps {
  model: Model;
}

const ClientModelPage: React.FC<ClientModelPageProps> = ({ model }) => {
  return (
    <>
      <ModelHeader model={model} />
      <Container>
        <ModelDescription model={model} />
        <SectionDivider sx={{ mb: 4, mt: 5 }} color={model.color} />
        <ModelDetails model={model} />

        <SectionDivider sx={{ mb: 4, mt: 5 }} color={model.color} />
        <Manuscripts model={model} />
      </Container>
    </>
  );
};

export default ClientModelPage;
