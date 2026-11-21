/* Datele site-ului: prețuri, cursuri, calendar. Sursa: mesajele Gabrielei, 16 nov 2026. */
window.GLA = {
  config: {
    whatsapp: "40729956692",
    // Când e gata contul de plată (Stripe), se pune aici adresa funcției de checkout.
    // Până atunci cererile merg pe WhatsApp către Gabriela.
    checkoutEndpoint: "",
    leadEndpoint: ""
  },
  addons: {
    kit: { id: "kit", label: "Kit produse", price: 500 },
    diploma: { id: "diploma", label: "Diplomă acreditată", price: 1200 }
  },
  courses: [
    {
      id: "baza-2z", group: "baza", name: "Curs de bază extensii de gene 1-3D", tag: "2 zile · de la zero",
      days: "2 zile", price: 2500, advance: 500, full: 2300, addons: ["kit", "diploma"], dates: "extensii",
      img: "r-0020",
      lead: "Program intensiv de formare profesională, pentru cine vrea să intre în domeniu și să învețe meseria de la zero.",
      intro: [
        "Cursul de bază 1-3D este destinat persoanelor care își doresc să pătrundă în domeniul extensiilor de gene și să dobândească cunoștințele teoretice și practice necesare pentru a începe o carieră.",
        "Programul se desfășoară pe două zile intensive, în care teoria se îmbină cu practica, fiecare etapă fiind explicată și demonstrată pas cu pas, sub îndrumarea directă a Gabrielei.",
        "Practica are loc în ambele zile, atât pe manechin, cât și pe model uman, ca să exersezi tehnicile în condiții reale încă din prima zi."
      ],
      sections: [
        { t: "Ziua 1 · Teorie și fundamentele tehnicii", items: [
          "Anatomia și structura firului natural de geană", "Ciclul de creștere și regenerare al genelor",
          "Tipuri de extensii: grosimi, lungimi și curburi", "Alegerea extensiilor în funcție de particularitățile clientei",
          "Tipuri de adezivi, compoziție, depozitare și condiții optime de utilizare", "Instrumentele și materialele necesare",
          "Pregătirea clientei înainte de aplicare", "Igiena, dezinfecția și sterilizarea instrumentelor",
          "Contraindicații și posibile reacții adverse", "Izolarea corectă a genelor naturale",
          "Distanța corectă de aplicare și direcționarea extensiilor", "Mapping-ul și alegerea efectelor în funcție de forma ochilor",
          "Întreținerea și îndepărtarea extensiilor în siguranță" ] },
        { t: "Ziua 1 · Practică", items: [
          "Familiarizarea cu pensetele și poziția corectă a mâinii", "Exerciții de izolare și aplicare pe manechin",
          "Primele exerciții de aplicare pe model uman", "Însușirea tehnicii 1D, fir cu fir",
          "Demonstrații practice și corectarea tehnicii sub îndrumarea trainerului" ] },
        { t: "Ziua 2 · Tehnici de aplicare și dezvoltarea îndemânării", items: [
          "Realizarea tehnicilor 2D și 3D", "Formarea și aplicarea corectă a evantaielor", "Controlul cantității de adeziv",
          "Direcționarea și poziționarea corectă a extensiilor", "Obținerea unei aplicări uniforme și simetrice",
          "Alegerea mapping-ului potrivit în funcție de fizionomia clientei", "Adaptarea lungimilor și curburilor",
          "Identificarea și corectarea greșelilor frecvente", "Finalizarea unei lucrări curate și profesionale" ] },
        { t: "Ziua 2 · Practică", items: [
          "Exerciții de consolidare a tehnicii pe manechin", "Aplicarea tehnicilor 2D și 3D pe model uman",
          "Formarea evantaielor și exersarea volumelor", "Realizarea unei lucrări complete sub supravegherea trainerului",
          "Feedback individual și corectarea eventualelor greșeli" ] }
      ],
      gets: [
        "Suport de curs cu informațiile teoretice necesare", "Pregătire teoretică și practică intensivă",
        "Demonstrații realizate de trainer", "Practică în ambele zile, pe manechin și pe model uman",
        "Îndrumare directă și corectarea individuală a tehnicii", "Recomandări privind alegerea produselor și instrumentelor necesare pentru început",
        "Informații despre organizarea activității și relația profesională cu clientele",
        "Diplomă de participare și, în condițiile programului acreditat, diplomă acreditată",
        "Suport și recomandări pentru primii pași în domeniu" ],
      audience: "Nu ai nevoie de experiență anterioară. Ai nevoie doar de dorința de a învăța și de ambiția de a construi ceva frumos pentru viitorul tău profesional.",
      accredited: true
    },
    {
      id: "baza-3z", group: "baza", name: "Curs de bază extensii de gene 1-3D", tag: "3 zile · de la zero",
      days: "3 zile", price: 3000, advance: 500, full: 2700, addons: ["kit", "diploma"], dates: "extensii",
      img: "r-0014",
      lead: "Învață o meserie. Descoperă-ți pasiunea. Construiește-ți propriul viitor, cu practică zilnică pe manechin și model uman.",
      intro: [
        "Programul este structurat pe trei zile intensive, în care teoria și practica se îmbină progresiv: de la aplicarea clasică 1D până la volumele 2D și 3D.",
        "Practica are loc zilnic, atât pe manechin, cât și pe model uman. Pe tot parcursul instruirii ai îndrumare directă, explicații detaliate și corectarea tehnicii."
      ],
      sections: [
        { t: "Ziua 1 · Bazele meseriei și tehnica 1D", items: [
          "Anatomia și structura firului natural de geană", "Ciclul de creștere și regenerare al genelor",
          "Tipuri de extensii: lungimi, grosimi și curburi", "Tipuri de adezivi, compoziție și condiții optime de utilizare",
          "Instrumentele și materialele necesare", "Pregătirea corectă a clientei înainte de procedură",
          "Igiena, dezinfecția și sterilizarea instrumentelor", "Contraindicații și posibile reacții adverse",
          "Izolarea corectă a genelor naturale", "Distanța corectă de aplicare și direcționarea extensiilor",
          "Practică pe manechin: pensete, izolare, preluare și aplicare, controlul adezivului, tehnica 1D",
          "Practică pe model uman: prima aplicare 1D, fir cu fir, sub îndrumare directă" ] },
        { t: "Ziua 2 · Tehnica 2D și introducerea în volume", items: [
          "Principiile tehnicii 2D", "Diferențele dintre aplicarea clasică și tehnicile de volum", "Formarea corectă a evantaielor",
          "Alegerea grosimilor și lungimilor potrivite pentru volume", "Distribuția extensiilor și obținerea unei lucrări uniforme",
          "Mapping-ul și adaptarea lui în funcție de forma ochilor", "Direcționarea și simetria aplicării",
          "Practică pe manechin: evantaie 2D, preluare și aplicare, controlul deschiderii",
          "Practică pe model uman: aplicarea tehnicii 2D, distanța față de pleoapă, rezultat armonios" ] },
        { t: "Ziua 3 · Tehnica 3D și consolidarea cunoștințelor", items: [
          "Principiile tehnicii 3D", "Formarea evantaielor cu trei fire", "Alegerea corectă a materialelor pentru volume",
          "Adaptarea volumului la particularitățile genelor naturale", "Realizarea unui mapping corect și personalizat",
          "Identificarea și corectarea greșelilor frecvente", "Întreținerea extensiilor și recomandările oferite clientelor",
          "Îndepărtarea corectă și în siguranță a extensiilor",
          "Practică pe manechin: evantaie 3D, controlul simetriei și al deschiderii",
          "Practică pe model uman: aplicare 3D completă. La final, analiza rezultatului și feedback individual" ] }
      ],
      gets: [
        "Suport de curs cu informațiile teoretice necesare", "Pregătire teoretică și practică intensivă",
        "Practică zilnică pe manechin și model uman", "Experiență practică în tehnicile 1D, 2D și 3D",
        "Demonstrații și explicații pas cu pas", "Îndrumare directă și corectarea individuală a tehnicii",
        "Recomandări privind alegerea produselor și instrumentelor necesare",
        "Informații despre organizarea activității și relația profesională cu clientele",
        "Diplomă de participare și, în condițiile programului acreditat, diplomă acreditată",
        "Recomandări și îndrumare pentru începutul activității profesionale" ],
      audience: "Nu ai nevoie de experiență anterioară. Ai nevoie doar de dorința de a învăța și de ambiția de a construi ceva frumos pentru viitorul tău profesional.",
      accredited: true
    },
    {
      id: "russian", group: "spec", name: "Russian Volume 10-20D", tag: "1 zi · specializare",
      days: "1 zi", price: 2500, advance: 500, full: 2100, addons: [], dates: "la-cerere",
      img: "r-0017",
      lead: "Arta volumelor spectaculoase începe cu tehnica și precizia fiecărui evantai.",
      intro: [
        "Cursul este destinat tehnicienelor de gene care vor să își aprofundeze cunoștințele și să învețe volumele mari, cu evantaie handmade.",
        "Programul intensiv de o zi te ajută să obții evantaie uniforme, simetrice și corect proporționate, cu un aspect bogat și elegant, de la 10D până la 20D."
      ],
      sections: [
        { t: "Modul teoretic", items: [
          "Principiile tehnicii Russian Volume", "Particularitățile volumelor mari, de la 10D la 20D", "Alegerea grosimii și lungimii extensiilor",
          "Raportul dintre numărul de fire și greutatea evantaiului", "Adaptarea volumului la particularitățile genelor naturale",
          "Alegerea materialelor și a adezivului potrivit", "Direcționarea și distribuirea corectă a volumului", "Greșeli frecvente și metode de corectare" ] },
        { t: "Modul practic", items: [
          "Realizarea evantaielor Russian Volume 10D-20D", "Tehnici de formare manuală a evantaielor", "Controlul deschiderii și al simetriei",
          "Obținerea unor baze corecte și uniforme", "Controlul cantității de adeziv", "Tehnici de preluare și aplicare",
          "Identificarea și corectarea imperfecțiunilor", "Exersarea obținerii unor evantaie aerisite și uniforme", "Practică pe model uman" ] }
      ],
      gets: ["Instruire teoretică și practică intensivă", "Demonstrații realizate de trainer", "Îndrumare directă și feedback individual",
        "Exerciții practice pentru dezvoltarea tehnicii", "Recomandări privind materialele și instrumentele necesare", "Certificat de participare"],
      audience: "Cursul se adresează tehnicienelor care au deja experiență în aplicarea extensiilor de gene și vor să își diversifice tehnicile, să își îmbogățească portofoliul și să ofere servicii de volum avansat.",
      accredited: false
    },
    {
      id: "efecte", group: "spec", name: "Efecte speciale", tag: "1 zi · Kim K, Foxy Eye sau Eyeliner",
      days: "1 zi", price: 2500, advance: 500, full: 2200, addons: [], dates: "la-cerere", choices: ["Kim K", "Foxy Eye", "Eyeliner Effect"],
      img: "r-9991",
      lead: "Alege efectul preferat și perfecționează-ți tehnica, ca să creezi lucrări care îți pun în valoare creativitatea.",
      intro: [
        "Programul se desfășoară pe parcursul unei zile intensive, în care aprofundezi un singur efect, ales de tine dintre cele trei variante:",
        "Kim K Effect: aspect texturat, cu spike-uri bine definite și alternanțe de lungimi. Foxy Eye Effect: efect alungit, ascendent și elegant. Eyeliner Effect: contur intensificat al liniei genelor, cu aspect definit."
      ],
      sections: [
        { t: "Modul teoretic", items: [
          "Particularitățile efectului ales", "Analizarea formei ochilor și adaptarea tehnicii", "Alegerea lungimilor, grosimilor și curburilor potrivite",
          "Construirea mapping-ului specific", "Distribuirea și direcționarea corectă a extensiilor", "Obținerea proporțiilor și simetriei", "Greșeli frecvente și metode de corectare" ] },
        { t: "Modul practic", items: [
          "Demonstrație realizată de trainer", "Exersarea mapping-ului specific efectului ales", "Aplicarea tehnicii pas cu pas",
          "Adaptarea efectului la particularitățile modelului", "Corectarea tehnicii și feedback individual", "Practică pe model uman" ] }
      ],
      gets: ["Instruire teoretică și practică intensivă", "Suport de curs", "Demonstrații și explicații pas cu pas", "Îndrumare individuală",
        "Recomandări privind materialele și instrumentele necesare", "Certificat de participare"],
      audience: "Cursul se adresează tehnicienelor cu experiență în extensii de gene, care vor să aprofundeze o tehnică anume și să ofere clientelor efecte personalizate.",
      accredited: false
    },
    {
      id: "banda", group: "spec", name: "Tehnica pe bandă", tag: "1 zi · Strip Lash Technique",
      days: "1 zi", price: 2500, advance: 500, full: 2200, addons: [], dates: "la-cerere",
      img: "r-9974",
      lead: "Precizie, rapiditate și uniformitate în realizarea volumelor.",
      intro: [
        "Pe parcursul unei zile intensive descoperi principiile tehnicii pe bandă, înveți să controlezi formarea evantaielor și să obții rezultate uniforme, bine definite și adaptate stilului tău de lucru.",
        "Programul îmbină informațiile teoretice cu demonstrațiile practice și exercițiile individuale, fiecare etapă fiind explicată și corectată sub îndrumarea directă a Gabrielei."
      ],
      sections: [
        { t: "Modul teoretic", items: [
          "Principiile și particularitățile tehnicii pe bandă", "Alegerea extensiilor potrivite pentru această tehnică", "Pregătirea benzilor și organizarea extensiilor",
          "Controlul adezivului și al cantității utilizate", "Formarea corectă a evantaielor", "Controlul deschiderii, simetriei și uniformității",
          "Obținerea unor baze corecte și curate", "Greșeli frecvente și metode de corectare" ] },
        { t: "Modul practic", items: [
          "Demonstrație realizată de trainer", "Formarea evantaielor direct de pe bandă", "Controlul deschiderii și al proporțiilor",
          "Realizarea unor evantaie uniforme și bine definite", "Exersarea preluării și aplicării evantaielor", "Corectarea tehnicii și feedback individual", "Practică pe model uman" ] }
      ],
      gets: ["Instruire teoretică și practică intensivă", "Suport de curs", "Demonstrații și explicații pas cu pas", "Exerciții practice individuale",
        "Îndrumare directă și feedback personalizat", "Recomandări privind materialele și instrumentele necesare", "Certificat de participare"],
      audience: "Cursul se adresează tehnicienelor cu experiență în extensii de gene, care vor să descopere metode noi de realizare a evantaielor și să își diversifice serviciile.",
      accredited: false
    },
    {
      id: "laminare-gene", group: "lam", name: "Laminare gene", tag: "1 zi · Lash Lift",
      days: "1 zi", price: 1300, advance: 300, full: 1100, addons: ["kit"], dates: "laminare",
      img: "r-0013",
      lead: "Evidențiază frumusețea naturală și descoperă arta laminării genelor.",
      intro: [
        "Genele naturale sunt curbate, ridicate și evidențiate, iar privirea capătă un aspect mai deschis și mai expresiv.",
        "Programul se desfășoară pe o zi intensivă și îmbină pregătirea teoretică cu demonstrațiile și practica, ca să înțelegi fiecare etapă și să poți face procedura corect și în siguranță. Se învață de la zero, fără experiență anterioară."
      ],
      sections: [
        { t: "Modul teoretic", items: [
          "Anatomia și structura firului natural de geană", "Ciclul de creștere și regenerare al genelor", "Principiile și etapele procedurii de laminare",
          "Produsele și soluțiile utilizate, rolul fiecăruia și timpul de acționare", "Alegerea padurilor de silicon în funcție de lungimea și forma genelor",
          "Adaptarea procedurii la particularitățile genelor naturale", "Pregătirea clientei înainte de procedură", "Contraindicații și posibile reacții adverse",
          "Reguli de igienă și siguranță", "Îngrijirea genelor după procedură și recomandările oferite clientelor" ] },
        { t: "Modul practic", items: [
          "Pregătirea și curățarea genelor naturale", "Alegerea și poziționarea corectă a padurilor de silicon", "Fixarea și aranjarea genelor pe suport",
          "Aplicarea corectă a soluțiilor de laminare", "Respectarea timpilor de acționare", "Obținerea curbării și ridicării uniforme",
          "Vopsirea genelor pentru intensificarea rezultatului", "Hidratarea și îngrijirea genelor la final", "Identificarea și corectarea greșelilor frecvente", "Practică pe model uman" ] }
      ],
      gets: ["Suport de curs cu informațiile teoretice necesare", "Instruire teoretică și practică", "Demonstrații realizate de trainer",
        "Îndrumare directă și feedback individual", "Recomandări privind alegerea produselor și instrumentelor", "Practică pe model uman", "Certificat de participare"],
      audience: "Pentru cine vrea să intre în domeniul laminării și pentru cine vrea să își diversifice serviciile. Nu este necesară experiența anterioară.",
      accredited: false
    },
    {
      id: "laminare-gene-sprancene", group: "lam", name: "Laminare gene și sprâncene", tag: "1 zi · Lash Lift & Brow Lamination",
      days: "1 zi", price: 1700, advance: 300, full: 1400, addons: ["kit"], dates: "laminare",
      img: "r-0015",
      lead: "Două proceduri esențiale pentru frumusețea naturală, într-un singur program de formare.",
      intro: [
        "Într-o zi intensivă înveți tehnicile de laminare a genelor naturale și a sprâncenelor, de la pregătirea clientei și alegerea produselor potrivite până la executarea corectă a procedurilor și obținerea unui rezultat armonios.",
        "Fiecare etapă e explicată pas cu pas, sub îndrumarea directă a Gabrielei. Nu e necesară experiența anterioară în laminare."
      ],
      sections: [
        { t: "Modul teoretic", items: [
          "Anatomia și structura firului natural de geană și sprânceană", "Ciclul de creștere și regenerare al firelor", "Principiile și etapele procedurilor de laminare",
          "Tipurile de produse și soluții utilizate și rolul fiecăruia", "Alegerea padurilor de silicon pentru laminarea genelor", "Alegerea formei și direcției potrivite pentru sprâncene",
          "Pregătirea corectă a clientei", "Timpii de acționare și adaptarea lor la particularitățile firelor", "Contraindicații și posibile reacții adverse",
          "Reguli de igienă și siguranță", "Vopsirea genelor și sprâncenelor", "Îngrijirea și recomandările oferite clientelor după proceduri" ] },
        { t: "Modul practic", items: [
          "Pregătirea și curățarea genelor și sprâncenelor", "Alegerea și poziționarea padurilor de silicon", "Fixarea și aranjarea genelor pe suport",
          "Aplicarea soluțiilor de laminare și respectarea timpilor", "Obținerea curbării și ridicării uniforme a genelor", "Aranjarea și direcționarea firelor de sprânceană",
          "Vopsirea genelor și sprâncenelor", "Stilizarea și definirea formei sprâncenelor", "Pensarea și finisarea rezultatului", "Hidratarea și îngrijirea finală", "Practică pe model uman" ] }
      ],
      gets: ["Suport de curs cu informațiile teoretice necesare", "Instruire teoretică și practică pentru ambele proceduri", "Demonstrații realizate de trainer",
        "Îndrumare directă și feedback individual", "Recomandări privind alegerea produselor și instrumentelor", "Practică pe model uman", "Certificat de participare"],
      audience: "Pentru cine vrea să înceapă o activitate în beauty și pentru tehnicienele care vor să își diversifice portofoliul de servicii.",
      accredited: false
    },
    {
      id: "practica-laminare", group: "practica", name: "Zi de practică cu trainerul · laminare", tag: "1 zi · perfecționare",
      days: "1 zi", price: 600, advance: 200, full: null, addons: [], dates: "la-cerere", request: true,
      img: "r-0018",
      lead: "O zi dedicată evoluției și perfecționării tale profesionale, direct alături de Gabriela.",
      intro: ["Pentru tehniciene care au urmat deja cursuri de specializare în laminare și vor mai multă practică, îndrumare și încredere în tehnicile pe care le folosesc.",
        "Nu este un curs de inițiere sau de calificare, ci o experiență individuală de perfecționare. Completezi formularul, Gabriela analizează solicitarea și te contactează personal ca să stabiliți obiectivele și data."],
      sections: [{ t: "Ce poți perfecționa", items: [
        "Alegerea corectă a produselor și materialelor", "Analizarea particularităților genelor și sprâncenelor", "Alegerea padurilor și poziționarea corectă a genelor",
        "Aplicarea soluțiilor și respectarea timpilor de acționare", "Obținerea unei curbări uniforme a genelor", "Direcționarea și stilizarea firelor de sprânceană",
        "Vopsirea și finisarea procedurilor", "Identificarea și corectarea greșelilor frecvente" ] }],
      gets: ["O zi de practică alături de trainer", "Îndrumare și atenție individuală", "Analizarea tehnicii tale de lucru", "Demonstrații și explicații practice",
        "Corectarea greșelilor și recomandări personalizate", "Feedback direct pentru evoluția ta profesională"],
      audience: "Pentru tehniciene care au urmat deja cursuri de specializare.", accredited: false
    },
    {
      id: "practica-extensii", group: "practica", name: "Zi de practică cu trainerul · extensii de gene", tag: "1 zi · perfecționare",
      days: "1 zi", price: 700, priceMax: 1000, advance: 300, full: null, addons: [], dates: "la-cerere", request: true,
      img: "r-0019",
      lead: "O zi dedicată evoluției și perfecționării tale profesionale, direct alături de Gabriela.",
      intro: ["Pentru tehniciene care au urmat deja cursuri de specializare în extensii de gene și vor să își corecteze greșelile, să își îmbunătățească rezultatele și să învețe lucruri noi.",
        "Este o experiență individuală de perfecționare. Completezi formularul, iar Gabriela te contactează personal ca să stabiliți obiectivele zilei și data."],
      sections: [{ t: "Ce poți perfecționa", items: [
        "Tehnici de aplicare și perfecționarea execuției", "Izolarea corectă a genelor naturale", "Formarea și aplicarea evantaielor", "Tehnici de volum și efecte speciale",
        "Mapping și adaptarea lucrărilor la fizionomie", "Direcționarea, simetria și uniformitatea extensiilor", "Alegerea materialelor și utilizarea corectă a adezivului",
        "Corectarea greșelilor și îmbunătățirea rezultatelor" ] }],
      gets: ["O zi de practică alături de trainer", "Îndrumare și atenție individuală", "Analizarea tehnicii tale de lucru", "Demonstrații și explicații practice",
        "Corectarea greșelilor și recomandări personalizate", "Feedback direct pentru evoluția ta profesională"],
      audience: "Pentru tehniciene care au urmat deja cursuri de specializare.", accredited: false
    }
  ],
  next: { extensii: "30 ian – 1 feb 2027", laminare: "18 ianuarie 2027", "la-cerere": "Programare la cerere" },
  calendar: [
    { m: "Ianuarie 2027", ext: "30, 31 ianuarie și 1 februarie", lam: ["18 ianuarie", "25 ianuarie"] },
    { m: "Februarie 2027", ext: "27, 28 februarie și 1 martie", lam: ["15 februarie", "22 februarie"] },
    { m: "Martie 2027", ext: "27, 28 și 29 martie", lam: ["22 martie"] },
    { m: "Aprilie 2027", ext: "24, 25 și 26 aprilie", lam: ["19 aprilie"] },
    { m: "Mai 2027", ext: "29, 30 și 31 mai", lam: ["24 mai"] }
  ],
  gallery: ["r-0013", "r-0014", "r-0015", "r-0017", "r-0020", "r-0011", "r-0012", "r-0016", "r-0018", "r-0019", "r-9974", "r-9976", "r-9991", "r-9994"],
  videos: ["2048", "5574", "5577", "5640", "5691"]
};
