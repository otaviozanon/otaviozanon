const COLORS = {
  dark: {
    bg: '#0d0d0d',
    border: '#3a3a3a',
    titlebar: '#1a1a1a',
    titleText: '#666',
    text: '#c0c0c0',
    prompt: '#00cc7a',
    cmd: '#e0e0e0',
    output: '#888',
    dir: '#e09040',
    dotR: '#ff5f57',
    dotY: '#febc2e',
    dotG: '#28c840',
  },
  light: {
    bg: '#fafafa',
    border: '#d0d0d0',
    titlebar: '#e8e8e8',
    titleText: '#999',
    text: '#333',
    prompt: '#007a3d',
    cmd: '#111',
    output: '#666',
    dir: '#c07020',
    dotR: '#ff5f57',
    dotY: '#febc2e',
    dotG: '#28c840',
  },
};

function esc(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function terminal(theme) {
  const c = COLORS[theme] || COLORS.dark;
  return `
<div xmlns="http://www.w3.org/1999/xhtml" style="
  font-family: 'SF Mono','Fira Code','Fira Mono',Menlo,Consolas,monospace;
  font-size: 13px;
  line-height: 1.55;
  color: ${c.text};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 24px 0;
  box-sizing: border-box;
">
<div style="max-width:820px;width:100%;">
  <div style="
    border: 1px solid ${c.border};
    border-radius: 6px;
    overflow: hidden;
    background: ${c.bg};
  ">
    <div style="
      background: ${c.titlebar};
      padding: 8px 14px;
      display: flex;
      align-items: center;
      gap: 8px;
      border-bottom: 1px solid ${c.border};
    ">
      <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${c.dotR};"></span>
      <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${c.dotY};"></span>
      <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${c.dotG};"></span>
      <span style="color:${c.titleText};font-size:12px;margin-left:6px;">otavio@github ~ bash</span>
    </div>
    <div style="padding:16px 18px;">
      <pre style="font-family:inherit;margin:0;white-space:pre-wrap;color:${c.text};font-size:13px;line-height:1.55;">
<span style="color:${c.cmd};font-size:14px;font-weight:bold;">Otavio Zanon - Frontend Developer</span>

<span style="color:${c.prompt};">otavio@github:~$</span> <span style="color:${c.cmd};">cat about.txt</span>
<span style="color:${c.dir};">▸</span> <span style="color:${c.output};">Goal-oriented, responsible, and a team player.</span>
<span style="color:${c.dir};">▸</span> <span style="color:${c.output};">Currently working with ReactJS.</span>
<span style="color:${c.dir};">▸</span> <span style="color:${c.output};">Learning about Performance Optimization.</span>
<span style="color:${c.dir};">▸</span> <span style="color:${c.output};">Fun fact: I have 4 rabbits. 🐇🐇🐇🐇</span>

<span style="color:${c.prompt};">otavio@github:~$</span> <span style="color:${c.cmd};">ls tech-stack/</span>

<span style="color:${c.dir};font-weight:bold;">▸ languages/</span>  <span style="color:${c.output};">JavaScript · TypeScript · Python</span>
<span style="color:${c.dir};font-weight:bold;">▸ frontend/</span>   <span style="color:${c.output};">React · Angular · Next.js · Redux</span>
<span style="color:${c.dir};font-weight:bold;">▸ styling/</span>    <span style="color:${c.output};">Bootstrap · TailwindCSS · StyledComponents · AntDesign · Less</span>
<span style="color:${c.dir};font-weight:bold;">▸ backend/</span>    <span style="color:${c.output};">Node.js · Python · C#</span>
<span style="color:${c.dir};font-weight:bold;">▸ databases/</span>  <span style="color:${c.output};">MySQL · Postgres · SQLite · SQLServer · Supabase · Firebase</span>
<span style="color:${c.dir};font-weight:bold;">▸ cloud/</span>      <span style="color:${c.output};">AWS · Azure · Cloudflare · Vercel · Render</span>
<span style="color:${c.dir};font-weight:bold;">▸ tools/</span>      <span style="color:${c.output};">Git</span>
      </pre>
    </div>
  </div>
</div>
</div>`;
}

function socials() {
  return `
<div xmlns="http://www.w3.org/1999/xhtml" style="
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
">
  <a href="https://facebook.com/otaviozanonn"><img src="https://img.shields.io/badge/Facebook-%231877F2.svg?logo=Facebook&amp;logoColor=white" style="height:22px;border:0;" /></a>
  <a href="https://instagram.com/otaxvio"><img src="https://img.shields.io/badge/Instagram-%23E4405F.svg?logo=Instagram&amp;logoColor=white" style="height:22px;border:0;" /></a>
  <a href="https://linkedin.com/in/otavio-zanon-820512183"><img src="https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&amp;logoColor=white" style="height:22px;border:0;" /></a>
</div>`;
}

function visitor() {
  return `
<div xmlns="http://www.w3.org/1999/xhtml" style="
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
">
  <img src="https://visitor-badge.laobi.icu/badge?page_id=otaviozanon.otaviozanon&amp;left_color=darkgray&amp;right_color=yellow" style="border:0;opacity:0.4;" />
</div>`;
}

export default function handler(req, res) {
  const { searchParams } = new URL(req.url, 'http://localhost');
  const section = searchParams.get('section') || 'terminal';
  const theme = searchParams.get('theme') || 'dark';

  const sections = {
    terminal: { content: terminal, width: 840, height: 500 },
    socials: { content: socials, width: 480, height: 40 },
    visitor: { content: visitor, width: 300, height: 30 },
  };

  const cfg = sections[section] || sections.terminal;
  const body = cfg.content(theme);

  const svg = `<svg width="${cfg.width}" height="${cfg.height}" xmlns="http://www.w3.org/2000/svg">
  <foreignObject width="100%" height="100%">
    ${body}
  </foreignObject>
</svg>`;

  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=3600');
  res.status(200).send(svg);
}
