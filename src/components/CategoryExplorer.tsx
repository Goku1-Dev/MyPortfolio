import { useEffect, useState } from "react";
import { navigate } from "../state/homeStore";

export type ExplorerItem = {
  title: string;
  slug: string;
  colorMode: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
};

export type ExplorerCategory = {
  title: string;
  desc: string;
  items: ExplorerItem[];
};

function toDisplayTitle(title: string) {
  return title
    .toLowerCase()
    .split(" ")
    .map((word) => (word.length ? word[0].toUpperCase() + word.slice(1) : word))
    .join(" ");
}

export default function CategoryExplorer({
  basePath,
  pageTitle,
  categories,
  currentRoute,
  detailBtnLabel,
}: {
  basePath: string;
  pageTitle: string;
  categories: ExplorerCategory[];
  currentRoute: string;
  detailBtnLabel: string;
}) {
  const slug = currentRoute === basePath ? null : currentRoute.startsWith(`${basePath}/`) ? currentRoute.slice(basePath.length + 1) : null;

  const findBySlug = (s: string) => {
    for (const category of categories) {
      const item = category.items.find((i) => i.slug === s);
      if (item) return { category, item };
    }
    return null;
  };

  const activeMatch = slug ? findBySlug(slug) : null;

  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    if (activeMatch) {
      const idx = categories.findIndex((c) => c.title === activeMatch.category.title);
      if (idx !== -1) setActiveTab(idx);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  if (activeMatch) {
    const { category, item } = activeMatch;
    return (
      <div className="portfolio-detail fade-in">
        <div className="portfolio-breadcrumb">
          <a
            href={basePath}
            onClick={(e) => {
              e.preventDefault();
              navigate(basePath);
            }}
          >
            {pageTitle}
          </a>
          <span className="portfolio-breadcrumb-sep">›</span>
          <span className="portfolio-breadcrumb-current">{toDisplayTitle(item.title)}</span>
        </div>

        <div className={`portfolio-detail-hero ${item.colorMode}`}></div>

        <div className="portfolio-detail-header">
          <span className="portfolio-detail-category">{category.title}</span>
          <h1 className="portfolio-detail-title">{toDisplayTitle(item.title)}</h1>
          <p className="portfolio-detail-tagline">{item.tagline}</p>
        </div>

        <div className="portfolio-detail-tags">
          {item.stack.map((tag) => (
            <span className="portfolio-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        <p className="portfolio-detail-desc">{item.description}</p>

        <div className="portfolio-detail-highlights">
          <h4 className="portfolio-section-title">Highlights</h4>
          <ul>
            {item.highlights.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>

        <button
          className="portfolio-btn"
          onClick={(e) => {
            e.preventDefault();
            navigate(basePath);
          }}
        >
          ← Back to {pageTitle}
        </button>
      </div>
    );
  }

  const active = categories[activeTab] ?? categories[0];

  return (
    <div className="fade-in">
      <div className="portfolio-section-title">{pageTitle}</div>

      <div className="portfolio-tabs">
        {categories.map((category, idx) => (
          <button
            key={category.title}
            className={idx === activeTab ? "portfolio-tab active" : "portfolio-tab"}
            onClick={() => setActiveTab(idx)}
          >
            {category.title}
          </button>
        ))}
      </div>

      <p className="portfolio-tab-desc">{active.desc}</p>

      <section className="portfolio-works-grid">
        {active.items.map((item) => (
          <div
            className="portfolio-work-card portfolio-work-card-clickable"
            key={item.slug}
            onClick={() => navigate(`${basePath}/${item.slug}`)}
          >
            <div className={`portfolio-work-img ${item.colorMode}`}></div>
            <div className="portfolio-work-content">
              <div className="portfolio-work-title">{item.title}</div>
              <div className="portfolio-work-desc">{item.tagline}</div>
              <button
                className="portfolio-work-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`${basePath}/${item.slug}`);
                }}
              >
                {detailBtnLabel}
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
