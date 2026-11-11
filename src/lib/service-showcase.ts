import type { ServiceCatalogCategory } from "@/lib/service-catalog";

/** Витрина как на сайте Ростова: три основные работы в каждой группе. */
export const SERVICE_SHOWCASE: Partial<
  Record<
    ServiceCatalogCategory,
    readonly {
      title: string;
      image: string;
      priceGroup: string;
      lead: readonly string[];
    }[]
  >
> = {
  elektrik: [
    {
      title: "Розетки и выключатели",
      image: "/works/elektrik/groups/rozetki-3.webp",
      priceGroup: "Розетки и выключатели",
      lead: ["ustanovka-rozetok", "ustanovka-vyklyuchatelya", "ustanovka-prohodnogo-vyklyuchatelya"],
    },
    {
      title: "Освещение",
      image: "/works/elektrik/groups/osveshchenie.webp",
      priceGroup: "Освещение",
      lead: ["sborka-lyustry", "ustanovka-lyustry", "ustanovka-svetilnika"],
    },
    {
      title: "Щит и автоматы",
      image: "/works/elektrik/groups/shchit.webp",
      priceGroup: "Щит и автоматы",
      lead: ["ustanovka-avtomata-1-polyus", "montazh-elektroshchita-12-moduley", "ustanovka-elektroschetchika"],
    },
    {
      title: "Проводка и кабель",
      image: "/works/elektrik/groups/provodka.webp",
      priceGroup: "Проводка и кабель",
      lead: ["prokladka-kabelya", "prokladka-kabelya-v-gofre", "shtroblenie-betonnoy-steny"],
    },
    {
      title: "Диагностика и монтаж",
      image: "/works/elektrik/groups/diagnostika.webp",
      priceGroup: "Диагностика и монтаж",
      lead: ["diagnostika-elektroseti", "ustanovka-teplogo-pola", "montazh-videonablyudeniya"],
    },
    {
      title: "Демонтаж",
      image: "/works/elektrik/groups/demontazh.webp",
      priceGroup: "Демонтаж",
      lead: [
        "demontazh-rozetki-ili-vyklyuchatelya",
        "demontazh-lyustry-ili-svetilnika",
        "demontazh-elektroshchita",
      ],
    },
  ],
  santehnik: [
    {
      title: "Смесители",
      image: "/works/santehnik/groups/smesiteli.webp",
      priceGroup: "Смесители",
      lead: [
        "ustanovka-smesitelya-otechestvennyy",
        "ustanovka-smesitelya-importnyy",
        "zamena-kartridzha-ili-prokladki",
        "ustanovka-gigienicheskogo-dusha",
      ],
    },
    {
      title: "Унитазы и биде",
      image: "/works/santehnik/groups/unitazy.webp",
      priceGroup: "Унитазы и биде",
      lead: ["ustanovka-unitaza", "ustanovka-installyatsii", "remont-armatury-bachka"],
    },
    {
      title: "Ванны и душевые",
      image: "/works/santehnik/groups/vanny.webp",
      priceGroup: "Ванны и душевые",
      lead: ["ustanovka-akrilovoy-vanny", "ustanovka-dushevoy-kabiny", "germetizatsiya-vanny-ili-dushevoy"],
    },
    {
      title: "Раковины",
      image: "/works/santehnik/groups/rakoviny.webp",
      priceGroup: "Раковины и сифоны",
      lead: ["ustanovka-rakoviny", "ustanovka-sifona", "demontazh-rakoviny"],
    },
    {
      title: "Засоры и протечки",
      image: "/works/santehnik/groups/zasory.webp",
      priceGroup: "Засоры и аварии",
      lead: ["prochistka-kanalizatsii", "ustranenie-zasora", "ustranenie-protechki"],
    },
    {
      title: "Трубы",
      image: "/works/santehnik/groups/truby.webp",
      priceGroup: "Трубы и инженерия",
      lead: ["razvodka-trub", "ustanovka-sharovogo-krana", "ustanovka-schetchika-vody"],
    },
    {
      title: "Бойлеры и фильтры",
      image: "/works/santehnik/groups/boylery.webp",
      priceGroup: "Водонагреватели и фильтры",
      lead: [
        "ustanovka-vodonagrevatelya-do-50-l",
        "podklyuchenie-protochnogo-vodonagrevatelya",
        "ustanovka-filtra-dlya-vody",
      ],
    },
  ],
  "master-na-chas": [
    {
      title: "Мебель и интерьер",
      image: "/works/master-na-chas/groups/mebel.webp",
      priceGroup: "Мебель и интерьер",
      lead: ["sborka-mebeli", "sborka-kuhonnogo-garnitura", "ustanovka-polok-i-zerkal"],
    },
    {
      title: "Двери и фурнитура",
      image: "/works/master-na-chas/groups/dveri.webp",
      priceGroup: "Двери и фурнитура",
      lead: ["ustanovka-zamka", "zamena-dvernoy-ruchki", "ustanovka-dovodchika"],
    },
    {
      title: "Кухонная техника",
      image: "/works/master-na-chas/groups/kuhnya.webp",
      priceGroup: "Кухонная техника",
      lead: ["podklyuchenie-varochnoy-paneli", "ustanovka-vytyazhki", "podklyuchenie-posudomoechnoy-mashiny"],
    },
    {
      title: "Бытовая техника",
      image: "/works/master-na-chas/groups/bytovaya.webp",
      priceGroup: "Бытовая техника",
      lead: ["kreplenie-televizora-na-stenu", "podklyuchenie-stiralnoy-mashiny", "ustanovka-vodonagrevatelya"],
    },
    {
      title: "Отопление и полотенцесушитель",
      image: "/works/master-na-chas/groups/otoplenie.webp",
      priceGroup: "Отопление и полотенцесушитель",
      lead: ["ustanovka-polotentsesushitelya", "ustanovka-radiatora-otopleniya", "perenos-polotentsesushitelya"],
    },
    {
      title: "Мелкий ремонт",
      image: "/works/master-na-chas/groups/melkiy.webp",
      priceGroup: "Мелкий ремонт",
      lead: ["sverlenie-otverstiy", "zamena-smesitelya", "ustanovka-lyustry-ili-svetilnika"],
    },
    {
      title: "Вызов мастера",
      image: "/works/master-na-chas/groups/vyzov.webp",
      priceGroup: "Вызов мастера",
      lead: ["pomoshch-posle-pereezda", "pochasovaya-oplata-mastera", "minimalnyy-vyzov-mastera"],
    },
  ],
};

export const SHOWCASE_TITLES: Record<string, string> = {
  "ustranenie-zasora": "Устранение засора сантехническим тросом",
};
