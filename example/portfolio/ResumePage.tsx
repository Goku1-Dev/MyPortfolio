import { h, onMount } from "../../src/index";
import { portfolioText } from "./text";
const resumePdfUrl = "/resume.pdf";

export default function ResumePage() {
  const { resume } = portfolioText;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePdfUrl;
    link.download = "Gokul_Sureshkumar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    window.open(resumePdfUrl, "_blank");
  };

  onMount(() => {
    // Dynamically load pdf.js
    if (!(window as any).pdfjsLib) {
      const script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js";
      script.onload = renderPDF;
      document.head.appendChild(script);
    } else {
      renderPDF();
    }

    function renderPDF() {
      const pdfjsLib = (window as any).pdfjsLib;
      pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js";

      const container = document.getElementById("pdf-render-container");
      if (!container) return;
      container.innerHTML = "<div style='color: var(--portfolio-text)'>Loading resume...</div>";

      pdfjsLib.getDocument(resumePdfUrl).promise.then((pdf: any) => {
        container.innerHTML = ""; // clear loading text

        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
          pdf.getPage(pageNum).then((page: any) => {
            const canvas = document.createElement("canvas");
            canvas.className = "resume-pdf-page";
            canvas.style.width = "100%";
            canvas.style.maxWidth = "600px";
            canvas.style.display = "block";
            canvas.style.marginBottom = "30px";
            canvas.style.borderRadius = "8px";
            canvas.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
            canvas.style.backgroundColor = "#fff";

            container.appendChild(canvas);

            // Render at higher resolution for sharpness
            const viewport = page.getViewport({ scale: 2 });
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            const context = canvas.getContext("2d");
            if (context) {
              page.render({
                canvasContext: context,
                viewport: viewport
              });
            }
          });
        }
      }).catch((err: any) => {
        container.innerHTML = "<div style='color: #ff5555'>Failed to load resume PDF.</div>";
        console.error(err);
      });
    }

    return () => { };
  });

  return (
    <div class="scroll-reveal delay-100" style={{ paddingBottom: "40px" }}>
      <div class="portfolio-section-title" style={{ fontSize: "18px", marginBottom: "8px" }}>{portfolioText.otherPages.resumeTitle}</div>
      <p style={{ color: "var(--portfolio-text)", marginBottom: "20px", fontSize: "13px" }}>{resume.subtitle}</p>

      <div style={{ display: "flex", gap: "15px", marginBottom: "40px", flexWrap: "wrap" }}>
        <button
          class="portfolio-btn delay-200"
          onClick={handleView}
          style={{ background: "transparent", color: "var(--portfolio-primary)", border: "1px solid var(--portfolio-primary)", fontSize: "13px", padding: "10px 20px" }}
        >
          <svg style={{ width: "16px", height: "16px", marginRight: "6px" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          View Fullscreen
        </button>
        <button
          class="portfolio-btn delay-200"
          onClick={handleDownload}
          style={{ background: "var(--portfolio-primary)", color: "#111", border: "none", fontSize: "13px", padding: "10px 20px" }}
        >
          <svg style={{ width: "16px", height: "16px", marginRight: "6px" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          {resume.downloadBtn}
        </button>
      </div>

      {/* PDF Viewer Container */}
      <div
        id="pdf-render-container"
        class="scroll-reveal delay-300"
        style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "start" }}
      >
        <div style={{ color: "var(--portfolio-text-muted)", padding: "40px", border: "1px dashed var(--portfolio-border)", borderRadius: "8px", width: "100%", textAlign: "center", maxWidth: "600px" }}>
          Initializing viewer...
        </div>
      </div>
    </div>
  );
}
