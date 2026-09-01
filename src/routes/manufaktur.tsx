import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category-page";

export const Route = createFileRoute("/manufaktur")({ component: Page });

function Page() {
  return (
    <CategoryPage
      id="manufaktur"
      image="/images/destille.jpg"
      intro="Hydrolate aus der Kupferdestille, Gewürzsalz, Bauernseife und der Destillier-Workshop vor Ort in Horben."
    />
  );
}
