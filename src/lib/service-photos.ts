/** Кадры услуг с сайта Ростова: три фото на работу, если они есть. */
const PHOTO_STEMS: Record<string, readonly string[]> = {
  elektrik: ["demontazh-elektroshchita", "demontazh-lyustry-ili-svetilnika", "demontazh-rozetki-ili-vyklyuchatelya", "diagnostika-elektroseti", "montazh-elektroshchita-12-moduley", "montazh-videonablyudeniya", "prokladka-kabelya", "prokladka-kabelya-v-gofre", "sborka-lyustry", "shtroblenie-betonnoy-steny", "ustanovka-avtomata-1-polyus", "ustanovka-elektroschetchika", "ustanovka-lyustry", "ustanovka-prohodnogo-vyklyuchatelya", "ustanovka-rozetki", "ustanovka-svetilnika", "ustanovka-teplogo-pola", "ustanovka-vyklyuchatelya"],
  santehnik: ["demontazh-rakoviny", "germetizatsiya-vanny-ili-dushevoy", "podklyuchenie-protochnogo-vodonagrevatelya", "prochistka-kanalizatsii", "razvodka-trub", "remont-armatury-bachka", "ustanovka-akrilovoy-vanny", "ustanovka-dushevoy-kabiny", "ustanovka-filtra-dlya-vody", "ustanovka-gigienicheskogo-dusha", "ustanovka-installyatsii", "ustanovka-rakoviny", "ustanovka-schetchika-vody", "ustanovka-sharovogo-krana", "ustanovka-sifona", "ustanovka-smesitelya", "ustanovka-unitaza", "ustanovka-vodonagrevatelya-do-50-l", "ustranenie-protechki", "ustranenie-zasora", "zamena-kartridzha-ili-prokladki"],
  "master-na-chas": ["kreplenie-televizora-na-stenu", "minimalnyy-vyzov-mastera", "perenos-polotentsesushitelya", "pochasovaya-oplata-mastera", "podklyuchenie-posudomoechnoy-mashiny", "podklyuchenie-stiralnoy-mashiny", "podklyuchenie-varochnoy-paneli", "pomoshch-posle-pereezda", "sborka-kuhonnogo-garnitura", "sborka-mebeli", "sverlenie-otverstiy", "ustanovka-dovodchika", "ustanovka-lyustry-ili-svetilnika", "ustanovka-polok-i-zerkal", "ustanovka-polotentsesushitelya", "ustanovka-radiatora-otopleniya", "ustanovka-vodonagrevatelya", "ustanovka-vytyazhki", "ustanovka-zamka", "zamena-dvernoy-ruchki", "zamena-smesitelya"],
};

const SLUG_ALIAS: Record<string, string> = {
  "ustanovka-rozetok": "ustanovka-rozetki",
};

/** Если кадры отличаются от стандартных 2-3-4. */
const PHOTO_FRAMES: Record<string, readonly number[]> = {
  "elektrik:ustanovka-rozetki": [6, 3, 4],
};

export function servicePhotos(category: string, slug: string): string[] | null {
  const stem = SLUG_ALIAS[slug] ?? slug;
  const known = PHOTO_STEMS[category];
  if (!known?.includes(stem)) return null;
  const frames = PHOTO_FRAMES[`${category}:${stem}`] ?? [2, 3, 4];
  return frames.map((index) => `/works/${category}/services/${stem}-${index}.webp`);
}

const GROUP_COVERS: Record<string, string> = {
  Смесители: "/works/santehnik/groups/smesiteli.webp",
  "Унитазы и биде": "/works/santehnik/groups/unitazy.webp",
  "Ванны и душевые": "/works/santehnik/groups/vanny.webp",
  "Раковины и сифоны": "/works/santehnik/groups/rakoviny.webp",
  "Засоры и аварии": "/works/santehnik/groups/zasory.webp",
  "Трубы и инженерия": "/works/santehnik/groups/truby.webp",
  "Водонагреватели и фильтры": "/works/santehnik/groups/boylery.webp",
  "Розетки и выключатели": "/works/elektrik/groups/rozetki.webp",
  Освещение: "/works/elektrik/groups/osveshchenie.webp",
  "Щит и автоматы": "/works/elektrik/groups/shchit.webp",
  "Проводка и кабель": "/works/elektrik/groups/provodka.webp",
  "Диагностика и монтаж": "/works/elektrik/groups/diagnostika.webp",
  Демонтаж: "/works/elektrik/groups/demontazh.webp",
  "Мебель и интерьер": "/works/master-na-chas/groups/mebel.webp",
  "Двери и фурнитура": "/works/master-na-chas/groups/dveri.webp",
  "Кухонная техника": "/works/master-na-chas/groups/kuhnya.webp",
  "Бытовая техника": "/works/master-na-chas/groups/bytovaya.webp",
  "Отопление и полотенцесушитель": "/works/master-na-chas/groups/otoplenie.webp",
  "Мелкий ремонт": "/works/master-na-chas/groups/melkiy.webp",
  "Вызов мастера": "/works/master-na-chas/groups/vyzov.webp",
};

export function groupCover(title: string): string | undefined {
  return GROUP_COVERS[title];
}
