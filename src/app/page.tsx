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
const SECTION_PADDING = "py-32";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-16">
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
              className="mb-8 border-indigo-500/50 text-indigo-400"
            >
              ✦ Projet IA · FST Mohammedia · 2025–2026
            </Badge>

            <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
              Prépare ton entretien
              <br />
              d&rsquo;embauche avec l&rsquo;<span className="text-indigo-500">IA</span>
            </h1>

            <p className="mx-auto mb-10 max-w-xl text-lg text-zinc-400">
              KHDEMTI simule un vrai recruteur marocain, évalue tes réponses en
              temps réel et t&rsquo;envoie un plan d&rsquo;amélioration personnalisé
              sur 7 jours.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="#chatbot"
                className="inline-flex h-10 w-full items-center justify-center gap-1.5 rounded-md bg-indigo-500 px-6 text-sm font-medium text-white transition-colors hover:bg-indigo-600 sm:w-auto"
              >
                Démarrer la simulation
              </Link>
              <Link
                href="#how"
                className="inline-flex h-10 w-full items-center justify-center gap-1.5 rounded-md border border-white/20 px-6 text-sm font-medium text-white transition-colors hover:bg-white/5 sm:w-auto"
              >
                Voir comment ça marche
              </Link>
            </div>

            <p className="mt-8 text-sm text-zinc-500">
              Gratuit · Aucune inscription · Résultat en 5 minutes
            </p>
          </div>
        </section>

        {/* Logos / Social Proof Bar */}
        <section className={`${SECTION_PADDING} border-y ${BORDER}`}>
          <div className="mx-auto max-w-6xl px-6 text-center">
            <p className="mb-8 text-xs font-medium uppercase tracking-widest text-zinc-500">
              Conçu pour les étudiants de
            </p>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
              {[
                { abbr: "FST", name: "Faculté des Sciences et Techniques" },
                { abbr: "ENSA", name: "École Nationale des Sciences Appliquées" },
                { abbr: "ENSAM", name: "École Nationale Supérieure d'Arts et Métiers" },
                { abbr: "ENCG", name: "École Nationale de Commerce et de Gestion" },
                { abbr: "FSJES", name: "Faculté des Sciences Juridiques, Économiques et Sociales" },
              ].map((school) => (
                <div
                  key={school.abbr}
                  className="group flex flex-col items-center gap-2"
                  title={school.name}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/8 bg-white/5 transition-colors group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10">
                    <span className="text-lg font-bold text-zinc-300">
                      {school.abbr.slice(0, 2)}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-zinc-400">
                    {school.abbr}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how" className={`${SECTION_PADDING} ${BORDER}`}>
          <div className="mx-auto max-w-6xl px-6">
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-indigo-500">
              FONCTIONNEMENT
            </p>
            <h2 className="mb-16 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Trois étapes. Cinq minutes.
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-white/8 bg-[#111]">
                <CardHeader>
                  <span className="mb-4 font-mono text-5xl font-bold text-indigo-500">
                    01
                  </span>
                  <CardTitle className="text-xl text-white">
                    Tu choisis ton secteur
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400">
                    Tech, Banque ou Commerce. KHDEMTI adapte les questions à ton
                    domaine.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-white/8 bg-[#111]">
                <CardHeader>
                  <span className="mb-4 font-mono text-5xl font-bold text-indigo-500">
                    02
                  </span>
                  <CardTitle className="text-xl text-white">
                    Tu réponds aux questions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400">
                    3 questions comme un vrai entretien. L&rsquo;IA analyse ta
                    réponse en temps réel et te donne un score.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-white/8 bg-[#111]">
                <CardHeader>
                  <span className="mb-4 font-mono text-5xl font-bold text-indigo-500">
                    03
                  </span>
                  <CardTitle className="text-xl text-white">
                    Tu reçois ton bilan
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400">
                    Un email avec ton score, tes points forts, tes axes
                    d&rsquo;amélioration et un plan sur 7 jours.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className={`${SECTION_PADDING} border-t ${BORDER}`}>
          <div className="mx-auto max-w-6xl px-6">
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-indigo-500">
              POURQUOI KHDEMTI
            </p>
            <h2 className="mb-16 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Tout ce dont tu as besoin pour décrocher ton premier poste
            </h2>

            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10">
                  <BrainCircuit className="h-6 w-6 text-indigo-500" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    Évaluation par IA
                  </h3>
                  <p className="text-zinc-400">
                    Chaque réponse est analysée par un LLM selon 3 critères :
                    clarté, pertinence, structure.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10">
                  <Globe className="h-6 w-6 text-indigo-500" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    Ancré dans le contexte marocain
                  </h3>
                  <p className="text-zinc-400">
                    Questions adaptées aux secteurs et aux entreprises
                    marocaines. Feedback en français et darija.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10">
                  <Mail className="h-6 w-6 text-indigo-500" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    Bilan envoyé par email
                  </h3>
                  <p className="text-zinc-400">
                    Reçois automatiquement un plan personnalisé sur 7 jours dans
                    ta boîte mail.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10">
                  <Repeat2 className="h-6 w-6 text-indigo-500" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    Entraîne-toi autant que tu veux
                  </h3>
                  <p className="text-zinc-400">
                    Recommence la simulation avec un autre secteur à chaque fois.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10">
                  <ShieldCheck className="h-6 w-6 text-indigo-500" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    Techniques de prompting avancées
                  </h3>
                  <p className="text-zinc-400">
                    Structured Prompting, Few-Shot Learning et Chain-of-Thought
                    pour un feedback de qualité.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10">
                  <Zap className="h-6 w-6 text-indigo-500" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    Résultat immédiat
                  </h3>
                  <p className="text-zinc-400">
                    Pas d&rsquo;attente. Le feedback apparaît en quelques secondes
                    après ta réponse.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chatbot Section */}
        <section id="chatbot" className={`${SECTION_PADDING} border-t ${BORDER}`}>
          <div className="mx-auto max-w-6xl px-6 text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-indigo-500">
              ESSAYER
            </p>
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Lance ta simulation maintenant
            </h2>
            <p className="mx-auto mb-12 max-w-xl text-lg text-zinc-400">
              Choisis ton secteur, réponds aux questions, reçois ton bilan.
              Entièrement gratuit.
            </p>

            <ChatbotEmbed />

            <p className="mt-6 text-sm text-zinc-500">
              KHDEMTI est un outil d&rsquo;entraînement. Il ne remplace pas un
              accompagnement professionnel.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className={`border-t ${BORDER} py-12`}>
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex items-center gap-3">
                <Logo />
                <div>
                  <span className="font-semibold text-white">KHDEMTI</span>
                  <p className="text-sm text-zinc-500">
                    Coach IA pour les entretiens d&rsquo;embauche
                  </p>
                </div>
              </div>

              <p className="text-sm text-zinc-500">
                Projet IA · FST Mohammedia · 2025–2026 · Prof. Youssef FAKIR
              </p>
            </div>

            <div className="mt-8 text-center">
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
