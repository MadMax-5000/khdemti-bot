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
        <section className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-20 sm:px-6 lg:px-8">
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(99,102,241,0.15) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <Badge
              variant="outline"
              className="mb-8 border-indigo-500/50 text-indigo-400 font-normal text-[10px] sm:text-xs"
            >
              ✦ Projet IA · FST Mohammedia · 2025–2026
            </Badge>

            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1]">
              Prépare ton entretien
              <br />
              d&rsquo;embauche avec l&rsquo;<span className="text-indigo-500">IA</span>
            </h1>

            <p className="mx-auto mb-10 max-w-2xl px-2 text-base text-zinc-400 leading-relaxed sm:text-lg md:text-xl">
              KHDEMTI simule un vrai recruteur marocain, évalue tes réponses en
              temps réel et t&rsquo;envoie un plan d&rsquo;amélioration personnalisé
              sur 7 jours.
            </p>

            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Link
                href="#chatbot"
                className="inline-flex h-11 w-full items-center justify-center gap-1.5 rounded-md bg-indigo-500 px-6 text-sm font-medium text-white transition-colors hover:bg-indigo-600 sm:h-10 sm:w-auto"
              >
                Démarrer la simulation
              </Link>
              <Link
                href="#how"
                className="inline-flex h-11 w-full items-center justify-center gap-1.5 rounded-md border border-white/20 px-6 text-sm font-medium text-white transition-colors hover:bg-white/5 sm:h-10 sm:w-auto"
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
        <section className={`py-16 sm:py-24 border-y ${BORDER}`}>
          <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
            <p className="mb-8 text-[10px] font-medium uppercase tracking-widest text-zinc-500 sm:mb-12 sm:text-xs">
              Conçu pour les étudiants de
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-6 sm:gap-x-12 sm:gap-y-8">
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
                  <span className="text-base font-semibold text-zinc-300 transition-colors group-hover:text-white sm:text-lg md:text-xl">
                    {school.abbr}
                  </span>
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-indigo-500 transition-all duration-300 group-hover:w-full" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how" className={`py-16 sm:py-24 lg:py-32 ${BORDER}`}>
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-indigo-500 sm:mb-4 sm:text-xs">
              FONCTIONNEMENT
            </p>
            <h2 className="mb-10 text-3xl font-bold tracking-tight text-white sm:mb-16 sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
              Trois étapes. Cinq minutes.
            </h2>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
              <Card className="border-white/8 bg-[#111]">
                <CardHeader>
                  <span className="mb-3 font-mono text-4xl font-bold text-indigo-500 sm:mb-4 sm:text-5xl">
                    01
                  </span>
                  <CardTitle className="text-lg text-white sm:text-xl">
                    Tu choisis ton secteur
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-400 sm:text-base">
                    Tech, Banque ou Commerce. KHDEMTI adapte les questions à ton
                    domaine.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-white/8 bg-[#111]">
                <CardHeader>
                  <span className="mb-3 font-mono text-4xl font-bold text-indigo-500 sm:mb-4 sm:text-5xl">
                    02
                  </span>
                  <CardTitle className="text-lg text-white sm:text-xl">
                    Tu réponds aux questions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-400 sm:text-base">
                    3 questions comme un vrai entretien. L&rsquo;IA analyse ta
                    réponse en temps réel et te donne un score.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-white/8 bg-[#111]">
                <CardHeader>
                  <span className="mb-3 font-mono text-4xl font-bold text-indigo-500 sm:mb-4 sm:text-5xl">
                    03
                  </span>
                  <CardTitle className="text-lg text-white sm:text-xl">
                    Tu reçois ton bilan
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-400 sm:text-base">
                    Un email avec ton score, tes points forts, tes axes
                    d&rsquo;amélioration et un plan sur 7 jours.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className={`py-16 sm:py-24 lg:py-32 border-t ${BORDER}`}>
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-indigo-500 sm:mb-4 sm:text-xs">
              POURQUOI KHDEMTI
            </p>
            <h2 className="mb-10 text-3xl font-bold tracking-tight text-white sm:mb-16 sm:text-4xl md:text-5xl leading-tight">
              Tout ce dont tu as besoin pour décrocher ton premier poste
            </h2>

            <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
              <FeatureItem
                icon={<BrainCircuit className="h-5 w-5 text-indigo-400" />}
                title="Évaluation par IA"
                description="Chaque réponse est analysée par un LLM selon 3 critères : clarté, pertinence, structure."
              />
              <FeatureItem
                icon={<Globe className="h-5 w-5 text-indigo-400" />}
                title="Ancré dans le contexte marocain"
                description="Questions adaptées aux secteurs et aux entreprises marocaines. Feedback en français et darija."
              />
              <FeatureItem
                icon={<Mail className="h-5 w-5 text-indigo-400" />}
                title="Bilan envoyé par email"
                description="Reçois automatiquement un plan personnalisé sur 7 jours dans ta boîte mail."
              />
              <FeatureItem
                icon={<Repeat2 className="h-5 w-5 text-indigo-400" />}
                title="Entraîne-toi autant que tu veux"
                description="Recommence la simulation avec un autre secteur à chaque fois."
              />
              <FeatureItem
                icon={<ShieldCheck className="h-5 w-5 text-indigo-400" />}
                title="Techniques de prompting avancées"
                description="Structured Prompting, Few-Shot Learning et Chain-of-Thought pour un feedback de qualité."
              />
              <FeatureItem
                icon={<Zap className="h-5 w-5 text-indigo-400" />}
                title="Résultat immédiat"
                description="Pas d'attente. Le feedback apparaît en quelques secondes après ta réponse."
              />
            </div>
          </div>
        </section>

        {/* Chatbot Section */}
        <section id="chatbot" className={`py-16 sm:py-24 lg:py-32 border-t ${BORDER}`}>
          <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-indigo-500 sm:mb-4 sm:text-xs">
              ESSAYER
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
              Lance ta simulation maintenant
            </h2>
            <p className="mx-auto mb-10 max-w-xl px-2 text-base text-zinc-400 leading-relaxed sm:mb-12 sm:text-lg">
              Choisis ton secteur, réponds aux questions, reçois ton bilan.
              Entièrement gratuit.
            </p>

            <ChatbotEmbed />

            <p className="mt-6 text-xs text-zinc-500 sm:mt-8 sm:text-sm">
              KHDEMTI est un outil d&rsquo;entraînement. Il ne remplace pas un
              accompagnement professionnel.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className={`border-t ${BORDER} py-10 sm:py-12`}>
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
              <div className="flex items-center gap-3">
                <Logo />
                <div>
                  <span className="font-semibold text-white">KHDEMTI</span>
                  <p className="text-xs text-zinc-500 sm:text-sm">
                    Coach IA pour les entretiens d&rsquo;embauche
                  </p>
                </div>
              </div>

              <p className="text-xs text-zinc-500 sm:ml-auto sm:text-sm">
                Projet IA · FST Mohammedia · 2025–2026 · Prof. Youssef FAKIR
              </p>
            </div>

            <div className="mt-8 text-center">
              <p className="text-[10px] text-zinc-600 sm:text-xs">
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
    <div className="flex gap-4 sm:gap-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 sm:h-12 sm:w-12">
        {icon}
      </div>
      <div>
        <h3 className="mb-1.5 text-sm font-semibold text-white sm:mb-2 sm:text-base">
          {title}
        </h3>
        <p className="text-xs text-zinc-400 leading-relaxed sm:text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}
