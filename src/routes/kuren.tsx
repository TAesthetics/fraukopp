import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category-page";

export const Route = createFileRoute("/kuren")({ component: Page });

function Page() {
  return (
    <CategoryPage
      id="kur"
      image="/images/kraeutertee.jpg"
      intro="Mehrwöchige Sets mit klarem Rhythmus: Frühjahr, Immun, Abendruhe. Tee plus Tinktur, portioniert, ohne Detox-Versprechen."
    />
  );
}
