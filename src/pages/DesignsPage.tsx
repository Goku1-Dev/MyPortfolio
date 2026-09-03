import CategoryExplorer from "../components/CategoryExplorer";
import { useHomeStore } from "../state/homeStore";
import { portfolioText } from "../data/portfolioText";

export default function DesignsPage() {
  const { currentRoute } = useHomeStore();

  return (
    <CategoryExplorer
      basePath="/designs"
      pageTitle="Designs"
      categories={portfolioText.home.designs.categories}
      currentRoute={currentRoute}
      detailBtnLabel={portfolioText.home.designs.detailBtn}
    />
  );
}
