# Logboek

<img width="57" height="67" alt="mimikyu" src="https://github.com/user-attachments/assets/69287044-d5de-4ddd-827f-d492f5bb7d2b" />

### ma 31 augustus - Intro dag / kickoff

Vandaag begon de dag met een hoorcollege en wat gastsprekers, waarin we werden gemotiveerd om zo aan de slag te gaan met het nieuwe blok en gelijk ook het tweede jaar. 
Uiteindelijk zijn we daarna met alle tweedejaarsstudenten van ons cluster bij elkaar gaan zitten in 3 open klaslokalen, liepen we de eerste opdrachten door en kregen we al wat theoriestof.

Ik heb nu ook een eigen domeinnaam, namelijk "Typesmr.nl", en die is nu ook gekoppeld aan mijn GitHub. 
Mijn GitHub is zelf ook gekoppeld via VSCode/VSCodium, zodat ik alles daarop kan aanpassen en alles lekker mee synchroniseer :)

Logout:

1. Leg uit wat een source hosting platform is en voor welke jij gekozen hebt.
2. Vertel welke domeinnaam jij gekozen hebt en hoe je die hebt gekoppeld aan jouw pagina.
3. Beschrijf hoe je aanpassingen aan jouw pagina kunt maken en hoe je er voor zorgt dat die op het web gepubliceerd worden.


antwoorden:
1. Github is mijn primaire keuze geweest als source hosting platform omdat het toegankelijk en bekend is. Het heeft dus een goede reputatie.
2. Ik heb gekozen voor typeSMR.nl omdat het verwijst naar typografie/ design en smr moet mijn naam/brand voorstellen (Eigenlijk mijn naam zonder klinkers)
   Ik heb dit gedaan via transip en het dan geconnect met github
3. Je kan je website aanpassen door de code aan te passen via vscode of vcodium en het via github te uploaden en opslaan

### di 1 september - Deep dive HTML & CSS basics studeren
Zelfstudie: Wat ik begreep van de 3 pagina's (Interneting Is Hard)

Oke dus die eerste 3 hoofdstukken van interneting is hard leggen eigenlijk gewoon de basics uit voordat je uberhaupt gaat coden. HTML, CSS en JS zijn dus 3 aparte talen die alle 3 wat anders doen: HTML is de content zelf (dus wat er staat), CSS is hoe het eruit ziet, en JS is de interactie/gedrag. Ze noemen het zelf ook een beetje zoals bij printers vroeger: content neerzetten en dan opmaken, alleen dan digitaal en nog moeilijker vind ik zelf, voor nu dan....

Bij "Basic Web Pages" ging het echt over de skeleton van een pagina: `<!DOCTYPE html>`, dan `<html>`...`</html>` met daarin `<head>`...`</head>` (metadata, zie je niet) en `<body>`...`</body>` (de content die je wel ziet). Daarna paragrafen, headings (h1 t/m h6), lijsten (ul/ol), en inline elements zoals `<em>`...`</em>` en `<strong>`...`</strong>`. Wat ik wel interessant vond is dat ze benadrukken dat je geen `<b>`...`</b>` of `<i>`...`</i>` meer moet gebruiken want die zeggen niks over de betekenis, alleen over hoe het eruitziet, en dat hoort bij CSS thuis, niet bij HTML dus wat best logisch is.

Bij "Hello, CSS" leerde ik hoe je die twee dingen (HTML en CSS) aan elkaar koppelt via een `<link/>` tag in de head, en hoe een CSS regel is opgebouwd (selector + declarations in accolades). Ook het verschil tussen px en em snap ik nu beter, em is relatief aan de basis fontsize, dus als je die verandert schaalt alles mee. En de "cascade" is dus letterlijk de volgorde van precedence: browser default → externe stylesheet → style tag in de pagina zelf → inline style, waarbij inline altijd wint (maar dat moet je dus eigenlijk nooit doen).

2 vragen die ik zou willen stellen:

1.Als inline styles zo slecht zijn omdat ze niet herbruikbaar zijn, waarom bestaat die optie dan uberhaupt nog in HTML/CSS, is dat puureerbetoon achtig iets of zijn er nog situaties1. waar het wel handig is?
2.Ze zeggen dat je bij em units je hele pagina kan laten meeschalen als je de basis fontsize aanpast, maar hoe werkt dat dan bij geneste elementen (bv een span in een p in een div), telt em dan op vanaf de parent of vanaf de root?
Wat me verwondert (MDN, mee naar de les)

Wat me verwondert is dat MDN "Debugging HTML" letterlijk als eigen apart hoofdstuk heeft naast alle content-lessen. Ik had niet verwacht dat foutzoeken in HTML zo'n eigen ding is, ik dacht altijd dat HTML zo simpel is dat er weinig mis kan gaan (in tegenstelling tot CSS/JS waar debuggen logischer voelt), maar blijkbaar is dat serieus genoeg om er een losse les aan te wijden.
   

### wo 2 september - Deep dives
De deep dives van Praktische CSS en Interactie: MMD gingen me best gemakkelijk af en ik vond het best leuk. Ik heb er ook buiten school nog aan gezeten om voor mezelf alles goed te begrijpen, vooral bij de code was het nog even koekeloeren hier en daar.
<img width="1067" height="755" alt="wok menu" src="https://github.com/user-attachments/assets/b783f314-044e-471c-a9f6-9d9eb67739f8" />

<img width="1522" height="662" alt="deep dive praktische css" src="https://github.com/user-attachments/assets/c1c65800-2e9c-49aa-9a1b-cdc13588c227" />



### vrij 4 september - Ziek afgemeld


### ma 7 september - Sprint planning + WS 1

Vandaag ben ik aan de slag gegaan met het maken van een presentatie omtrent manga en hoe dat mij inspireert om uiteindelijk een mooi product neer te zetten, althans mijn mooie toekomstige digital garden.  
checkout:

### woe 9 september - Presentatie geven + visual research
Presentatie, sfeerwoorden, sfeerstijlen en crazy 8's 
<img width="980" height="676" alt="stap 1" src="https://github.com/user-attachments/assets/83f5cffd-47d5-4a37-9b94-672a42329069" />
<img width="980" height="837" alt="stap 1 1" src="https://github.com/user-attachments/assets/bd3d29bf-c70a-44a9-ac88-cc9bd5e01489" />
<img width="980" height="777" alt="stap 2" src="https://github.com/user-attachments/assets/6eaf9cd8-3742-4075-8a9b-3a69a68c7032" />
<img width="977" height="942" alt="stap 3" src="https://github.com/user-attachments/assets/58777080-ad57-415f-99ed-6eb39ce92047" />
<img width="762" height="537" alt="crazy 8" src="https://github.com/user-attachments/assets/2b612753-ae24-479c-bb43-88755353122a" />

### vrij 11 september - 

### ma 14 september - Biweekly geek + responsive design uitleg
Vandaag waren we aan de slag met Vasilis

Opdracht 16 - van one column layout naar een responsive design
Je hebt je onderdelen al ingedeeld in een one-column layout.  Nu ga je onderzoeken hoe diezelfde onderdelen zich zouden kunnen herschikken als je meer ruimte hebt.

1. Ik ben met Giel in een duo om elkaars site te bekijken.
2. Giel's site waarvan ik moest kijken of die responsive is was goed responsief op de telefoon al zat er een kleine afwijking waardoor die niet recht in het midden zat
3. Ik denk dat er verandering nodig zijn van layout en vormgeving op het moment als alles b.v niet gecenreerd is en of niet goed te lezen/ te zien is
4. Notities: 

check-out (what did i learn):
-Een website wordt lelijk op het moment dat je geen spacing,grid en code zodat alles responsive wordt.
- Die van mij is al responsive maar ik wil op dit moment even experimenteren met thema's (zoals light en dark mode) en allerlei verschillende hover animations.
- Ik denk mijn website tot nu toe in webby vocabulair uit te leggen aldus ik even de tijd neem om alles weer goed in te soaken.


### woe 16 september - Theorie Gestalt en ontwerpprincipes
we kregen vandaag les in design omtrent in webdesign.
denken vanuit een patroon, ook al zijn er lijnen / vormen niet verbonden. Een layout is een ordening van elementen die samen een verhaal vertellen waardoor je site netter en duidelijker kan voor vertonen.

checkout: 
3 gestalten design principes:
nabijheid, Contrast in grootte en kleur

Met grids kan je ervoor zorgen dat alles niet persee vastplakt en mooi een eigen plaatje krijgt het zorgt dus ervoor dat je  mooie secties creert 

ik neem de contrast in kleur en grootte samen met de grids mee in mijn nieuwe iteratie van mijn site



### vrij 18 september - 

### ma 21 september - 

### woe 23 september - 

### vrij 25 september - 

### ma 28 september - 

### woe 30 september -