export interface Session {
  id: string;
  shift: "Manhã" | "Tarde";
  title?: string;
  professor: string;
  horario: string;
  vagas: number;
  formLink: string;
}

export interface Workshop {
  id: string;
  name: string;
  icon: string;
  description: string;
  data: string;
  publicoAlvo: string;
  cargaHoraria: string;
  location: string;
  mapUrl: string;
  sessions: Session[];
}

const locWorkshopPortugues1 = "https://www.google.com/maps?q=Escola%20T%C3%A9cnica%20Estadual%20Jurandir%20Bezerra%20Lins&output=embed";

const locWorkshopQuimica = "https://www.google.com/maps?q=Escola%20Estadual%20Guedes%20Alcoforado&output=embed";

const locWorkshopMat = "https://www.google.com/maps?q=ETE%20Jos%C3%A9%20Alencar%20Gomes%20da%20Silva&output=embed";

const locWorkshopHist = "https://www.google.com/maps?q=Escola%20Polivalente%20de%20Abreu%20e%20Lima&output=embed";

const locWorkshopGeo = "https://www.google.com/maps?q=EREFEM%20Presidente%20Castelo%20Branco&output=embed";

const locWorkshopArte = "https://www.google.com/maps?q=EREM%20Santos%20Cosme%20e%20Dami%C3%A3o&output=embed";

const locWorkshopEduFisica = "https://www.google.com/maps?q=EREM%20%C3%81urea%20de%20Moura%20Cavalcanti&output=embed";

const locWorkshopBiblio = "https://www.google.com/maps?q=EREF%20Jer%C3%B4nimo%20de%20Albuquerque&output=embed";

const locWorkshopIngles = "https://www.google.com/maps?q=EREM%20Maestro%20Nelson%20Ferreira&output=embed";

const locWorkshopCulturadgma = "https://www.google.com/maps?q=EREM%20Santa%20Ana&output=embed";

const locWorkshopFisica = "https://www.google.com/maps?q=EREF%20Maria%20do%20Carmo%20Pinto%20Ribeiro&output=embed";

const locWorkshopBio = "https://www.google.com/maps?q=EREM+Dantas+Barreto+Pernambuco&output=embed";
  
const locWorkshopFiloSociologia = "https://www.google.com/maps?q=EREM%20Santos%20Cosme%20e%20Dami%C3%A3o&output=embed";


export const workshops: Workshop[] = [
  {
    id: "lingua-portuguesa",
    name: "Língua Portuguesa",
    icon: "BookOpen",
    description: "Workshop focado em metodologias inovadoras para o ensino da Língua Portuguesa, explorando novas abordagens para leitura, escrita e interpretação de textos no contexto contemporâneo.",
    data: "19 de Março de 2026",
    publicoAlvo: "Professores de Língua Portuguesa do Ensino Fundamental e Médio",
    cargaHoraria: "4 horas",
    location: "ETE JURANDIR BEZERRA LINS",
    mapUrl: locWorkshopPortugues1,
    sessions: [
      {
        id: "lp-manha",
        shift: "Manhã",
        title: "A busca por informações confiáveis - avaliação e correção de redações do Enem",
        professor: "Profs.Diego Lins e Rogério Fonseca",
        horario: "08:00 - 12:00",
        vagas: 30,
        formLink: "https://forms.gle/qepZ28QGGQvAwnbj7",
      },
      {
        id: "lp-tarde",
        shift: "Tarde",
        title: "Discurso e Persuasão: um olhar crítico sobre os conteúdos informativos compartilhados na internet",
        professor: "Prof.Henrique Conceição",
        horario: "13:00 - 17:00",
        vagas: 30,
        formLink: "https://forms.gle/qepZ28QGGQvAwnbj7",

      },
        {
        id: "lp-manha-2",
        shift: "Manhã",
        title: "Literatura fantástica e ensino: assombrações, mitos e lendas pernambucanas na sala de aula",
        professor: "Prof.Ivson Bruno",
        horario: "08:00 - 12:00",
        vagas: 30,
        formLink: "https://forms.gle/qepZ28QGGQvAwnbj7",
      },
       {
        id: "lp-tarde-2",
        shift: "Tarde",
        title: "Vozes críticas: a produção de conteúdos digitais (gêneros dialogais) como ferramentas para formation cidadã",
        professor: "Tainá Meira das Chagas e Tayson Silva Cirqueira",
        horario: "13:00 - 17:00",
        vagas: 30,
        formLink: "https://forms.gle/qepZ28QGGQvAwnbj7",
      },
    ],
  },
    {
    id: "lingua-portuguesa-2",
    name: "Língua Portuguesa",
    icon: "BookOpen",
    description: "Workshop focado em metodologias inovadoras para o ensino da Língua Portuguesa, explorando novas abordagens para leitura, escrita e interpretação de textos no contexto contemporâneo.",
    data: "26 de Março de 2026",
    publicoAlvo: "Professores de Língua Portuguesa do Ensino Fundamental e Médio",
    cargaHoraria: "4 horas",
    location: "EREM Santa Ana",
    mapUrl: locWorkshopCulturadgma,
    sessions: [
      {
        id: "lp-manha",
        shift: "Manhã",
        title: "A busca por informações confiáveis - avaliação e correção de redações do Enem",
        professor: "Profs.Diego Lins e Rogério Fonseca",
        horario: "08:00 - 12:00",
        vagas: 30,
        formLink: "https://forms.gle/qepZ28QGGQvAwnbj7",
      },
      {
        id: "lp-tarde",
        shift: "Tarde",
        title: "Mídias Digitais e Saúde Mental no Contexto Escolar: Desafios, Riscos e Estratégias de Promoção do Bem-Estar",
        professor: "Profs.Luciana Magalhães e Clara Daena",
        horario: "13:00 - 17:00",
        vagas: 30,
        formLink: "https://forms.gle/qepZ28QGGQvAwnbj7",

      },
        {
        id: "lp-tarde-2",
        shift: "Tarde",
        title: "Discurso e Persuasão: um olhar crítico sobre os conteúdos informativos compartilhados na internet",
        professor: "Prof.Henrique Conceição",
        horario: "13:00 - 17:00",
        vagas: 30,
        formLink: "https://forms.gle/qepZ28QGGQvAwnbj7",
      },
       {
        id: "lp-manha-3",
        shift: "Manhã",
        title: "Vozes críticas: a produção de conteúdos digitais (gêneros dialogais) como ferramentas para formation cidadã",
        professor: "Tainá Meira das Chagas e Tayson Silva Cirqueira",
        horario: "08:00 - 12:00",
        vagas: 30,
        formLink: "https://forms.gle/qepZ28QGGQvAwnbj7",
      },
    ],



  },
  {
    id: "biologia",
    name: "Biologia",
    icon: "Leaf",
    description: "A oficina propõe analisar e combater informações falsas que circulam nas redes sociais e na mídia sobre substâncias químicas presentes em alimentos, medicamentos e produtos do cotidiano.",
    data: "16 de Março de 2026",
    publicoAlvo: "Professores de Biologia e Ciências Naturais",
    cargaHoraria: "4 horas",
    location: "EREM DANTAS BARRETO",
    mapUrl: locWorkshopBio,
    sessions: [
      {
        id: "bio-manha",
        shift: "Manhã",
        title: "Pesquisa, Planejamento e Avaliação com Gemini e NotebookLM",
        professor: "Prof.Vanessa Araújo",
        horario: "08:00 - 12:00",
        vagas: 25,
        formLink: "https://forms.gle/Tam7ownzXqkGycyF9",
      },
       {
        id: "bio-tarde",
        shift: "Tarde",
        title: "Pesquisa, Planejamento e Avaliação com Gemini e NotebookLM",
        professor: "Prof.Vanessa Araújo",
        horario: "13:00 - 17:00",
        vagas: 25,
        formLink: "https://forms.gle/Tam7ownzXqkGycyF9",
      },
      {
        id: "bio-manha-2",
        shift: "Manhã",
        title: "Biotecnologia e Cidadania Digital",
        professor: "Prof.Eloyza Karoline",
        horario: "13:00 - 17:00",
        vagas: 25,
        formLink: "https://forms.gle/Tam7ownzXqkGycyF9",
      },
      {
        id: "bio-tarde-2",
        shift: "Tarde",
        title: "Biotecnologia e Cidadania Digital",
        professor: "Prof.Eloyza Karoline",
        horario: "13:00 - 17:00",
        vagas: 25,
        formLink: "https://forms.gle/Tam7ownzXqkGycyF9",
      },
    ],
  },
  {
    id: "fisica",
    name: "Física",
    icon: "Atom",
    description: "Metodologias ativas para o ensino de Física, incluindo simulações computacionais, laboratórios virtuais e experimentos práticos de baixo custo.",
    data: "16 de Março de 2026",
    publicoAlvo: "Professores de Física do Ensino Médio",
    cargaHoraria: "4 horas",
    location: "EREF MARIA DO CARMO PINTO RIBEIRO",
    mapUrl: locWorkshopFisica,
    sessions: [
      {
        id: "fis-manha",
        shift: "Manhã",
        title: " Tecnologia Digitais e Gamificação no Ensino de Física",
        professor: "Prof.RAILTON RICARDO ALVES",
        horario: "08:00 - 12:00",
        vagas: 25,
        formLink: "https://forms.gle/JAinc7YXZncJc5W26",
      },
      {
        id: "fis-tarde",
        shift: "Tarde",
        title: " Tecnologia Digitais e Gamificação no Ensino de Física",
        professor: "Prof.RAILTON RICARDO ALVES",
        horario: "13:00 - 17:00",
        vagas: 25,
        formLink: "https://forms.gle/JAinc7YXZncJc5W26",
      },
      {
        id: "fis-manha-2",
        shift: "Manhã",
        title: "Robótica, Conectividade e Cidadania Digital: Construindo Tecnologia com Consciência",
        professor: "Prof.MARIO BARBOSA MONTEIRO",
        horario: "08:00 - 12:00",
        vagas: 25,
        formLink: "https://forms.gle/JAinc7YXZncJc5W26",
      },
      {
        id: "fis-tarde-2",
        shift: "Tarde",
        title: "Robótica, Conectividade e Cidadania Digital: Construindo Tecnologia com Consciência",
        professor: "Prof.MARIO BARBOSA MONTEIRO",
        horario: "13:00 - 17:00",
        vagas: 25,
        formLink: "https://forms.gle/JAinc7YXZncJc5W26",
      },
    ],
  },
  {
    id: "quimica",
    name: "Química",
    icon: "FlaskConical",
    description: "Abordagens inovadoras no ensino de Química com ênfase na contextualização do conteúdo e práticas experimentais seguras e acessíveis.",
    data: "16 de Março de 2026",
    publicoAlvo: "Professores de Química do Ensino Médio",
    cargaHoraria: "4 horas",
    location: "EREM Guedes Alcoforado",
    mapUrl: locWorkshopQuimica,
    sessions: [
      {
        id: "qui-tarde",
        shift: "Tarde",
        title: "Entre Mitos e Moléculas: A verdade científica por trás das Fake News na Saúde e Alimentação",
        professor: "Prof.Luiz Alberto Barros",
        horario: "13:00 - 17:00",
        vagas: 25,
        formLink: "https://forms.gle/6ChhHEZqdhBmzMPt8",
      },
   
      {
        id: "qui-manha",
        shift: "Manhã",
        title: "Química na Rede: Ciência, Informação e Saúde no Mundo Digital ",
        professor: "Prof.Luiz Paulo",
        horario: "08:00 - 12:00",
        vagas: 25,
        formLink: "https://forms.gle/6ChhHEZqdhBmzMPt8",
      },
       {
        id: "qui-manha-2",
        shift: "Manhã",
        title: "IA como Ferramenta de Apoio à Investigação e Escrita Científica no Ensino de Química",
        professor: "Prof.Wagner Silva",
        horario: "08:00 - 12:00",
        vagas: 25,
        formLink: "https://forms.gle/6ChhHEZqdhBmzMPt8",
      },
    ],
  },
  {
    id: "matematica",
    name: "Matemática",
    icon: "Calculator",
    description: "Novas metodologias para o ensino de Matemática com foco em resolução de problemas, gamificação e uso de tecnologias digitais.",
    data: "17 de Março de 2026",
    publicoAlvo: "Professores de Matemática do Ensino Fundamental e Médio",
    cargaHoraria: "4 horas",
    location: "ETE José Alencar Gomes da Silva",
    mapUrl: locWorkshopMat,
    sessions: [
      {
        id: "mat-manha",
        shift: "Manhã",
        title: "Matemática que Faz Sentido: Investigando Dados e Problemas do Mundo com Tecnologias Digitais ",
        professor: "Prof.Wilka Karla",
        horario: "08:00 - 12:00",
        vagas: 30,
        formLink: "https://forms.gle/EzRJkeVhzNhXbH8z7",
      },
         {
        id: "mat-manha-2",
        shift: "Manhã",
        title: "Matemática, Robótica e Inteligência Artificial: novas possibilidades para a sala de aula",
        professor: "Prof.Diogo Sant’Ana de Vasconcelos",
        horario: "08:00 - 12:00",
        vagas: 30,
        formLink: "https://forms.gle/EzRJkeVhzNhXbH8z7",
      },
      {
        id: "mat-tarde",
        shift: "Tarde",
        title: "Matemática Viva",
        professor: "Prof.Huanê Patricia",
        horario: "13:00 - 17:00",
        vagas: 30,
        formLink: "https://forms.gle/EzRJkeVhzNhXbH8z7",
      },
    ],
  },
  {
    id: "Culturadgma",
    name: "Cultura Digital e Midiática",
    icon: "Newspaper",
    description: "O workshop “Cultura Digital e Midiática” tem como objetivo explorar o impacto das tecnologias digitais, das redes sociais e das mídias contemporâneas nos processos de ensino, aprendizagem e construção do conhecimento. A formação abordará o uso pedagógico de ferramentas digitais, produção de conteúdo, leitura crítica da informação, combate à desinformação e desenvolvimento do letramento digital. A proposta busca capacitar educadores para integrar práticas inovadoras ao currículo, promovendo uma participação mais ativa, consciente e crítica dos estudantes no ambiente digital e na sociedade conectada.",
    data: "20 de Março de 2026",
    publicoAlvo: "Professores de Filosofia do Ensino Médio",
    cargaHoraria: "4 horas",
    location: "EREM SANTA ANA",
    mapUrl: locWorkshopCulturadgma,
    sessions: [
      {
        id: "filo-manha",
        shift: "Manhã",
        title: "Reprogramando o Curriculo PE: Inserção do componente Cultura Digital e Midiática",
        professor: "Prof.Aroma",
        horario: "08:00 - 12:00",
        vagas: 25,
        formLink: "https://forms.gle/hMQV7SLrQzYBhuax9",
      },
    ],
  },
  {
    id: "geografia",
    name: "Geografia",
    icon: "Globe",
    description: "Ensino de Geografia com uso de geotecnologias, sensoriamento remoto e práticas de campo para uma aprendizagem significativa.",
    data: "18 de Março de 2026",
    publicoAlvo: "Professores de Geografia do Ensino Fundamental e Médio",
    cargaHoraria: "4 horas",
    location: "EREFEM Presitente Castelo Branco",
    mapUrl: locWorkshopGeo,
    sessions: [
      {
        id: "geo-manha",
        shift: "Manhã",
        title: "Gamificação e os jogos didáticos como uma ferramenta de ensino/aprendizado",
        professor: "Prof.Ivison Marques ",
        horario: "08:00 - 12:00",
        vagas: 25,
        formLink: "https://forms.gle/wcSbhjo2ANBghUsEA",
      },
      {
        id: "geo-tarde",
        shift: "Tarde",
        title: "Gamificação e os jogos didáticos como uma ferramenta de ensino/aprendizado",
        professor: "Prof.Ivison Marques",
        horario: "13:00 - 17:00",
        vagas: 25,
        formLink: "https://forms.gle/wcSbhjo2ANBghUsEA",
      },
    ],
  },
  {
    id: "historia",
    name: "História",
    icon: "Landmark",
    description: "Abordagens contemporâneas para o ensino de História, incluindo uso de fontes primárias digitais, narrativas e projetos interdisciplinares.",
    data: "18 de Março de 2026",
    publicoAlvo: "Professores de História do Ensino Fundamental e Médio",
    cargaHoraria: "4 horas",
    location: "EREFEM Polivalente de Abreu e Lima",
    mapUrl: locWorkshopHist,
    sessions: [
      {     
        id: "his-manha",
        shift: "Manhã",
        title: "Do Digital à Sala de Aula: Ensinar História na Sociedade da Pós-Verdade",
        professor: "Prof.João Neves",
        horario: "08:00 - 12:00",
        vagas: 30,
        formLink: "https://forms.gle/m16RdGCvuHnLuCJF9",
      },
      {
        id: "his-tarde",
        shift: "Tarde",
        title: "Do Digital à Sala de Aula: Ensinar História na Sociedade da Pós-Verdade",
        professor: "Prof.João Neves",
        horario: "13:00 - 17:00",
        vagas: 30,
        formLink: "https://forms.gle/m16RdGCvuHnLuCJF9",
      },
       {     
        id: "his-manha-2",
        shift: "Manhã",
        title: "Memórias, narrativas e disputas de sentido na internet",
        professor: "Prof.RAFAELA FRANKLIN",
        horario: "08:00 - 12:00",
        vagas: 30,
        formLink: "https://forms.gle/m16RdGCvuHnLuCJF9",
      },
      {
        id: "his-tarde-2",
        shift: "Tarde",
        title: "Memórias, narrativas e disputas de sentido na internet",
        professor: "Prof.RAFAELA FRANKLIN",
        horario: "13:00 - 17:00",
        vagas: 30,
        formLink: "https://forms.gle/m16RdGCvuHnLuCJF9",
      },
    ],
  },
  {
    id: "lingua-estrangeira",
    name: "Língua Estrangeira (Inglês)",
    icon: "Languages",
    description: "Estratégias para o ensino de Inglês como língua estrangeira com foco em comunicação, imersão e uso de recursos multimídia.",
    data: "19 de Março de 2026",
    publicoAlvo: "Professores de Língua Inglesa",
    cargaHoraria: "4 horas",
    location: "EREM MAESTRO NELSON FERREIRA",
    mapUrl: locWorkshopIngles ,
    sessions: [
      {
        id: "le-manha",
        shift: "Manhã",
        title: "From English Learners to Responsible Digital Citizens!",
        professor: "Prof.Josué Gomes",
        horario: "08:00 - 12:00",
        vagas: 30,
        formLink: "https://forms.gle/w1KmD4qF5sCfoytR6",
      },
      {
        id: "le-tarde",
        shift: "Tarde",
        title: "From English Learners to Responsible Digital Citizens!",
        professor: "Prof.Josué Gomes",
        horario: "13:00 - 17:00",
        vagas: 30,
        formLink: "https://forms.gle/w1KmD4qF5sCfoytR6",
      },
   {
        id: "le-manha-2",
        shift: "Manhã",
        title: "Mídias Digitais e Saúde Mental no Contexto Escolar",
        professor: "Clara Daela e Luciana Magalhães",
        horario: "08:00 - 12:00",
        vagas: 30,
        formLink: "https://forms.gle/w1KmD4qF5sCfoytR6",
      },
      {
        id: "le-tarde-2",
        shift: "Tarde",
        title: "Mídias Digitais e Saúde Mental no Contexto Escolar.",
        professor: "Clara Daela e Luciana Magalhães",
        horario: "13:00 - 17:00",
        vagas: 30,
        formLink: "https://forms.gle/w1KmD4qF5sCfoytR6",
      },

    ],
  },
  {
    id: "educacao-fisica",
    name: "Educação Física",
    icon: "Dumbbell",
    description: "Práticas inovadoras em Educação Física escolar, incluindo esportes adaptados, jogos cooperativos e saúde integral.",
    data: "26 de Março de 2026",
    publicoAlvo: "Professores de Educação Física",
    cargaHoraria: "4 horas",
    location: "EREM ÁUREA DE MOURA CAVALCANTI",
    mapUrl: locWorkshopEduFisica,
    sessions: [
      {
        id: "ef-manha",
        shift: "Manhã",
        title: "Futebol, Sociedade e Cidadania Digital: práticas interdisciplinares entre Educação Física e História",
        professor: "Prof.José Dário",
        horario: "08:00 - 12:00",
        vagas: 25,
        formLink: "https://forms.gle/FC1Eb3EtaW5qHrLT7",
      },
      {
        id: "ef-tarde",
        shift: "Tarde",
        title: "Futebol, Sociedade e Cidadania Digital: práticas interdisciplinares entre Educação Física e História",
        professor: "Prof.José Dário",
        horario: "13:00 - 17:00",
        vagas: 25,
        formLink: "https://forms.gle/FC1Eb3EtaW5qHrLT7",
      },
    ],
  },
  {
    id: "arte",
    name: "Arte",
    icon: "Palette",
    description: "O ensino de Arte como ferramenta de transformation social, explorando linguagens artísticas contemporâneas e expression criativa.",
    data: "19 de Março de 2026",
    publicoAlvo: "Professores de Arte e Educação Artística",
    cargaHoraria: "4 horas",
    location: "EREM SANTOS COSME E DAMIÃO",
    mapUrl: locWorkshopArte,
    sessions: [
      {
        id: "arte-manha",
        shift: "Manhã",
        title: "Caranguejos com cérebro: conectando a Lama ao Global",
        professor: "Prof.Ayla",
        horario: "08:00 - 12:00",
        vagas: 25,
        formLink: "https://forms.gle/9KgK49d1u7Ym3HCCA",
      },
      {
        id: "arte-tarde",
        shift: "Tarde",
        title: "Caranguejos com cérebro: conectando a Lama ao Global",
        professor: "Prof.Ayla",
        horario: "13:00 - 17:00",
        vagas: 25,
        formLink: "https://forms.gle/9KgK49d1u7Ym3HCCA",
      },
    ],
  },
  {
    id: "biblioteca",
    name: "Biblioteca",
    icon: "Library",
    description: "O papel da biblioteca escolar na formação de leitores e pesquisadores, mediação de leitura e curadoria de acervos digitais.",
    data: "19 de Março de 2026",
    publicoAlvo: "Bibliotecários e mediadores de leitura",
    cargaHoraria: "4 horas",
    location: "EREF JERÔNIMO DE ALBUQUERQUE",
    mapUrl: locWorkshopBiblio,
    sessions: [
      {
        id: "bib-tarde",
        shift: "Tarde",
        title: "Projeto LEIA 2026 – Transformação das Bibliotecas Escolares em Hubs de Inovação",
        professor: "Prof.Luciana Sales",
        horario: "13:00 - 17:00",
        vagas: 20,
        formLink: "https://forms.gle/su6CTxfQF9Sp876Q7",
      },
    ],
  },
  {
    id: "pts",
    name: "PROJETO TRABALHO E SOCIEDADE - PTS",
    icon: "Briefcase",
    description: "O objetivo da formação é orientar a construção das aulas do componente curricular PTS.",
    data: "23 de Março de 2026",
    publicoAlvo: "Professores que lecionam o componente PTS e áreas afins",
    cargaHoraria: "4 horas",
    location: "ETE JOSÉ ALENCAR GOMES DA SILVA",
    mapUrl: locWorkshopMat,
    sessions: [
      {
        id: "pts-manha",
        shift: "Manhã",
        title: "Desconstruindo desafios do PTS",
        professor: "Profs.Monica e ADILSON",
        horario: "08:00 - 12:00",
        vagas: 30,
        formLink: "https://forms.gle/fF9kfZ1JmvALLPvm9",
      },
      {
        id: "pts-tarde",
        shift: "Tarde",
        title: "Desconstruindo desafios do PTS",
        professor: "Profs.Monica e Adilson",
        horario: "13:00 - 17:00",
        vagas: 30,
        formLink: "https://forms.gle/fF9kfZ1JmvALLPvm9",
      },
    ],
  },
  {
    id: "historia-pe",
    name: "História de Pernambuco",
    icon: "Flag",
    description: "Esta formação visa apresentar o novo itinerário formativo de aprofundamento: História de Pernambuco, bem como suas orientações, objetivos e princípios, a fim de garantir a aplicabilidade na rede estadual de ensino. Além disso, buscamos ampliar os debates sobre a participação histórica de sujeitos e sujeitas silenciadas na historiografia. Inicialmente nosso enfoque será direcionado às mulheres envolvidas em eventos históricos, estabelecendo uma conexão com a comemoração do Dia internacional das Mulheres e os estudos de gênero. Nosso intuito é tornar as professoras e os professores mediadores das pesquisas desenvolvidas pelos alunos e alunas, a partir de novas abordagens e  trajetórias",
    data: "25 de Março de 2026",
    publicoAlvo: "Professores de História e áreas de Ciências Humanas",
    cargaHoraria: "4 horas",
    location: "EREFEM Polivalente de Abreu e Lima",
    mapUrl: locWorkshopHist,
    sessions: [
      {
        id: "hist-pe-manha",
        shift: "Manhã",
        title: "História de Pernambuco: novo itinerário e perspectivas de ensino",
        professor: "Profs.Rafaela Franklin e Andreia Bandeira",
        horario: "08:00 - 12:00",
        vagas: 30,
        formLink: "https://forms.gle/xmv1UX7mNcRBfcGG6",
      },
      {
        id: "hist-pe-tarde",
        shift: "Tarde",
        title: "História de Pernambuco: novo itinerário e perspectivas de ensino",
        professor: "Profs.Rafaela Franklin e Andreia Bandeira",
        horario: "13:00 - 17:00",
        vagas: 30,
        formLink: "https://forms.gle/xmv1UX7mNcRBfcGG6",
      },
    ],
  },
  {
    id: "corpo-arte-movimento",
    name: "Corpo, Arte e Movimento",
    icon: "Music",
    description: "O objetivo da oficina sobre corpo, arte e movimento é promover o desenvolvimento integral dos participantes por meio da expressão corporal e artística. A proposta busca estimular a consciência do próprio corpo, a criatividade e a capacidade de comunicação através de gestos, ritmos e movimentos. Além disso, a oficina incentiva a socialização, o respeito às diferenças e o trabalho em equipe, fortalecendo valores como cooperação e empatia.",
    data: "20 de Março de 2026",
    publicoAlvo: "Professores de Educação Física, Arte e áreas afins",
    cargaHoraria: "4 horas",
    location: "ETE JOSÉ ALENCAR GOMES DA SILVA",
    mapUrl: locWorkshopMat,
    sessions: [
      {
        id: "cam-manha",
        shift: "Manhã",
        title: "MEU CORPO FALA?",
        professor: "Prof.Josiane Oliveira",
        horario: "08:00 - 12:00",
        vagas: 25,
        formLink: "https://forms.gle/fN9aAtkMiWiZFMTb6",
      },
    
    ],
  },
  {
    id: "filosofia-sociologia",
    name: "Filosofia e Sociologia",
    icon: "Brain",
    description: "A oficina propõe uma reflexão sobre o papel da Filosofia e da Sociologia diante de uma sociedade marcada pelas relações digitais, onde os estudantes constroem identidades, valores e opiniões. Na perspectiva da Filosofia, serão discutidos temas como ética, liberdade e responsabilidade nas redes sociais, buscando estratégias para trabalhar esses conceitos de forma concreta em sala de aula. Já na Sociologia, o foco será compreender as juventudes como sujeitos diversos, influenciados pelas dinâmicas digitais na construção de pertencimentos e formas de participação social, estimulando o pensamento crítico. A formação prioriza o diálogo, a troca de experiências e a construção coletiva de práticas pedagógicas, fortalecendo o trabalho docente com rigor conceitual e conexão com a realidade dos estudantes.",
    data: "18 de Março de 2026",
    publicoAlvo: "Professores de Filosofia e Sociologia",
    cargaHoraria: "4 horas",
    location: "EREM SANTOS COSME E DAMIÃO",
    mapUrl: locWorkshopFiloSociologia,
    sessions: [

      {
        id: "fs-tarde",
        shift: "Tarde",
        title: "EDUCAR NA ERA DIGITAL: ÉTICA, JUVENTUDES E IDENTIDADES EM REDE",
        professor: "Prof.Rômulo Nascimento Filgueira",
        horario: "13:00 - 17:00",
        vagas: 30,
        formLink: "https://forms.gle/zwnXFCnvXskb9Dpe7",
      },
    ],
  },
  {
    id: "educador-apoio",
    name: "Educador de Apoio",
    icon: "HelpingHand",
    description: "A formação abordará as relações entre a avaliação da aprendizagem realizada na sala de aula e os instrumentos, resultados e implicações das avaliações em larga escala para a prática pedagógica. O encontro propõe ampliar a compreensão sobre o alinhamento necessário avaliação interna e externa, analisando indicadores educacionais à luz das práticas pedagógicas cotidianas, .fortalecendo o papel do Educador de Apoio como mediador entre dados e ação docente para  transformar resultados em intervenções formativas. A proposta articula análise crítica, tomada de decisão e construção coletiva de estratégias para qualificar as aprendizagens em nossas escolas.",
    data: "31 de Março de 2026",
    publicoAlvo: "Educadores de Apoio e Profissionais da Educação Especial",
    cargaHoraria: "4 horas",
    location: "ETE JOSÉ ALENCAR GOMES DA SILVA",
    mapUrl: locWorkshopMat,
    sessions: [
    
      {
        id: "ea-tarde",
        shift: "Tarde",
        title: "Entre a Sala e os Indicadores: Construindo Pontes entre a Avaliação da Aprendizagem e a Avaliação em Larga Escala",
        professor: "VALÉRIA OLIVEIRA",
        horario: "13:00 - 17:00",
        vagas: 25,
        formLink: "https://forms.gle/M74A4LKZHGzKD1DJ8",
      },
    ],
  },
];
