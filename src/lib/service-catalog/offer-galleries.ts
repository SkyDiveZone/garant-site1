import type { ServiceOfferGalleryImage } from "@/lib/service-catalog/types";

/** Уникальные галереи для отдельных посадочных — переопределяют шаблон по умолчанию */
export const ELEKTRIK_OFFER_GALLERIES: Partial<
  Record<string, readonly ServiceOfferGalleryImage[]>
> = {
  "ustanovka-rozetki-otkrytaya-provodka": [
    {
      src: "/works/elektrik/ustanovka-rozetki-otkrytaya-provodka/01-surface-mount.png",
      alt: "Установка розетки с открытой проводкой — монтаж накладной коробки на стену",
    },
    {
      src: "/works/elektrik/ustanovka-rozetki-otkrytaya-provodka/02-installation.png",
      alt: "Электрик подключает розетку — монтаж механизма и проводов",
    },
    {
      src: "/works/elektrik/ustanovka-rozetki-otkrytaya-provodka/03-wiring-prep.png",
      alt: "Подготовка проводов к установке розетки",
    },
  ],
  "ustanovka-rozetki-skrytaya-provodka": [
    {
      src: "/works/elektrik/ustanovka-rozetki-skrytaya-provodka/01-switch-mount.png",
      alt: "Установка розетки со скрытой проводкой — монтаж механизма в подрозетник",
    },
    {
      src: "/works/elektrik/ustanovka-rozetki-skrytaya-provodka/02-wiring-connection.png",
      alt: "Подключение проводов к розетке — скрытая проводка в стене",
    },
    {
      src: "/works/elektrik/ustanovka-rozetki-skrytaya-provodka/03-triple-outlet.png",
      alt: "Установка блока розеток со скрытой проводкой — монтаж декоративной рамки",
    },
  ],
  "ustanovka-vyklyuchatelya": [
    {
      src: "/works/elektrik/ustanovka-vyklyuchatelya/01-open-wiring.png",
      alt: "Установка выключателя с открытой проводкой — подключение проводов в накладную коробку",
    },
    {
      src: "/works/elektrik/ustanovka-vyklyuchatelya/02-concealed-wiring.png",
      alt: "Установка выключателя со скрытой проводкой — монтаж механизма в стену",
    },
    {
      src: "/works/elektrik/ustanovka-vyklyuchatelya/03-flush-mount.png",
      alt: "Установка выключателя — монтаж механизма на стену",
    },
  ],
  "blok-rozetok-kuhnya-vannaya": [
    {
      src: "/works/elektrik/blok-rozetok-kuhnya-vannaya/01-popup-countertop.png",
      alt: "Блок розеток на кухне — выдвижной блок в столешнице с подключённым прибором",
    },
    {
      src: "/works/elektrik/blok-rozetok-kuhnya-vannaya/02-popup-vertical.png",
      alt: "Блок розеток на кухне — вертикальный выдвижной блок в столешнице",
    },
    {
      src: "/works/elektrik/blok-rozetok-kuhnya-vannaya/03-kitchen-island.png",
      alt: "Блок розеток на кухне — монтаж тройной розетки на острове",
    },
  ],
  "ustanovka-zvonka": [
    {
      src: "/works/elektrik/ustanovka-zvonka/01-video-intercom.png",
      alt: "Установка дверного звонка — видеодомофон на кирпичной стене",
    },
    {
      src: "/works/elektrik/ustanovka-zvonka/02-doorbell-button.png",
      alt: "Установка дверного звонка — кнопка вызова у входной двери",
    },
    {
      src: "/works/elektrik/ustanovka-zvonka/03-wiring-install.png",
      alt: "Установка дверного звонка — подключение проводов к вызывной панели",
    },
  ],
  "ustanovka-termoregulyatora-teplogo-pola": [
    {
      src: "/works/elektrik/ustanovka-termoregulyatora-teplogo-pola/01-wiring-back.png",
      alt: "Установка терморегулятора тёплого пола — подключение проводов на задней стороне",
    },
    {
      src: "/works/elektrik/ustanovka-termoregulyatora-teplogo-pola/02-room-stat.png",
      alt: "Установка терморегулятора тёплого пола — настройка настенного термостата",
    },
    {
      src: "/works/elektrik/ustanovka-termoregulyatora-teplogo-pola/03-iwarm-install.png",
      alt: "Установка терморегулятора тёплого пола — монтаж и подключение к нагреву",
    },
  ],
  "sborka-lyustry": [
    {
      src: "/works/elektrik/sborka-lyustry/01-assembly-table.png",
      alt: "Сборка люстры — подключение проводов и сборка основания на столе",
    },
    {
      src: "/works/elektrik/sborka-lyustry/02-ceiling-wiring.png",
      alt: "Сборка люстры — подключение проводки при монтаже на потолок",
    },
    {
      src: "/works/elektrik/sborka-lyustry/03-led-assembly.png",
      alt: "Сборка люстры — сборка LED-светильника и подготовка к установке",
    },
  ],
  "ustanovka-lyustry": [
    {
      src: "/works/elektrik/ustanovka-lyustry/01-ceiling-wiring.png",
      alt: "Установка люстры — подключение проводов к люстре на потолке",
    },
    {
      src: "/works/elektrik/ustanovka-lyustry/02-chandelier-wiring.png",
      alt: "Установка люстры — сборка и подключение проводки в основании",
    },
    {
      src: "/works/elektrik/ustanovka-lyustry/03-ceiling-mount.png",
      alt: "Установка люстры — крепление и монтаж на потолок",
    },
  ],
  "ustanovka-svetilnika": [
    {
      src: "/works/elektrik/ustanovka-svetilnika/01-ceiling-install.png",
      alt: "Установка светильника — монтаж потолочного светильника электриком",
    },
    {
      src: "/works/elektrik/ustanovka-svetilnika/02-wall-sconce.png",
      alt: "Установка бра — монтаж настенного светильника и подключение проводов",
    },
    {
      src: "/works/elektrik/ustanovka-svetilnika/03-led-fixture.png",
      alt: "Установка светильника — подключение LED-потолочного светильника",
    },
  ],
  "ustanovka-tochechnogo-svetilnika": [
    {
      src: "/works/elektrik/ustanovka-tochechnogo-svetilnika/01-bracket-mount.png",
      alt: "Установка точечного светильника — подготовка крепления под натяжной потолок",
    },
    {
      src: "/works/elektrik/ustanovka-tochechnogo-svetilnika/02-wiring-install.png",
      alt: "Установка точечного светильника — подключение проводов и монтаж",
    },
    {
      src: "/works/elektrik/ustanovka-tochechnogo-svetilnika/03-ceiling-insert.png",
      alt: "Установка точечного светильника — вставка светильника в потолок",
    },
  ],
  "montazh-led-lenty": [
    {
      src: "/works/elektrik/montazh-led-lenty/01-corner-solder.png",
      alt: "Монтаж LED-ленты — соединение отрезков ленты в углу профиля",
    },
    {
      src: "/works/elektrik/montazh-led-lenty/02-diffuser-install.png",
      alt: "Монтаж LED-ленты — установка рассеивателя в алюминиевый профиль",
    },
    {
      src: "/works/elektrik/montazh-led-lenty/03-profile-lighting.png",
      alt: "Монтаж LED-ленты — готовая подсветка в алюминиевом профиле",
    },
  ],
  "montazh-profilya-led-lenty": [
    {
      src: "/works/elektrik/montazh-profilya-led-lenty/01-ceiling-cross.png",
      alt: "Монтаж профиля для LED-ленты — крепление профиля на потолок",
    },
    {
      src: "/works/elektrik/montazh-profilya-led-lenty/02-wall-recess.png",
      alt: "Монтаж профиля для LED-ленты — встраивание профиля в стену",
    },
    {
      src: "/works/elektrik/montazh-profilya-led-lenty/03-niche-install.png",
      alt: "Монтаж профиля для LED-ленты — установка в нишу потолка",
    },
  ],
  "ustanovka-avtomata-1-polyus": [
    {
      src: "/works/elektrik/ustanovka-avtomata-1-polyus/01.png",
      alt: "Установка автомата 1 полюс — монтаж и подключение в щитке",
    },
    {
      src: "/works/elektrik/ustanovka-avtomata-1-polyus/02.png",
      alt: "Установка автомата 1 полюс — подключение проводов к автомату",
    },
    {
      src: "/works/elektrik/ustanovka-avtomata-1-polyus/03.png",
      alt: "Установка автомата 1 полюс — сборка модулей на DIN-рейке",
    },
  ],
  "ustanovka-avtomata-2-polyusa-uzo": [
    {
      src: "/works/elektrik/ustanovka-avtomata-2-polyusa-uzo/01.png",
      alt: "Установка автомата 2 полюса или УЗО — подключение в щитке",
    },
    {
      src: "/works/elektrik/ustanovka-avtomata-2-polyusa-uzo/02.png",
      alt: "Установка УЗО — монтаж дифференциального автомата",
    },
    {
      src: "/works/elektrik/ustanovka-avtomata-2-polyusa-uzo/03.png",
      alt: "Установка автомата 2 полюса — работа электрика в щитке",
    },
  ],
  "ustanovka-avtomata-3-polyusa": [
    {
      src: "/works/elektrik/ustanovka-avtomata-3-polyusa/01.png",
      alt: "Установка автомата 3 полюса — монтаж трёхполюсного автомата",
    },
    {
      src: "/works/elektrik/ustanovka-avtomata-3-polyusa/02.png",
      alt: "Установка автомата 3 полюса — подключение проводов на DIN-рейке",
    },
    {
      src: "/works/elektrik/ustanovka-avtomata-3-polyusa/03.png",
      alt: "Установка автомата 3 полюса — сборка щитка",
    },
  ],
  "montazh-elektroshchita-12-moduley": [
    {
      src: "/works/elektrik/montazh-elektroshchita-12-moduley/01.png",
      alt: "Монтаж электрощита до 12 модулей — сборка и проверка щитка",
    },
    {
      src: "/works/elektrik/montazh-elektroshchita-12-moduley/02.png",
      alt: "Монтаж электрощита до 12 модулей — аккуратная разводка проводов",
    },
    {
      src: "/works/elektrik/montazh-elektroshchita-12-moduley/03.png",
      alt: "Монтаж электрощита до 12 модулей — подключение автоматов и УЗО",
    },
  ],
  "montazh-elektroshchita-24-moduley": [
    {
      src: "/works/elektrik/montazh-elektroshchita-24-moduley/01.png",
      alt: "Монтаж электрощита до 24 модулей — сборка и проверка щитка",
    },
    {
      src: "/works/elektrik/montazh-elektroshchita-24-moduley/02.png",
      alt: "Монтаж электрощита до 24 модулей — аккуратная разводка проводов",
    },
    {
      src: "/works/elektrik/montazh-elektroshchita-24-moduley/03.png",
      alt: "Монтаж электрощита до 24 модулей — подключение автоматов и УЗО",
    },
  ],
  "ustanovka-elektroschetchika": [
    {
      src: "/works/elektrik/ustanovka-elektroschetchika/01-panel-install.png",
      alt: "Установка электросчётчика — монтаж счётчика в щитке на DIN-рейке",
    },
    {
      src: "/works/elektrik/ustanovka-elektroschetchika/02-outdoor-meter.png",
      alt: "Установка электросчётчика — подключение счётчика и автоматов в щите",
    },
    {
      src: "/works/elektrik/ustanovka-elektroschetchika/03-digital-meter.png",
      alt: "Установка электросчётчика — монтаж цифрового счётчика Меркурий",
    },
  ],
  "prokladka-kabelya": [
    {
      src: "/works/elektrik/prokladka-kabelya/01-cable-tray.png",
      alt: "Прокладка кабеля — монтаж кабеля в лотках",
    },
    {
      src: "/works/elektrik/prokladka-kabelya/02-floor-routing.png",
      alt: "Прокладка кабеля — организация трасс по полу на объекте",
    },
    {
      src: "/works/elektrik/prokladka-kabelya/03-cable-layout.png",
      alt: "Прокладка кабеля — аккуратная разводка по помещению",
    },
  ],
  "prokladka-kabelya-v-gofre": [
    {
      src: "/works/elektrik/prokladka-kabelya-v-gofre/01-corrugated-floor.png",
      alt: "Прокладка кабеля в гофре — монтаж гофры по полу",
    },
    {
      src: "/works/elektrik/prokladka-kabelya-v-gofre/02-corrugated-orange.png",
      alt: "Прокладка кабеля в гофре — укладка оранжевой гофры",
    },
    {
      src: "/works/elektrik/prokladka-kabelya-v-gofre/03-corrugated-bundles.png",
      alt: "Прокладка кабеля в гофре — пучки гофры в несколько линий",
    },
  ],
  "montazh-kabel-kanala": [
    {
      src: "/works/elektrik/montazh-kabel-kanala/01-marking.png",
      alt: "Монтаж кабель-канала — разметка линии установки на стене",
    },
    {
      src: "/works/elektrik/montazh-kabel-kanala/02-finished-trunking.png",
      alt: "Монтаж кабель-канала — готовая система с розетками и углами",
    },
    {
      src: "/works/elektrik/montazh-kabel-kanala/03-corner-install.png",
      alt: "Монтаж кабель-канала — установка углового элемента и крышки",
    },
  ],
  "shtroblenie-kirpichnoy-steny": [
    {
      src: "/works/elektrik/shtroblenie-kirpichnoy-steny/01-wall-chasing.png",
      alt: "Штробление кирпичной стены — резка штробы с пылеотводом",
    },
    {
      src: "/works/elektrik/shtroblenie-kirpichnoy-steny/02-conduits-in-strobe.png",
      alt: "Штробление кирпичной стены — прокладка гофры в штробе",
    },
    {
      src: "/works/elektrik/shtroblenie-kirpichnoy-steny/03-rothenberger-tool.png",
      alt: "Штробление кирпичной стены — работа штроборезом по кирпичу",
    },
  ],
  "shtroblenie-betonnoy-steny": [
    {
      src: "/works/elektrik/shtroblenie-betonnoy-steny/01-cables-in-strobe.png",
      alt: "Штробление бетонной стены — прокладка кабеля в штробах",
    },
    {
      src: "/works/elektrik/shtroblenie-betonnoy-steny/02-socket-boxes.png",
      alt: "Штробление бетонной стены — подрозетники и вертикальные штробы",
    },
    {
      src: "/works/elektrik/shtroblenie-betonnoy-steny/03-angle-grinder.png",
      alt: "Штробление бетонной стены — резка штробы болгаркой",
    },
  ],
  "sverlenie-pod-rozetnik": [
    {
      src: "/works/elektrik/sverlenie-pod-rozetnik/01-mounting-boxes.png",
      alt: "Сверление под подрозетник — установка подрозетников в стену",
    },
    {
      src: "/works/elektrik/sverlenie-pod-rozetnik/02-core-drill.png",
      alt: "Сверление под подрозетник — бурение коронкой с пылеотводом",
    },
    {
      src: "/works/elektrik/sverlenie-pod-rozetnik/03-double-holes.png",
      alt: "Сверление под подрозетник — отверстия под двойную розетку",
    },
  ],
  "demontazh-rozetki-ili-vyklyuchatelya": [
    {
      src: "/works/elektrik/demontazh-rozetki-ili-vyklyuchatelya/01-disconnect-wires.png",
      alt: "Демонтаж розетки или выключателя — отключение проводов",
    },
    {
      src: "/works/elektrik/demontazh-rozetki-ili-vyklyuchatelya/02-remove-switch.png",
      alt: "Демонтаж розетки или выключателя — снятие двойного выключателя",
    },
    {
      src: "/works/elektrik/demontazh-rozetki-ili-vyklyuchatelya/03-dismantle-outlet.png",
      alt: "Демонтаж розетки или выключателя — разборка механизма из стены",
    },
  ],
  "demontazh-lyustry-ili-svetilnika": [
    {
      src: "/works/elektrik/demontazh-lyustry-ili-svetilnika/01-ceiling-spot.png",
      alt: "Демонтаж люстры или светильника — снятие точечного светильника с потолка",
    },
    {
      src: "/works/elektrik/demontazh-lyustry-ili-svetilnika/02-recessed-light.png",
      alt: "Демонтаж люстры или светильника — отключение проводов встроенного светильника",
    },
    {
      src: "/works/elektrik/demontazh-lyustry-ili-svetilnika/03-chandelier-wiring.png",
      alt: "Демонтаж люстры или светильника — разборка проводки люстры",
    },
  ],
  "demontazh-avtomata-v-shchite": [
    {
      src: "/works/elektrik/demontazh-avtomata-v-shchite/01-breaker-terminal.png",
      alt: "Демонтаж автомата в щите — откручивание клеммы автомата",
    },
    {
      src: "/works/elektrik/demontazh-avtomata-v-shchite/02-hager-breaker.png",
      alt: "Демонтаж автомата в щите — отключение проводов от автомата Hager",
    },
    {
      src: "/works/elektrik/demontazh-avtomata-v-shchite/03-abb-panel.png",
      alt: "Демонтаж автомата в щите — работа в распределительном щитке ABB",
    },
  ],
  "demontazh-elektroshchita": [
    {
      src: "/works/elektrik/demontazh-elektroshchita/01-open-panel.png",
      alt: "Демонтаж электрощита — разборка распределительного щита на стене",
    },
    {
      src: "/works/elektrik/demontazh-elektroshchita/02-panel-wiring.png",
      alt: "Демонтаж электрощита — отключение проводов в щитке",
    },
    {
      src: "/works/elektrik/demontazh-elektroshchita/03-panel-assembly.png",
      alt: "Демонтаж электрощита — разборка модулей и проверка щита",
    },
  ],
  "podklyuchenie-varochnoy-paneli": [
    {
      src: "/works/elektrik/podklyuchenie-varochnoy-paneli/01-built-in-cooktop.png",
      alt: "Подключение варочной панели — встраиваемая панель в столешнице",
    },
    {
      src: "/works/elektrik/podklyuchenie-varochnoy-paneli/02-install-cooktop.png",
      alt: "Подключение варочной панели — установка панели в вырез столешницы",
    },
    {
      src: "/works/elektrik/podklyuchenie-varochnoy-paneli/03-induction-panel.png",
      alt: "Подключение варочной панели — индукционная варочная панель",
    },
  ],
  "podklyuchenie-duhovogo-shkafa": [
    {
      src: "/works/elektrik/podklyuchenie-duhovogo-shkafa/01-install-wiring.png",
      alt: "Подключение духового шкафа — подвод электропитания в нишу",
    },
    {
      src: "/works/elektrik/podklyuchenie-duhovogo-shkafa/02-double-oven.png",
      alt: "Подключение духового шкафа — встраиваемый двойной духовой шкаф",
    },
    {
      src: "/works/elektrik/podklyuchenie-duhovogo-shkafa/03-electrolux-oven.png",
      alt: "Подключение духового шкафа — установленный духовой шкаф Electrolux",
    },
  ],
  "podklyuchenie-stiralnoy-mashiny-elektrik": [
    {
      src: "/works/elektrik/podklyuchenie-stiralnoy-mashiny-elektrik/01-back-panel.png",
      alt: "Подключение стиральной машины — задняя панель с местами подключения",
    },
    {
      src: "/works/elektrik/podklyuchenie-stiralnoy-mashiny-elektrik/02-master-install.png",
      alt: "Подключение стиральной машины — мастер подключает шланги сзади",
    },
    {
      src: "/works/elektrik/podklyuchenie-stiralnoy-mashiny-elektrik/03-connected-lg.png",
      alt: "Подключение стиральной машины — установленная стиральная машина LG",
    },
  ],
  "kreplenie-televizora-na-stenu": [
    {
      src: "/works/elektrik/kreplenie-televizora-na-stenu/01-bracket-level.png",
      alt: "Крепление телевизора на стену — разметка и выравнивание кронштейна",
    },
    {
      src: "/works/elektrik/kreplenie-televizora-na-stenu/02-drill-mount.png",
      alt: "Крепление телевизора на стену — монтаж кронштейна и телевизора",
    },
    {
      src: "/works/elektrik/kreplenie-televizora-na-stenu/03-mounted-tv.png",
      alt: "Крепление телевизора на стену — телевизор на стене с подсветкой",
    },
  ],
  "diagnostika-elektroseti": [
    {
      src: "/works/elektrik/diagnostika-elektroseti/01-multimeter-panel.png",
      alt: "Диагностика электросети — проверка параметров мультиметром в щитке",
    },
    {
      src: "/works/elektrik/diagnostika-elektroseti/02-panel-test-gloves.png",
      alt: "Диагностика электросети — измерение в электрощите с защитными перчатками",
    },
    {
      src: "/works/elektrik/diagnostika-elektroseti/03-outlet-voltage.png",
      alt: "Диагностика электросети — проверка напряжения в розетке",
    },
  ],
  "poisk-neispravnosti-provodki": [
    {
      src: "/works/elektrik/poisk-neispravnosti-provodki/01-control-panel-test.png",
      alt: "Поиск неисправности проводки — проверка контактов мультиметром в щитке",
    },
    {
      src: "/works/elektrik/poisk-neispravnosti-provodki/02-breaker-voltage.png",
      alt: "Поиск неисправности проводки — измерение напряжения на автомате",
    },
    {
      src: "/works/elektrik/poisk-neispravnosti-provodki/03-wire-probe-test.png",
      alt: "Поиск неисправности проводки — диагностика проводов в распределительном щите",
    },
  ],
  "montazh-videonablyudeniya": [
    {
      src: "/works/elektrik/montazh-videonablyudeniya/01-outdoor-mount.png",
      alt: "Монтаж видеонаблюдения — установка уличной камеры на кронштейн",
    },
    {
      src: "/works/elektrik/montazh-videonablyudeniya/02-camera-adjust.png",
      alt: "Монтаж видеонаблюдения — настройка и подключение камеры",
    },
    {
      src: "/works/elektrik/montazh-videonablyudeniya/03-junction-wiring.png",
      alt: "Монтаж видеонаблюдения — подключение проводки в распределительной коробке",
    },
  ],
  "ustanovka-teplogo-pola": [
    {
      src: "/works/elektrik/ustanovka-teplogo-pola/01-water-pipes.png",
      alt: "Установка тёплого пола — укладка труб водяного тёплого пола",
    },
    {
      src: "/works/elektrik/ustanovka-teplogo-pola/02-heating-cable.png",
      alt: "Установка тёплого пола — монтаж нагревательного кабеля",
    },
    {
      src: "/works/elektrik/ustanovka-teplogo-pola/03-manifold-test.png",
      alt: "Установка тёплого пола — коллектор и опрессовка системы",
    },
  ],
};

/** Уникальные галереи для сантехника — переопределяют шаблон по умолчанию */
export const SANTEHNIK_OFFER_GALLERIES: Partial<
  Record<string, readonly ServiceOfferGalleryImage[]>
> = {
  "ustanovka-smesitelya-otechestvennyy": [
    {
      src: "/works/santehnik/ustanovka-smesitelya-otechestvennyy/01-faucet-wrench.png",
      alt: "Установка смесителя (отечественный) — монтаж смесителя на раковине",
    },
    {
      src: "/works/santehnik/ustanovka-smesitelya-otechestvennyy/02-thermostatic-mount.png",
      alt: "Установка смесителя (отечественный) — крепление смесителя к стене",
    },
    {
      src: "/works/santehnik/ustanovka-smesitelya-otechestvennyy/03-kitchen-faucet.png",
      alt: "Установка смесителя (отечественный) — установка смесителя на кухне",
    },
  ],
  "ustanovka-smesitelya-importnyy": [
    {
      src: "/works/santehnik/ustanovka-smesitelya-importnyy/01-faucet-wrench.png",
      alt: "Установка смесителя (импортный) — монтаж смесителя на раковине",
    },
    {
      src: "/works/santehnik/ustanovka-smesitelya-importnyy/02-thermostatic-mount.png",
      alt: "Установка смесителя (импортный) — крепление смесителя к стене",
    },
    {
      src: "/works/santehnik/ustanovka-smesitelya-importnyy/03-kitchen-faucet.png",
      alt: "Установка смесителя (импортный) — установка смесителя на кухне",
    },
  ],
  "ustanovka-smesitelya-s-termoregulyatorom": [
    {
      src: "/works/santehnik/ustanovka-smesitelya-s-termoregulyatorom/01-under-sink-thermostat.png",
      alt: "Установка смесителя с терморегулятором — термостат под раковиной",
    },
    {
      src: "/works/santehnik/ustanovka-smesitelya-s-termoregulyatorom/02-wall-thermostatic.png",
      alt: "Установка смесителя с терморегулятором — монтаж термостатического смесителя",
    },
    {
      src: "/works/santehnik/ustanovka-smesitelya-s-termoregulyatorom/03-thermostat-adjust.png",
      alt: "Установка смесителя с терморегулятором — настройка терморегулятора",
    },
  ],
  "ustanovka-unitaza": [
    {
      src: "/works/santehnik/ustanovka-unitaza/01-plumber-install.png",
      alt: "Установка унитаза — монтаж унитаза мастером",
    },
    {
      src: "/works/santehnik/ustanovka-unitaza/02-bolt-tighten.png",
      alt: "Установка унитаза — крепление унитаза к полу",
    },
    {
      src: "/works/santehnik/ustanovka-unitaza/03-mark-position.png",
      alt: "Установка унитаза — разметка и подготовка места установки",
    },
    {
      src: "/works/santehnik/ustanovka-podvesnogo-unitaza/01-installation-frame.png",
      alt: "Установка подвесного унитаза — монтаж инсталляции",
    },
    {
      src: "/works/santehnik/ustanovka-podvesnogo-unitaza/02-frame-drain.png",
      alt: "Установка подвесного унитаза — крепление рамы и подключение канализации",
    },
    {
      src: "/works/santehnik/ustanovka-podvesnogo-unitaza/03-wall-hung-toilet.png",
      alt: "Установка подвесного унитаза — готовый результат, подвесной унитаз",
    },
    {
      src: "/works/santehnik/ustanovka-bide-ili-pissuara/01-wall-urinal.png",
      alt: "Установка биде или писсуара — настенный писсуар",
    },
    {
      src: "/works/santehnik/ustanovka-bide-ili-pissuara/02-bidet-measure.png",
      alt: "Установка биде или писсуара — монтаж напольного биде",
    },
    {
      src: "/works/santehnik/ustanovka-bide-ili-pissuara/03-wall-bidet-toilet.png",
      alt: "Установка биде или писсуара — подвесной унитаз и биде",
    },
    {
      src: "/works/santehnik/ustanovka-installyatsii/01-geberit-frame.png",
      alt: "Установка инсталляции — монтаж рамы Geberit в перегородке",
    },
    {
      src: "/works/santehnik/ustanovka-installyatsii/02-blue-frame.png",
      alt: "Установка инсталляции — крепление инсталляции к полу и стене",
    },
    {
      src: "/works/santehnik/ustanovka-installyatsii/03-mounting-studs.png",
      alt: "Установка инсталляции — крепление стоек и подключение",
    },
    {
      src: "/works/santehnik/remont-armatury-bachka/01-geberit-cistern.png",
      alt: "Ремонт арматуры бачка — ремонт скрытой инсталляции Geberit",
    },
    {
      src: "/works/santehnik/remont-armatury-bachka/02-tank-armature.png",
      alt: "Ремонт арматуры бачка — арматура сливного бачка",
    },
    {
      src: "/works/santehnik/remont-armatury-bachka/03-flush-valve-repair.png",
      alt: "Ремонт арматуры бачка — замена сливной арматуры",
    },
    {
      src: "/works/santehnik/ustanovka-gibkoy-podvodki/01-flexible-hoses.png",
      alt: "Установка гибкой подводки — гибкие шланги для водоснабжения",
    },
    {
      src: "/works/santehnik/ustanovka-gibkoy-podvodki/02-sink-install.png",
      alt: "Установка гибкой подводки — подключение под раковиной",
    },
    {
      src: "/works/santehnik/ustanovka-gibkoy-podvodki/03-water-heater.png",
      alt: "Установка гибкой подводки — подводка к водонагревателю",
    },
  ],
  "ustanovka-akrilovoy-vanny": [
    {
      src: "/works/santehnik/ustanovka-akrilovoy-vanny/01-frame-assembly.png",
      alt: "Установка акриловой ванны — сборка каркаса и ножек",
    },
    {
      src: "/works/santehnik/ustanovka-akrilovoy-vanny/02-tiled-install.png",
      alt: "Установка акриловой ванны — монтаж в облицованный плиткой подиум",
    },
    {
      src: "/works/santehnik/ustanovka-akrilovoy-vanny/03-freestanding-bath.png",
      alt: "Установка акриловой ванны — готовый результат, отдельностоящая ванна",
    },
  ],
  "ustanovka-vanny-s-gidromassazhem": [
    {
      src: "/works/santehnik/ustanovka-vanny-s-gidromassazhem/01-corner-plumbing.png",
      alt: "Установка ванны с гидромассажем — подключение коммуникаций под ванной",
    },
    {
      src: "/works/santehnik/ustanovka-vanny-s-gidromassazhem/02-corner-installed.png",
      alt: "Установка ванны с гидромассажем — готовый результат, угловая ванна",
    },
    {
      src: "/works/santehnik/ustanovka-vanny-s-gidromassazhem/03-pump-system.png",
      alt: "Установка ванны с гидромассажем — монтаж насоса и системы форсунок",
    },
  ],
  "ustanovka-dushevoy-kabiny": [
    {
      src: "/works/santehnik/ustanovka-dushevoy-kabiny/01-corner-cabin.png",
      alt: "Установка душевой кабины — угловая кабина в современной ванной",
    },
    {
      src: "/works/santehnik/ustanovka-dushevoy-kabiny/02-level-install.png",
      alt: "Установка душевой кабины — выравнивание поддона по уровню",
    },
    {
      src: "/works/santehnik/ustanovka-dushevoy-kabiny/03-walk-in-cabin.png",
      alt: "Установка душевой кабины — прямоугольная кабина с дождевым душем",
    },
  ],
  "ustanovka-dushevogo-poddona": [
    {
      src: "/works/santehnik/ustanovka-dushevogo-poddona/01-tray-frame.png",
      alt: "Установка душевого поддона — каркас и ножки под поддон",
    },
    {
      src: "/works/santehnik/ustanovka-dushevogo-poddona/02-drain-connection.png",
      alt: "Установка душевого поддона — подключение слива и сифона",
    },
    {
      src: "/works/santehnik/ustanovka-dushevogo-poddona/03-custom-base.png",
      alt: "Установка душевого поддона — подготовка основания и каркаса",
    },
  ],
  "germetizatsiya-vanny-ili-dushevoy": [
    {
      src: "/works/santehnik/germetizatsiya-vanny-ili-dushevoy/01-sealing-tape.png",
      alt: "Герметизация ванны или душевой — монтаж гидроизоляционной ленты",
    },
    {
      src: "/works/santehnik/germetizatsiya-vanny-ili-dushevoy/02-caulk-gun.png",
      alt: "Герметизация ванны или душевой — нанесение силиконового герметика",
    },
    {
      src: "/works/santehnik/germetizatsiya-vanny-ili-dushevoy/03-silicone-seal.png",
      alt: "Герметизация ванны или душевой — обработка стыка ванны со стеной",
    },
  ],
  "ustanovka-ekrana-pod-vannu": [
    {
      src: "/works/santehnik/ustanovka-ekrana-pod-vannu/01-metal-frame.png",
      alt: "Установка экрана под ванну — каркас из металлопрофиля",
    },
    {
      src: "/works/santehnik/ustanovka-ekrana-pod-vannu/02-aluminum-frame.png",
      alt: "Установка экрана под ванну — монтаж алюминиевого каркаса",
    },
    {
      src: "/works/santehnik/ustanovka-ekrana-pod-vannu/03-drywall-frame.png",
      alt: "Установка экрана под ванну — каркас под облицовку гипсокартоном",
    },
  ],
};
