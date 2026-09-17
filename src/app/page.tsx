import { NetworkGraphic } from "@/components/NetworkGraphic";
import { ChipGraphic } from "@/components/ChipGraphic";
import { CaseGraphic } from "@/components/CaseGraphic";
import { Parallax } from "@/components/Parallax";
import { Reveal } from "@/components/Reveal";
import { ScrollFadeScale } from "@/components/ScrollFadeScale";

const technologies = [
  {
    title: "Plume 智慧網關",
    desc: "雲端自我優化的 Mesh 架構，自動調整頻道與訊號，維持全屋穩定覆蓋。",
  },
  {
    title: "WiFi 6",
    desc: "支援更高併發裝置數與更低延遲，因應智慧家庭多裝置連網需求。",
  },
  {
    title: "G.hn 電力線技術",
    desc: "利用既有電力線佈線傳輸資料，免佈線即可補強訊號死角。",
  },
  {
    title: "Comtrend ACS 3.0",
    desc: "電信商可透過雲端平台對終端設備進行大規模遠端配置與維運。",
  },
];

const aiFeatures = [
  {
    title: "ESP32 邊緣運算節點",
    desc: "內建 ESP32 微控制器的感測終端，可在地端執行輕量化 AI 推論（TinyML），即時偵測人流、環境異常與設備狀態，無需仰賴雲端即可即時反應。",
  },
  {
    title: "影像與語音辨識",
    desc: "支援 ESP32-CAM 擴充模組進行物件偵測與影像辨識，應用於智慧安防、場域監控與人數統計等情境。",
  },
  {
    title: "雲端 AI 模型管理",
    desc: "透過 Comtrend ACS 平台對大量 ESP32 邊緣裝置進行 OTA 韌體與 AI 模型集中推送、版本管理與狀態監控。",
  },
];

const aiCaseStudies = [
  {
    variant: "security" as const,
    tag: "智慧社區・MDU",
    title: "社區公共空間安防監控",
    challenge: "電梯廳、地下停車場等區域常有訊號死角，物業人力難以即時掌握異常狀況。",
    solution:
      "於場域佈建搭載 ESP32-CAM 的邊緣感測節點，結合既有 MDU 光纖骨幹回傳影像事件，並透過 Comtrend ACS 統一管理裝置與韌體。",
    outcome: "跌倒、滯留、陌生人員等異常可在地端即時判斷並通知物業，降低誤報與雲端頻寬負擔。",
  },
  {
    variant: "retail" as const,
    tag: "零售門市",
    title: "門市人流與陳列分析",
    challenge: "連鎖門市需掌握顧客動線與陳列成效，但獨立部署攝影機與伺服器成本高、維運複雜。",
    solution:
      "透過 ESP32 邊緣節點在店內執行輕量化人流偵測與貨架空缺辨識，經企業網路方案穩定回傳資料至雲端儀表板。",
    outcome: "門市可即時掌握尖峰動線與補貨需求，總部也能跨店比較營運數據。",
  },
  {
    variant: "factory" as const,
    tag: "工廠產線",
    title: "設備預警式維護",
    challenge: "產線設備故障往往在停機後才被察覺，造成非預期產線中斷與搶修成本。",
    solution:
      "結合工業級 PLC 應用與 ESP32 感測節點蒐集震動、溫度訊號，在地端執行異常偵測模型並透過既有線路回傳警示。",
    outcome: "維護團隊可於故障前排定保養排程，降低非預期停機與搶修成本。",
  },
  {
    variant: "home" as const,
    tag: "智慧家庭",
    title: "居家環境與能源監控",
    challenge: "家庭用戶希望掌握用電與環境狀況，但擔心新增設備安裝複雜、難以整合。",
    solution: "ESP32 感測模組直接併入 Plume Mesh 網關生態系，自動配對並回傳溫濕度、用電量等數據。",
    outcome: "用戶透過 App 即可掌握居家狀況，並依使用習慣取得節能建議。",
  },
  {
    variant: "eldercare" as const,
    tag: "銀髮居家照護",
    title: "免攝影機的長輩起居監控",
    challenge: "臥室、浴室等私密空間裝設攝影機常讓長輩與家屬有隱私疑慮，但完全無感測又難以及時發現跌倒或長時間無活動的異常。",
    solution:
      "透過 ESP32 擷取既有 WiFi 訊號的 CSI（Channel State Information）變化，在地端執行動作辨識模型，不需安裝任何攝影機即可偵測走動、久坐、跌倒等起居狀態。",
    outcome: "偵測到異常立即透過 Comtrend ACS 平台通知家人或照護人員，在保有長輩隱私的前提下，掌握居家起居安全。",
  },
];

const products = [
  { title: "Fiber", desc: "GPON、XGS-PON 光纖終端設備" },
  { title: "VDSL", desc: "VDSL 閘道器與家用網關" },
  { title: "Ethernet", desc: "乙太網路無線路由器" },
  { title: "Home Networking", desc: "PLC 電力線家用網路技術" },
  { title: "MDU", desc: "多住戶分佈系統解決方案" },
  { title: "遠端管理", desc: "Comtrend ACS 雲端管理平台" },
  { title: "工業應用", desc: "工業級 PLC 應用方案" },
];

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="overflow-hidden">
        <ScrollFadeScale className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 pt-16 pb-20 sm:pt-20 sm:pb-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pt-28 lg:pb-28">
          <Reveal>
            <div className="flex items-center gap-3 text-xs tracking-[0.3em] text-slate-400 uppercase">
              <span className="h-px w-8 bg-cyan-600" />
              愛康科技股份有限公司
            </div>
            <h1 className="mt-6 text-4xl leading-tight font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              領導通訊
              <span className="text-cyan-600">趨勢</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-7 text-slate-600">
              為電信商與企業用戶打造完整網通解決方案，涵蓋光纖、VDSL、乙太網路、
              家用電力線網路與遠端管理平台，建構穩定可靠的連網基礎建設。
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#solutions"
                className="rounded-full bg-slate-900 px-7 py-3 text-center text-sm font-medium text-white transition hover:bg-cyan-600"
              >
                探索解決方案
              </a>
              <a
                href="#contact"
                className="rounded-full border border-slate-900/15 px-7 py-3 text-center text-sm font-medium text-slate-700 transition hover:border-slate-900/40 hover:text-slate-900"
              >
                聯絡我們
              </a>
            </div>
          </Reveal>

          <Parallax speed={0.06} className="mx-auto w-full max-w-[260px] sm:max-w-sm lg:max-w-md">
            <NetworkGraphic />
          </Parallax>
        </ScrollFadeScale>
      </section>

      {/* Solutions — bento */}
      <section id="solutions" className="mx-auto w-full max-w-6xl px-6 pb-20 sm:pb-24 lg:pb-28">
        <Reveal className="mb-8 flex flex-col gap-2 sm:mb-10 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">產品與解決方案</h2>
          <span className="text-sm text-slate-400">依客戶類型打造的服務範疇</span>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal className="sm:col-span-2 lg:col-span-2">
            <div className="h-full rounded-2xl border border-slate-900/8 bg-white/70 p-6 shadow-sm shadow-slate-900/5 backdrop-blur-xl transition hover:border-cyan-600/40 sm:p-8">
              <span className="text-xs font-medium tracking-[0.2em] text-cyan-700 uppercase">電信客戶</span>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">客戶終端設備與 ACS</h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
                提供 CPE 終端設備與雲端遠端管理平台 Comtrend ACS，協助電信商大規模部署與維運，
                降低到府維修與人力成本。
              </p>
              <Parallax speed={0.04} className="mt-8 flex h-16 items-end gap-1.5">
                {[26, 42, 32, 52, 38, 58, 45].map((h, i) => (
                  <span
                    key={i}
                    style={{ height: `${h}px` }}
                    className="w-3 rounded-t bg-gradient-to-t from-cyan-500/15 to-cyan-600/80"
                  />
                ))}
              </Parallax>
            </div>
          </Reveal>

          <div className="flex flex-col gap-5 sm:col-span-2 sm:flex-row lg:col-span-1 lg:flex-col">
            <Reveal delay={100} className="flex-1">
              <div className="h-full rounded-2xl border border-slate-900/8 bg-white/70 p-6 shadow-sm shadow-slate-900/5 backdrop-blur-xl transition hover:border-cyan-600/40 sm:p-7">
                <span className="text-xs font-medium tracking-[0.2em] text-cyan-700 uppercase">企業用戶</span>
                <h3 className="mt-3 font-semibold text-slate-900">企業網路、監控方案管理</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  企業級路由、交換與監控設備整合方案，打造穩定可靠的辦公與場域網路。
                </p>
              </div>
            </Reveal>
            <Reveal delay={200} className="flex-1">
              <a
                href="#contact"
                className="group block h-full rounded-2xl border border-slate-900/8 bg-white/70 p-6 shadow-sm shadow-slate-900/5 backdrop-blur-xl transition hover:border-cyan-600/40 sm:p-7"
              >
                <span className="text-xs font-medium tracking-[0.2em] text-cyan-700 uppercase">聯絡我們</span>
                <h3 className="mt-3 font-semibold text-slate-900">我們在這裡為您服務</h3>
                <p className="mt-2 flex items-center gap-1 text-sm text-slate-600">
                  產品諮詢、技術支援或商業合作
                  <span className="transition group-hover:translate-x-1">→</span>
                </p>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Products — editorial list */}
      <section id="products" className="mx-auto w-full max-w-6xl px-6 pb-20 sm:pb-24 lg:pb-28">
        <Reveal className="mb-8 sm:mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">產品線</h2>
          <p className="mt-3 text-sm text-slate-500">從光纖到最後一哩路的家用網路</p>
        </Reveal>

        <div className="border-y border-slate-900/8">
          {products.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <a
                href="#"
                className="group flex items-center justify-between gap-4 border-l-2 border-transparent py-5 pl-3 transition-all hover:border-cyan-600 hover:bg-slate-900/[0.02] hover:pl-6 sm:gap-6 sm:py-6 sm:pl-4 sm:hover:pl-7"
              >
                <div className="flex items-baseline gap-3 sm:gap-6">
                  <span className="font-mono text-xs text-slate-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-medium text-slate-900 transition group-hover:text-cyan-700 sm:text-lg">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">{p.desc}</p>
                  </div>
                </div>
                <span className="shrink-0 pr-2 text-slate-400 transition group-hover:translate-x-1 group-hover:text-cyan-700 sm:pr-4">
                  →
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Technology highlights */}
      <section id="support" className="mx-auto w-full max-w-6xl px-6 pb-20 sm:pb-24 lg:pb-28">
        <Reveal className="mb-8 sm:mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">技術亮點</h2>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map((t, i) => (
            <Reveal key={t.title} delay={i * 80}>
              <Parallax speed={i % 2 === 0 ? 0.035 : -0.035}>
                <div className="h-full rounded-xl border border-slate-900/8 bg-white/60 p-6 shadow-sm shadow-slate-900/5 backdrop-blur-xl">
                  <span className="block h-px w-8 bg-cyan-600/80" />
                  <h3 className="mt-4 font-medium text-slate-900">{t.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{t.desc}</p>
                </div>
              </Parallax>
            </Reveal>
          ))}
        </div>
      </section>

      {/* AI product applications */}
      <section id="ai" className="mx-auto w-full max-w-6xl px-6 pb-20 sm:pb-24 lg:pb-28">
        <Reveal className="mb-8 sm:mb-10">
          <div className="flex items-center gap-3 text-xs tracking-[0.3em] text-slate-400 uppercase">
            <span className="h-px w-8 bg-cyan-600" />
            AI × ESP32
          </div>
          <h2 className="mt-4 text-2xl font-semibold text-slate-900 sm:text-3xl">AI 產品應用</h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
            結合 ESP32 微控制器的邊緣運算能力，將 AI 感測與辨識能力下放到終端裝置，
            並透過 Comtrend ACS 平台進行雲端整合與集中管理。
          </p>
        </Reveal>

        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Parallax speed={0.07} className="order-first lg:order-last">
            <ChipGraphic />
          </Parallax>

          <div className="flex flex-col gap-5">
            {aiFeatures.map((f, i) => (
              <Reveal key={f.title} delay={i * 100}>
                <div className="rounded-2xl border border-slate-900/8 bg-white/70 p-6 shadow-sm shadow-slate-900/5 backdrop-blur-xl transition hover:border-cyan-600/40 sm:p-7">
                  <div className="flex items-start gap-4">
                    <span className="mt-1 font-mono text-xs text-cyan-700">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="font-semibold text-slate-900">{f.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{f.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-16 sm:mt-20">
          <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">應用情境</h3>
          <p className="mt-2 text-sm text-slate-500">從社區安防到銀髮居家照護，ESP32 邊緣節點如何實際落地</p>
        </Reveal>

        <div className="mt-6 grid gap-5 sm:mt-8 lg:grid-cols-2">
          {aiCaseStudies.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-slate-900/8 bg-white/70 p-6 shadow-sm shadow-slate-900/5 backdrop-blur-xl transition hover:border-cyan-600/40 sm:p-7">
                <Parallax speed={i % 2 === 0 ? 0.03 : -0.03}>
                  <CaseGraphic variant={c.variant} />
                </Parallax>
                <span className="mt-5 block text-xs font-medium tracking-[0.2em] text-cyan-700 uppercase">
                  {c.tag}
                </span>
                <h4 className="mt-3 text-lg font-semibold text-slate-900">{c.title}</h4>

                <dl className="mt-5 flex flex-col gap-4 border-t border-slate-900/8 pt-5">
                  <div>
                    <dt className="text-xs font-medium tracking-widest text-slate-400 uppercase">挑戰</dt>
                    <dd className="mt-1.5 text-sm leading-6 text-slate-600">{c.challenge}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium tracking-widest text-slate-400 uppercase">解決方案</dt>
                    <dd className="mt-1.5 text-sm leading-6 text-slate-600">{c.solution}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium tracking-widest text-cyan-700/80 uppercase">效益</dt>
                    <dd className="mt-1.5 text-sm leading-6 text-slate-700">{c.outcome}</dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative overflow-hidden border-t border-slate-900/8">
        <Parallax
          fixed
          speed={0.05}
          className="absolute inset-0 -z-10"
        >
          <div
            className="h-[140%] w-full"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, rgba(15,23,42,0.035) 0 1px, transparent 1px 26px)",
            }}
          />
        </Parallax>
        <Reveal className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-6 py-16 sm:flex-row sm:items-center sm:gap-8 sm:py-20">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">需要技術支援或商業合作？</h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
              我們的團隊隨時準備好回答您的問題，一起打造更好的連網體驗。
            </p>
          </div>
          <a
            href="mailto:sales@comtrend.com"
            className="w-full shrink-0 rounded-full bg-slate-900 px-8 py-3 text-center text-sm font-medium text-white transition hover:bg-cyan-600 sm:w-auto"
          >
            sales@comtrend.com
          </a>
        </Reveal>
      </section>
    </main>
  );
}
