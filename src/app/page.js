import { getExperience } from '../lib/getExperience';
import Head from 'next/head';
import {
  SiC, SiPython, SiRuby, SiGo, SiReact, SiFlask, SiVuedotjs, SiMysql,
  SiPostgresql, SiSupabase, SiAmazon, SiCloudflare, SiDocker, SiSqlite,
  SiSqlalchemy, SiGithub, SiRubyonrails, SiRubysinatra, SiGithubactions, SiRaspberrypi, SiJavascript
} from 'react-icons/si';
import { TimelineSection } from './components/TimelineSection';

const languages = [
  { icon: SiC, label: 'C' },
  { icon: SiPython, label: 'Python' },
  { icon: SiRuby, label: 'Ruby' },
  { icon: SiGo, label: 'Go' },
  { icon: SiJavascript, label: 'JavaScript'}

];

const frameworks = [
  { icon: SiReact, label: 'React' },
  { icon: SiVuedotjs, label: 'Vue' },
  { icon: SiRubyonrails, label: 'Rails' },
  { icon: SiRubysinatra, label: 'Sinatra' },
  { icon: SiFlask, label: 'Flask' },$
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
          <nav className="hidden sm:flex space-x-6 text-lg">
            <a href="#about" className="hover:text-black transition">About</a>
            <a href="#education" className="hover:text-black transition">Education</a>
            <a href="#skills" className="hover:text-black transition">Skills</a>
            <a href="#experience" className="hover:text-black transition">Experience</a>
            <a href="#contact" className="hover:text-black transition">Contact</a>
          </nav>
        </div>
      </header>

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
            {[{ title: 'Programming Languages', items: languages },
              { title: 'Frameworks', items: frameworks },
              { title: 'Databases & Infra', items: infra },
              { title: 'Tools', items: tools }].map(({ title, items }) => (
                <div key={title}>
                  <h4 className="text-xl font-semibold mb-4 border-l-4 border-black pl-2">{title}</h4>
                  <div className="flex flex-wrap gap-6">
                    {items.map(({ icon: Icon, label }, i) => (
                      <div key={i} className="flex flex-col items-center text-center w-24">
                        <Icon size={36} />
                        <span className="text-sm font-semibold text-[#333] mt-2">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="my-16">
          <h3 className="text-3xl font-extrabold mb-6 border-b-2 border-black pb-2">
            Experience & Career
          </h3>
          <TimelineSection experience={experience} />
        </section>
        {/* contact */}
        <section id="contact" className="text-center pt-12 text-[#555] space-y-2">
          <h3 className="text-3xl font-extrabold mb-6 border-black pb-2">Interested in working together?</h3>
          <a
            href="mailto:support@cercil.net"
            className="inline-block bg-black text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-800 transition"
          >
            ✉️ support@cercil.net
          </a>
        </section>
        {/* Footer */}
        <section id="footer" className="text-center pt-12 text-[#555]">
          <p>© 2025 Keisuke Shibuya</p>
        </section>
      </main>
    </div>
  );
}
