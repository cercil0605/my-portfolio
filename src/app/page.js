import { getExperience } from '../lib/getExperience';
import Head from 'next/head'
import { SiC, SiPython, SiRuby, SiGo, SiReact,SiFlask, SiVuedotjs, SiMysql, SiPostgresql, SiSupabase, SiAmazon, SiCloudflare, SiDocker, SiSqlite, SiSqlalchemy, SiGithub, SiRubyonrails, SiRubysinatra, SiGithubactions, SiRaspberrypi} from 'react-icons/si'
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent
} from '@mui/lab';
import { Typography, Paper } from '@mui/material';

export default async function Home() {
  const experience = await getExperience(); // ← サーバーで取得

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Head>
        <title>Cercil's Portfolio</title>
        <meta name="description" content="cercil's portfolio" />
      </Head>

      <header className="sticky top-0 bg-white shadow z-10">
        <div className="max-w-4xl mx-auto flex items-center justify-between py-4 px-6">
          <h1 className="text-2xl font-extrabold">Keisuke Shibuya</h1>
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
          <p className="text-sm uppercase tracking-widest text-gray-500">Backend Engineer / Student</p>
          <h2 className="text-5xl font-bold">Keisuke Shibuya</h2>
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
              <p>信州大学大学院 総合理工研究科 工学専攻 情報数理・融合システム分野</p>
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
                  <SiRubyonrails size={36} />
                  <span>Rails</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <SiRubysinatra size={36} />
                  <span>Sinatra</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <SiFlask size={36} />
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
                  <SiSqlite size={36} />
                  <span>SQLite</span>
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
            {/* Tools */}
            <div>
              <h4 className="text-2xl font-medium mb-4">Tools</h4>
              <div className="flex flex-wrap gap-8">
                <div className="flex flex-col items-center text-center">
                  <SiSqlalchemy size={36} />
                  <span>SQLAlchemy</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <SiGithub size={36} />
                  <span>GitHub</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <SiGithubactions size={36} />
                  <span>GitHubActions</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <SiRaspberrypi size={36} />
                  <span>RaspberryPi</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="my-16">
          <h3 className="text-3xl font-semibold mb-8 border-b pb-2">Experience & Career</h3>
          <Timeline position="alternate">
            {experience.map((item, i, arr) => (
              <TimelineItem key={item.date}>
                <TimelineSeparator>
                  <TimelineDot sx={{ bgcolor: '#3b82f6' }} />
                  {i !== arr.length - 1 && <TimelineConnector />}
                </TimelineSeparator>

                <TimelineContent sx={{ py: 2 }}>
                  <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>{item.date}</Typography>
                  <Paper elevation={1} sx={{ p: 2, bgcolor: '#ffffff' }}>
                    <Typography variant="h6" sx={{ mb: 1 }}>{item.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{item.content}</Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
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
