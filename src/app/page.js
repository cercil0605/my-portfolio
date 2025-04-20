import { getExperience } from '../lib/getExperience';
import Head from 'next/head';
import {
  SiC, SiPython, SiRuby, SiGo, SiReact, SiFlask, SiVuedotjs, SiMysql,
  SiPostgresql, SiSupabase, SiAmazon, SiCloudflare, SiDocker, SiSqlite,
  SiSqlalchemy, SiGithub, SiRubyonrails, SiRubysinatra, SiGithubactions, SiRaspberrypi
} from 'react-icons/si';
import {
  Timeline, TimelineItem, TimelineSeparator, TimelineConnector,
  TimelineContent, TimelineDot
} from '@mui/lab';
import { Typography, Paper } from '@mui/material';

// ラベル付きアイコン定義
const languages = [
  { icon: SiC, label: 'C' },
  { icon: SiPython, label: 'Python' },
  { icon: SiRuby, label: 'Ruby' },
  { icon: SiGo, label: 'Go' },
];

const frameworks = [
  { icon: SiReact, label: 'React' },
  { icon: SiVuedotjs, label: 'Vue' },
  { icon: SiRubyonrails, label: 'Rails' },
  { icon: SiRubysinatra, label: 'Sinatra' },
  { icon: SiFlask, label: 'Flask' },
];

const infra = [
  { icon: SiMysql, label: 'MySQL' },
  { icon: SiPostgresql, label: 'PostgreSQL' },
  { icon: SiSqlite, label: 'SQLite' },
  { icon: SiSupabase, label: 'Supabase' },
  { icon: SiAmazon, label: 'AWS' },
  { icon: SiCloudflare, label: 'Cloudflare' },
  { icon: SiDocker, label: 'Docker' },
];

const tools = [
  { icon: SiSqlalchemy, label: 'SQLAlchemy' },
  { icon: SiGithub, label: 'GitHub' },
  { icon: SiGithubactions, label: 'GitHub Actions' },
  { icon: SiRaspberrypi, label: 'Raspberry Pi' },
];

export default async function Home() {
  const experience = await getExperience();

  return (
    <div className="min-h-screen bg-[#f4f4f4] text-[#222] font-sans">
      <Head>
        <title>Cercil's Portfolio</title>
        <meta name="description" content="cercil's portfolio" />
      </Head>

      {/* Header */}
      <header className="sticky top-0 bg-white shadow z-10">
        <div className="max-w-4xl mx-auto flex items-center justify-between py-4 px-6">
          <h1 className="text-2xl font-black tracking-tight">Keisuke Shibuya</h1>
          <nav className="space-x-6 text-lg">
            <a href="#about" className="hover:text-black transition">About</a>
            <a href="#education" className="hover:text-black transition">Education</a>
            <a href="#skills" className="hover:text-black transition">Skills</a>
            <a href="#experience" className="hover:text-black transition">Experience</a>
            <a href="#contact" className="hover:text-black transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-4xl mx-auto space-y-20 py-12 px-6">
        {/* About */}
        <section id="about" className="text-center space-y-4">
          <p className="text-sm uppercase tracking-widest text-gray-500">Backend Engineer / Student</p>
          <h2 className="text-5xl font-black tracking-tight">Keisuke Shibuya</h2>
        </section>

        {/* Education */}
        <section id="education">
          <h3 className="text-3xl font-extrabold mb-6 border-b-2 border-black pb-2">Education</h3>

          <div className="grid gap-y-6 border-l-2 border-black pl-6">
            <div className="grid grid-cols-[10ch_auto] gap-x-4">
              <span className="text-sm text-gray-600">2018 - 2023</span>
              <p className="text-base text-[#222] font-medium">長野工業高等専門学校 電子情報工学科</p>
            </div>
            <div className="grid grid-cols-[10ch_auto] gap-x-4">
              <span className="text-sm text-gray-600">2023 - 2025</span>
              <p className="text-base text-[#222] font-medium">信州大学 工学部 電子情報システム工学科</p>
            </div>
            <div className="grid grid-cols-[10ch_auto] gap-x-4">
              <span className="text-sm text-gray-600">2025 - Present</span>
              <p className="text-base text-[#222] font-medium">信州大学大学院 総合理工研究科 工学専攻 情報数理・融合システム分野</p>
            </div>
          </div>
        </section>
        {/* Skills */}
        <section id="skills">
          <h3 className="text-3xl font-extrabold mb-6 border-b-2 border-black pb-2">Skills</h3>

          <div className="space-y-12">
            {/* Programming Languages */}
            <div>
              <h4 className="text-xl font-semibold mb-4 border-l-4 border-black pl-2">Programming Languages</h4>
              <div className="flex flex-wrap gap-6">
                {languages.map(({ icon: Icon, label }, i) => (
                  <div key={i} className="flex flex-col items-center text-center w-24">
                    <Icon size={36} />
                    <span className="text-sm font-semibold text-[#333] mt-2">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div>
              <h4 className="text-xl font-semibold mb-4 border-l-4 border-black pl-2">Frameworks</h4>
              <div className="flex flex-wrap gap-6">
                {frameworks.map(({ icon: Icon, label }, i) => (
                  <div key={i} className="flex flex-col items-center text-center w-24">
                    <Icon size={36} />
                    <span className="text-sm font-semibold text-[#333] mt-2">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Databases & Infra */}
            <div>
              <h4 className="text-xl font-semibold mb-4 border-l-4 border-black pl-2">Databases & Infra</h4>
              <div className="flex flex-wrap gap-6">
                {infra.map(({ icon: Icon, label }, i) => (
                  <div key={i} className="flex flex-col items-center text-center w-24">
                    <Icon size={36} />
                    <span className="text-sm font-semibold text-[#333] mt-2">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h4 className="text-xl font-semibold mb-4 border-l-4 border-black pl-2">Tools</h4>
              <div className="flex flex-wrap gap-6">
                {tools.map(({ icon: Icon, label }, i) => (
                  <div key={i} className="flex flex-col items-center text-center w-24">
                    <Icon size={36} />
                    <span className="text-sm font-semibold text-[#333] mt-2">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* Experience */}
        <section id="experience" className="my-16">
          <h3 className="text-3xl font-extrabold mb-6 border-b-2 border-black pb-2">Experience & Career</h3>
          <Timeline position="alternate">
            {experience.map((item, i, arr) => (
              <TimelineItem key={item.date}>
                <TimelineSeparator>
                  <TimelineDot sx={{ bgcolor: '#222' }} />
                  {i !== arr.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent sx={{ py: 2 }}>
                  <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>{item.date}</Typography>
                  <Paper
                    elevation={1}
                    sx={{
                      p: 2,
                      bgcolor: '#fff',
                      border: '1.5px solid #ccc',
                      borderRadius: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: 6,
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    <Typography variant="h6" sx={{ mb: 1 }}>{item.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{item.content}</Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </section>
        {/* Footer */}
        <section id="contact" className="text-center pt-12 text-[#555]">
          <p>© 2025 Keisuke Shibuya</p>
        </section>
      </main>
    </div>
  );
}
