export const QuizData =  [
  {
    id: 0,
    question:`Bienvenue Docteur. Jouez avec « Doctor Case » et trouvez le bon diagnostic et le traitement le plus adapté pour guérir votre patient !`,
    options: [],
    info:[],
    answer: [],
    infoglobal: [],
    type:'',
    suite:[],
    bg:'medecinzoome',
    reference:[],
    toutref:"",
    chapitre:0,
  },
  {
    id: 1,
    question:`Ce matin, Am Ali se présente chez le médecin pour une consultation. À 66 ans, il est retraité de la fonction publique. Son père était diabétique.`,
    options: [],
    info:[],
    answer: [],
    infoglobal: [],
    type:'',
    suite:[],
    bg:'chaise',
    reference:[],
    toutref:"",
    chapitre:0,
  },
  {
    id: 2,
    question:`Il y a 10 ans, Am Ali a été opéré pour une hernie inguinale. Cela fait plus que 3 ans qu’il n’a pas consulté.`,
    options: [],
    info:[],
    answer: [],
    infoglobal: [],
    type:'',
    suite:[],
    bg:'chaise',
    reference:[],
    toutref:"",
    chapitre:0,
  },
  {
    id: 3,
    question:`Bonjour Docteur, Il y a une semaine, je me sentais brutalement fébrile et fatigué.`,
    options: [],
    info:[],
    answer: [],
    infoglobal: [],
    type:'',
    suite:['J’avais en plus le nez qui coule et des douleurs articulaires. En fait, j’avais mal partout ! Je pense que c’était une grippe!','J’ai pris du paracétamol et des boissons chaudes et après je me suis senti mieux.','Depuis hier, je me sens de nouveau fébrile, je tousse et j’ai des crachats jaunâtres. Je sens comme une impression de gêne respiratoire.','Pourtant je fais attention, je ne fume pas et je suis toujours actif.'],
    bg:'patient',
    reference:[],
    toutref:"",
    chapitre:0,
  },
  {
    id: 4,
    question:`Devant cette symptomatologie Docteur, quels sont les diagnostics à évoquer?`,
    options: [`Bronchite aiguë`, `Pleurésie aiguë`, `Pneumonie grippale primaire`,'Pneumonie bactérienne',`Péricardite`],
    info:['En effet Docteur, la présence de toux avec expectorations évoque une bronchite aiguë.',
    'Docteur chez Am Ali le caractère productif de la toux et l’absence de douleur localisée sont contre le diagnostic de pleurésie. Choisissez une autre réponse !',
    'Docteur la symptomatologie de Am Ali n’évoque pas le diagnostic d’une pneumonie grippale primaire. Choisissez une autre réponse !',
    'En effet docteur, la présence d’une première phase avec fièvre, rhinorrhée et arthro-myalgies puis d’une deuxième phase avec reprise de la fièvre, toux productive et impression de gêne respiratoire, chez une personne âgée, évoque une pneumonie bactérienne survenant au décours d’une grippe.',
    'Docteur, dans la péricardite la toux est généralement absente. Choisissez une autre réponse !'
    ],
    answer: [`Bronchite aiguë`, `Pneumonie bactérienne`],
    infoglobal: [` <div class='titre'>Informations </div> 
    <div class='info-popup'> 
    <span class='sous_titre1'> La bronchite aigue </span> représente 75% des infections respiratoires basses.
    Souvent précédée d’une infection des voies aériennes supérieures, elle se caractérise par une
    fièvre inconstante et modérée (38-38,5°C) associée à des brûlures rétro-sternales, une toux 
    souvent sèche au début, parfois prolongée, puis productive avec une expectoration muqueuse ou 
    purulente.
     </div>
     <div class ='reference'>
    <div class='sous_titre2'> Références </div> 
    1. Agence nationale de sécurité du médicament et des produits de santé (ANSM). Antibiothérapie par voie générale en 
    pratique courante dans les infections respiratoires hautes de l’adulte et l’enfant. Recommandations de bonne pratique, 
    Novembre 2011. </br>
    2. E. Pilly. Maladies Infectieuses et Tropicales. Edition 2014.</br>
    3. E. Pilly. Maladies Infectieuses et Tropicales. Edition 2018.
    </div>`,

     `<div class='titre'>Informations </div> 
     <div class='info-popup'> 
     <span class='sous_titre1'> La pleurésie aigue </span> est un épanchement dans l’espace pleural secondaire à une inflammation 
     de la plèvre d’étiologie virale ou bactérienne. En dehors de la tuberculose, les pleurésies 
     bactériennes peuvent être communautaires ou nosocomiales. Les formes communautaires 
     peuvent accompagner ou survenir au décours d’une pneumonie.
     La symptomatologie est variable en fonction de l’abondance de l’épanchement. Une fièvre 
     d’intensité variable est souvent notée accompagnée d’une douleur thoracique intense et tenace 
     localisée du côté de l’épanchement, d’une toux sèche classiquement déclenchée par le 
     changement de position, pouvant irradier vers l’épaule homolatérale et aggravée par la toux.
     Une dyspnée peut s’associer en cas d’épanchement important. 
     Dans cette observation,le caractère productif de la toux et l’absence de douleur localisée sont 
     contre le diagnostic de pleurésie.
     </div> 
     <div class='reference'> 
      <div class='sous_titre2'>Références </div>
     1. Agence nationale de sécurité du médicament et des produits de santé (ANSM). Antibiothérapie par voie générale en 
     pratique courante dans les infections respiratoires hautes de l’adulte et l’enfant. Recommandations de bonne pratique, 
     Novembre 2011.</br>
     2. E. Pilly. Maladies Infectieuses et Tropicales. Edition 2014.</br>
     3. E. Pilly. Maladies Infectieuses et Tropicales. Edition 2018. 
     </div>`,
    

      `<div class='titre'>Informations </div> 
      <div class='info-popup'> 
      <span class='sous_titre1'> La pneumonie grippale primaire </span> 
      ou grippe maligne est une complication grave de la grippe. 
      Elle est due au virus de la grippe (<i> Myxovirus influenzae </i>). 
      Elle correspond à un œdème pulmonaire lésionnel à l’origine d’un tableau d’insuffisance 
      respiratoire aigue survenant rapidement (2-3 jours) après le début d’une grippe apparemment
      simple. Des manifestions extra-respiratoires peuvent s’y associer : myocardite, péricardite, 
      méningo-encéphalite, insuffisance rénale. Le pronostic est sévère avec une mortalité élevée dans 
      un tableau d’hypoxémie réfractaire. 
      </div>
      <div class='reference'> 
      <div class='sous_titre2'>Références </div>
      1. Agence nationale de sécurité du médicament et des produits de santé (ANSM). Antibiothérapie par voie générale en 
      pratique courante dans les infections respiratoires hautes de l’adulte et l’enfant. Recommandations de bonne pratique, 
      Novembre 2011.</br>
      2. E. Pilly. Maladies Infectieuses et Tropicales. Edition 2014.</br>
      3. E. Pilly. Maladies Infectieuses et Tropicales. Edition 2018.
      </div>` 
      ,`<div class='titre'>Informations </div> 
      <div class='info-popup'> 
       <span class='sous_titre1'> La pneumonie bactérienne</span>
      est la plus fréquente des complications survenant au décours 
      d’une grippe, particulièrement chez les personnes âgées. Elle est plus fréquente en hiver 
      (2,21/1000 habitants contre 1,24-1,59 au cours des autres saisons). Son incidence est plus 
      élevée chez l’homme et augmente avec l’âge (1,12/1000 habitants pour les personnes de 15-39 
      ans contre 3,12/1000 habitants pour celles de plus de 64 ans). Elle se caractérise par une 
      évolution bi-phasique entrecoupée d’une amélioration passagère. 
      La première phase est dominée par les symptômes de la grippe comportant une fièvre élevée 
      d’installation brutale, une rhinorrhée, une céphalée, des arthro-myalgies. Une amélioration est 
      constatée entre le 2ème et le 5ème jour. La seconde phase est caractérisée par une reprise de la 
      fièvre avec une toux productive, une impression de gêne respiratoire et parfois une dyspnée
      </div>
      <div class='reference'>
      <div class='sous_titre2'>Références</div>
      1. Agence nationale de sécurité du médicament et des produits de santé (ANSM). Antibiothérapie par voie générale en 
      pratique courante dans les infections respiratoires hautes de l’adulte et l’enfant. Recommandations de bonne pratique, 
      Novembre 2011.</br>
      2. E. Pilly. Maladies Infectieuses et Tropicales. Edition 2014.</br>
      3. E. Pilly. Maladies Infectieuses et Tropicales. Edition 2018.</br>
      4- Almirall J et al. Epidemiology of community-acquired pneumonia in adults: a population-based study. EurJ Respir2000,15:757-63.
      </div>`
      ,
      `<div class='titre'>Informations </div>
      <div class='info-popup'> 
      <span class='sous_titre1'> La péricardite</span> 
      est un épanchement au niveau du péricarde d’étiologie virale ou bactérienne. Le 
      tableau clinique est dominé par une fièvre d’intensité variable associée à une douleur thoracique 
      caractéristique, d'apparition brutale médiane, ou latéralisée à gauche, augmentée à l'inspiration 
      et en décubitus dorsal et relativement calmée en position assise. La toux est généralement 
      absente.
      </div> 
      <div class='reference'>
      <div class='sous_titre2'>Références</div> 
      1. Agence nationale de sécurité du médicament et des produits de santé (ANSM). Antibiothérapie par voie générale en 
      pratique courante dans les infections respiratoires hautes de l’adulte et l’enfant. Recommandations de bonne pratique, 
      Novembre 2011.</br>
      2. E. Pilly. Maladies Infectieuses et Tropicales. Edition 2014.</br>
      3. E. Pilly. Maladies Infectieuses et Tropicales. Edition 2018.
      </div>`
     ],
    fiche: [`` , `Pleurésie aiguë`, `Pneumonie grippale primaire`,'Pneumonie bactérienne',`Péricardite`],
    type:'qcm',
    suite:[`Bravo Docteur, les deux diagnostics à évoquer sont la bronchite aigue et la pneumonie bactérienne.`],
    bg:'medecin',
    reference:[],
    toutref:`
    <div class='titre'>Informations </div>
    <div class='info-popup'>
    <span class='sous_titre1'> La bronchite aigue </span>
    représente 75% des infections respiratoires basses. Souvent précédée 
    d’une infection des voies aériennes supérieures, elle se caractérise par une fièvre inconstante et 
    modérée (38-38,50ºC) associée à des brûlures rétro-sternales, une toux souvent sèche au début, 
    parfois prolongée, puis productive avec une expectoration muqueuse ou purulente. </br></br>
    <span class='sous_titre1'> 
    La pleurésie aigue 
    </span>
    est un épanchement dans l’espace pleural secondaire à une inflammation 
    de la plèvre d’étiologie virale ou bactérienne. En dehors de la tuberculose, les pleurésies 
    bactériennes peuvent être communautaires ou nosocomiales. Les formes communautaires 
    peuvent accompagner ou survenir au décours d’une pneumonie. La symptomatologie est 
    variable en fonction de l’abondance de l’épanchement. Une fièvre d’intensité variable est 
    souvent notée accompagnée d’une douleur thoracique intense et et tenace localisée du côté de 
    l’épanchement, d’une toux sèche, classiquement déclenchée par le changement de position, 
    pouvant irradier vers l’épaule homolatérale et aggravée par la toux.Une dyspnée peut s’associer 
    en cas d’épanchement important. Dans cette observation, le caractère productif de la toux et 
    l’absence de douleur localisée sont contre le diagnostic de pleurésie.</br></br>
    <span class='sous_titre1'> 
    La pneumonie grippale primaire  </span> ou grippe maligne est une complication grave de la grippe. 
    Elle est due au virus de la grippe (<i> Myxovirus influenzae </i> ). Elle correspond à un œdème 
    pulmonaire lésionnel à l’origine d’un tableau d’insuffisance respiratoire aigue survenant 
    rapidement (2-3 jours) après le début d’une grippe apparemment simple. Des manifestions 
    extra-respiratoires peuvent s’y associer : myocardite, péricardite, méningo-encéphalite, 
    insuffisance rénale. Le pronostic est sévère avec une mortalité élevée dans un tableau
    d’hypoxémie réfractaire. </br></br>
    <span class='sous_titre1'> 
    La pneumonie 
    </span>
    bactérienne La première phase est dominée par les symptômes de la grippe 
    comportant une fièvre élevée d’installation brutale, une rhinorrhée, une céphalée, des 
    arthro-myalgies. Une amélioration est constatée entre le 2ème et le 5ème jour. La seconde 
    phase est caractérisée par une reprise de la fièvre avec une toux productive, une impression de 
    gêne respiratoire et parfois une dyspnée. </br> </br>
    <span class='sous_titre1'> 
    La péricardite </span>
    est un épanchement au niveau du péricarde d’étiologie virale ou bactérienne. Le 
    tableau clinique est dominé par une fièvre d’intensité variable associée à une douleur thoracique 
    caractéristique, d'apparition brutale médiane, ou latéralisée à gauche, augmentée à l'inspiration 
    et en décubitus dorsal et relativement calmée en position assise. La toux 
    est généralement absente. 
    </div>
    <div class='reference'>
    <div class='sous_titre2'>Références</div> 
    1. Agence nationale de sécurité du médicament et des produits de santé (ANSM). Antibiothérapie par voie générale en 
    pratique courante dans les infections respiratoires hautes de l’adulte et l’enfant. Recommandations de bonne pratique, 
    Novembre 2011.
    2. E. Pilly. Maladies Infectieuses et Tropicales. Edition 2014.</br>
    3. E. Pilly. Maladies Infectieuses et Tropicales. Edition 2018. </br>
    4- Almirall J et al. Epidemiology of community-acquired pneumonia in adults: a population-based study. EurJ Respir2000,15:757-63.
    </div>`,
    chapitre:1,
  },
  {
    id: 5,
    question: `Docteur, en appuyant sur les différents examens, vous pouvez découvrir les résultats correspondants`,
    options: [`POULS`, `TEMPERATURE`,`AUSCULTATION PULMONAIRE`, `FREQUENCE RESPIRATOIRE`,`TENSION ARTERIELLE`],
    info:['Le pouls de Am Ali est à 110p/mn',
    'L’examen de Am Ali note une température à 39,4°C',
    'Am Ali a des râles crépitants au niveau de la base  pulmonaire gauche.',
    'Am Ali a une fréquence respiratoire à 28 cycles/mn',
    'La tension artérielle de Am Ali est à 135/75 mm Hg'

    ],

    answer: [`pouls`, `AUSCULTATION PULMONAIRE`, `TENSION ARTERIELLE`, `FREQUENCE RESPIRATOIRE`, `temperature`],
    infoglobal: [],
    type:'click',
    suite:[],
    bg:'infirmiere',
    reference:[],
    toutref:"",
    chapitre:2,
  },
  {
  id: 6,
  question:`Docteur, il faut noter que le reste de l’examen physique est normal`,
  options: [],
  info:[],
  answer: [`gaz du sang`, `Procalcitonine`, `nfs`,'Pneumonie bactérienne',`Péricardite`],
  infoglobal: [],
  fiche: [],
  type:'',
  suite:[],
  bg:'medecin',
  reference:[],
  toutref:"",
  chapitre:2,

},
  {
    id: 7,
    question: `D’après vous Docteur, quel est le diagnostic clinique à retenir chez ce patient ?`,
    options: [`Bronchite aiguë`, `Pleurésie aiguë`, `Pneumonie grippale primaire`,'Pneumonie bactérienne',`Péricardite`],
    info:[`Au cours de la bronchite aiguë, la fièvre est inconstante ou modérée (< 38,5°C). L’auscultation pulmonaire est normale ou note la présence de râles bronchiques diffus. Chez ce patient, les données de l’examen physique plaident contre le diagnostic de bronchite aigue. Choisissez une autre réponse !`,
    `Docteur La symptomatologie fonctionnelle et les données de l’examen physique permettent d’éliminer facilement le diagnostic de pleurésie (absence d’abolition des murmures vésiculaires et de frottement). Choisissez une autre réponse !`,
    `Docteur La symptomatologie fonctionnelle et les données de l’examen physique permettent d’éliminer facilement le diagnostic de pneumonie grippale (râles crépitant diffus). Choisissez une autre réponse  !`,
    `En effet, l’installation brutale d’une symptomatologie respiratoire comportant une toux avec une expectoration jaunâtre associée à une température >38,5°C, une tachycardie > 100/mn, une polypnée > 25/mn et à la présence d’un foyer de râles crépitants évoque en premier lieu le diagnostic d’une pneumonie bactérienne avec une bonne valeur prédictive positive.`,
    `La symptomatologie fonctionnelle et les données de l’examen physique permettent d’éliminer facilement ce diagnostic. Au cours de la péricardite, l’auscultation cardiaque montre un frottement et l’auscultation pulmonaire est habituellement normale. Choisissez une autre réponse  !`
    ],
    answer: [`Pneumonie bactérienne`],
    infoglobal: [],
    type:'qcm',
    suite:[`Bravo Docteur le diagnostic clinique à retenir est celui de pneumonie bactérienne`],
    bg:'medecin',
    reference:[`<div class='titre'>Références </div> 
    <div class='reference'>
    1. Agence nationale de sécurité du médicament et des produits de santé (ANSM). Antibiothérapie par voie générale en 
    pratique courante dans les infections respiratoires hautes de l’adulte et l’enfant. Recommandations de bonne pratique, 
    Novembre 2011. </br>
    2. E. Pilly. Maladies Infectieuses et Tropicales. Edition 2014.</br>
    3. E. Pilly. Maladies Infectieuses et Tropicales. Edition 2018.</br>
    4. AlmirallJ et al. Epidemiology of community-acquired pneumonia in adults: a population-based study. EurJ Respir2000,15:757-63.
    </div>`,
    `<div class='titre'>Références </div> 
    <div class='reference'>
    1. Agence nationale de sécurité du médicament et des produits de santé (ANSM). Antibiothérapie par voie générale en 
    pratique courante dans les infections respiratoires hautes de l’adulte et l’enfant. Recommandations de bonne pratique, 
    Novembre 2011.</br>
    2. E. Pilly. Maladies Infectieuses et Tropicales. Edition 2014.</br>
    3. E. Pilly. Maladies Infectieuses et Tropicales. Edition 2018.</br>
    4. AlmirallJ et al. Epidemiology of community-acquired pneumonia in adults: a population-based study. EurJ Respir2000,15:757-63.
    </div>`,
    `<div class='titre'>Références </div> 
    <div class='reference'>
    1. Agence nationale de sécurité du médicament et des produits de santé (ANSM). Antibiothérapie par voie générale en 
    pratique courante dans les infections respiratoires hautes de l’adulte et l’enfant. Recommandations de bonne pratique, 
    Novembre 2011.</br>
    2. E. Pilly. Maladies Infectieuses et Tropicales. Edition 2014.</br>
    3. E. Pilly. Maladies Infectieuses et Tropicales. Edition 2018.</br>
    4. AlmirallJ et al. Epidemiology of community-acquired pneumonia in adults: a population-based study. EurJ Respir2000,15:757-63.
    </div>`,
    `
    <div class='titre'>Références </div> 
    <div class='reference'>
    1. Agence nationale de sécurité du médicament et des produits de santé (ANSM). Antibiothérapie par voie générale en 
    pratique courante dans les infections respiratoires hautes de l’adulte et l’enfant. Recommandations de bonne pratique, 
    Novembre 2011. </br>
    2. E. Pilly. Maladies Infectieuses et Tropicales. Edition 2014.</br>
    3. E. Pilly. Maladies Infectieuses et Tropicales. Edition 2018.</br>
    4. AlmirallJ et al. Epidemiology of community-acquired pneumonia in adults: a population-based study. EurJ Respir2000,15:757-63.
    </div>`,
    `<div class='titre'>Références </div> 
    <div class='reference'> 
    1. Agence nationale de sécurité du médicament et des produits de santé (ANSM). Antibiothérapie par voie générale en 
    pratique courante dans les infections respiratoires hautes de l’adulte et l’enfant. Recommandations de bonne pratique, 
    Novembre 2011. </br>
    2. E. Pilly. Maladies Infectieuses et Tropicales. Edition 2014.</br>
    3. E. Pilly. Maladies Infectieuses et Tropicales. Edition 2018.</br>
    4. AlmirallJ et al. Epidemiology of community-acquired pneumonia in adults: a population-based study. EurJ Respir2000,15:757-63.`,
    `<div class='titre'>Références </div> 
    <div class='reference'>
     1. Agence nationale de sécurité du médicament et des produits de santé (ANSM). Antibiothérapie par voie générale en 
    pratique courante dans les infections respiratoires hautes de l’adulte et l’enfant. Recommandations de bonne pratique, 
    Novembre 2011. </br>
    2. E. Pilly. Maladies Infectieuses et Tropicales. Edition 2014.</br>
    3. E. Pilly. Maladies Infectieuses et Tropicales. Edition 2018.</br>
    4. AlmirallJ et al. Epidemiology of community-acquired pneumonia in adults: a population-based study. EurJ Respir2000,15:757-63.`],
    toutref:``,
    chapitre:3,
  },
  {
    id: 8,
     question:`Devant ce tableau clinique, quel est l’examen complémentaire le plus utile pour le diagnostic de pneumonie ?`,
     options: [`GAZ DU SANG`, `NFS`,`PROCALCITONINE`,'GLYCEMIE',`RADIOGRAPHIE DU THORAX` ],

    info:[`En fait Docteur, les gaz du sang n’est pas un examen de pratique systématique au cours des pneumonies. Cet examen est, particulièrement,indiqué en présence de signes de gravité ou de dyspnée. Choisissez une autre réponse !`,
    `Docteur, La Numération-Formule sanguine (NFS) n’a aucun intérêt pour confirmer le diagnostic. Elle a une simple valeur d’orientation vers une infection bactérienne lorsqu’elle montre une hyperleucocytose avec une prédominance de polynucléaires neutrophiles. Choisissez une autre réponse !`,
    `Docteur, au cours des pneumonies aigues communautaires (PAC), le dosage de la PCT n’a pas d’intérêt lorsque le diagnostic est cliniquement et radiologiquement évident. Choisissez une autre réponse  !`,
    `La glycémie n’est pas un examen utile pour le diagnostic d’une pneumonie. Elle est habituellement réalisée dans le cadre d’un bilan initial, en ambulatoire ou après une hospitalisation, pour dépister un diabète révélé par une infection. Dans ce cas précis, l’antécédent familial de diabète pourrait justifier la pratique d’une glycémie à jeun. Choisissez une autre réponse !`,
    `gggg`
    ],
    answer: [`gaz du sang`, `Procalcitonine`,`Radiographie du thorax`,'glycémie',`nfs` ],
    infoglobal: [``, 
     ``,
     `<div class='titre'>Informations </div>
     <div class='info-popup'> 
      <span class='sous_titre1'> La procalcitonine (PCT) </span> 
      est considérée aujourd'hui comme un des meilleurs marqueurs de 
     l'infection bactérienne systémique. En effet, lors d'un sepsis l'élévation de la PCT est plus précoce 
     que celle de la C-réactive protéine (CRP). Les taux de PCT restent faibles en présence d'infections 
     virales, d'inflammations chroniques et de maladies auto-immunes. La PCT a également un intérêt 
     pronostic car son élévation est corrélée avec la sévérité de l'infection et sa diminution reflète de 
     l'efficacité de l'antibiothérapie. 
     Au cours des pneumonies aigues communautaires (PAC), le dosage de la PCT n’a pas d’intérêt 
     lorsque le diagnostic est cliniquement et radiologiquement évident. Une étude Européenne 
     réalisée auprès de 2820 patients consultant en première ligne de soins pour une toux a montré 
     qu’une CRP > 30 mg/l permet de réconforter le diagnostic clinique d’une PAC (fièvre, toux gêne 
     respiratoire et foyer de crépitants); par contre, la PCT n’a pas de valeur ajoutée pour le 
     diagnostic. La PCT serait plus utile pour le diagnostic des formes sévères et nosocomiales que 
     communautaires. Une méta-analyse récente incluant 6708 patients atteints d’infections 
     respiratoires aigues a montré que le traitement des pneumopathies guidé par la PCT permet de 
     réduire significativement la mortalité à 30 jours (8,6% versus 10%, p=0,037) et les effets 
     indésirables liés aux antibiotiques (16% versus 22%, p<0,001) ainsi que la durée du traitement 
     antibiotique de 2,4 jours. 
     Au Maghreb, le coût encore élevé de la PCT limite fortement sa prescription. 
     </div>
     <div class='reference'>
     <div class='sous_titre2'>Références</div>
     1. Agence nationale de sécurité du médicament et des produits de santé (ANSM). Antibiothérapie par voie générale en pratique 
    courante dans les infections respiratoires hautes de l’adulte et l’enfant. Recommandations de bonne pratique, Novembre 2011.</br>
    2.Luong Ba K., Harbart S., Carballo S. La procalcitonine : doser ou ne pas doser ? Rev Med Suisse 2013 ; 9 : 1881-85.</br>
    3.Moore M. Predictors of pneumonia in lower respiratory tract infections: 3C prospective cough complication cohort study. 
    Eur Respir J 201, 50 : 1700434 ; DOI :10.1183/13993003.00434-2017. </br>
    4.Van Vugt S.F. Use of serum C reactive protein and procalcitonin concentrations in addition to symptoms and signs to predict 
    pneumonia in patients presenting to primary care with acute cough: diagnostic study. BMJ 2013;346:f2450 doi: 10.1136/bmj.f2450 </br>
    5.Schuetz P. Effect of procalcitonin-guided antibiotic treatment on mortality in acute respiratory infections: a patient level meta-analysis. 
    Lancet Infect Dis 2018; 18: 95–107
    </div>`,'',``],
     fiche: [`Bronchite aiguë`, `Pleurésie aiguë`, `Pneumonie grippale primaire`,'Pneumonie bactérienne',`Péricardite`],
     type:'click',
     suite:[`Docteur, il faut noter que le reste de l’examen physique est normal`],
     bg:'infirmier',
     reference:[`
     <div class='titre'>Références </div> 
    <div class='reference'>
     1. Agence nationale de sécurité du médicament et des produits de santé (ANSM). Antibiothérapie par voie générale en pratique 
     courante dans les infections respiratoires hautes de l’adulte et l’enfant. Recommandations de bonne pratique, Novembre 2011.</br>
     2. Luong Ba K., Harbart S., Carballo S. La procalcitonine : doser ou ne pas doser ? Rev Med Suisse 2013 ; 9 : 1881-85.
     </div>`,
     `
     <div class='titre'>Références </div> 
    <div class='reference'>
     1. Agence nationale de sécurité du médicament et des produits de santé (ANSM). Antibiothérapie par voie générale en pratique 
     courante dans les infections respiratoires hautes de l’adulte et l’enfant. Recommandations de bonne pratique, Novembre 2011.</br>
     2. Luong Ba K., Harbart S., Carballo S. La procalcitonine : doser ou ne pas doser ? Rev Med Suisse 2013 ; 9 : 1881-85.
     </div>`,
     `
     <div class='titre'>Références </div> 
    <div class='reference'>
     1. Agence nationale de sécurité du médicament et des produits de santé (ANSM). Antibiothérapie par voie générale en pratique 
     courante dans les infections respiratoires hautes de l’adulte et l’enfant. Recommandations de bonne pratique, Novembre 2011.</br>
     2.Luong Ba K., Harbart S., Carballo S. La procalcitonine : doser ou ne pas doser ? Rev Med Suisse 2013 ; 9 : 1881-85.`,
     `<div class='titre'>Références </div> 
     <div class='reference'>
     1. Agence nationale de sécurité du médicament et des produits de santé (ANSM). Antibiothérapie par voie générale en pratique 
     courante dans les infections respiratoires hautes de l’adulte et l’enfant. Recommandations de bonne pratique, Novembre 2011.</br>
     2.Luong Ba K., Harbart S., Carballo S. La procalcitonine : doser ou ne pas doser ? Rev Med Suisse 2013 ; 9 : 1881-85.
     </div>`,
     `<div class='titre'>Références </div> 
     <div class='reference'>
     1. Agence nationale de sécurité du médicament et des produits de santé (ANSM). Antibiothérapie par voie générale en pratique 
     courante dans les infections respiratoires hautes de l’adulte et l’enfant. Recommandations de bonne pratique, Novembre 2011.</br>
     2. Luong Ba K., Harbart S., Carballo S. La procalcitonine : doser ou ne pas doser ? Rev Med Suisse 2013 ; 9 : 1881-85.
     </div>`],
     toutref:"",
     chapitre:4,
  },
  {
    id: 9,
    question: `En effet Docteur, la radiographie du thorax est l’examen le plus utile pour le diagnostic. Elle permet de confirmer l’atteinte parenchymateuse et de préciser la présence de lésions sous-jacentes ou de complications associées emphysème, abcès, pleurésie, etc`,
    options: [],
    info:[``,``,`En effet Docteur, la radiographie du thorax est l’examen le plus utile pour le diagnostic. Elle permet de confirmer l’atteinte parenchymateuse et de préciser la présence de lésions sous-jacentes ou de complications associées emphysème, abcès, pleurésie, etc`],
    answer: [`Radiographie du thorax`],
    infoglobal: [],
    type:'',
    suite:[],
    bg:'docteur',
    reference:[`<div class='titre'>Références </div> 
    <div class='reference'>
    1. Agence nationale de sécurité du médicament et des produits de santé (ANSM). Antibiothérapie par voie générale en pratique 
    courante dans les infections respiratoires hautes de l’adulte et l’enfant. Recommandations de bonne pratique, Novembre 2011.</br>
    2. Luong Ba K., Harbart S., Carballo S. La procalcitonine : doser ou ne pas doser ? Rev Med Suisse 2013 ; 9 : 1881-85.
    </div>`],
    toutref:`<div class='titre'>Références </div> 
    <div class='reference'>
    1. Agence nationale de sécurité du médicament et des produits de santé (ANSM). Antibiothérapie par voie générale en pratique 
    courante dans les infections respiratoires hautes de l’adulte et l’enfant. Recommandations de bonne pratique, Novembre 2011.</br>
    2. Luong Ba K., Harbart S., Carballo S. La procalcitonine : doser ou ne pas doser ? Rev Med Suisse 2013 ; 9 : 1881-85.
    </div>`,
    chapitre:4,
  },
  {
    id: 10,
    question:[`Docteur, la radiographie du thorax de Am Ali montre une opacité de la base pulmonaire gauche.`],
    options: [],
    info:[],
    answer: [],
    infoglobal: [],
    type:'',
    suite:[],
    bg:'docteur',
    reference:[],
    toutref:"",
    chapitre:4,
  },
  {
  id: 11,
  question:[`En plus de la radiographie du thorax, le médecin traitant a proposé au patient de faire un bilan biologique de routine.`],
  options: [],
  info:[],
  answer: [],
  infoglobal: [],
  type:'',
  suite:[],
  bg:'chaise',
  reference:[],
  toutref:"",
  chapitre:4,
  },
  {
    id: 12,
    question: `Docteur, en appuyant sur les différents examens, vous pouvez découvrir les résultats correspondants.`,
    options: [`NFS`, `GLYÉMIE À JEUN `, `URÉE SANGUINE`, `CRÉATINEMIE`],
    info:['La NFS est normale en dehors d’une hyperleucocytose modérée à 12000/mm3.',
    `La glycémie à jeun de Am Ali est de 5,8mmol/l.`,
    `L’urée sanguine est à 5,4 mmol/l.`,
    `La créatininémie est de 98 μmol/L.`
    ],
    answer:[`nfs`, `glycémie à jeun`, `créatinémie`, `urée sanguine`],
    infoglobal: [],
    type:'click',
    suite:[],
    bg:'infirmiere',
    reference:[],
    toutref:"",
    chapitre:4,
    },
  {
  id: 13,
  question: `Quelle prise en charge recommandez vous pour Am Ali?`,
  options: [`En ambulatoire`, `En milieu hospitalier`],
  info:[],
  answer: [`En ambulatoire`,`En milieu hospitalier`],
  infoglobal: [],
  type:'qcm',
  suite:[],
  bg:'medecin',
  reference:[],
  toutref:`<div class='titre'>Informations </div> 
  <div class='info-popup'> 
  <span class='sous_titre1'> La pneumonie bactérienne </span>est une infection potentiellement grave pouvant engager le 
  pronostic vital. La décision de prise en charge en ambulatoire ou en milieu hospitalier prend en 
  compte la présence de : </br>
  <span class='sous_titre1'>
  Signes de gravité </span> Altération de la conscience, atteinte des fonctions vitales (Pression artérielle 
  systolique < 90 mm Hg, pouls > 120/mn, fréquence respiratoire > 30/mn, température > 40°C 
  ou hypothermie).</br>
  <span class='sous_titre1'>
  Situations particulières </span> Néoplasie associée, pneumonie d’inhalation,survenue de 
  complications (suspicion d’épanchement pleural ou d’abcèdation), conditions socio-économiques 
  défavorables, inobservance thérapeutique prévisible. </br>
  <span class='sous_titre1'> Facteurs de risque de mortalité </span> Age > 65 ans, co-morbidités (insuffisance cardiaque 
  congestive, BPCO, insuffisance rénale chronique, cirrhose hépatique ou autre hépatopathie 
  chronique, diabète, antécédent d’accident vasculaire cérébral ou AVC, drépanocytose 
  homozygote),immunodépression (hémopathie, néoplasie, immunosuppresseur, infection 
  à VIH, splénectomie, etc.), antécédent de pneumonie ou d’hospitalisation dans l’année.   </div>
  <div class='sous_titre'> Algorithme décisionnel de prise en charge ambulatoire ou d’hospitalisation </div>
  <div class='schema1'></div>
  <div class='reference_afterschema'>
  <div class='sous_titre2'>Références</div>
  1. Agence nationale de sécurité du médicament et des produits de santé (ANSM). Antibiothérapie par voie générale en pratique 
  courante dans les infections respiratoires hautes de l’adulte et l’enfant. Recommandations de bonne pratique, Novembre 2011.</br>
  2.Lim WS, Van Der Eerden MM, Laing R et al. Defining community acquired pneumonia severity on presentation to hospital: 
  an international derivation and validation study. Thorax 2003; 58(5): 377–82.
  </div>`,
  chapitre:5,
  },
  {
  id: 14,
  question: `Docteur, avant de faire votre choix, certains scores peuvent aider à la prise de décision, tel que le score CURB 65 ou CRB 65 (en l’absence de résultat d’urée).`,

  options: [],
  info:[],
  answer: [],
  infoglobal: [],
    
  type:'',
  suite:[],
  bg:'medecin',
  reference:[],
  toutref:`
  <div class='titre'>Informations </div>
  <div class='info-popup'> 
  <span class='sous_titre1'> C </span>  Confusion </br>
  <span class='sous_titre1'> U </span>  Urée sanguine > 7 mmol/l </br>
  <span class='sous_titre1'> R </span>  Fréquence respiratoire >= 30/mn </br>
  <span class='sous_titre1'> B </span>  Pression artérielle systolique < 90 mmHg Ou pression artérielle diastolique <= 60 mmHg </br>
  <span class='sous_titre1'> 65 </span> Age>= ans 
  </div>`,
  chapitre:5,
  },
  {
    id: 15,
    question: `Je vous invite à calculer le score CURB65 ici.`,
    options: [`Confusion`, `Fréquence respiratoire >= 30 / mn`, `Pression artérielle systolique < 90 mmHg Ou Pression artérielle diastolique <= 60 mmHg`,'Age >= 65 ans'],
    info:[`Docteur, Am Ali ne montre pas de confusion.`,`Docteur, Am Ali a une fréquence respiratoire de
    28cycles/mn`,`Docteur, Am Ali a une pression artérielle de
    135/75 mm Hg`,`Docteur, Am Ali est âgé de 66 ans`],
    answer: [],
    infoglobal: [],
    type:'score',
    suite:[`Bien joué ! Le score CURB 65 de Am Ali est égal à 1. Une prise en charge ambulatoire est possible.`],
    bg:'medecin',
    reference:[]
    ,toutref:`
    <div class='titre'>Informations </div> 
    <div class='info-popup'> 
    Lorsque les critères CURB 65 sont utilisés, un score de 0 à 1 autorise un traitement ambulatoire, 
    un score de 1 à 2 recommande une courte hospitalisation ou un traitement ambulatoire contrôlé, 
    alors que pour un score supérieur ou égal à 3 la prise en charge sera de préférence, en milieu 
    hospitalier. Ce score est un outil simple et facilement utilisable en pratique de ville. 
    Toutefois, il présente l’inconvénient de ne pas tenir compte de la présence de comorbidités et de 
    situations particulières. La mortalité des PAC nécessitant une hospitalisation est stable depuis 
    plusieurs décennies entre 12% et 14%. Elle augmente avec l’âge, le séjour en maison de retraite 
    et l’alitement pour invalidité fonctionnelle. Pour la même tranche d’âge, elle est plus élevée chez 
    l’homme que chez la femme. Le score CURB65 permet de classer les patients en 3 niveaux de 
    risque de mortalité : </br>
    
    <span class='sous_titre1'> Score 1 </span> faible risque de mortalité (2,9%).</br>
    <span class='sous_titre1'> Score 2 </span> risque moyen de mortalité (9,2%). </br>
    <span class='sous_titre1'> Score 3 </span> risque élevé de mortalité (23,2%). </br>
    </div>
    <div class='sous_titre'> 
    Décision de prise en charge ambulatoire ou en milieu hospitalier en fonction du score CURB 65
    </div>
    <div class='schema2'></div>
    <div class='reference_afterschema'>
    <div class='sous_titre2'>Références</div>
    1- Agence nationale de sécurité du médicament et des produits de santé (ANSM). Antibiothérapie par voie générale en pratique
    courante dans les infections respiratoires hautes de l’adulte et l’enfant. Recommandations de bonne pratique, Novembre 2011. </br>
    2- Lim WS, Van Der Eerden MM, Laing R et al. Defining community acquired pneumonia severity on presentation to hospital: 
    an international derivation and validation study. Thorax 2003; 58(5): 377–82.  </br>
    3- Ewig S. Prediction of in-hospital death from community-acquired pneumonia by varying CRB-age groups. Eur Respir J 2013; 
    41: 917–922 DOI: 10.1183/09031936.00065212
    </div> `,
    chapitre:5,
    },
    {
    id: 16,
    question: `Bien joué ! Le score CURB 65 de Am Ali est égal à 1.
    Une prise en charge ambulatoire est possible.`,
    options: [],
    info:[],
    answer: [],
    infoglobal: [],
    type:'',
    suite:[],
    bg:'medecin',
    reference:[],
    toutref:`
    <div class='titre'>Informations </div> 
    <div class='info-popup'> 
    Lorsque les critères CURB 65 sont utilisés, un score de 0 à 1 autorise un traitement ambulatoire, 
    un score de 1 à 2 recommande une courte hospitalisation ou un traitement ambulatoire contrôlé, 
    alors que pour un score supérieur ou égal à 3 la prise en charge sera de préférence, en milieu 
    hospitalier. Ce score est un outil simple et facilement utilisable en pratique de ville. 
    Toutefois, il présente l’inconvénient de ne pas tenir compte de la présence de comorbidités et de 
    situations particulières. La mortalité des PAC nécessitant une hospitalisation est stable depuis 
    plusieurs décennies entre 12% et 14%. Elle augmente avec l’âge, le séjour en maison de retraite 
    et l’alitement pour invalidité fonctionnelle. Pour la même tranche d’âge, elle est plus élevée chez 
    l’homme que chez la femme. Le score CURB65 permet de classer les patients en 3 niveaux de 
    risque de mortalité : </br>
    
    <span class='sous_titre1'> Score 1 </span> faible risque de mortalité (2,9%).</br>
    <span class='sous_titre1'> Score 2 </span> risque moyen de mortalité (9,2%). </br>
    <span class='sous_titre1'> Score 3 </span> risque élevé de mortalité (23,2%). </br>
    </div>
    <div class='sous_titre'> 
    Décision de prise en charge ambulatoire ou en milieu hospitalier en fonction du score CURB 65
    </div>
    <div class='schema2'></div>
    <div class='reference_afterschema'>
    <div class='sous_titre2'>Références</div>
    1- Agence nationale de sécurité du médicament et des produits de santé (ANSM). Antibiothérapie par voie générale en pratique
    courante dans les infections respiratoires hautes de l’adulte et l’enfant. Recommandations de bonne pratique, Novembre 2011. </br>
    2- Lim WS, Van Der Eerden MM, Laing R et al. Defining community acquired pneumonia severity on presentation to hospital: 
    an international derivation and validation study. Thorax 2003; 58(5): 377–82.  </br>
    3- Ewig S. Prediction of in-hospital death from community-acquired pneumonia by varying CRB-age groups. Eur Respir J 2013; 
    41: 917–922 DOI: 10.1183/09031936.00065212
    </div> `,
    chapitre:5,
    },
    {
    id: 17,
    question: `Quelle(s) serai(en)t la (les) principale(s) bactérie(s) présumée(s) responsable(s) chez Am Ali ?`,
    options: [`<i>Staphylococus aureus </i>`, `<i>Streptococcus pneumoniae</i>`, `<i>Klebsiella pneumoniae</i>`, `<i>Chlamydia pneumoniae</i>`,`<i>Haemophilus influenzae<i>`],
    info:['En fait Docteur, dans le cas de Am Ali, le <i>staphylococus aureus</i> n’est pas une des bactéries présumées responsables. Choisissez une autre réponse !',
    'Bravo Docteur! En effet le <i> Streptococcus pneumoniae </i> est une des bactéries présumées responsables.',
    'En fait Docteur, dans le cas de Am Ali <i>Klebsiella pneumoniae </i> n’est pas une des bactéries présumées responsables. Choisissez une autre réponse !',
    'En fait Docteur, dans le cas de Am Ali <i>Chlamydia  pneumoniae </i> n’est pas une des bactéries présumées responsables. Choisissez une autre réponse !',
    'En effet Docteur, dans le cas de Am Ali <i>Haemophilus influenzae </i> est une des bactéries présumées responsables.'],
    answer: [`<i>Streptococcus pneumoniae</i>`,`<i>Haemophilus influenzae<i>`],
    infoglobal: [`
    <div class='titre'>Informations </div> 
    <div class='info-popup'> 
    Chez l’adulte, <i> Staphylococcus aureus </i> (<i>S. aureus</i>) est rarement en cause. Il serait responsable de 
    moins de 2% des PAC y compris celles survenant au décours d’un syndrome grippal [1]. 
    La symptomatologie clinique n’a aucune particularité, mais l’évolution peut se faire rapidement 
    vers l’abcédation et la pleurésie purulente. </br>
    Chez l’adulte jeune (15-44 ans), des souches de <i> S. aureus </i> sécrétrices de Leucocidine de 
    Panton-Valentine (LPV) et résistantes à la méticilline (SARM) seraient responsables de 85% des 
    pneumonies nécrosantes sévères survenant fréquemment au décours d’un syndrome 
    pseudo-grippal [2,3]. </br>
    Le tableau clinique est caractérisé par l’association d’une fièvre élevée, d’une hémoptysie, 
    d’infiltrats alvéolaires multi-lobaires et d’une leucopénie [2,3]. La mortalité serait de l’ordre de 
    28% après 30 jours d’évolution [3].
    </div>
    <div class='reference'> 
    <div class='sous_titre2'>Références </div> 
    1.Agence nationale de sécurité du médicament et des produits de santé (ANSM). Antibiothérapie par voie générale en pratique 
    courante dans les infections respiratoires hautes de l’adulte et l’enfant. Recommandations de bonne pratique. Novembre 2011. </br>
    2.S. Mortaza, J.-R. Zahar, A. Kouatchet. Pneumonie à <i> Staphylococcus aureus </i> : quand faut-il et comment la traiter ? 
    Réanimation 2010, 19 : 304-9. </br>
    3.M. Tadros, V. Williams, B.L. Coleman et al. Epidemiology and Outcome of Pneumonia Caused by Methicillin-Resistant 
    <i> Staphylococcus aureus </i> (MRSA) in Canadian Hospitals.PLOS ONE 2013 ; 9(8): e75171. 
     </div>`,
    ` <div class='titre'>Informations </div> 
    <div class='info-popup'>
    <i>Streptococcus pneumoniae </i> ou pneumocoque est responsable de 30-50% des PAC documentées 
    [1]. Cette bactérie fait partie de l’écosystème du rhinopharynx à tous les âges de la vie. Le taux 
    de portage est estimé entre 2 et 9% chez l’adulte. Il existe un équilibre hôte-bactérie qui peut 
    être rompu lors d’une diminution des défenses de l’hôte. L’infection virale (VRS et grippe) favorise 
    l’acquisition de souche de pneumocoque suite à une diminution de la clairance muco-ciliaire.
    Le pneumocoque peut être responsable d’infections non invasives (pneumonie, otite, sinusite 
    aiguë) ou invasives (méningite, bactériémie, sepsis) isolées ou associées à une pneumonie. Les 
    infections invasives pneumococciques, sont graves et touchent essentiellement le jeune enfant et 
    l’adulte de plus de 50 ans. </br>
    Les principaux sérogroupes de portage : 6, 14, 19 et 23. Ces souches de portage subissent une 
    forte pression de sélection et sont les plus résistantes aux antibiotiques.
    </div>
    <div class='reference'> 
    <div class='sous_titre2'>Références </div>
    1- Agence nationale de sécurité du médicament et des produits de santé (ANSM). Antibiothérapie par voie générale en pratique 
    courante dans les infections respiratoires hautes de l’adulte et l’enfant. Recommandations de bonne pratique. Novembre 2011. </br>
    2- S. Mortaza, J.-R. Zahar, A. Kouatchet. Pneumonie à <i> Staphylococcus aureus </i> : quand faut-il et comment la traiter ? 
    Réanimation 2010, 19 : 304-9. </br>
    3- M. Tadros, V. Williams, B.L. Coleman et al. Epidemiology and Outcome of Pneumonia Caused by Methicillin-Resistant 
    <i> Staphylococcus aureus </i> (MRSA) in Canadian Hospitals.PLOS ONE 2013 ; 9(8): e75171.
    </div> `, 
   `<div class='titre'>Informations </div> 
   <div class='info-popup'>
   <i>Klebsiella pneumoniae </i> serait responsable de 2 à 3% des pneumonies survenant chez les 
    personnes âgées avec de multiples comorbidités. 
    Le tableau clinique comporte typiquement une pneumonie disséquante avec une altération de 
    l’état général et une expectoration rouillée voire hémorragique. La radiographie pulmonaire 
    montre une opacité bombante avec une convexité de la scissure inférieure. L’abcédation est 
    fréquente et précoce.
    </div>
    <div class='reference'>
    <div class='sous_titre2'>Références </div> 
    1.Agence nationale de sécurité du médicament et des produits de santé (ANSM). Antibiothérapie par voie générale en pratique 
    courante dans les infections respiratoires hautes de l’adulte et l’enfant. Recommandations de bonne pratique. Novembre 2011. </br>
    2.S. Mortaza, J.-R. Zahar, A. Kouatchet. Pneumonie à <i> Staphylococcus aureus </i> : quand faut-il et comment la traiter ? 
    Réanimation 2010, 19 : 304-9. </br>
    3.M. Tadros, V. Williams, B.L. Coleman et al. Epidemiology and Outcome of Pneumonia Caused by Methicillin-Resistant 
   <i> Staphylococcus aureus </i> (MRSA) in Canadian Hospitals.PLOS ONE 2013 ; 9(8): e75171.
    </div>`,
    `<div class='titre'>Informations </div> 
    <div class='info-popup'>
     <i>Chlamydia pneumoniae </i> est responsable d’une pneumonie dite « atypique », parfois précédée 
    d’une infection des voies aériennes supérieures et d’évolution subaiguë. Le tableau clinique 
    comporte une fièvre modérée associée à une toux sèche et persistante. L’auscultation pulmonaire 
    est normale. La radiographie montre souvent des images alvéolo-interstitielles bilatérales.
    </div>
    <div class='reference'>
    <div class='sous_titre2'>Références </div> 
    1.Agence nationale de sécurité du médicament et des produits de santé (ANSM). Antibiothérapie par voie générale en pratique 
    courante dans les infections respiratoires hautes de l’adulte et l’enfant. Recommandations de bonne pratique. Novembre 2011. </br>
    2.S. Mortaza, J.-R. Zahar, A. Kouatchet. Pneumonie à <i> Staphylococcus aureus </i>: quand faut-il et comment la traiter ? 
    Réanimation 2010, 19 : 304-9. </br>
    3.M. Tadros, V. Williams, B.L. Coleman et al. Epidemiology and Outcome of Pneumonia Caused by Methicillin-Resistant 
    <i> Staphylococcus aureus </i> (MRSA) in Canadian Hospitals.PLOS ONE 2013 ; 9(8): e75171.
    </div>`,
    `<div class='titre'>Informations </div> 
    <div class='info-popup'>
    <i> Haemophilus influenzae </i> est rarement en cause chez le grand enfant et l’adulte jeune. Par contre, 
    cette bactérie joue un rôle important dans les pneumonies de l’adulte au décours d’une grippe. 
    Elle est assez fréquemment en cause dans les bronchopneumonies ou des pneumonies chez les 
    personnes âgées de plus de 60 ans, tabagiques, éthyliques, insuffisants rénaux ou vivant avec le 
    VIH. Sur ce terrain, d’autres bactéries peuvent être en cause (10-20% des cas) telles que 
    <i>Staphylococcus aureus </i> et les entérobactéries (<i>Klebsiella pneumoniae </i>, <i> Escherichia coli </i> et <i> Proteus 
    spp </i>.). Les anaérobies sont à prendre en compte chaque fois qu’on suspecte une pneumonie de 
    déglutition (inhalation), particulièrement chez les personnes âgées avec un mauvais état 
    dentaire.
    </div>
    <div class='reference'>
    <div class='sous_titre2'>Références </div> 
    1.Agence nationale de sécurité du médicament et des produits de santé (ANSM). Antibiothérapie par voie générale en pratique 
    courante dans les infections respiratoires hautes de l’adulte et l’enfant. Recommandations de bonne pratique. Novembre 2011. </br>
    2.S. Mortaza, J.-R. Zahar, A. Kouatchet. Pneumonie à <i>Staphylococcus aureus </i> : quand faut-il et comment la traiter ? 
    Réanimation 2010, 19 : 304-9. </br>
    3.M. Tadros, V. Williams, B.L. Coleman et al. Epidemiology and Outcome of Pneumonia Caused by Methicillin-Resistant <i>Staphylococcus aureus </i>
    (MRSA) in Canadian Hospitals.PLOS ONE 2013 ; 9(8): e75171.
    </div>` ],
 
    type:'qcm',
    suite:['Bravo docteur, compte tenu du contexte de survenue de cette pneumonie (au décours d’un syndrome grippal), de l’âge du patient (> 65 ans) et  de l’absence de co-morbidités, les deux bactéries à prendre en compte sont <i>S. pneumoniae</i> et <i>H. influenzae</i>'],
    bg:'medecin',
    reference:[],
    toutref:`
    <div class='titre'>Informations </div> 
    <div class='info-popup'>
    Chez l’adulte, <i>Staphylococcus aureus </i>(<i>S. aureus</i>) est rarement en cause. Il serait responsable de 
    moins de 2% des PAC y compris celles survenant au décours d’un syndrome grippal [1]. La 
    symptomatologie clinique n’a aucune particularité, mais l’évolution peut se faire rapidement vers 
    l’abcédation et la pleurésie purulente. </br> </br>
    Chez l’adulte jeune (15-44 ans), des souches de <i>S. aureus</i> sécrétrices de Leucocidine de 
    Panton-Valentine (LPV) et résistantes à la méticilline (SARM) seraient responsables de 85% des 
    pneumonies nécrosantes sévères survenant fréquemment au décours d’un syndrome 
    pseudo-grippal [2,3]. </br>
    Le tableau clinique est caractérisé par l’association d’une fièvre élevée, d’une hémoptysie, 
    d’infiltrats alvéolaires multi-lobaires et d’une leucopénie [2,3]. La mortalité serait de l’ordre de 
    28% après 30 jours d’évolution [3]. </br> </br>
   <i> Streptococcus pneumoniae </i> ou pneumocoque est responsable de 30-50% des PAC documentées 
    [1]. Cette bactérie fait partie de l’écosystème du rhinopharynx à tous les âges de la vie. Le taux 
    de portage est estimé entre 2 et 9% chez l’adulte. Il existe un équilibre hôte-bactérie qui peut 
    être rompu lors d’une diminution des défenses de l’hôte. L’infection virale (VRS et grippe) favorise 
    l’acquisition de souche de pneumocoque suite à une diminution de la clairance muco-ciliaire.
    Le pneumocoque peut être responsable d’infections non invasives (pneumonie, otite, sinusite 
    aiguë) ou invasives (méningite, bactériémie, sepsis) isolées ou associées à une pneumonie. Les 
    infections invasives pneumococciques, sont graves et touchent essentiellement le jeune enfant et 
    l’adulte de plus de 50 ans. </br>
    Les principaux sérogroupes de portage : 6, 14, 19 et 23. Ces souches de portage subissent une 
    forte pression de sélection et sont les plus résistantes aux antibiotiques. </br> </br>
    <i>Klebsiella pneumoniae </i> serait responsable de 2 à 3% des pneumonies survenant chez les 
    personnes âgées avec de multiples comorbidités. Le tableau clinique comporte typiquement une 
    pneumonie disséquante avec une altération de l’état général et une expectoration rouillée voire 
    hémorragique. La radiographie pulmonaire montre une opacité bombante avec une convexité de 
    la scissure inférieure. L’abcédation est fréquente et précoce.</br> </br>
    <i>Chlamydia pneumoniae </i> est responsable d’une pneumonie dite « atypique », parfois précédée 
    d’une infection des voies aériennes supérieures et d’évolution subaiguë. Le tableau clinique 
    comporte une fièvre modérée associée à une toux sèche et persistante. L’auscultation pulmonaire 
    est normale. </br>
    La radiographie montre souvent des images alvéolo-interstitielles bilatérales.</br> </br>
    <i> Haemophilus influenzae </i> est rarement en cause chez le grand enfant et l’adulte jeune. Par contre, 
    cette bactérie joue un rôle important dans les pneumonies de l’adulte au décours d’une grippe. 
    Elle est assez fréquemment en cause dans les bronchopneumonies ou des pneumonies chez les 
    personnes âgées de plus de 60 ans, tabagiques, éthyliques, insuffisants rénaux ou vivant avec le 
    VIH. Sur ce terrain, d’autres bactéries peuvent être en cause (10-20% des cas) telles que 
    Staphylococcus aureuset les entérobactéries (<i>Klebsiella pneumoniae </i>, <i> Escherichia coli </i> et <i> Proteus 
    spp </i>.). 
    Les anaérobies sont à prendre en compte chaque fois qu’on suspecte une pneumonie de 
    déglutition (inhalation), particulièrement chez les personnes âgées avec un mauvais état 
    dentaire.
    </div>
    <div class='reference'>
    <div class='sous_titre2'>Références </div> 
    1.Agence nationale de sécurité du médicament et des produits de santé (ANSM). Antibiothérapie par voie générale en pratique 
    courante dans les infections respiratoires hautes de l’adulte et l’enfant. Recommandations de bonne pratique. Novembre 2011. </br>
    2.S. Mortaza, J.-R. Zahar, A. Kouatchet. Pneumonie à <i>Staphylococcus aureus </i> : quand faut-il et comment la traiter ? 
    Réanimation 2010, 19 : 304-9. </br>
    3.M. Tadros, V. Williams, B.L. Coleman et al. Epidemiology and Outcome of Pneumonia Caused by Methicillin-Resistant 
    <i>Staphylococcus aureus </i> (MRSA) in Canadian Hospitals.PLOS ONE 2013 ; 9(8): e75171.
    </div>`,
    chapitre:6,
  },
    {
    id: 18,
    question: `Docteur, quel(s) est (sont) le(s) mécanisme(s) de résistance des <i>Streptococcus pneumoniae</i> aux bétalactamines ?`,
    options: [`Sécrétion de bêta-lactamase`, `Modification de la perméabilité de la paroi`, `Modification de l’ADN gyrase`, `Modification des protéines de liaison aux pénicillines`,`Modification de la sous unité 50S du ribososme`],
    info:['En fait Docteur, la sécrétion de bêta-lactamase est un mécanisme de résistance plutôt propre aux <i>H.influenzae</i> et <i>K. pneumoniae </i>. Choisissez une autre réponse !',
    'Ce mécanisme de résistance est plutôt propre aux Gram négatif par exemple par altération des porines de la paroi bactérienne. Choisissez une autre réponse !',
    'Docteur, La modification de l’ADN gyrase est un des mécanismes responsables de la résistance aux fluoroquinolones. Choisissez une autre réponse !',
    'Suivant En effet docteur, en définitive, la résistance de </br><i>S. pneumoniae</i> aux ß-lactamines est due à une modification des protéines de liaison aux pénicillines.','Docteur, la modification de la sous-unité 50S du ribosome explique la résistance aux macrolides. Choisissez une autre réponse !'],
    answer: [`Modification des protéines de liaison aux pénicillines`],
    infoglobal: [`<div class='titre'>Informations </div> 
    <div class='info-popup'>
    Certaines bactéries responsables d’infections pulmonaires telles que <i> H. influenzae </i> et <i>K. 
    pneumoniae </i> peuvent résister aux antibiotiques par sécrétion de bêta-lactamase [1]. En Tunisie, 
    les données de l’antibiorésistance de 2014 montrent un taux d’isolement d’<i>H. influenzae </i>
    producteur de bêta-lactamase de l’ordre de 30% [2]. En Algérie, ce taux est de l’ordre de 25% en 
    2015 [3]. Ces données expliquent l’intérêt de l’association amoxicilline-acide clavulanique en cas 
    de suspicion d’infection à <i>H. influenzae </i>
    </div>
    <div class='reference'>
    <div class='sous_titre2'>Références </div>
    1.E. Pilly. Maladies Infectieuses et Tropicales. Edition 2014 </br>
    2. L’Antibiorésistance en Tunisie - LART. Données de 2014 </br>
    3. Réseau Algérien de surveillance de la résistance des bactéries aux antibotiques.
    </div> `,
   `<div class='titre'>Informations </div> 
     <div class='info-popup'>
    La modification de la perméabilité de la paroi peut réduire ou bloquer l’entrée de l’antibiotique 
    dans la bactérie. Par exemple, une altération des porines de la paroi bactérienne peut expliquer 
    la résistance des bactéries à Gram négatif à certains antibiotiques tels que l’imipéneme [1].
    </div>
    <div class='reference'>
    <div class='sous_titre2'>Références </div> 1.E. Pilly. Maladies Infectieuses et Tropicales. Edition 2014
    </div>`, 
    `<div class='titre'>Informations </div> 
    <div class='info-popup'>
    La modification de l’ADN gyrase est un des mécanismes responsables de la résistance aux 
    fluoroquinolones [1]. </div>
    <div class='reference'>
    <div class='sous_titre2'>Références</div>
    1.E. Pilly. Maladies Infectieuses et Tropicales. Edition 2014
    </div>`,``,
    `<div class='titre'>Informations </div> 
    <div class='info-popup'>
    La modification de la sous-unité 50S du ribosome explique la résistance aux macrolides [1]. </div>
    <div class='reference'>
    <div class='sous_titre2'>Références</div>
    1. E. Pilly. Maladies Infectieuses et Tropicales. Edition 2014 
    </div>`],
    type:'qcm',
    suite:[],
    bg:'medecin',
    reference:[],
    toutref:`
    <div class='titre'>Informations </div> 
    <div class='info-popup'>
    La résistance de <i> Streptococcus pneumoniae </i> aux bêta-lactamines est due à une modification des 
    protéines cibles : les protéines de liaison aux pénicillines (PLP). Cette modification est due à une 
    recombinaison entre gènes homologues d’espèces commensales des voies aériennes supérieures 
    (Streptocoques). Il en résulte une production de PLP mosaïques dotées d’une affinité plus faible 
    aux ß lactamines. La résistance concerne essentiellement 4 sérotypes (6, 14, 19, 23) 
    de portage oropharyngé qui subissent la plus forte pression de sélection antibiotique. 
    Ainsi, la résistance de <i>Streptococcus pneumoniae </i> aux ßlactamines ne fait pas intervenir de 
    sécrétion de ß lactamases. De ce fait, les inhibiteurs de ß lactamases ne sont d’aucun intérêt sur 
    une souche de pneumocoque de sensibilité diminuée à la pénicilline (PSDP) ou de pneumocoque 
    résistant à la pénicilline (PRP) [1]. La situation de la résistance aux antibiotiques de 
    <i> Streptococcus pneumoniae </i> est préoccupante dans les 3 pays du Maghreb aussi bien chez l’adulte 
    que l’enfant (tableau 1) [2-4]. </br> </br>
    En Tunisie, la fréquence des souches de PSDP est de l’ordre de 59,1% en 2014. La fréquence de 
    ces souches a connu une nette augmentation passant de 52,7% à 56,4% entre 2006 et 2009 à 
    plus de 60% (60,2% à 61,4%) entre 2010 et 2013 [2]. Selon les données de 2014, la résistance 
    à l’amoxicilline et au céfotaxime se situe respectivement à 10,4% et 4,7% [2]. Concernant les 
    autres antibiotiques, la résistance reste élevée pour les cyclines (45,8%), la lincomycine (47,9%) 
    et l’érythromycine (66,9%). La résistance à la lévofloxacine reste rare (0,6%). Aucune souche 
    résistante à la pristinamycine, à la vancomycine et au linézolide n’a été isolée [2].  </br> </br>
    La modification de la sous-unité 50S du ribosome explique la résistance aux macrolides [1]. </br> </br>
    La modification de l’ADN gyrase est un des mécanismes responsables de la résistance aux 
    fluoroquinolones [1].  </br> </br>
    La modification de la perméabilité de la paroi peut réduire ou bloquer l’entrée de l’antibiotique 
    dans la bactérie. Par exemple, une altération des porines de la paroi bactérienne peut expliquer 
    la résistance des bactéries à Gram négatif à certains antibiotiques tels que l’imipénème [1].
    Certaines bactéries responsables d’infections pulmonaires telles que <i>H. influenzae</i> et <i>K. 
    pneumoniae </i> peuvent résister aux antibiotiques par sécrétion de bêta-lactamase. En Tunisie, les 
    données de l’antibiorésistance de 2014 montrent un taux d’isolement d’<i>H. influenzae</i> producteur 
    de bêta-lactamase de l’ordre de 30%[1]. Ces données expliquent l’intérêt de l’association 
    amoxicilline-acide clavulanique en cas de suspicion d’infection à <i>H. influenzae</i> [2].
    </div>
    <div class='sous_titre'> <span class='sous_titre1'> Tableau 1 </span> Comparaison des données de l’antibio-résistance deStreptococcus pneumoniae
    en Algérie, au Maroc et en Tunisie [2-5].  </div>
    <div class='schema3'></div>
    <div class='reference_afterschema3'>
    <div class='reference'>
    <div class='sous_titre2'>Références</div>
    1. E. Pilly. Maladies Infectieuses et Tropicales. Edition 2014 </br>
    2. L’Antibiorésistance en Tunisie - LART. Données de 2014 </br>
    3.Réseau Algérien de surveillance de la résistance des bactéries aux antibotiques. </br>
    4.Elmdaghri N, Benbachir M, Belabbes H, Zaki B, Benzaid H. Changing epidemiology of pediatric <i> Streptococcus pneumoniae </i>
    isolates before vaccine introduction in Casablanca (Morocco). Vaccine 2012; 30 S : G46–G50
    </div>`,
    chapitre:7,

    },
    {
     id: 19,
     question: `Ce patient présente-t-il des facteurs de risque de résistance du pneumocoque à la pénicilline ?`,
     options: [`OUI`, `NON`],
     info:['Am Ali ne présente aucun facteur de risque de résistance du pneumocoque à la pénicilline.',
     'En effet Docteur, Am Ali ne présente aucun facteur de risque de résistance du pneumocoque à la pénicilline.'],
     answer: [`NON`],
     infoglobal: [`<div class='titre'>Informations </div> 
     <div class='info-popup'> 
     Les principaux facteurs de risque de résistance de <i> S. pneumoniae </i> à la pénicilline sont :
      L’antibiothérapie antérieure par une ß-lactamine, l’âge > 65 ans, l’hospitalisation récente et 
      une situation d’immunodépression.Une antibiothérapie comprenant une ß-lactamine dans les 3 
      mois précédents représente un facteur important favorisant le développement de résistance 
      surtout lorsque les doses sont sub-optimales et les durées sont prolongées. L’âge avancé (> 65 
      ans) et l’hospitalisation récente interviennent aussi par la fréquence de prescription des 
      antibiotiques.Une pneumonie dans l’année précédente, l’existence d’une maladie chronique
      telle que la broncho-pneumopathie chronique obstructive (BPCO) et l’immunodépression 
      (néoplasie, splénectomie, infection à VIH) représentent d’autres facteurs favorisants. 
      Par contre, la corticothérapie et le diabète n’influencent pas le développement de la résistance bactérienne.
      </div> 
      <div class='reference'>
      <div class='sous_titre1'>Références </div> 
      1. E. Pilly. Maladies Infectieuses et Tropicales. Edition 2014 
      </div>`,
      ` `
     
      ],
     type:'qcm',
     suite:[],
     bg:'medecin',
     reference:[],
     toutref:`<div class='titre'>Informations </div> 
     <div class='info-popup'> 
     Les principaux facteurs de risque de résistance de S. pneumoniaeà la pénicilline sont :
      L’antibiothérapie antérieure par une ß-lactamine, l’âge > 65 ans, l’hospitalisation récente et 
      une situation d’immunodépression.Une antibiothérapie comprenant une ß-lactamine dans les 3 
      mois précédents représente un facteur important favorisant le développement de résistance 
      surtout lorsque les doses sont sub-optimales et les durées sont prolongées. L’âge avancé (> 65 
      ans) et l’hospitalisation récente interviennent aussi par la fréquence de prescription des 
      antibiotiques.Une pneumonie dans l’année précédente, l’existence d’une maladie chronique
      telle que la broncho-pneumopathie chronique obstructive (BPCO) et l’immunodépression 
      (néoplasie, splénectomie, infection à VIH) représentent d’autres facteurs favorisants. 
      Par contre, la corticothérapie et le diabète n’influencent pas le développement de la résistance bactérienne.
      </div> 
      <div class='reference'>
      <div class='sous_titre1'>Références </div> 
      1. E. Pilly. Maladies Infectieuses et Tropicales. Edition 2014 
      </div>`,
     chapitre:8,
    },
    {
      id: 20,
      question: ` <p>Docteur, l’antibiothérapie d’une pneumonie aigue doit être initiée rapidement (dans les heures qui suivent) dès la suspicion du diagnostic.</p> <p>Elle est habituellement probabiliste et doit prendre en compte prioritairement le ou les germe(s) présumé(s) responsable(s).</p> <p> Chaque fois qu’elle est possible (absence de troubles de la conscience et de vomissements), la voie orale doit être préférée, ce qui est le cas de Am Ali.</p>`,
      options: [],
      info:['En fait Docteur, Am Ali ne présente aucun facteur de risque de résistance du pneumocoque à la pénicilline.','En effet Docteur, Am Ali ne présente aucun facteur de risque de résistance du pneumocoque à la pénicilline'],
      answer: [],
      infoglobal: [`River Nile`, `River Amazon`, `River Godavari`],
      type:'',
      suite:[],
      bg:'chaise',
      reference:[],
      toutref:"",
      chapitre:9,
    },
    {
    id: 21,
    question: `En se basant sur le contexte et les données cliniques de Am Ali, votre antibiothérapie de première intention reposera sur ?`,
    options: [`Pristinamycine, 1g x 3/j`,`Amoxicilline, 1g x 3/j`,`Amoxicilline - acide clavulanique, 1g x 3/j`,`Lévofloxacine, 500mg/j`,`Erythromycine, 500mg x 4/j`],
    info:['La pristinamycine, 1g x 3/jour n’est pas recommandée en première intention en dehors d’une allergie connue aux ß-lactamines. Elle peut être prescrite secondairement en cas d’échec d’une antibiothérapie de première intention [1,2].',`En fait docteur, l’amoxicilline 1g x 3/jour est préconisée en première intention chez l’adulte sain, non âgé [1,2].`,
    `En effet docteur, Dans cette observation, l’âge du patient et la survenue de la pneumonie au décours d’un syndrome grippal doivent faire considérer l’implication de deux bactéries : <i>S. pneumoniae</i> et <i>H. influenzae</i> . Il ne présente pas par ailleurs de risque de résistance du pneumocoque à l’amoxicilline. Ainsi, il est recommandé de prescrire en première intention l’association amoxicilline-acide clavulanique, 1 g x 3/jour.`,`La lévofloxacine 0,5 à 1 g/jour, peut être prescrite secondairement en cas d’échec d’une antibiothérapie de première intention ou d’emblée en cas d’allergie aux bêta-lactamines.`,
    `Le taux élevé de résistance de <i>S. pneumoniae</i> au Maghreb n’autorise pas la prescription de l’érythromycine en première intention [1-3].`,
    `Elle ne doit pas être prescrite si le malade a reçu 
    une fluoroquinolone, quelle que soit l’indication, 
    dans les 3 derniers mois. Par ailleurs, il est 
    recommandé de l’utiliser avec prudence chez les 
    sujets âgés sous corticothérapie par voie générale 
    en raison d’un risque élevé de tendinopathie [1].` ],
    answer: [`Amoxicilline - acide clavulanique, 1g x 3/j`],
    infoglobal: [``, ``, 
    `<div class='titre'>Informations </div>
    <div class='info-popup'> 
    Les antibiotiques recommandés comme première intention dans le traitement de la PAC sont 
    listés dans la liste des médicaments essentiels de l’OMS comme l’amoxicilline, l’acide 
    clavulanique et les céphalosporines de troisième génération injectables. Ces antibiotiques 
    devraient être largement disponibles, à un coût abordable, dans des formulations appropriées et 
    de qualité garantie [1]. </br>
    S. pneumoniae est la principale bactérie responsable de PAC de l’adulte. L’antibiothérapie de 
    première intention d’une PAC sans signes de gravité de l’adulte sain repose sur l’amoxicilline, 1g 
    x 3/jour, avec possibilité d’un traitement ambulatoire. Dans les PAC sans signes de gravité du 
    sujet âgé ou avec co-morbidité(s), l’association amoxicilline + acide clavulanique est 
    recommandée, 1 g x 3/jour,en hospitalisation ou en ambulatoire.
    Antibiothérapie en ambulatoire des PAC de l’adulte [2,3].
    </div>
    <div class='schema4'></div>
    <div class='reference_afterschema'>
    L’ESCMID (European Society of Clinical Microbiology and Infectious Diseases) et la société Suisse 
    de Pathologie Infectieuse recommandent l’amoxicilline-acide clavulanique en antibiothérapie 
    de première intention dans les formes légères a modérées de PAC [4,5]. </br> </br>
    <div class='sous_titre2'>Références</div>
    1.World Health Organization. The selection and use of essential medicines, 2017. </br>
    2.Agence nationale de sécurité du médicament et des produits de santé (ANSM). Antibiothérapie par voie générale en pratique 
    courante dans les infections respiratoires hautes de l’adulte et l’enfant. Recommandations de bonne pratique, Novembre 2011. </br>
    3.E. Pilly. Maladies Infectieuses et Tropicales. Edition 2018. </br>
    4.L’ESCMID (European Society of Clinical Microbiology and Infectious Diseases) et la société Suisse de Pathologie Infectieuse 
    recommandent l’amoxicilline-acide clavulanique en antibiothérapie de première intention dans les formes légères a modérées 
    de PAC
    </div> `,
    ``],
    type:'qcm',
    suite:[`En l’absence de signes de gravité et de co-morbidités, le traitement peut être prescrit en ambulatoire pendant 7 jours avec une réévaluation systématique après 48 à 72 heures.`,`5 jours plus tard, le patient revient chez le médecin pour un contrôle.`],
    bg:'medecin',
    reference:[`
    <div class='titre'>Références </div>
    <div class='reference'>
    1.Agence nationale de sécurité du médicament et des produits desanté (ANSM). Antibiothérapie par voie générale en pratique 
    courante dans les infections respiratoires hautes de l’adulte et l’enfant. Recommandations de bonne pratique, Novembre 2011. </br>
    2. E. Pilly. Maladies Infectieuses et Tropicales. Edition 2018.`,  
    `<div class='titre'>Références </div>
    1.Agence nationale de sécurité du médicament et des produits de santé (ANSM). Antibiothérapie par voie générale en pratique 
    courante dans les infections respiratoires hautes de l’adulte et l’enfant. Recommandations de bonne pratique, Novembre 2011.</br>
    2. E. Pilly. Maladies Infectieuses et Tropicales. Edition 2018.`,``,
    `<div class='titre'>Références </div>1.Agence nationale de sécurité du médicament et des produits de santé (ANSM). Antibiothérapie par voie générale en pratique 
    courante dans les infections respiratoires hautes de l’adulte et l’enfant. Recommandations de bonne pratique, Novembre 2011.`,
    `<div class='titre'>Références </div>
    1.Agence nationale de sécurité du médicament et des produits de santé (ANSM). Antibiothérapie par voie générale en pratique 
    courante dans les infections respiratoires hautes de l’adulte et l’enfant. Recommandations de bonne pratique, Novembre 2011.</br>
    2.E. Pilly. Maladies Infectieuses et Tropicales. Edition 2018.</br>
    3.Zerouali K. Les infections respiratoires et résistance bactérienne aux antibiotiques. Données de 2015-2016 </div>` ],
    toutref:"",
    chapitre:9,
  },
  {
  id: 22,
  question: `En l’absence de signes de gravité et de co-morbidités, le traitement peut être prescrit en ambulatoire pendant 7 jours avec une réévaluation systématique après 48 à 72 heures.`,
  options: [],
  info:[],
  answer: [],
  infoglobal: [],
  type:'',
  suite:[``],
  bg:'medecin' ,
  reference:[],
  toutref:`
  <div class='titre'>Informations </div>
  <div class='schema5'> </div>
    <div class='reference_afterschema'>
  <div class='sous_titre2'>Références </div>
  1.World Health Organization. The selection and use of essential medicines, 2017.</br>
  2.Agence nationale de sécurité du médicament et des produits de santé (ANSM). Antibiothérapie par voie générale en pratique </br>
  courante dans les infections respiratoires hautes de l’adulte et l’enfant. Recommandations de bonne pratique, Novembre 2011 
  5.ww.sginf.ch/files/mangement of comunity-acquired pneumonia_in_adults.pdf </br>
  6.M. Woodhead et al. Guidelines for the management of adult lower respiratory tract infections - Full version. Clin Microbiol Infect 2011; 
  17(Suppl. 6): E1–E59
  </div>`,
    chapitre:9,
},
  {
  id: 23,
  question: `5 jours plus tard, le patient revient chez le médecin pour un contrôle.`,
  options: [],
  info:[],
  answer: [],
  infoglobal: [],
  type:'',
  suite:[``],
  bg:'chaise',
  reference:[] ,
  toutref:"",
  chapitre:10,
  },
{
  id: 24,
  question: `Bonjour Docteur, depuis ma dernière visite je me suis beaucoup amélioré. Ma toux et mes crachats ont nettement diminué. Aujourd'hui je respire beaucoup mieux et je n’ai plus de gêne respiratoire!`,
  options: [],
  info:[],
  answer: [],
  infoglobal: [`River Nile`, `River Amazon`, `River Godavari`],
  type:'',
  suite:[],
  bg:'patient',
  reference:[],
  toutref:"",
  chapitre:10,
},
{
  id: 25,
  question: `Am Ali rapporte une nette amélioration clinique. Quelles sont les mesures préventives à prendre?`,
  options: [`Prévention de la grippe par l’Oseltamivir`,`Vaccination anti-grippale à partir de l’automne prochain`,`Vaccination anti-pneumococcique`,`Antibioprophylaxie mensuelle par la benzathine-pénicilline`,`Prophylaxie continue par le cotrimoxazole`],
  info:[`Docteur, Selon les recommandations du HCSP* Français, un traitement prophylactique de la grippe par l’Oseltamivir est prescrit en post-exposition uniquement pour les personnes considérées à risque. Choisissez une autre réponse ! </br><span class="etoile">*Haut Conseil de la santé publique.</span>`,`Dans la population générale et les collectivités de personnes sans facteurs de risque, la vaccination reste le meilleur moyen de prévention. Il est recommandé de vacciner contre la grippe, tous les ans, au début de l’automne.`,`Le vaccin anti-pneumococcique peut réduire le risque de rechute de pneumonie chez Am Ali. Chez les personnes âgés de 65 ans et plus, le vaccin conjugué 13-valent permet de réduire l’incidence des infections invasives à </br><i>S. pneumoniae</i> de l’ordre de 75%`,`Docteur, L’antibioprophylaxie mensuelle par la benzathine-pénicilline n’a pas de place dans la prévention des récidives des infections respiratoires, particulièrement, les pneumonies à Pneumocoque. Choisissez une autre réponse !`,`Docteur, la prophylaxie par le cotrimoxazole est indiquée au cours de l’infection VIH. Elle n’a aucune place dans la prévention des récidives des pneumonies à Pneumocoques. Choisissez une autre réponse !`],
  answer: [`Vaccination anti-grippale à partir de l’automne prochain`,`Vaccination anti-pneumococcique`],
  infoglobal: [`<div class='titre'>Informations </div>
  <div class='info-popup'> 
  L’oseltamivir est un inhibiteur de la neuraminidase qui peut être prescrit en traitement curatif ou 
  préventif de la grippe dans certaines situations particulières. Selon les recommandations du Haut 
  Conseil de la Santé Publique (HCSP) Français, un traitement prophylactique par les inhibiteurs de 
  la neuraminidase (oseltamivir, zanamivir) est prescrit en post-exposition uniquement pour :
  Les personnes considérés à risque de complications âgés de 1 an et plus, y compris les femmes 
  enceintes, après un contact étroit datant de moins de 48 Heures avec un cas confirmé ou 
  présentant une symptomatologie typique de grippe.Les personnes à risque vivant en collectivités. 
  [1]
  </div>
  <div class='reference'> 
  <div class='sous_titre2'>Références </div>
  
  1.Haut Conseil de la Santé Publique. Avis relatif à la fiche de recommandations pour la prescription d’antiviraux en période d’épidémie 
  de grippe saisonnière, 12 Novembre 2015.
  </div> `, 
  `<div class='titre'>Informations </div>
  <div class='info-popup'> 
  En Tunisie, <i> S. pneumoniae </i> est un pathogène majeur au cours des infections pulmonaires (50%) 
  de l’adulte et l’enfant. La mortalité élevée liée aux infections invasives et la résistance croissante 
  aux antibiotiques expliquent l’intérêt croissant de la vaccination. </br> </br>
  Dans la population générale et les collectivités de personnes sans facteurs 
  de risque, la vaccination reste le meilleur moyen de prévention.
  Deux vaccins sont importants pour prévenir les infections respiratoires basses :
  Le vaccin anti-grippal et le vaccin anti-pneumococcique
  Le vaccin anti-grippal est un vaccin inactivé trivalent préparé sur œufs de poule embryonnés. 
  Sa composition est révisée annuellement en fonction des dernières données épidémiologiques et 
  virologiques recueillies à travers le monde. La composition du vaccin (2017) inclut deux 
  sous-types de virus grippal de type A [A/Michigan/45/2015 (H1N1) et A/Hong 
  Kong/4801/2014(H3N2)] et un sous-type de virus grippal B[(B/Brisbane/60/2008)]. </br> </br>
  Ce vaccin est bien toléré et n’est contre-indiqué que chez les personnes qui présente une 
  allergie à l’ovalbumine [1]. </br>
  Les indications incluent particulièrement les personnes âgées de 65 ans et plus, les femmes 
  enceintes, les personnes avec comorbidités, les professionnels de santé en contact régulier et 
  prolongé avec des personnes à risque de grippe sévère. Toutefois, elles peuvent être élargies à 
  toutes les personnes qui souhaitent être vaccinées.
  Il est recommandé de vacciner, tous les ans, au début de l’automne. 
  Chez l’adulte, la dose recommandée est de 0,5 ml, administrée par voie sous cutanée. 
  L’immunité commence 10 à 15 jours après la vaccination et dure 9 à 12 mois. L’efficacité du 
  vaccin varie de 70-90% chez les adultes en bonne santé et les personnes âgées de moins de 65 
  ans, lorsqu’il est adapté aux souches circulantes. Chez les personnes âgées de plus de 65 ans et 
  fragilisées,bien que la vaccination est moins efficace, elle présente l’avantage de réduire la 
  fréquence des pneumonies de 39% à 68%, des hospitalisations de 28% à 65% et la mortalité de 
  56% à 76% [1].</br> </br>
  </div>
  <div class='reference'>
  <div class='sous_titre2'>Références </div>
  1. E. Pilly. Maladies Infectieuses et Tropicales. Edition 2018. 3 - Haut Conseil de la Santé Publique. Vaccination des personnes âgées, 
  Mars 2016.</div>`,
  ``,


  `<div class='titre'>Informations </div>
  <div class='info-popup'> 
  L’antibioprophylaxie par la benzathine pénicilline est proposée pour prévenir :
  Les infections fulminantes à Pneumocoque chez les splénectomisés ou les drépanocytaires.
  Les récidives d’une méningite à Pneumocoque en cas de brèche ostéo-durale dans l’attente 
  d’une chirurgie réparatrice.
  Cette antibioprophylaxie est basée essentiellement sur un accord professionnel et n’a pas été 
  validée par des études randomisées. Elle peut être associée à la vaccination 
  anti-pneumococcique dans le but de potentialiser l’effet préventif. Elle n’a pas de place dans la 
  prévention des récidives des infections respiratoires, particulièrement, pneumonies à 
  Pneumocoque.
  </div>
  <div class='reference'>
  <div class='sous_titre2'>Références </div>
  1.E. Pilly. Maladies Infectieuses et Tropicales. Edition 2014
  </div>`,
  
  ` <div class='titre'>Informations </div>
  <div class='info-popup'>
  La prophylaxie par le cotrimoxazole est indiquée au cours de l’infection VIH chez les personnes 
  ayant moins de 200 CD4/mm3 dans le cadre de la prévention de certaines infections 
  opportunistes (pneumocystose pulmonaire, toxoplasmose cérébrale).
  Elle n’a aucune place dans la prévention des récidives des pneumonies à Pneumocoques. Il faut 
  aussi noter la résistance croissante des souches de Pneumocoque à cet antibiotique.
  </div>
  <div class='reference'>
  <div class='sous_titre2'>Références </div>
  1. E. Pilly. Maladies Infectieuses et Tropicales. Edition 2014
  </div>
  `],
  type:'qcm',
  suite:[],
  bg:'medecin',
  reference:[],
  toutref:`<div class='titre'>Informations </div>
  <div class='info-popup'> 
  Deux types de vaccins anti-pneumococcique sont disponibles : 
  Le vaccin polysaccharidique, 23-valent, qui active les lymphocytes B mais n'induit pas de 
  mémoire immunologique chez les nourrissons et enfants < 2 ans. Les vaccins conjugués, 7 
  valent et 13-valent, qui induisent une réponse immunitaire de meilleure qualité en activant les 
  lymphocytes B et T </br>
  Chez les personnes âgées de 65 ans et plus, le vaccin conjugué 13-valent permet aussi de 
  réduire l’incidence des infections invasives à <i> S. pneumoniae  </i> de l’ordre de 75% [3, 4]. 
  Un bénéfice synergique des deux vaccinations anti-grippale et anti-pneumococcique est bien 
  établi chez les sujets de plus de 65 ans avec une réduction des pneumonies à Pneumocoque de 
  36%, des infections invasives et de la mortalité toute cause confondue de 57% [1,3,4]. 
  Une étude Marocaine récente a souligné l’impact positif de l’introduction de la vaccination 
  anti-pneumococique chez les nourrissons avec une réduction significative de l’incidence des 
  infections invasives (34,6% vs 13,5%) et de la fréquence des souches PSDP (50,6% vs 20,9%) 
  chez les enfants de moins de 2 ans [5]. </div>
  <div class='sous_titre'>
  Tableau de comparaison des vaccins anti-pneumococciques polysaccharidique
  et conjugué [1-4] </div>
  <div class='schema6'></div>
  <div class='reference_afterschema'>
  <div class='sous_titre2'>Références </div>
  1.E. Pilly. Maladies Infectieuses et Tropicales. Edition 2018.  </br>
  2.Haut Conseil de la Santé Publique. Vaccination des personnes âgées, Mars 2016. </br>
  3.Haut Conseil de la Santé Publique. Avis relatif à la aux recommandations vaccinales contre les infections à pneumocoque pour les adultes,
  Mars 2017. </br>
  4.Bonten MJ, Huijts SM, Bolkenbaas M, Webber C, Patterson S, Gault S, et al. Polysaccharide conjugate vaccine against pneumococcal 
  pneumonia in adults. New Engl J Med. 2015;372:1114-25. </br>
  5.Diawara I, Zerouali Kh, Katfy Kh , Zaki B, Belabbes H et al. Invasive pneumococcal disease among children younger than 5 years of 
  age before and after introduction of pneumococcal conjugate vaccine in Casablanca, Morocco. Intern J Infect Dis 2015 ; 40 : 95-101.
    </div>`,
  chapitre:10,
},
{
  id: 26,
  question: `<p>Docteur, trois paramètres sont à prendre en compte avant de prescrire une antibiothérapie : </br> Le tableau clinique et le siège de l’infection </br> Le(s) bactérie(s) présumée(s) et le(s) profil(s) de résistance </br> Les données du patient : âge, comorbidités et terrain  particulier.</p> </br> L’intérêt d’une antibiothérapie raisonnée est double : </br>  <li> Individuel  -> Guérison  </br> </li> <li>Collectif -> Eviter le développement de la résistance</li> </br>`,
  options: [],
  info:[],
  answer: [],
  infoglobal: ['aaaa','aaaaa'],
  type:'',
  suite:['<p> <center>Les Antibiotiques :</br> Mieux prescrire pour bien guérir, sans nuire. </center></p> <p>Efficacité (bénéfice clinique)</p> <p> Prescription appropriée d antibiotiques. </p> <p>Tolérance et Ecologie bactérienne (prévention de la sélectionde de mutants-Résistances)</p> <p> Economie (coûts directs et indirects abordables)</p>',`Bravo Docteur! Vous avez terminé le cas clinique brillamment. Grâce à vous et votre expertise, Am Ali se porte bien.`],
  bg:'medecin',
  reference:[],
  toutref:"",
  chapitre:10,
},





   ];

// fiche button contain

   export const FicheData =  [
    {
      id:0,
      title:"Présentation du cas",
      fiche:"66 ans </br>Retraité de la fonction publique </br> <b>ATCD familiaux</b> Père diabétique </br>",
      qid:1
    },
    {
      id:1,
      title:"Présentation du cas",
      fiche:"<b>ATCD personnels </b>  Hernie inguinale </br>",

      qid:2
    },
    {
      id:2,
      title:"Présentation du cas",
      fiche:"Il y’a une semaine fièvre et fatigue",
      suitefiche:["</br>écoulement nasal,douleurs articulaires </br>Suspicion d’un syndrome grippal","</br>Automédication à base de paracétamol </br>","Aujourd’hui Fièvre, toux, crachats jaunâtres, gêne respiratoire","</br>Actif, non fumeur"],
      qid:3
    },

    {
      id:3,
      title:"Examens cliniques",
      fiche:"",
      suitefiche:["Pouls à 110p/mn </br>" , "Râles crépitants au niveau de la base pulmonaire gauche</br>" , "TA=135/75 mm Hg</br>" , "FR=28cycles/mn </br> " , "T=39,4°C</br> "],
      qid:6
    },

    {  
      id:4,
      title:"Examens cliniques",
      fiche:"<span class='fiche4_gris'><b>Diagnostic Pneumonie bactérienne </br></span>",
      qid:7
    },
  
    {  
        id:5,
        title:"Examens complémentaires",   
        fiche:"Une opacité de la base pulmonaire gauche.</br>",
        qid:10
    },

    {  
      id:6,
      title:"Examens complémentaires",   
      fiche:"",
      suitefiche:["Hyperleucocytose modérée12000/mm3 </br>","Glycémie à jeun =5,8 mmol/l </br>" ,"Urée sanguine = 5,4 mmol/l </br>", "Créatininémie = 98 μmol/L </br>"],
      qid:12
    },

    {  
      id:7,
      title:"Prise en charge",   
      fiche:"Enambulatoire. </br>",
      qid:16
    },

    {  
      id:8,
      title:"Prise en charge",   
      fiche:"<span class='fiche4_orange'> <b> Bactéries responsables </b></span> Streptococcus pneumoniae, Haemophilus influenzae</br>",
      qid:17
    },

    {  
      id:9,
      title:"Prise en charge",   
      fiche:"<span class='fiche4_orange'> <b> Mécanisme de résistance </b> </span>  Modification des protéines de liaison aux pénicillines",
      qid:18
    },
    {  
      id:10,
      title:"Prise en charge",   
      fiche:"<span class='fiche4_gris'></br> <b>Pas de facteur de risque de résistance </b></span>",
      qid:20
    },
    {  
      id:11,
      title:"Prise en charge",   
      fiche:"</br>Prescription= Amoxicilline -acide clavulanique, 1 g x 3/j.",
      qid:21
    },
    {
      id:12,
      title:"Prise en charge",   
      fiche:"</br> Prévention Vaccin antigrippal et antipneumococcique",
      qid:25,
    }
  ]







