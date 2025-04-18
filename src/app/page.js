// pages/index.js
import Head from 'next/head'
import { SiC, SiPython, SiRuby, SiGo, SiReact, SiVuedotjs, SiMysql, SiPostgresql, SiSupabase, SiAmazon, SiCloudflare, SiDocker } from 'react-icons/si'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Head>
        <title>渋谷 圭亮 | Portfolio</title>
        <meta name="description" content="渋谷圭亮のポートフォリオサイト" />
      </Head>

      <header className="sticky top-0 bg-white shadow z-10">
        <div className="max-w-4xl mx-auto flex items-center justify-between py-4 px-6">
          <h1 className="text-2xl font-extrabold">渋谷 圭亮</h1>
          <nav className="space-x-6 text-lg">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#education" className="hover:text-blue-600">Education</a>
            <a href="#skills" className="hover:text-blue-600">Skills</a>
            <a href="#experience" className="hover:text-blue-600">Experience</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto space-y-16 py-12 px-6">
        {/* Hero */}
        <section id="about" className="text-center space-y-4">
          <p className="text-sm uppercase tracking-widest text-gray-500">Backend Engineer / Aspiring CTO</p>
          <h2 className="text-5xl font-bold">渋谷 圭亮</h2>
        </section>

        {/* Education */}
        <section id="education">
          <h3 className="text-3xl font-semibold mb-6 border-b pb-2">Education</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <time className="text-gray-500 w-24">2018 - 2023</time>
              <p>長野工業高等専門学校 電子情報工学科</p>
            </li>
            <li className="flex items-start">
              <time className="text-gray-500 w-24">2023 - 2025</time>
              <p>信州大学 工学部 電子情報システム工学科</p>
            </li>
            <li className="flex items-start">
              <time className="text-gray-500 w-24">2025 - Present</time>
              <p>信州大学大学院 総合理工研究科 工学専攻</p>
            </li>
          </ul>
        </section>

        {/* Skills with Icons */}
        <section id="skills">
          <h3 className="text-3xl font-semibold mb-6 border-b pb-2">Skills</h3>
          <div className="space-y-10">
            {/* Programming Languages */}
            <div>
              <h4 className="text-2xl font-medium mb-4">Programming Languages</h4>
              <div className="flex flex-wrap gap-8">
                <div className="flex flex-col items-center text-center">
                  <SiC size={36} />
                  <span>C</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <SiPython size={36} />
                  <span>Python</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <SiRuby size={36} />
                  <span>Ruby</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <SiGo size={36} />
                  <span>Go</span>
                </div>
              </div>
            </div>
            {/* Frameworks */}
            <div>
              <h4 className="text-2xl font-medium mb-4">Frameworks</h4>
              <div className="flex flex-wrap gap-8">
                <div className="flex flex-col items-center text-center">
                  <SiReact size={36} />
                  <span>React</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <SiVuedotjs size={36} />
                  <span>Vue</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <SiRuby size={36} />
                  <span>Rails</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <SiPython size={36} />
                  <span>Flask</span>
                </div>
              </div>
            </div>
            {/* Databases & Infra */}
            <div>
              <h4 className="text-2xl font-medium mb-4">Databases & Infra</h4>
              <div className="flex flex-wrap gap-8">
                <div className="flex flex-col items-center text-center">
                  <SiMysql size={36} />
                  <span>MySQL</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <SiPostgresql size={36} />
                  <span>PostgreSQL</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <SiSupabase size={36} />
                  <span>Supabase</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <SiAmazon size={36} />
                  <span>AWS</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <SiCloudflare size={36} />
                  <span>Cloudflare</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <SiDocker size={36} />
                  <span>Docker</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section id="experience">
          <h3 className="text-3xl font-semibold mb-6 border-b pb-2">Experience & Career</h3>
          <div className="space-y-8">
            {/* Item 1 */}
            <div className="flex items-start">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-blue-600 rounded-full mt-1"></div>
                <div className="flex-1 w-px bg-gray-200 mt-1"></div>
              </div>
              <div className="ml-6">
                <time className="text-blue-600 font-semibold">2023.02</time>
                <h4 className="mt-1 text-lg font-medium">PR TIMES HACKATHON</h4>
                <p className="mt-1">3日間でDreamSinkを開発 (Flask, PostgreSQL)。<br/>仕様書作成・要件定義を主導。</p>
              </div>
            </div>
            {/* Item 2 */}
            <div className="flex items-start">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-blue-600 rounded-full mt-1"></div>
                <div className="flex-1 w-px bg-gray-200 mt-1"></div>
              </div>
              <div className="ml-6">
                <time className="text-blue-600 font-semibold">2023.04</time>
                <h4 className="mt-1 text-lg font-medium">チーム開発 継続</h4>
                <p className="mt-1">DreamSinkの機能拡張、継続開発、<br/>デプロイ環境構築。</p>
              </div>
            </div>
            {/* Item 3 */}
            <div className="flex items-start">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-blue-600 rounded-full mt-1"></div>
              </div>
              <div className="ml-6">
                <time className="text-blue-600 font-semibold">2024.09</time>
                <h4 className="mt-1 text-lg font-medium">ShinBizForum 設立</h4>
                <p className="mt-1">学生間で互いを刺激し合うコミュニティ運営、<br/>勉強会・活動を定期開催。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects">
          <h3 className="text-3xl font-semibold mb-6 border-b pb-2">Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border rounded-lg hover:shadow-lg transition">
              <h4 className="text-xl font-medium mb-2">大学施設向け予約システム</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>卒業研究テーマで開発</li>
                <li>オンラインで予約手続きを完結</li>
                <li>フィードバック反映、リリース予定</li>
              </ul>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-lg transition">
              <h4 className="text-xl font-medium mb-2">ZoomURL 自動生成ジェネレータ</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Rails + React で制作</li>
                <li>オンライン授業のURL生成を自動化</li>
                <li>CI/CD構築、Zoom API アプリ申請予定</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section id="vision">
          <h3 className="text-3xl font-semibold mb-6 border-b pb-2">Vision</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>目指す: PdM, 新規事業責任者, CTO</li>
            <li>行動: 毎日の技術勉強 (チーム開発, 個人開発, ハンズオン)</li>
            <li>ハッカソン・インターン参加で技術力 & マネジメント力向上</li>
          </ul>
        </section>

        {/* Contact Footer */}
        <section id="contact" className="text-center pt-12">
          <p>© 2025 渋谷 圭亮</p>
        </section>
      </main>
    </div>
  )
}
