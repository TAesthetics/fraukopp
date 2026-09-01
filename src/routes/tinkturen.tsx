import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category-page";

export const Route = createFileRoute("/tinkturen")({ component: Page });

function Page() {
  return (
    <CategoryPage
      id="tinktur"
      image="/images/tinktur.jpg"
      intro="Tropfen aus eigenen und wilden Kräutern. Kleine Chargen, Bio-Alkohol, klare Deklaration als Nahrungsergänzung – Arnika nur äußerlich."
    />
  );
}
