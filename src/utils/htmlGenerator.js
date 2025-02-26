// HTMLを整形するフォーマット関数
const formatHTML = (html) => {
  let formatted = "";
  let indent = 0;

  // インデントの文字列を生成
  const getIndent = (count) => "    ".repeat(count);

  // HTMLを1行ずつ処理
  html.split(/>\s*</).forEach((line) => {
    // 閉じタグの場合はインデントを減らす
    if (line.match(/^\/\w/)) {
      indent -= 1;
    }

    // 行をフォーマットして追加
    formatted += getIndent(indent) + "<" + line + ">\n";

    // 自己完結タグでない開きタグの場合はインデントを増やす
    if (line.match(/^[^\/]/) && !line.match(/\/$/)) {
      indent += 1;
    }
  });

  return formatted.replace(/<(\s+)>/g, "<$1>").trim();
};

const generateHTML = (data) => {
  // ロゴ画像があれば、ファビコンとしても設定
  let faviconHtml = "";
  if (data.logoImage) {
    faviconHtml = `
    <link rel="icon" href="${data.logoImage}" type="image/x-icon">
    <link rel="shortcut icon" href="${data.logoImage}" type="image/x-icon">`;
  }

  // テーマカラーを取得
  const { headerBg, headerText, mainBg, mainText, accentColor } =
    data.theme || {
      headerBg: "#2c3e50",
      headerText: "#ffffff",
      mainBg: "#f4f4f4",
      mainText: "#333333",
      accentColor: "#3498db",
    };

  // HTMLテンプレートを生成
  const htmlTemplate = `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.name} - ポートフォリオ</title>${faviconHtml}
    <style>
        :root {
            --header-bg: ${headerBg};
            --header-text: ${headerText};
            --main-bg: ${mainBg};
            --main-text: ${mainText};
            --accent-color: ${accentColor};
        }
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Helvetica Neue', Arial, sans-serif;
        }
        body {
            line-height: 1.6;
            color: var(--main-text);
            background-color: var(--main-bg);
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
        }
        header {
            background-color: var(--header-bg);
            color: var(--header-text);
            padding: 3rem 0;
            text-align: center;
        }
        .logo {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
            margin: 0 auto 1.5rem;
            display: block;
            border: 3px solid rgba(255, 255, 255, 0.3);
        }
        .hero {
            padding: 0 2rem;
        }
        .hero h1 {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
        }
        .hero p {
            font-size: 1.2rem;
            opacity: 0.9;
        }
        .section {
            background: white;
            margin: 2rem 0;
            padding: 2rem;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        h2 {
            color: var(--header-bg);
            border-bottom: 2px solid #ecf0f1;
            padding-bottom: 0.5rem;
            margin-bottom: 1.5rem;
        }
        .about p {
            margin-bottom: 1rem;
        }
        .skills-list {
            display: flex;
            flex-wrap: wrap;
            gap: 0.8rem;
        }
        .skill {
            background: #ecf0f1;
            color: var(--header-bg);
            padding: 0.5rem 1rem;
            border-radius: 3px;
            font-size: 0.9rem;
        }
        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 2rem;
        }
        .project {
            background: #f9f9f9;
            border-radius: 5px;
            overflow: hidden;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }
        .project-content {
            padding: 1.5rem;
        }
        .project h3 {
            margin-bottom: 0.5rem;
            color: var(--header-bg);
        }
        .project-tech {
            margin: 1rem 0;
            font-size: 0.9rem;
            color: #7f8c8d;
        }
        .project-link {
            display: inline-block;
            margin-top: 0.5rem;
            color: var(--accent-color);
            text-decoration: none;
        }
        .project-link:hover {
            text-decoration: underline;
        }
        .certifications {
            margin-top: 1rem;
        }
        .certification {
            margin-bottom: 1rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid #ecf0f1;
        }
        .certification:last-child {
            border-bottom: none;
        }
        .certification h3 {
            font-size: 1.1rem;
            margin-bottom: 0.3rem;
            color: var(--header-bg);
        }
        .certification-meta {
            display: flex;
            justify-content: space-between;
            color: #7f8c8d;
            font-size: 0.9rem;
        }
        .contact {
            text-align: center;
        }
        .social-links {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 1.5rem;
            margin-top: 1.5rem;
        }
        .social-link {
            color: var(--header-bg);
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
        }
        .social-link svg {
            width: 20px;
            height: 20px;
        }
        .social-link:hover {
            color: var(--accent-color);
        }
        footer {
            text-align: center;
            padding: 2rem;
            color: #7f8c8d;
            font-size: 0.9rem;
        }
        @media (max-width: 768px) {
            .projects-grid {
                grid-template-columns: 1fr;
            }
            .social-links {
                flex-direction: column;
                align-items: center;
                gap: 1rem;
            }
        }
    </style>
</head>
<body>
    <header>
        ${
          data.logoImage
            ? `<img src="${data.logoImage}" alt="${data.name} Logo" class="logo">`
            : ""
        }
        <div class="hero">
            <h1>${data.name}</h1>
            <p>${data.title}</p>
        </div>
    </header>
    
    <div class="container">
        <section class="section about">
            <h2>自己紹介</h2>
            <p>${data.about}</p>
        </section>
        
        <section class="section">
            <h2>スキル</h2>
            <div class="skills-list">
                ${data.selectedSkills
                  .map((skill) => `<span class="skill">${skill}</span>`)
                  .join("\n                ")}
            </div>
        </section>
        
        ${
          data.certifications.some((cert) => cert.name)
            ? `
        <section class="section">
            <h2>資格・認定</h2>
            <div class="certifications">
                ${data.certifications
                  .filter((cert) => cert.name)
                  .map(
                    (cert) => `
                <div class="certification">
                    <h3>${cert.name}</h3>
                    <div class="certification-meta">
                        <span>${cert.issuer}</span>
                        <span>${cert.year}</span>
                    </div>
                </div>
                `
                  )
                  .join("\n                ")}
            </div>
        </section>
        `
            : ""
        }
        
        <section class="section">
            <h2>プロジェクト</h2>
            <div class="projects-grid">
                ${data.projects
                  .filter((proj) => proj.title)
                  .map(
                    (project) => `
                <div class="project">
                    <div class="project-content">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="project-tech">使用技術: ${
                          project.technologies
                        }</div>
                        ${
                          project.link
                            ? `<a href="${project.link}" class="project-link" target="_blank">プロジェクトを見る</a>`
                            : ""
                        }
                    </div>
                </div>
                `
                  )
                  .join("\n                ")}
            </div>
        </section>
        
        <section class="section contact">
            <h2>お問い合わせ</h2>
            <p>お気軽にご連絡ください</p>
            <div class="social-links">
                ${
                  data.email
                    ? `
                <a href="mailto:${data.email}" class="social-link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    Email
                </a>`
                    : ""
                }
                
                ${
                  data.github
                    ? `
                <a href="${data.github}" class="social-link" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    GitHub
                </a>`
                    : ""
                }
                
                ${
                  data.linkedin
                    ? `
                <a href="${data.linkedin}" class="social-link" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    LinkedIn
                </a>`
                    : ""
                }
                
                ${
                  data.qiita
                    ? `
                <a href="${data.qiita}" class="social-link" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    Qiita
                </a>`
                    : ""
                }
                
                ${
                  data.line
                    ? `
                <a href="${data.line}" class="social-link" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                    LINE
                </a>`
                    : ""
                }
            </div>
        </section>
    </div>
    
    <footer>
        &copy; ${new Date().getFullYear()} ${data.name}. All rights reserved.
    </footer>
</body>
</html>`;

  // HTMLをフォーマットして返す
  return formatHTML(htmlTemplate);
};

export default generateHTML;
