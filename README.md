# Afsluttende eksamen | DJ Per

## Tech Stack

---

### React + Next.js

I forhold til tech stack, er vi gået efter marked conventioner samt familiaritet. React med Next.js er et library + framework som vi har arbejdet med før, samt en populær kombination i den professionelle verden. Derudover fungerer Next.js's server side rendering og server actions godt i forhold til både SEO og performance.

Valget giver os også en stor mængde flexibilitet, samt en god developer experience med komponent baseret udvikling.

Fokus på udvikleroplevelsen, var også grunden til at vi ikke valgte en CMS som Wordpress. Wordpress kunne potentielt være et valg der gav mening for kunde som DJPer, der potentielt kunne have gavn af at kunne sætte nye posts eller sider op selv. Men vi vurderede at det ville være for stor en udfordring med et ufamiliært programmeringsprog i PHP og et sværere setup i forhold til Git og version control.

### Tailwind CSS

I forlængelsen af temaet med god Developer Experience, har vi valgt at gå med TailwindCSS for styling. Dette er for den hurtige udviklingstid, og gode opkobling med komponent baseret udvikling. Den gode performance er også en bonus, og bestemt en del af valget. Tailwind hjælper også med at tilpasse til forskellige browsers automatisk.

### Supabase

Supabase er valgt til vores database, da vi allerede havde ekstensiv erfaring med det - og det er super nemt at bruge. Den gode API og SDK gør det både hurtigt og nemt at bruge.Vi opbevarer indkommende henvendelser fra bookingformen, og henter Derudover gjorde det indbyggede authentication setup nemt at bruge en funktion, som vi ikke havde meget erfaring med på forhånd.

### Git og Github

Vi har benyttet git og github til version control, da dette har tilladt os at have kontrol over og adgang til alle tidligere version af projektet, og være sikret backups, hvis noget skulle gå galt i en specifik version. Det har også gjort det nemt at deploye til live siden, da vercel automatisk henter det nyeste commit, og deployer det til siden.

### Vercel

Vi har benyttet Vercel til at hoste vores side, som et naturligt valg i forlængelse af vores valg af Next.js som vores full stack framework. Da Vercel er udviklet af de samme udviklere som Next.js, er Vercel specifikt designed til at strømline og optimere publicering af en Next.js app. Dette indkluderer et CDN (Content Delivery Network), automatisk skalering i tilfælde af spring i trafik samt analytics.

### Minor

Vi har også benyttet nogle mindre libraries til små utilities, som vi har benyttet igennem vores projekt.

#### Classnames

Mindre javascript library, brugt til at kombinere classnames på komponenter

#### Formik

Et open source form library til React

#### Yup

Javascript validation schema builder til validering af forms

---

## Udvikling

### Komponenter og blokke

Til vores udviklingsprocess, har vi primært tænkt i blokke. Det vil sige, hver eneste "afsnit" af indhold på siden, har sin egen blok. Disse blokke er så udviklet i hver sit komponent. Dette er gjort for nemmere at adskille ting fra hinanden, og sørge for at hver side ikke er fyldt op med alt for mange forskellige html elementer. De er dog forskellige nok, til at det ville tilføje nok kompleksitet, til at det ikke gav mening at genbruge dem. Alt det indhold der så kunne genbruges, sådan som knapper, header og footer er så udviklet som genanbrugelige komponenter som anvender props til at skifte ting som tekst eller farve.

### Styling

Som nævnt har vi benyttet TailwindCSS for vores styling, og for at holde vores projekt mere simpelt, har vi opdelt vores interne og eksterne styling. Det vil sige at ting som farver, padding, tekst mm er i selve komponentet, hvor ting som margin mm, inputtes som props via classnames.

#### @apply directive

TailwindCSS tillader os også at benytte deres @apply diretive. Her kan man oprette nye classes, som repræsenterer én eller flere tailwind utility classes. Dette har vi benyttet til primært at opsætte vores designsystem i tailwind. På den måde skulle vi ikke tænke over at style text og farver i hvert eneste element, det var automatisk sat op til at tilpasse os vores designsystem. Derudover hjalp det også med at forhindre at alle vores html elementer blev bloatede med de samme utility classes, men tillod os samtidigt at modificere de enkelte elementers styling, med større frihed end props i react kombonenterne havde gjort.

### Funktioner og Javascript

I vores projekt har vi både server og client side funktioner. Udgangspunktet er, at alle komponenter skal renders på serveren, for hastigheden og SEO venligheden. Dog, hvis siden kræver interaktivitet, så oprettes client side komponenter for at opnå dette. På den måde sendes der kun den nødvendige mængde javascript til browseren.

#### Client side

Vores client side funktioner bliver brugt til ting som modals, udskifte content og så videre. Disse er primært skrevet direkte i det relevante komponent, og de fleste er blot state management med useState. Det vil sige, holde styr på om et modal skal være åbent eller lukket, og skiftet state ved klik af en knap.

> Indsæt billede eksempel

#### Server side

Vores serverside funktioner bliver brugt til at forbinde til supabase, og håndterer vores form. Dette har to årsager. Primært for at gøre det nemmere for os som udviklere - da vi ikke skal bruge reacts useEffect hook. Men sekundært, ville vi ikke lade browseren håndtere den direkte kontakt med supabase databasen.

Til vores supabase setup, har vi installeret supabases SDK direkte i projektet, og benyttet det til at lave vores requests. Dette gør det meget nemmere og hurtigere at skrive vores GET og DELETE requests, samt gjort det nemmere at lave error handling.

> Indsæt eksempel af supabase SDK Funktion - utils/actions/handleform.js

#### Form og validering

Formen på bookingsiden er et client komponent. Dette er så formen kan opdateres når brugeren interegerer med den, og så den kan vise en "Tak" besked når formen er sendt. Det opnås ved et useState hook, som hedder submitted og som udgangpunkt er sat til 'false'. Når formen bliver sendt, opdaterer setSubmitted dette til 'true' - et if-statement checker om submitted er true eller ej, og render formen hvis 'false' og beskeden hvis true'

> Indsæt billede af submitted

##### Validering

Validering af formen foregår i 2 stops. Ét mens brugeren er ved at udfylde formen, og et andet når brugeren trykker på send. Det første step er primært af UX årsager, for at hjælpe brugeren med at udfylde formen korrekt. Dette gøres ved funktionen handleInputChange(), som affyrer hver gang et input i formen ændres. Dette er en eventlistener, som tager eventet 'submit' og checker formens controls validitet. I tilfældet af email og telefonnummer, checker den mod validatePhoneNumber og validateEmail som benytter test() metoden mod en regex expression, for at checke om inputtet matcher. Derefter opdateres det respektive inputs validitetsbesked til en passende besked, så brugeren ved hvordan den skal udfyldes korrekt.

Når brugeren klikker på 'send', eller trykker på 'enter', affyres funktionen handleSubmit(). Denne tager igen eventet som argument og checker det med metoden checkValidity(). Hvis denne returnerer 'true', så bliver værdierne fra formen omdattet til et object, og sendt til handleForm() server funktionen, som uploader den til supabase - til sidst bliver setSubmitted sat til 'true'. Det er vigtigt at dataen valideres i frontenten, så der ikke bliver sendt forkert data til databasen - dette kunne resultere i at dataen ikke bliver gemt, men uden at brugeren er opmærksom på det.

### Admin

Admin siden af bygget ved hjælp af Supabase indbyggede authentication system. Desværre er documentationen på Supabase hjemmeside ikke særlig god og/eller udførlig. Derfor er vores admin setup bygget op ud fra et sample projekt udviklet af Mykhaylo Ryechkin ( https://github.com/SmoIIy/nextjs-supabase-auth ). Sample projektet indholdte normale authentication funktioner som Log ind/ud, skift password, opret bruger osv. For at tilpasse vores projekt, har vi fjernet funktioner som ikke er nødvendige - for eksempel at oprette nye brugere, og vi har stylet komponenterne til at passe til vores designsystem. Derudover har vi flyttet hele stien til /admin mappen, for at holde det adskilt fra resten.

Loginsystemet fungerer ved hjælp af supabase SDK'en sender et kald til supabase serveren, med funktionen auth.getUser, og et password plus email argument. Hvis den får en user tilbage, oprettes der en session, og en cookie sættes i browseren. På den måde bliver brugeren ikke logget ud, hvis siden opdateres. Siden serveren dog ikke kan sætte cookies i browseren, bliver dette gjort af en middleware funktion. Hvis ikke en session findes, bliver brugeren redirected til /sign-in stien.

Hvis brugeren er logget ind, loades indholdet på /admin/page.jsx. Her er der to client komponenter, NewItems og ConfirmedItems. Begge disse opretter et array i et useState hook. Dette array fyldes derefter op med objekter fra to tabeller i databasen - et til nye henvendelser(tabellen 'new'), og et til bekræftede(tabellen 'Confirmed'). Dette gøres ved hjælp af et useEffect hook(da dette skal bruges til at forbinde til eksterne ting, som en database i client funktioner) og en GET request via supabase SDK'en. Derefter oprettes en subscription til databasetabellen med supabase' subscribe() funktion. På den måde broadcaster databasen ændringer, hvis noget bliver slettet eller oprettet, så siden opdateres in real time ved nye ændringer. Derefter bliver hvert array loopet igennem med map() funktionen, og et Date komponent renders for hver, med dataen fra hver objekt.

Hver Date komponent kommer med en knap, som åbner en modal. På nye henvendelser (NewDate.jsx) kan henvendelsen bekræftes, eller slettes. På bekræftede henvendelser (Confirmeddate.jsx) kan det kun slettes. Newdate bliver bekræftet ved hjælp af en funktion som laver en kopi i 'Confirmed' tabellen, og derefter sletter den oprindelige i 'New' tabellen.

> Vedlæg billede af denne funktion

#### Kode eksempel og painpoints

Skriv om hvordan jeg har håndteret datoformatet

##### Instagram

Vi ville gerne have oprettet en forbindelse til DJ Pers instagram og have renderet den på siden, men desværre fjernede Meta den API vi skulle bruge, den 4. december. Derfor er dette harcoded med 4 billeder i et grid.
