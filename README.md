# Afsluttende eksamen | DJ Per

## Tech Stack

Skriv om hvorfor ej wordpress

---

### React + Next.js

I forhold til tech stack, er vi gået efter marked conventioner samt familiaritet. React med Next.js er et library + framework som vi har arbejdet med før, samt en populær kombination i den professionelle verden. Derudover fungerer Next.js's server side rendering og server actions godt i forhold til både SEO og performance.

Valget giver os også en stor mængde flexibilitet, samt en god developer experience med komponent baseret udvikling.

Fokus på udvikleroplevelsen, var også grunden til at vi ikke valgte en CMS som Wordpress. Wordpress kunne potentielt være et valg der gav mening for kunde som DJPer, der potentielt kunne have gavn af at kunne sætte nye posts eller sider op selv. Men vi vurderede at det ville være for stor en udfordring med et ufamiliært programmeringsprog i PHP og et sværere setup i forhold til Git og version control.

### Tailwind CSS

I forlængelsen af temaet med god Developer Experience, har vi valgt at gå med TailwindCSS for styling. Dette er for den hurtige udviklingstid, og gode opkobling med komponent baseret udvikling. Den gode performance er også en bonus, og bestemt en del af valget. Tailwind hjælper også med at tilpasse til forskellige browsers automatisk.

### Supabase

Supabase er valgt til vores database, da vi allerede havde ekstensiv erfaring med det - og det er super nemt at bruge. Den gode API og SDK gør det både hurtigt og nemt at bruge. Derudover gjorde det indbyggede authentication setup nemt at bruge en funktion vi ikke havde meget erfaring med på forhånd.

### Git og Github

Vi har benyttet git og github til version control, da dette har tilladt os at have kontrol over og adgang til alle tidligere version af projektet, og være sikret backups, hvis noget skulle gå galt i en specifik version. Det har også gjort det nemt at deploye til live siden, da vercel automatisk henter det nyeste commit, og deployer det til siden.

### Vercel

Vi har benyttet Vercel til at hoste vores side, som et naturligt valg i forlængelse af vores valg af Next.js som vores full stack framework. Da Vercel er udviklet af de samme udviklere som Next.js, er Vercel specifikt designed til at strømline og optimere publicering af en Next.js app. Dette indkluderer et CDN (Content Delivery Network), automatisk skalering i tilfælde af spring i trafik samt analytics.

### Minor

Vi har også benyttet nogle mindre libraries til små utilities, som vi har benyttet igennem vores projekt.

### Admin

https://github.com/SmoIIy/nextjs-supabase-auth

#### Formik

#### Yup

#### Classnames
