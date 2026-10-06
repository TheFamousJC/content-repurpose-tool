import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';

async function generateRepurposerManual() {
  console.log('Generating Work Hack #3 (Content Repurposer) manual PDF...');

  let logoBase64 = '';
  const possibleLogoPaths = [
    './templates/logo_white.png',
    './logo_white.png',
    '../What If - Scenario Calculator/templates/logo_white.png',
    '../../templates/logo_white.png'
  ];

  for (const p of possibleLogoPaths) {
    if (fs.existsSync(p)) {
      const buffer = fs.readFileSync(p);
      logoBase64 = `data:image/png;base64,${buffer.toString('base64')}`;
      break;
    }
  }

  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@600;700&family=JetBrains+Mono:wght@400;600&display=swap');

  @page {
    size: A4 portrait;
    margin: 22mm 16mm 22mm 16mm;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'Plus Jakarta Sans', sans-serif;
    color: #1e293b;
    background: #ffffff;
    line-height: 1.55;
    font-size: 9.8pt;
  }

  .page-break { page-break-before: always; }

  h1 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 23pt;
    font-weight: 800;
    color: #0f172a;
    line-height: 1.15;
    margin-bottom: 6px;
  }
  .doc-subtitle {
    font-size: 11pt;
    color: #64748b;
    margin-bottom: 16px;
  }

  h2 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 13pt;
    font-weight: 700;
    color: #0f172a;
    margin: 16px 0 8px 0;
    border-bottom: 1.5px solid #e2e8f0;
    padding-bottom: 4px;
  }

  p { margin-bottom: 8px; color: #334155; }

  .feature-box {
    background: #f0fdf4;
    border: 2px solid #22c55e;
    border-radius: 8px;
    padding: 14px 16px;
    margin: 14px 0;
  }
  .feature-title {
    font-size: 12pt;
    font-weight: 800;
    color: #15803d;
    margin-bottom: 6px;
  }
  .feature-desc {
    font-size: 9.5pt;
    color: #166534;
    line-height: 1.45;
  }

  .card-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    margin: 12px 0;
  }
  .card {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    padding: 10px 12px;
  }
  .card-title {
    font-weight: 700;
    color: #0f172a;
    font-size: 9.5pt;
    margin-bottom: 3px;
  }
  .card-desc {
    font-size: 8.5pt;
    color: #64748b;
    line-height: 1.35;
  }

  .step-box {
    background: #f8fafc;
    border-left: 4px solid #0d9488;
    border-radius: 4px;
    padding: 10px 14px;
    margin-bottom: 10px;
  }
  .step-number {
    font-weight: 800;
    color: #0d9488;
    font-size: 8.5pt;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .step-title {
    font-size: 11pt;
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 4px;
  }

  pre {
    background: #0f172a;
    color: #f8fafc;
    font-family: 'JetBrains Mono', monospace;
    font-size: 7.2pt;
    line-height: 1.4;
    padding: 10px 12px;
    border-radius: 6px;
    margin: 6px 0 10px 0;
    white-space: pre-wrap;
    word-break: break-all;
  }

  .code-inline {
    background: #e2e8f0;
    color: #0f172a;
    font-weight: 700;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 8.5pt;
    font-family: 'JetBrains Mono', monospace;
  }

  .ai-help-banner {
    background: #f0f9ff;
    border: 1.5px dashed #0284c7;
    border-radius: 6px;
    padding: 12px 14px;
    margin: 16px 0 12px 0;
  }
  .ai-help-title {
    font-size: 11pt;
    font-weight: 800;
    color: #0369a1;
    margin-bottom: 3px;
  }
  .ai-help-desc {
    font-size: 9pt;
    color: #0c4a6e;
    line-height: 1.4;
  }

  .legal-box {
    margin-top: 14px;
    padding: 10px 12px;
    background: #f8fafc;
    border-top: 1.5px solid #cbd5e1;
    font-size: 7.5pt;
    color: #64748b;
    line-height: 1.4;
  }
  .legal-box strong { color: #334155; }
</style>
</head>
<body>

  <!-- PAGE 1 -->
  <h1>The Multi-Format Content Repurposer</h1>
  <div class="doc-subtitle">Turn 1 article, newsletter, or transcript into 4 targeted distribution assets in seconds—free and 100% private.</div>

  <div class="feature-box">
    <div class="feature-title">🚀 Maximum Reach With Minimal Effort</div>
    <div class="feature-desc">
      Most creators and strategists spend hours writing a great article, only to post a bare link that nobody clicks. This tool instantly converts a single piece of long-form writing into a conversational LinkedIn post, a 5-tweet X thread, an email newsletter summary, and a community discussion prompt—ready to copy and publish.
    </div>
  </div>

  <h2>1. Overview: How It Works</h2>
  <div class="card-grid">
    <div class="card">
      <div class="card-title">📝 1 Single Input</div>
      <div class="card-desc">Paste any long-form blog post, YouTube/podcast transcript, or rough notes into the left panel.</div>
    </div>
    <div class="card">
      <div class="card-title">⚡ 4 Native Outputs</div>
      <div class="card-desc">Automatically generates 1 LinkedIn Post, 1 X/Twitter Thread, 1 Email Blurb, and 1 Discussion Prompt.</div>
    </div>
    <div class="card">
      <div class="card-title">📋 1-Click Clipboard Copy</div>
      <div class="card-desc">Each output card has an independent copy button with instant feedback.</div>
    </div>
    <div class="card">
      <div class="card-title">🔒 Completely Private</div>
      <div class="card-desc">Everything runs directly in your local browser window. No drafts or text are ever uploaded to cloud servers.</div>
    </div>
  </div>

  <h2>2. Quick-Start Guide (30 Seconds)</h2>
  <div class="step-box">
    <div class="step-number">Step 1</div>
    <div class="step-title">Open the Repurposer</div>
    <p>Double-click <span class="code-inline">repurposer.html</span> in your file explorer. It will open instantly in Chrome, Edge, Safari, or Firefox.</p>
  </div>
  <div class="step-box">
    <div class="step-number">Step 2</div>
    <div class="step-title">Paste & Click</div>
    <p>Type your headline, paste your text (or click "Load Sample" to test), and click <span class="code-inline">⚡ Repurpose Into 4 Formats</span>.</p>
  </div>
  <div class="step-box">
    <div class="step-number">Step 3</div>
    <div class="step-title">Copy & Publish</div>
    <p>Click the "Copy" button on any card to grab the ready-to-post text directly to your clipboard.</p>
  </div>

  <div class="page-break"></div>

  <!-- PAGE 2 -->
  <h2>3. The Source Code (<span class="code-inline">repurposer.html</span>)</h2>
  <p>Save this complete file directly inside <span class="code-inline">E:\\3sci\\Work Hacks\\The Multi-Format Content Repurpose Tool\\repurposer.html</span>:</p>

  <pre>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;title&gt;Multi-Format Content Repurposer | 3Sci Open Source Work Hack #3&lt;/title&gt;
  &lt;link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Space+Grotesk:wght@700&display=swap" rel="stylesheet"&gt;
  &lt;style&gt;
    :root { --bg: #090f17; --card-bg: #111a26; --card-border: #1e2c3d; --accent: #00d2b4; --text: #f1f5f9; --text-muted: #94a3b8; }
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Plus Jakarta Sans', sans-serif; }
    body { background-color: var(--bg); color: var(--text); padding: 30px 40px; }
    header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid var(--card-border); padding-bottom: 16px; margin-bottom: 24px; }
    .brand-title { font-family: 'Space Grotesk', sans-serif; font-size: 22px; font-weight: 700; color: var(--accent); }
    .badge { background: rgba(0,210,180,0.12); color: var(--accent); border: 1px solid var(--accent); padding: 6px 14px; border-radius: 6px; font-size: 13px; font-weight: 700; }
    .main-layout { display: grid; grid-template-columns: 460px 1fr; gap: 24px; }
    .input-panel { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 12px; padding: 24px; display: flex; flex-direction: column; gap: 16px; }
    input[type="text"], textarea, select { width: 100%; background: #090f17; border: 1px solid var(--card-border); border-radius: 6px; color: #fff; padding: 10px; }
    textarea { min-height: 250px; }
    .btn-primary { background: var(--accent); color: #090f17; border: none; padding: 12px; border-radius: 6px; font-weight: 800; cursor: pointer; flex: 1; }
    .output-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
    .output-card { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 10px; padding: 18px; }
    .output-content { background: #090f17; border: 1px solid #1a2737; border-radius: 6px; padding: 12px; font-size: 12.5px; height: 220px; overflow-y: auto; white-space: pre-wrap; }
    footer { display: flex; justify-content: space-between; border-top: 1px solid var(--card-border); margin-top: 28px; padding-top: 14px; font-size: 13px; color: var(--text-muted); }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;header&gt;
    &lt;div class="brand-title"&gt;3SCI CONTENT REPURPOSER&lt;/div&gt;
    &lt;div class="badge"&gt;Open Source Hack #3&lt;/div&gt;
  &lt;/header&gt;
  &lt;div class="main-layout"&gt;
    &lt;div class="input-panel"&gt;
      &lt;input type="text" id="input-headline" placeholder="Headline"&gt;
      &lt;textarea id="input-content" placeholder="Paste article or transcript here..."&gt;&lt;/textarea&gt;
      &lt;button class="btn-primary" onclick="repurposeContent()"&gt;⚡ Repurpose Into 4 Formats&lt;/button&gt;
    &lt;/div&gt;
    &lt;div class="output-grid"&gt;
      &lt;div class="output-card"&gt;&lt;div id="out-linkedin" class="output-content"&gt;&lt;/div&gt;&lt;/div&gt;
      &lt;div class="output-card"&gt;&lt;div id="out-twitter" class="output-content"&gt;&lt;/div&gt;&lt;/div&gt;
      &lt;div class="output-card"&gt;&lt;div id="out-newsletter" class="output-content"&gt;&lt;/div&gt;&lt;/div&gt;
      &lt;div class="output-card"&gt;&lt;div id="out-discussion" class="output-content"&gt;&lt;/div&gt;&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;footer&gt;
    &lt;span&gt;3sci.com • Open Source Work Hacks&lt;/span&gt;
    &lt;span&gt;100% Client-Side • Zero Cloud Telemetry&lt;/span&gt;
  &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

  <div class="page-break"></div>

  <!-- PAGE 3 -->
  <h2>4. How to Adapt & Customize Output Formats</h2>
  <p>You can easily adjust the structure of the outputs to match your personal writing voice:</p>

  <div class="step-box">
    <div class="step-number">Customization 1</div>
    <div class="step-title">Changing Hashtags & Call to Actions</div>
    <p>Open <span class="code-inline">repurposer.html</span> in Notepad, locate the <span class="code-inline">linkedinPost</span> variable, and swap in your brand hashtags or newsletter sign-up links.</p>
  </div>

  <div class="step-box">
    <div class="step-number">Customization 2</div>
    <div class="step-title">Adding a Fifth Format (e.g., Short Video Script)</div>
    <p>You can add a 5th card to the output grid (like a 60-second TikTok / YouTube Short hook script) by duplicating an output card in the HTML and appending the formatting logic in the script function.</p>
  </div>

  <!-- AI PLATFORM ASSISTANCE BANNER -->
  <div class="ai-help-banner">
    <div class="ai-help-title">✨ Always ask your preferred AI platform if you need help updating code!</div>
    <div class="ai-help-desc">
      If you want to add new social formats (such as Instagram carousel copy or a podcast host introduction), simply paste your <span class="code-inline">repurposer.html</span> file into ChatGPT, Claude, or Gemini with this prompt:<br><br>
      <em>"Here is my repurposer.html file. Please preserve all clipboard copy functions and styling, but add an extra output card that generates a 60-second video script based on the input text."</em><br><br>
      Your AI will format the entire code block cleanly so you can copy, paste, and run.
    </div>
  </div>

  <!-- INDEMNITY CLAUSE -->
  <div class="legal-box">
    <strong>INDEMNITY & LIMITATION OF LIABILITY:</strong> This software, local automation templates, and synthesized informational materials are provided on an "as is" and "as available" basis for general productivity, workflow automation, and educational purposes. 3Sci, its authors, and contributors make no representations or warranties of any kind, express or implied, regarding content accuracy, marketing performance, or copyright compliance. In no event shall 3Sci, its founders, or contributors be held liable for any direct, indirect, incidental, or consequential damages, commercial losses, or publishing disputes arising from the use or customization of this tool. Users maintain sole responsibility for editing and reviewing all generated content prior to public dissemination.
  </div>

</body>
</html>
  `;

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setContent(htmlContent, { waitUntil: 'domcontentloaded' });

  const pdfPath = path.join('./', '3Sci_Work_Hack_3_Content_Repurposer_Manual.pdf');

  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: `
      <div style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 8pt; width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 0 16mm; color: #64748b; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px; box-sizing: border-box;">
        <div style="display: flex; align-items: center; gap: 8px;">
          ${logoBase64 ? `<img src="${logoBase64}" style="height: 18px; width: auto; filter: invert(1);" alt="3Sci Logo">` : ''}
          <span style="font-weight: 800; color: #0f172a; letter-spacing: 0.5px;">3Sci Intelligence Systems</span>
        </div>
        <span style="text-transform: uppercase; font-size: 7pt; letter-spacing: 1px; color: #0d9488; font-weight: 700;">Open Source Workflow Manual</span>
      </div>
    `,
    footerTemplate: `
      <div style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 8pt; width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 0 16mm; color: #64748b; border-top: 1px solid #e2e8f0; padding-top: 4px; box-sizing: border-box;">
        <span><strong>3sci.com</strong></span>
        <span>Page <span class="pageNumber"></span> of <span class="totalPages"></span></span>
        <span>3Sci Open Source Work Hack #3</span>
      </div>
    `,
    margin: {
      top: '18mm',
      bottom: '18mm',
      left: '16mm',
      right: '16mm'
    }
  });

  await browser.close();
  console.log(`\nManual PDF generated successfully: ${path.resolve(pdfPath)}`);
}

generateRepurposerManual();