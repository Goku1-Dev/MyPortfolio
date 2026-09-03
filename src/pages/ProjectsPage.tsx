import CategoryExplorer from "../components/CategoryExplorer";
import { useHomeStore } from "../state/homeStore";
import { portfolioText } from "../data/portfolioText";

export default function ProjectsPage() {
  const { currentRoute } = useHomeStore();

  return (
    <CategoryExplorer
      basePath="/projects"
      pageTitle="Projects"
      categories={portfolioText.home.projects.categories}
      currentRoute={currentRoute}
      detailBtnLabel={portfolioText.home.projects.detailBtn}
    />
  );
}
