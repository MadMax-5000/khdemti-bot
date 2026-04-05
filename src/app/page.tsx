import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { ChatbotEmbed } from "@/components/ChatbotEmbed";
import { Logo } from "@/components/Logo";
import {
  BrainCircuit,
  Globe,
  Mail,
  Repeat2,
  ShieldCheck,
  Zap,
} from "lucide-react";

const BORDER = "border border-white/8";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-24 sm:px-6 sm:pt-20 lg:px-8">
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(99,102,241,0.15) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10 mx-auto max-w-4xl px-2 text-center sm:max-w-5xl sm:px-0">
            <Badge
              variant="outline"
              className="mb-6 border-indigo-500/50 text-indigo-400 font-normal text-xs sm:text-xs"
            >
              ✦ Projet IA · FST Mohammedia · 2025–2026
            </Badge>

            <h1 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
              Prépare ton entretien
              <br />
              d&rsquo;embauche avec l&rsquo;<span className="text-indigo-500">IA</span>
            </h1>

            <p className="mx-auto mb-8 max-w-lg text-sm text-zinc-400 leading-relaxed sm:max-w-xl sm:text-base md:text-lg lg:text-xl">
              KHDEMTI simule un vrai recruteur marocain, évalue tes réponses en
              temps réel et t&rsquo;envoie un plan d&rsquo;amélioration personnalisé
              sur 7 jours.
            </p>

            <div className="flex w-full max-w-md flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 mx-auto">
              <Link
                href="#chatbot"
                className="inline-flex h-12 w-full min-w-[200px] items-center justify-center gap-1.5 rounded-lg bg-indigo-500 px-6 text-sm font-medium text-white transition-colors hover:bg-indigo-600 sm:h-11 sm:w-auto"
              >
                Démarrer la simulation
              </Link>
              <Link
                href="#how"
                className="inline-flex h-12 w-full min-w-[200px] items-center justify-center gap-1.5 rounded-lg border border-white/20 px-6 text-sm font-medium text-white transition-colors hover:bg-white/5 sm:h-11 sm:w-auto"
              >
                Voir comment ça marche
              </Link>
            </div>

            <p className="mt-6 text-xs text-zinc-500 sm:mt-8 sm:text-sm">
              Gratuit · Aucune inscription · Résultat en 5 minutes
            </p>
          </div>
        </section>

        {/* Social Proof Bar */}
        <section className={`py-12 border-y ${BORDER} sm:py-16 md:py-20 lg:py-24`}>
          <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
            <p className="mb-6 text-xs font-medium uppercase tracking-widest text-zinc-500 sm:mb-8 md:mb-10">
              Conçu pour les étudiants de
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:gap-x-10 sm:gap-y-6 md:gap-x-12">
              {[
                { abbr: "FST Mohammedia", full: "Faculté des Sciences et Techniques" },
                { abbr: "ENCG", full: "École Nationale de Commerce et de Gestion" },
                { abbr: "ENSA", full: "École Nationale des Sciences Appliquées" },
                { abbr: "FSJES", full: "Faculté des Sciences Juridiques, Économiques et Sociales" },
              ].map((school) => (
                <div
                  key={school.abbr}
                  className="group relative"
                  title={school.full}
                >
                  <span className="text-sm font-semibold text-zinc-300 transition-colors group-hover:text-white sm:text-base md:text-lg lg:text-xl">
                    {school.abbr}
                  </span>
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-indigo-500 transition-all duration-300 group-hover:w-full" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how" className={`py-12 sm:py-16 md:py-20 lg:py-24 ${BORDER}`}>
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-indigo-500 sm:mb-3 md:mb-4">
              FONCTIONNEMENT
            </p>
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-white sm:mb-10 sm:text-3xl md:mb-14 md:text-4xl lg:text-5xl leading-tight">
              Trois étapes. Cinq minutes.
            </h2>

            <div className="grid gap-4 sm:gap-6 md:grid-cols-3 md:gap-8">
              <Card className="border-white/8 bg-[#111]">
                <CardHeader className="p-4 sm:p-6">
                  <span className="mb-2 block font-mono text-3xl font-bold text-indigo-500 sm:mb-3 sm:text-4xl md:text-5xl">
                    01
                  </span>
                  <CardTitle className="text-base text-white sm:text-lg md:text-xl">
                    Tu choisis ton secteur
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0">
                  <p className="text-sm text-zinc-400">
                    Tech, Banque ou Commerce. KHDEMTI adapte les questions à ton domaine.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-white/8 bg-[#111]">
                <CardHeader className="p-4 sm:p-6">
                  <span className="mb-2 block font-mono text-3xl font-bold text-indigo-500 sm:mb-3 sm:text-4xl md:text-5xl">
                    02
                  </span>
                  <CardTitle className="text-base text-white sm:text-lg md:text-xl">
                    Tu réponds aux questions
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0">
                  <p className="text-sm text-zinc-400">
                    3 questions comme un vrai entretien. L&rsquo;IA analyse ta réponse en temps réel et te donne un score.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-white/8 bg-[#111]">
                <CardHeader className="p-4 sm:p-6">
                  <span className="mb-2 block font-mono text-3xl font-bold text-indigo-500 sm:mb-3 sm:text-4xl md:text-5xl">
                    03
                  </span>
                  <CardTitle className="text-base text-white sm:text-lg md:text-xl">
                    Tu reçois ton bilan
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0">
                  <p className="text-sm text-zinc-400">
                    Un email avec ton score, tes points forts, tes axes d&rsquo;amélioration et un plan sur 7 jours.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className={`py-12 sm:py-16 md:py-20 lg:py-24 border-t ${BORDER}`}>
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-indigo-500 sm:mb-3 md:mb-4">
              POURQUOI KHDEMTI
            </p>
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-white sm:mb-10 sm:text-3xl md:mb-14 md:text-4xl lg:text-5xl leading-tight">
              Tout ce dont tu as besoin pour décrocher ton premier poste
            </h2>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
              <FeatureItem
                icon={<BrainCircuit className="h-4 w-4 sm:h-5 sm:w-5" />}
                title="Évaluation par IA"
                description="Chaque réponse est analysée par un LLM selon 3 critères : clarté, pertinence, structure."
              />
              <FeatureItem
                icon={<Globe className="h-4 w-4 sm:h-5 sm:w-5" />}
                title="Ancré dans le contexte marocain"
                description="Questions adaptées aux secteurs et aux entreprises marocaines. Feedback en français et darija."
              />
              <FeatureItem
                icon={<Mail className="h-4 w-4 sm:h-5 sm:w-5" />}
                title="Bilan envoyé par email"
                description="Reçois automatiquement un plan personnalisé sur 7 jours dans ta boîte mail."
              />
              <FeatureItem
                icon={<Repeat2 className="h-4 w-4 sm:h-5 sm:w-5" />}
                title="Entraîne-toi autant que tu veux"
                description="Recommence la simulation avec un autre secteur à chaque fois."
              />
              <FeatureItem
                icon={<ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5" />}
                title="Techniques de prompting avancées"
                description="Structured Prompting, Few-Shot Learning et Chain-of-Thought pour un feedback de qualité."
              />
              <FeatureItem
                icon={<Zap className="h-4 w-4 sm:h-5 sm:w-5" />}
                title="Résultat immédiat"
                description="Pas d'attente. Le feedback apparaît en quelques secondes après ta réponse."
              />
            </div>
          </div>
        </section>

        {/* Chatbot Section */}
        <section id="chatbot" className={`py-12 sm:py-16 md:py-20 lg:py-24 border-t ${BORDER}`}>
          <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-indigo-500 sm:mb-3 md:mb-4">
              ESSAYER
            </p>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-white sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
              Lance ta simulation maintenant
            </h2>
            <p className="mx-auto mb-8 max-w-lg text-sm text-zinc-400 leading-relaxed sm:mb-10 sm:max-w-xl sm:text-base md:text-lg">
              Choisis ton secteur, réponds aux questions, reçois ton bilan. Entièrement gratuit.
            </p>

            <ChatbotEmbed />

            <p className="mt-4 text-xs text-zinc-500 sm:mt-6 sm:text-sm">
              KHDEMTI est un outil d&rsquo;entraînement. Il ne remplace pas un accompagnement professionnel.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className={`border-t ${BORDER} py-8 sm:py-10 md:py-12`}>
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
              <div className="flex items-center gap-3">
                <Logo size={20} />
                <div>
                  <span className="font-semibold text-white sm:text-base">KHDEMTI</span>
                  <p className="text-xs text-zinc-500 sm:text-sm">
                    Coach IA pour les entretiens d&rsquo;embauche
                  </p>
                </div>
              </div>

              <p className="text-xs text-zinc-500 sm:ml-auto sm:text-sm">
                Projet IA · FST Mohammedia · 2025–2026 · Prof. Youssef FAKIR
              </p>
            </div>

            <div className="mt-6 text-center sm:mt-8">
              <p className="text-xs text-zinc-600">
                Construit avec Botpress, n8n et Groq
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-3 sm:gap-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 sm:h-10 sm:w-10 lg:h-12 lg:w-12">
        {icon}
      </div>
      <div>
        <h3 className="mb-1 text-sm font-semibold text-white sm:mb-1.5 sm:text-base">
          {title}
        </h3>
        <p className="text-xs text-zinc-400 leading-relaxed sm:text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}
