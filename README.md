# KHDEMTI — خدمتي

> Coach IA de préparation aux entretiens d'embauche pour les étudiants marocains

[![Démo en ligne](https://img.shields.io/badge/Démo-khdemti--bot.vercel.app-black?style=flat-square&logo=vercel)](https://khdemti-bot.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-MadMax--5000%2Fkhdemti--bot-181717?style=flat-square&logo=github)](https://github.com/MadMax-5000/khdemti-bot)
[![Botpress](https://img.shields.io/badge/Chatbot-Botpress-6366f1?style=flat-square)](https://botpress.com)
[![n8n](https://img.shields.io/badge/Automatisation-n8n-ef6821?style=flat-square)](https://n8n.io)
[![Groq](https://img.shields.io/badge/LLM-Groq%20llama--3.3--70b-00a67e?style=flat-square)](https://groq.com)

---

## Le problème résolu

Des milliers d'étudiants marocains terminent leurs études chaque année sans jamais s'être entraînés à passer un entretien d'embauche. Le coaching professionnel est coûteux, les ressources en ligne sont trop génériques et aucun outil n'existe pour simuler un vrai recruteur en français ou en darija, adapté au marché de l'emploi marocain. Les étudiants arrivent non préparés — et ça leur coûte des opportunités.

## La solution

**KHDEMTI** (خدمتي — "mon travail" en darija) est un coach IA qui :

- Simule un vrai recruteur marocain dans **3 secteurs** : Tech, Banque et Commerce
- Pose **3 questions d'entretien ciblées** adaptées au secteur choisi
- **Évalue chaque réponse en temps réel** grâce à l'IA (score /10 + feedback + conseil)
- Envoie automatiquement un **plan d'amélioration personnalisé sur 7 jours** par email
- Enregistre chaque session dans **Google Sheets** pour le suivi et les statistiques

Sans inscription. Gratuit. Disponible 24h/24 sur [khdemti-bot.vercel.app](https://khdemti-bot.vercel.app/).

---

## Architecture de la solution

```
Étudiant (Navigateur)
        │
        ▼
┌──────────────────────────────┐
│   Site Next.js (Vercel)      │  ← khdemti-bot.vercel.app
│   (widget Botpress intégré)  │
└─────────────┬────────────────┘
              │ conversation
              ▼
┌──────────────────────────────┐
│        Botpress Cloud        │  ← 3 flows (Onboarding, Simulation, Bilan)
│   + Groq llama-3.3-70b       │  ← évaluation des réponses en temps réel
└─────────────┬────────────────┘
              │ webhook (POST) en fin de session
              ▼
┌──────────────────────────────┐
│           n8n Cloud          │
│  ┌───────────────────────┐   │
│  │ WF1 — Stockage session│───┼──→ Google Sheets (une ligne par session)
│  └───────────────────────┘   │
│  ┌───────────────────────┐   │
│  │ WF2 — Email de bilan  │───┼──→ Gmail (plan 7 jours généré par Groq)
│  └───────────────────────┘   │
└──────────────────────────────┘
```

---

## Techniques de prompting utilisées

Ce projet a été réalisé dans le cadre du **module Intelligence Artificielle** à la FST Mohammedia (2025–2026, Prof. Youssef FAKIR). Les techniques de prompt engineering suivantes sont explicitement implémentées et documentées :

### 1. Structured Prompting
Utilisé dans le nœud d'évaluation des réponses. Chaque réponse est analysée selon 3 critères explicites et le résultat est retourné sous forme d'objet JSON structuré :

```
Tu évalues une réponse d'entretien pour le secteur {secteur}.

QUESTION : {question}
RÉPONSE : {reponse_etudiant}

Réponds UNIQUEMENT en JSON valide :
{
  "score": 7,
  "feedback": "Ta réponse est claire mais manque d'exemple concret.",
  "conseil": "Utilise la méthode STAR : Situation, Tâche, Action, Résultat."
}
```

### 2. Few-Shot Learning
Utilisé dans le system prompt pour calibrer le comportement du bot comme un recruteur marocain professionnel. Deux paires question/réponse annotées sont fournies en exemples avant que le bot traite les vraies réponses de l'utilisateur, garantissant un ton, un style de notation et un ancrage culturel cohérents.

```
Exemple 1 :
Recruteur : "Parlez-moi de vous."
Bonne réponse : "Je m'appelle X, diplômé en informatique de FST Mohammedia.
J'ai réalisé un stage de 2 mois chez Y où j'ai développé une API REST."
Évaluation : 8/10 — Claire, structurée, pertinente.

Exemple 2 :
Recruteur : "Parlez-moi de vous."
Mauvaise réponse : "Euh... je suis étudiant, j'aime l'informatique..."
Évaluation : 3/10 — Trop vague, aucun exemple, pas de structure.
```

### 3. Chain-of-Thought
Utilisé dans le workflow n8n lors de la génération du plan d'amélioration sur 7 jours. Groq est instruit de raisonner étape par étape à partir des points faibles identifiés avant de produire chaque conseil journalier, garantissant un plan cohérent et progressif plutôt que générique.

```
L'étudiant {nom} a obtenu {score}/10 pour le secteur {secteur}.
Points faibles identifiés : {points_faibles}

Raisonne étape par étape :
1. Quel est le point faible le plus bloquant ?
2. Quelle progression logique sur 7 jours ?
3. Génère un plan avec 1 action concrète par jour.
```

---

## Stack technique

| Couche | Outil |
|---|---|
| Plateforme chatbot | [Botpress Cloud](https://botpress.com) |
| LLM | [Groq](https://groq.com) — `llama-3.3-70b-versatile` |
| Automatisation | [n8n Cloud](https://n8n.io) |
| Base de données | Google Sheets |
| Envoi d'emails | Gmail (via n8n OAuth2) |
| Site marketing | Next.js 14 · TypeScript · Tailwind CSS · shadcn/ui |
| Déploiement | Vercel |

---

## Fonctionnalités

- **Questions adaptées au secteur** — les questions changent dynamiquement selon le secteur choisi (Tech, Banque, Commerce)
- **Évaluation IA en temps réel** — chaque réponse est notée /10 avec un feedback en 2 phrases et un conseil concret
- **Bilingue** — réponses en français avec des encouragements en darija marocaine
- **Email automatique** — un plan personnalisé sur 7 jours est généré par Groq et envoyé via Gmail en quelques secondes après la fin de la session
- **Enregistrement des sessions** — chaque session est stockée dans Google Sheets avec horodatage, secteur, score et feedbacks
- **Flow de secours** — les messages hors-sujet sont gérés avec grâce et redirigés
- **Clause éthique** — le bot se présente clairement comme un outil d'entraînement, pas un recruteur professionnel

---

## Structure des flows Botpress

```
Flow Principal (Onboarding)
├── Message de bienvenue
├── Capture : prénom → user_prenom
├── Capture : email → user_email
├── Choix unique : secteur → user_secteur
│       ├── Tech
│       ├── Banque
│       └── Commerce
└── Aller vers → simulation

Flow Simulation
├── Execute Code : sélectionner la question selon le secteur
├── Capture : réponse libre → reponse1
├── Execute Code : appel API Groq → score + feedback → feedback1
├── Text : afficher feedback1
├── (répéter × 3 pour les questions 2 et 3)
└── Aller vers → bilan

Flow Bilan
├── Execute Code : calculer le score moyen + niveau
├── Text : afficher le résumé
├── Choix unique : envoyer le bilan par email ?
│       ├── Oui → Execute Code : POST webhook vers n8n (WF1 + WF2)
│       │         Text : message de confirmation
│       └── Non → Text : message d'au revoir
```

---

## Détail des workflows n8n

### WF1 — Stockage des sessions
```
Webhook (POST /moutarshih)
  → Google Sheets : Append Row
      colonnes : timestamp, nom, email, secteur, score,
                 feedback_q1, feedback_q2, feedback_q3
```

### WF2 — Email de bilan personnalisé
```
Webhook (POST /moutarshih-email)
  → HTTP Request : POST https://api.groq.com/openai/v1/chat/completions
      prompt : générer un plan 7 jours selon secteur + score + points faibles
  → Code Node : parser la réponse JSON de Groq
  → Gmail : envoyer un email HTML avec score + plan + encouragement en darija
```

---

## Structure du projet

```
khdemti-bot/
├── app/
│   ├── layout.tsx          # Layout global + injection des scripts Botpress
│   ├── page.tsx            # Page marketing unique
│   └── globals.css
├── components/
│   ├── Navbar.tsx          # Navbar sticky avec scroll listener (client)
│   ├── Hero.tsx            # Section hero avec lueur radiale
│   ├── HowItWorks.tsx      # Cartes des 3 étapes
│   ├── Features.tsx        # Grille 2×3 des fonctionnalités
│   ├── ChatbotSection.tsx  # Conteneur du widget Botpress
│   └── Footer.tsx
├── public/
├── README.md
├── package.json
└── tsconfig.json
```

---

## Guide d'utilisation

### Lancer le projet en local

```bash
# Cloner le dépôt
git clone https://github.com/MadMax-5000/khdemti-bot.git
cd khdemti-bot

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.

### Utiliser le chatbot

1. Aller sur [khdemti-bot.vercel.app](https://khdemti-bot.vercel.app/)
2. Cliquer sur le widget de chat en bas à droite
3. Entrer son prénom et son adresse email
4. Choisir son secteur (Tech, Banque ou Commerce)
5. Répondre aux 3 questions comme face à un vrai recruteur
6. Accepter de recevoir le bilan par email
7. Consulter sa boîte mail pour le plan personnalisé sur 7 jours

> Les scripts Botpress sont chargés via `next/script` avec `strategy="afterInteractive"`. Le widget s'attache automatiquement — aucune configuration supplémentaire n'est nécessaire côté frontend.

---

## Difficultés rencontrées

- **Parsing JSON de Groq** — le LLM enveloppait parfois sa réponse JSON dans des backticks markdown. Résolu en ajoutant `.replace(/```json|```/g, '').trim()` avant chaque `JSON.parse()` dans les nœuds Execute Code de Botpress et les blocs Code de n8n.

- **Expiration des tokens OAuth Google** — les tokens OAuth2 de Google expirent périodiquement. Résolu en configurant le rafraîchissement automatique dans les credentials n8n et en testant le flow complet de bout en bout après chaque mise à jour.

- **Portée des variables Botpress** — les variables `workflow.xxx` et `user.xxx` ont des portées différentes dans Botpress. Les variables `workflow` se réinitialisent entre les flows tandis que les variables `user` persistent sur toute la session. A nécessité plusieurs tests pour comprendre ce comportement.

- **URLs webhook test vs production** — n8n expose deux URLs différentes pour les webhooks (test et production). Utiliser l'URL de test dans Botpress ne déclenchait le workflow que lorsque n8n était en mode écoute actif. Résolu en passant systématiquement à l'URL de production.

---

## Considérations éthiques

- KHDEMTI se présente explicitement comme un outil d'entraînement, pas un recruteur professionnel
- Les scores sont indicatifs et basés sur les bonnes pratiques générales — ils ne reflètent pas des décisions d'embauche réelles
- Les données utilisateur (nom, email, réponses) sont stockées dans un Google Sheet privé accessible uniquement par l'équipe projet
- Le bot ne conserve pas l'historique des conversations au-delà de la session en cours
- Les utilisateurs sont informés avant de soumettre leur email qu'ils recevront un seul message automatique

---

## Équipe

Réalisé par des étudiants de **Licence Informatique — FST Mohammedia** dans le cadre du **module Intelligence Artificielle (2025–2026)**.

Encadré par **Prof. Youssef FAKIR**.

---

## Démo en ligne

**[khdemti-bot.vercel.app](https://khdemti-bot.vercel.app/)**

---

*Construit avec Botpress, n8n et Groq · بالتوفيق*
