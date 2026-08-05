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
  "ustanovka-prohodnogo-vyklyuchatelya": [
    {
      src: "/works/elektrik/ustanovka-prohodnogo-vyklyuchatelya/01-switch-install.png",
      alt: "Установка проходного выключателя — монтаж механизма на стену",
    },
    {
      src: "/works/elektrik/ustanovka-prohodnogo-vyklyuchatelya/02-wiring-screw.png",
      alt: "Установка проходного выключателя — подключение проводов отвёрткой",
    },
    {
      src: "/works/elektrik/ustanovka-prohodnogo-vyklyuchatelya/03-frame-mount.png",
      alt: "Установка проходного выключателя — крепление рамки и механизма",
    },
  ],
  "ustanovka-rozetki-elektroplity-220v": [
    {
      src: "/works/elektrik/ustanovka-rozetki-elektroplity-220v/01-wire-connection.png",
      alt: "Установка розетки для электроплиты 220В — подключение проводов к механизму",
    },
    {
      src: "/works/elektrik/ustanovka-rozetki-elektroplity-220v/02-frame-finish.png",
      alt: "Установка розетки для электроплиты 220В — монтаж декоративной рамки",
    },
    {
      src: "/works/elektrik/ustanovka-rozetki-elektroplity-220v/03-boxes-wiring.png",
      alt: "Установка розетки для электроплиты 220В — подготовка проводов в подрозетниках",
    },
  ],
  "ustanovka-rozetki-elektroplity-380v": [
    {
      src: "/works/elektrik/ustanovka-rozetki-elektroplity-380v/01-wire-connection.png",
      alt: "Установка розетки для электроплиты 380В — подключение проводов к механизму",
    },
    {
      src: "/works/elektrik/ustanovka-rozetki-elektroplity-380v/02-frame-finish.png",
      alt: "Установка розетки для электроплиты 380В — монтаж декоративной рамки",
    },
    {
      src: "/works/elektrik/ustanovka-rozetki-elektroplity-380v/03-boxes-wiring.png",
      alt: "Установка розетки для электроплиты 380В — подготовка проводов в подрозетниках",
    },
  ],
  "ustanovka-podrozetnika": [
    {
      src: "/works/elektrik/ustanovka-podrozetnika/01-wire-connection.png",
      alt: "Установка подрозетника в готовое отверстие — работа с проводами у коробки",
    },
    {
      src: "/works/elektrik/ustanovka-podrozetnika/02-frame-finish.png",
      alt: "Установка подрозетника в готовое отверстие — финишный монтаж рамки",
    },
    {
      src: "/works/elektrik/ustanovka-podrozetnika/03-boxes-wiring.png",
      alt: "Установка подрозетника в готовое отверстие — подрозетники с выведенными проводами",
    },
  ],
  "kommunikatsiya-soedinitelnoy-korobki": [
    {
      src: "/works/elektrik/kommunikatsiya-soedinitelnoy-korobki/01-intercom-box.png",
      alt: "Коммутация соединительной коробки — аккуратная разводка кабелей на плате",
    },
    {
      src: "/works/elektrik/kommunikatsiya-soedinitelnoy-korobki/02-terminal-strips.png",
      alt: "Коммутация соединительной коробки — подключение проводов на клеммных колодках",
    },
    {
      src: "/works/elektrik/kommunikatsiya-soedinitelnoy-korobki/03-terminal-block.png",
      alt: "Коммутация соединительной коробки — соединение проводов клеммной колодкой",
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
  "ustanovka-lyustry-4-rozhka": [
    {
      src: "/works/elektrik/ustanovka-lyustry-4-rozhka/01-ceiling-wiring.png",
      alt: "Установка люстры (4 и более рожков) — подключение проводов на потолке",
    },
    {
      src: "/works/elektrik/ustanovka-lyustry-4-rozhka/02-led-assembly.png",
      alt: "Установка люстры (4 и более рожков) — сборка и подготовка LED-люстры",
    },
    {
      src: "/works/elektrik/ustanovka-lyustry-4-rozhka/03-base-wiring.png",
      alt: "Установка люстры (4 и более рожков) — коммутация проводов в основании",
    },
  ],
  "ustanovka-nestandartnoy-lyustry": [
    {
      src: "/works/elektrik/ustanovka-nestandartnoy-lyustry/01-sculptural.png",
      alt: "Установка нестандартной люстры — дизайнерский светильник сложной формы",
    },
    {
      src: "/works/elektrik/ustanovka-nestandartnoy-lyustry/02-wire-mesh.png",
      alt: "Установка нестандартной люстры — объёмный светильник из металлической сетки",
    },
    {
      src: "/works/elektrik/ustanovka-nestandartnoy-lyustry/03-wave-pendant.png",
      alt: "Установка нестандартной люстры — волнообразный LED-светильник на двух тросах",
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
  "ustanovka-svetilnika-armstrong": [
    {
      src: "/works/elektrik/ustanovka-svetilnika-armstrong/01-office-panels.png",
      alt: "Установка светильника Армстронг — LED-панели в подвесном потолке офиса",
    },
    {
      src: "/works/elektrik/ustanovka-svetilnika-armstrong/02-panel-install.png",
      alt: "Установка светильника Армстронг — монтаж панели в металлическую решётку",
    },
    {
      src: "/works/elektrik/ustanovka-svetilnika-armstrong/03-grid-wiring.png",
      alt: "Установка светильника Армстронг — разводка и светильники в потолочной сетке",
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
  "montazh-shinoprovoda": [
    {
      src: "/works/elektrik/montazh-shinoprovoda/01-track-wiring.png",
      alt: "Монтаж шинопровода или трековой системы — подключение трека на потолке",
    },
    {
      src: "/works/elektrik/montazh-shinoprovoda/02-industrial-busbar.png",
      alt: "Монтаж шинопровода или трековой системы — промышленный шинопровод на лотках",
    },
    {
      src: "/works/elektrik/montazh-shinoprovoda/03-magnetic-track.png",
      alt: "Монтаж шинопровода или трековой системы — магнитный трек со спотами",
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
  "montazh-elektroshchita-18-moduley": [
    {
      src: "/works/elektrik/montazh-elektroshchita-18-moduley/01-breakers-closeup.png",
      alt: "Монтаж электрощита 13–18 модулей — автоматы на DIN-рейке",
    },
    {
      src: "/works/elektrik/montazh-elektroshchita-18-moduley/02-electrician-wiring.png",
      alt: "Монтаж электрощита 13–18 модулей — подключение проводов электриком",
    },
    {
      src: "/works/elektrik/montazh-elektroshchita-18-moduley/03-panel-modules.png",
      alt: "Монтаж электрощита 13–18 модулей — сборка щита с автоматами и УЗО",
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
  "montazh-elektroshchita-36-moduley": [
    {
      src: "/works/elektrik/montazh-elektroshchita-36-moduley/01-breakers-closeup.png",
      alt: "Монтаж электрощита 25–36 модулей — автоматы на DIN-рейке",
    },
    {
      src: "/works/elektrik/montazh-elektroshchita-36-moduley/02-electrician-wiring.png",
      alt: "Монтаж электрощита 25–36 модулей — подключение проводов электриком",
    },
    {
      src: "/works/elektrik/montazh-elektroshchita-36-moduley/03-panel-modules.png",
      alt: "Монтаж электрощита 25–36 модулей — сборка щита с автоматами и УЗО",
    },
  ],
  "ustroystvo-nishi-pod-elektroshchit": [
    {
      src: "/works/elektrik/ustroystvo-nishi-pod-elektroshchit/01-cabinet-niche.png",
      alt: "Устройство ниши под электрощит — щит в нише внутри шкафа",
    },
    {
      src: "/works/elektrik/ustroystvo-nishi-pod-elektroshchit/02-flush-box.png",
      alt: "Устройство ниши под электрощит — встроенный корпус с разводкой кабелей",
    },
    {
      src: "/works/elektrik/ustroystvo-nishi-pod-elektroshchit/03-wall-cutout.png",
      alt: "Устройство ниши под электрощит — подготовка проёма в стене",
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
  "demontazh-elektroschetchika": [
    {
      src: "/works/elektrik/demontazh-elektroschetchika/01-kaskad-meter.png",
      alt: "Демонтаж электросчётчика — снятие счётчика Каскад в щите",
    },
    {
      src: "/works/elektrik/demontazh-elektroschetchika/02-mercury-panel.png",
      alt: "Демонтаж электросчётчика — отключение Меркурий и автоматов",
    },
    {
      src: "/works/elektrik/demontazh-elektroschetchika/03-seal-remove.png",
      alt: "Демонтаж электросчётчика — снятие пломбы и клеммной крышки",
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
  "demontazh-smesitelya": [
    {
      src: "/works/santehnik/demontazh-smesitelya/01-wall-faucet.png",
      alt: "Демонтаж смесителя — снятие настенного смесителя ключом",
    },
    {
      src: "/works/santehnik/demontazh-smesitelya/02-wrench-remove.png",
      alt: "Демонтаж смесителя — откручивание гаек смесителя на стене",
    },
    {
      src: "/works/santehnik/demontazh-smesitelya/03-kitchen-faucet.png",
      alt: "Демонтаж смесителя — снятие кухонного смесителя с мойки",
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
  "ustanovka-gofry-na-unitaz": [
    {
      src: "/works/santehnik/ustanovka-gofry-na-unitaz/01-cuff-fit.png",
      alt: "Установка гофры на унитаз — насадка гофры на выпуск унитаза",
    },
    {
      src: "/works/santehnik/ustanovka-gofry-na-unitaz/02-gofra-drain.png",
      alt: "Установка гофры на унитаз — подключение гофры к канализации",
    },
    {
      src: "/works/santehnik/ustanovka-gofry-na-unitaz/03-measure-outlet.png",
      alt: "Установка гофры на унитаз — замер расстояния до слива",
    },
  ],
  "ustanovka-sololifta": [
    {
      src: "/works/santehnik/ustanovka-sololifta/01-bathroom-unit.png",
      alt: "Установка сололифта — подключение к раковине и унитазу",
    },
    {
      src: "/works/santehnik/ustanovka-sololifta/02-under-sink.png",
      alt: "Установка сололифта — монтаж насоса под мойкой",
    },
    {
      src: "/works/santehnik/ustanovka-sololifta/03-scheme-install.png",
      alt: "Установка сололифта — схема подключения за стеной",
    },
  ],
  "demontazh-unitaza": [
    {
      src: "/works/santehnik/demontazh-unitaza/01-bolt-unscrew.png",
      alt: "Демонтаж унитаза — откручивание крепёжного болта у основания",
    },
    {
      src: "/works/santehnik/demontazh-unitaza/02-base-remove.png",
      alt: "Демонтаж унитаза — снятие унитаза с пола ключом",
    },
    {
      src: "/works/santehnik/demontazh-unitaza/03-mark-base.png",
      alt: "Демонтаж унитаза — разметка контура основания на плитке",
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
  "ustanovka-obvyazki-dlya-vanny": [
    {
      src: "/works/santehnik/ustanovka-obvyazki-dlya-vanny/01-overflow-install.png",
      alt: "Установка обвязки для ванны — монтаж перелива и слива",
    },
    {
      src: "/works/santehnik/ustanovka-obvyazki-dlya-vanny/02-kit-diagram.png",
      alt: "Установка обвязки для ванны — схема комплекта слива-перелива",
    },
    {
      src: "/works/santehnik/ustanovka-obvyazki-dlya-vanny/03-parts-layout.png",
      alt: "Установка обвязки для ванны — детали сифона и обвязки",
    },
  ],
  "ustanovka-donnogo-klapana": [
    {
      src: "/works/santehnik/ustanovka-donnogo-klapana/01-under-sink.png",
      alt: "Установка донного клапана — регулировка тяги под раковиной",
    },
    {
      src: "/works/santehnik/ustanovka-donnogo-klapana/02-click-clack.png",
      alt: "Установка донного клапана — click-clack клапан в разрезе",
    },
    {
      src: "/works/santehnik/ustanovka-donnogo-klapana/03-popup-assembly.png",
      alt: "Установка донного клапана — комплект pop-up слива с тягой",
    },
  ],
  "demontazh-vanny": [
    {
      src: "/works/santehnik/demontazh-vanny/01-lift-out.png",
      alt: "Демонтаж ванны — снятие ванны с облицованного основания",
    },
    {
      src: "/works/santehnik/demontazh-vanny/02-frame-legs.png",
      alt: "Демонтаж ванны — разборка каркаса и ножек акриловой ванны",
    },
    {
      src: "/works/santehnik/demontazh-vanny/03-freestanding.png",
      alt: "Демонтаж ванны — отдельностоящая ванна перед снятием",
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
  "ustanovka-rakoviny": [
    {
      src: "/works/santehnik/ustanovka-rakoviny/01-wall-mount.png",
      alt: "Установка раковины — настенная раковина с подводкой",
    },
    {
      src: "/works/santehnik/ustanovka-rakoviny/02-drain-connect.png",
      alt: "Установка раковины — подключение сифона и слива",
    },
    {
      src: "/works/santehnik/ustanovka-rakoviny/03-sink-mount.png",
      alt: "Установка раковины — монтаж раковины на стену",
    },
  ],
  "ustanovka-rakoviny-tyulpan": [
    {
      src: "/works/santehnik/ustanovka-rakoviny/01-wall-mount.png",
      alt: "Установка раковины «Тюльпан» — настенная раковина с подводкой",
    },
    {
      src: "/works/santehnik/ustanovka-rakoviny/02-drain-connect.png",
      alt: "Установка раковины «Тюльпан» — подключение сифона и слива",
    },
    {
      src: "/works/santehnik/ustanovka-rakoviny/03-sink-mount.png",
      alt: "Установка раковины «Тюльпан» — монтаж раковины на стену",
    },
  ],
  "ustanovka-rakoviny-moydodyr": [
    {
      src: "/works/santehnik/ustanovka-rakoviny-moydodyr/01-vintage-vanity.png",
      alt: "Установка раковины «Мойдодыр» — тумба с раковиной и зеркалом",
    },
    {
      src: "/works/santehnik/ustanovka-rakoviny-moydodyr/02-compact-cabinet.png",
      alt: "Установка раковины «Мойдодыр» — компактный шкаф с мойкой",
    },
    {
      src: "/works/santehnik/ustanovka-rakoviny-moydodyr/03-sink-mount.png",
      alt: "Установка раковины «Мойдодыр» — монтаж раковины на тумбу",
    },
  ],
  "demontazh-rakoviny": [
    {
      src: "/works/santehnik/demontazh-rakoviny/01-wall-remove.png",
      alt: "Демонтаж раковины — снятие раковины со стеновых шпилек",
    },
    {
      src: "/works/santehnik/demontazh-rakoviny/02-hardware-disconnect.png",
      alt: "Демонтаж раковины — отключение смесителя и слива",
    },
    {
      src: "/works/santehnik/demontazh-rakoviny/03-vessel-vanity.png",
      alt: "Демонтаж раковины — накладная раковина на тумбе",
    },
  ],
  "ustanovka-sifona": [
    {
      src: "/works/santehnik/ustanovka-sifona/01-drain-connect.png",
      alt: "Установка сифона — подключение слива к раковине",
    },
    {
      src: "/works/santehnik/ustanovka-sifona/02-bottle-trap.png",
      alt: "Установка сифона — монтаж бутылочного сифона под раковиной",
    },
    {
      src: "/works/santehnik/ustanovka-sifona/03-trap-assembly.png",
      alt: "Установка сифона — сборка сифона и подключение к канализации",
    },
  ],
  "ustanovka-metallicheskogo-sifona": [
    {
      src: "/works/santehnik/ustanovka-metallicheskogo-sifona/01-chrome-p-trap.png",
      alt: "Установка металлического сифона — хромированный P-образный сифон",
    },
    {
      src: "/works/santehnik/ustanovka-metallicheskogo-sifona/02-bottle-trap-chrome.png",
      alt: "Установка металлического сифона — бутылочный сифон из хрома",
    },
    {
      src: "/works/santehnik/ustanovka-metallicheskogo-sifona/03-mosaic-wall.png",
      alt: "Установка металлического сифона — подключение к канализации в стене",
    },
  ],
  "ustranenie-zasora": [
    {
      src: "/works/santehnik/ustranenie-zasora/01-hair-clog.png",
      alt: "Устранение засора — извлечение волос из слива ванны",
    },
    {
      src: "/works/santehnik/ustranenie-zasora/02-plunger-kitchen.png",
      alt: "Устранение засора — прочистка раковины вантузом",
    },
    {
      src: "/works/santehnik/ustranenie-zasora/03-plunger-bathroom.png",
      alt: "Устранение засора — прочистка раковины в ванной",
    },
  ],
  "ustranenie-zasora-khimicheskiy-sposob": [
    {
      src: "/works/santehnik/ustranenie-zasora/01-hair-clog.png",
      alt: "Устранение засора (химический способ) — извлечение волос из слива ванны",
    },
    {
      src: "/works/santehnik/ustranenie-zasora/02-plunger-kitchen.png",
      alt: "Устранение засора (химический способ) — прочистка раковины вантузом",
    },
    {
      src: "/works/santehnik/ustranenie-zasora/03-plunger-bathroom.png",
      alt: "Устранение засора (химический способ) — прочистка раковины в ванной",
    },
  ],
  "ustranenie-zasora-s-razborom-trub": [
    {
      src: "/works/santehnik/ustranenie-zasora-s-razborom-trub/01-snake-auger.png",
      alt: "Устранение засора с разбором труб — сантехнический трос и трубы",
    },
    {
      src: "/works/santehnik/ustranenie-zasora-s-razborom-trub/02-pipe-disassemble.png",
      alt: "Устранение засора с разбором труб — разборка канализационного узла",
    },
    {
      src: "/works/santehnik/ustranenie-zasora-s-razborom-trub/03-drain-stack.png",
      alt: "Устранение засора с разбором труб — доступ к стояку канализации",
    },
  ],
  "ustranenie-zasora-gidrodinamicheskiy": [
    {
      src: "/works/santehnik/ustranenie-zasora-gidrodinamicheskiy/01-cast-iron-jet.png",
      alt: "Устранение засора гидродинамическим способом — промывка чугунной трубы",
    },
    {
      src: "/works/santehnik/ustranenie-zasora-gidrodinamicheskiy/02-nozzle-jets.png",
      alt: "Устранение засора гидродинамическим способом — насадка высокого давления",
    },
    {
      src: "/works/santehnik/ustranenie-zasora-gidrodinamicheskiy/03-pvc-pipe-jet.png",
      alt: "Устранение засора гидродинамическим способом — промывка канализационной трубы",
    },
  ],
  "ustranenie-protechki": [
    {
      src: "/works/santehnik/ustranenie-protechki/01-sink-drain-leak.png",
      alt: "Устранение протечки — протечка в сифоне под раковиной",
    },
    {
      src: "/works/santehnik/ustranenie-protechki/02-p-trap-leak.png",
      alt: "Устранение протечки — ремонт протекающего P-образного сифона",
    },
    {
      src: "/works/santehnik/ustranenie-protechki/03-pipe-fitting-leak.png",
      alt: "Устранение протечки — протечка в соединении труб",
    },
  ],
  "remont-trub-i-stoyakov": [
    {
      src: "/works/santehnik/remont-trub-i-stoyakov/01-riser-pipes.png",
      alt: "Ремонт труб и стояков — стояки водоснабжения и канализации",
    },
    {
      src: "/works/santehnik/remont-trub-i-stoyakov/02-pipe-layout.png",
      alt: "Ремонт труб и стояков — разводка труб в ванной",
    },
    {
      src: "/works/santehnik/remont-trub-i-stoyakov/03-riser-repair.png",
      alt: "Ремонт труб и стояков — замена канализационного стояка",
    },
  ],
  "montazh-baypasa": [
    {
      src: "/works/santehnik/montazh-baypasa/01-radiator-bypass.png",
      alt: "Монтаж байпаса — байпас на радиаторе и насосный байпас",
    },
    {
      src: "/works/santehnik/montazh-baypasa/02-pump-bypass.png",
      alt: "Монтаж байпаса — байпас с циркуляционным насосом",
    },
    {
      src: "/works/santehnik/montazh-baypasa/03-grundfos-bypass.png",
      alt: "Монтаж байпаса — насос Grundfos в обвязке отопления",
    },
  ],
  "ustanovka-sharovogo-krana": [
    {
      src: "/works/santehnik/ustanovka-sharovogo-krana/01-valve-parts.png",
      alt: "Установка шарового крана — комплектующие шарового крана",
    },
    {
      src: "/works/santehnik/ustanovka-sharovogo-krana/02-wrench-tighten.png",
      alt: "Установка шарового крана — затяжка соединения ключом",
    },
    {
      src: "/works/santehnik/ustanovka-sharovogo-krana/03-under-sink-valve.png",
      alt: "Установка шарового крана — монтаж крана под раковиной",
    },
  ],
  "ustanovka-schetchika-vody": [
    {
      src: "/works/santehnik/ustanovka-schetchika-vody/01-under-sink-meters.png",
      alt: "Установка счётчика воды — счётчики под раковиной",
    },
    {
      src: "/works/santehnik/ustanovka-schetchika-vody/02-hot-cold-meters.png",
      alt: "Установка счётчика воды — счётчики горячей и холодной воды",
    },
    {
      src: "/works/santehnik/ustanovka-schetchika-vody/03-wrench-install.png",
      alt: "Установка счётчика воды — монтаж счётчика ключом",
    },
  ],
  "razvodka-trub": [
    {
      src: "/works/santehnik/razvodka-trub/01-wall-pipes.png",
      alt: "Разводка труб — водопровод и канализация на стене",
    },
    {
      src: "/works/santehnik/razvodka-trub/02-bathroom-rough-in.png",
      alt: "Разводка труб — разводка в ванной на этапе черновых работ",
    },
    {
      src: "/works/santehnik/razvodka-trub/03-collector-manifold.png",
      alt: "Разводка труб — коллекторная разводка горячей и холодной воды",
    },
  ],
  "montazh-vodorozetki": [
    {
      src: "/works/santehnik/montazh-vodorozetki/01-chase-rough-in.png",
      alt: "Монтаж водорозетки — черновая установка в штробе со сливом",
    },
    {
      src: "/works/santehnik/montazh-vodorozetki/02-bracket-caps.png",
      alt: "Монтаж водорозетки — крепление на планке с защитными заглушками",
    },
    {
      src: "/works/santehnik/montazh-vodorozetki/03-stud-frame.png",
      alt: "Монтаж водорозетки — установка в каркасе под обшивку",
    },
  ],
  "ustanovka-obratnogo-klapana": [
    {
      src: "/works/santehnik/ustanovka-obratnogo-klapana/01-heater-valve.png",
      alt: "Установка обратного клапана — клапан на холодном вводе бойлера",
    },
    {
      src: "/works/santehnik/ustanovka-obratnogo-klapana/02-threaded-fit.png",
      alt: "Установка обратного клапана — сборка резьбового соединения",
    },
    {
      src: "/works/santehnik/ustanovka-obratnogo-klapana/03-foot-valve.png",
      alt: "Установка обратного клапана — обратный клапан с сетчатым фильтром",
    },
  ],
  "ustanovka-reduktora-davleniya": [
    {
      src: "/works/santehnik/ustanovka-reduktora-davleniya/01-regulator-gauge.png",
      alt: "Установка редуктора давления — редуктор с манометром DN15",
    },
    {
      src: "/works/santehnik/ustanovka-reduktora-davleniya/02-cutaway.png",
      alt: "Установка редуктора давления — устройство редуктора в разрезе",
    },
    {
      src: "/works/santehnik/ustanovka-reduktora-davleniya/03-manifold-install.png",
      alt: "Установка редуктора давления — редукторы в узле водоснабжения",
    },
  ],
  "ustanovka-kollektora": [
    {
      src: "/works/santehnik/ustanovka-kollektora/01-cabinet-manifold.png",
      alt: "Установка коллектора — коллекторный узел в шкафу",
    },
    {
      src: "/works/santehnik/ustanovka-kollektora/02-mount-install.png",
      alt: "Установка коллектора — монтаж гребёнки на кронштейны",
    },
    {
      src: "/works/santehnik/ustanovka-kollektora/03-wall-loops.png",
      alt: "Установка коллектора — коллектор тёплого пола с контурами",
    },
  ],
  "opressovka-sistemy-otopleniya": [
    {
      src: "/works/santehnik/opressovka-sistemy-otopleniya/01-radiator-test.png",
      alt: "Опрессовка системы отопления — ручной насос у радиатора",
    },
    {
      src: "/works/santehnik/opressovka-sistemy-otopleniya/02-manual-pump.png",
      alt: "Опрессовка системы отопления — опрессовщик с манометром",
    },
    {
      src: "/works/santehnik/opressovka-sistemy-otopleniya/03-rothenberger.png",
      alt: "Опрессовка системы отопления — проверка медных труб насосом",
    },
  ],
  "ustanovka-vodonagrevatelya-do-50-l": [
    {
      src: "/works/santehnik/ustanovka-vodonagrevatelya/03-fora-wall-mount.png",
      alt: "Установка водонагревателя до 50 л — настенный бойлер в ванной",
    },
    {
      src: "/works/santehnik/ustanovka-vodonagrevatelya/02-installation-collage.png",
      alt: "Установка водонагревателя до 50 л — компактный бойлер под раковиной",
    },
    {
      src: "/works/santehnik/ustanovka-vodonagrevatelya/01-electrolux-horizontal.png",
      alt: "Установка водонагревателя до 50 л — подключение бойлера к водопроводу",
    },
  ],
  "ustanovka-vodonagrevatelya-svyshe-50-l": [
    {
      src: "/works/santehnik/ustanovka-vodonagrevatelya/01-electrolux-horizontal.png",
      alt: "Установка водонагревателя свыше 50 л — горизонтальный бойлер Electrolux",
    },
    {
      src: "/works/santehnik/ustanovka-vodonagrevatelya/02-installation-collage.png",
      alt: "Установка водонагревателя свыше 50 л — настенные бойлеры большого объёма",
    },
    {
      src: "/works/santehnik/ustanovka-vodonagrevatelya/03-fora-wall-mount.png",
      alt: "Установка водонагревателя свыше 50 л — монтаж и подключение бойлера",
    },
  ],
  "podklyuchenie-protochnogo-vodonagrevatelya": [
    {
      src: "/works/santehnik/podklyuchenie-protochnogo-vodonagrevatelya/01-manifold-heater.png",
      alt: "Подключение проточного водонагревателя — проточник в узле водоснабжения",
    },
    {
      src: "/works/santehnik/podklyuchenie-protochnogo-vodonagrevatelya/02-wall-piping.png",
      alt: "Подключение проточного водонагревателя — подводка труб к нагревателю",
    },
    {
      src: "/works/santehnik/podklyuchenie-protochnogo-vodonagrevatelya/03-internal-wiring.png",
      alt: "Подключение проточного водонагревателя — электрическое подключение внутри",
    },
  ],
  "ustanovka-filtra-dlya-vody": [
    {
      src: "/works/santehnik/ustanovka-filtra-dlya-vody/01-reverse-osmosis.png",
      alt: "Установка фильтра для воды — система обратного осмоса под мойкой",
    },
    {
      src: "/works/santehnik/ustanovka-filtra-dlya-vody/02-aquaphor-under-sink.png",
      alt: "Установка фильтра для воды — фильтр Аквафор под раковиной",
    },
    {
      src: "/works/santehnik/ustanovka-filtra-dlya-vody/03-cartridge-replace.png",
      alt: "Установка фильтра для воды — замена картриджа фильтра",
    },
  ],
  "prochistka-kanalizatsii": [
    {
      src: "/works/santehnik/prochistka-kanalizatsii/01-rothenberger-drain.png",
      alt: "Прочистка канализации — прочистка трапа машиной Rothenberger",
    },
    {
      src: "/works/santehnik/prochistka-kanalizatsii/02-electric-machine.png",
      alt: "Прочистка канализации — электрическая машина для прочистки труб",
    },
    {
      src: "/works/santehnik/prochistka-kanalizatsii/03-drain-snake.png",
      alt: "Прочистка канализации — трос для прочистки канализации",
    },
  ],
};

/** Галереи услуг мастера на час */
export const MASTER_NA_CHAS_OFFER_GALLERIES: Partial<
  Record<string, readonly ServiceOfferGalleryImage[]>
> = {
  "sborka-mebeli": [
    {
      src: "/works/master-na-chas/sborka-mebeli/01-tools-layout.png",
      alt: "Сборка мебели — инструмент, фурнитура и детали для сборки",
    },
    {
      src: "/works/master-na-chas/sborka-mebeli/02-hardware-parts.png",
      alt: "Сборка мебели — крепёж, направляющие и панели",
    },
    {
      src: "/works/master-na-chas/sborka-mebeli/03-assembly-process.png",
      alt: "Сборка мебели — мастер собирает корпус шуруповёртом",
    },
  ],
  "sborka-kuhonnogo-garnitura": [
    {
      src: "/works/master-na-chas/sborka-kuhonnogo-garnitura/01-dark-kitchen.png",
      alt: "Сборка кухонного гарнитура — тёмная кухня с техникой и столешницей",
    },
    {
      src: "/works/master-na-chas/sborka-kuhonnogo-garnitura/02-gray-kitchen-dishwasher.png",
      alt: "Сборка кухонного гарнитура — серая кухня со встроенной посудомойкой",
    },
    {
      src: "/works/master-na-chas/sborka-kuhonnogo-garnitura/03-modern-two-tone.png",
      alt: "Сборка кухонного гарнитура — современная двухцветная кухня",
    },
  ],
  "sborka-shkafa-kupe": [
    {
      src: "/works/master-na-chas/sborka-shkafa-kupe/01-wood-mirror-wardrobe.png",
      alt: "Сборка шкафа-купе — шкаф с зеркальной дверью и деревянными панелями",
    },
    {
      src: "/works/master-na-chas/sborka-shkafa-kupe/02-three-door-stone.png",
      alt: "Сборка шкафа-купе — трёхдверный шкаф с декоративными вставками",
    },
    {
      src: "/works/master-na-chas/sborka-shkafa-kupe/03-white-mirror-wardrobe.png",
      alt: "Сборка шкафа-купе — белый шкаф с зеркалом в центре",
    },
  ],
  "ustanovka-karniza-ili-gardin": [
    {
      src: "/works/master-na-chas/ustanovka-karniza-ili-gardin/01-double-rod.png",
      alt: "Установка карниза или гардин — двойной карниз с декоративными наконечниками",
    },
    {
      src: "/works/master-na-chas/ustanovka-karniza-ili-gardin/02-swing-arm.png",
      alt: "Установка карниза или гардин — поворотные карнизы над окном",
    },
    {
      src: "/works/master-na-chas/ustanovka-karniza-ili-gardin/03-ceiling-track.png",
      alt: "Установка карниза или гардин — потолочный карниз с многослойными шторами",
    },
  ],
  "ustanovka-polok-i-zerkal": [
    {
      src: "/works/master-na-chas/ustanovka-polok-i-zerkal/01-round-mirror-shelf.png",
      alt: "Установка полок и зеркал — круглое зеркало с подсветкой и полкой",
    },
    {
      src: "/works/master-na-chas/ustanovka-polok-i-zerkal/02-tall-mirror-console.png",
      alt: "Установка полок и зеркал — высокое зеркало с консолью и ящиками",
    },
    {
      src: "/works/master-na-chas/ustanovka-polok-i-zerkal/03-wood-shelf-mirror.png",
      alt: "Установка полок и зеркал — зеркало с деревянной парящей полкой",
    },
  ],
  "kreplenie-predmetov-interera": [
    {
      src: "/works/master-na-chas/kreplenie-predmetov-interera/01-pipe-shelves.png",
      alt: "Крепление предметов интерьера — полки на металлических трубах",
    },
    {
      src: "/works/master-na-chas/kreplenie-predmetov-interera/02-metal-bracket-shelf.png",
      alt: "Крепление предметов интерьера — полка на металлическом кронштейне",
    },
    {
      src: "/works/master-na-chas/kreplenie-predmetov-interera/03-kitchen-rail.png",
      alt: "Крепление предметов интерьера — кухонный рейлинг с аксессуарами",
    },
  ],
  "ustanovka-zamka": [
    {
      src: "/works/master-na-chas/ustanovka-zamka/01-multi-lock-install.png",
      alt: "Установка замка — монтаж замков и защёлок на двери",
    },
    {
      src: "/works/master-na-chas/ustanovka-zamka/02-lever-handle-lock.png",
      alt: "Установка замка — установка ручки и защёлки на дверь",
    },
    {
      src: "/works/master-na-chas/ustanovka-zamka/03-mortise-faceplate.png",
      alt: "Установка замка — крепление лицевой планки врезного замка",
    },
  ],
  "zamena-dvernoy-ruchki": [
    {
      src: "/works/master-na-chas/zamena-dvernoy-ruchki/01-lever-install.png",
      alt: "Замена дверной ручки — установка рычажной ручки на дверь",
    },
    {
      src: "/works/master-na-chas/zamena-dvernoy-ruchki/02-knob-latch.png",
      alt: "Замена дверной ручки — монтаж круглой ручки и защёлки",
    },
    {
      src: "/works/master-na-chas/zamena-dvernoy-ruchki/03-set-screw.png",
      alt: "Замена дверной ручки — фиксация ручки установочным винтом",
    },
  ],
  "regulirovka-dveri": [
    {
      src: "/works/master-na-chas/regulirovka-dveri/01-hinge-horizontal.png",
      alt: "Регулировка двери — горизонтальная регулировка петли ключом",
    },
    {
      src: "/works/master-na-chas/regulirovka-dveri/02-hinge-vertical.png",
      alt: "Регулировка двери — вертикальная регулировка петли",
    },
    {
      src: "/works/master-na-chas/regulirovka-dveri/03-wood-hinge-adjust.png",
      alt: "Регулировка двери — настройка петли деревянной двери отвёрткой",
    },
  ],
  "ustanovka-dovodchika": [
    {
      src: "/works/master-na-chas/ustanovka-dovodchika/01-gate-closer.png",
      alt: "Установка доводчика — доводчик на металлической калитке",
    },
    {
      src: "/works/master-na-chas/ustanovka-dovodchika/02-overhead-arm.png",
      alt: "Установка доводчика — накладной доводчик с рычажной тягой",
    },
    {
      src: "/works/master-na-chas/ustanovka-dovodchika/03-slide-rail.png",
      alt: "Установка доводчика — доводчик со скользящей шиной",
    },
  ],
  "podklyuchenie-varochnoy-paneli": [
    {
      src: "/works/master-na-chas/podklyuchenie-varochnoy-paneli/01-induction-controls.png",
      alt: "Подключение варочной панели — проверка индукционной панели",
    },
    {
      src: "/works/master-na-chas/podklyuchenie-varochnoy-paneli/02-aeg-install.png",
      alt: "Подключение варочной панели — встраиваемая панель AEG в столешнице",
    },
    {
      src: "/works/master-na-chas/podklyuchenie-varochnoy-paneli/03-gas-drop-in.png",
      alt: "Подключение варочной панели — установка газовой панели в вырез",
    },
  ],
  "ustanovka-varochnoy-poverhnosti": [
    {
      src: "/works/master-na-chas/ustanovka-varochnoy-poverhnosti/01-induction-controls.png",
      alt: "Установка варочной поверхности — проверка индукционной панели",
    },
    {
      src: "/works/master-na-chas/ustanovka-varochnoy-poverhnosti/02-aeg-install.png",
      alt: "Установка варочной поверхности — встраиваемая панель AEG в столешнице",
    },
    {
      src: "/works/master-na-chas/ustanovka-varochnoy-poverhnosti/03-gas-drop-in.png",
      alt: "Установка варочной поверхности — установка газовой панели в вырез",
    },
  ],
  "podklyuchenie-duhovogo-shkafa": [
    {
      src: "/works/master-na-chas/podklyuchenie-duhovogo-shkafa/01-double-oven.png",
      alt: "Подключение духового шкафа — встраиваемый двойной духовой шкаф",
    },
    {
      src: "/works/master-na-chas/podklyuchenie-duhovogo-shkafa/02-electrolux-oven.png",
      alt: "Подключение духового шкафа — установленный духовой шкаф Electrolux",
    },
    {
      src: "/works/master-na-chas/podklyuchenie-duhovogo-shkafa/03-bosch-niche.png",
      alt: "Подключение духового шкафа — монтаж духового шкафа в нишу",
    },
  ],
  "ustanovka-duhovogo-shkafa": [
    {
      src: "/works/master-na-chas/ustanovka-duhovogo-shkafa/01-double-oven.png",
      alt: "Установка духового шкафа — встраиваемый двойной духовой шкаф",
    },
    {
      src: "/works/master-na-chas/ustanovka-duhovogo-shkafa/02-electrolux-oven.png",
      alt: "Установка духового шкафа — установленный духовой шкаф Electrolux",
    },
    {
      src: "/works/master-na-chas/ustanovka-duhovogo-shkafa/03-bosch-niche.png",
      alt: "Установка духового шкафа — монтаж духового шкафа в нишу",
    },
  ],
  "kreplenie-televizora-na-stenu": [
    {
      src: "/works/master-na-chas/kreplenie-televizora-na-stenu/01-mounted-tv.png",
      alt: "Крепление телевизора на стену — ТВ на стене с подсветкой",
    },
    {
      src: "/works/master-na-chas/kreplenie-televizora-na-stenu/02-articulated-mount.png",
      alt: "Крепление телевизора на стену — монтаж кронштейна с выносом",
    },
    {
      src: "/works/master-na-chas/kreplenie-televizora-na-stenu/03-level-bracket.png",
      alt: "Крепление телевизора на стену — выравнивание кронштейна по уровню",
    },
  ],
  "podklyuchenie-televizora": [
    {
      src: "/works/master-na-chas/podklyuchenie-televizora/01-wall-tv.png",
      alt: "Подключение телевизора — ТВ на стене без видимых проводов",
    },
    {
      src: "/works/master-na-chas/podklyuchenie-televizora/02-ports-access.png",
      alt: "Подключение телевизора — доступ к разъёмам на задней панели",
    },
    {
      src: "/works/master-na-chas/podklyuchenie-televizora/03-mount-cables.png",
      alt: "Подключение телевизора — монтаж и прокладка кабелей",
    },
  ],
  "podklyuchenie-stiralnoy-mashiny": [
    {
      src: "/works/master-na-chas/podklyuchenie-stiralnoy-mashiny/01-master-back-panel.png",
      alt: "Подключение стиральной машины — мастер работает с задней панелью",
    },
    {
      src: "/works/master-na-chas/podklyuchenie-stiralnoy-mashiny/02-connections-rear.png",
      alt: "Подключение стиральной машины — шланги и разъёмы на задней панели",
    },
    {
      src: "/works/master-na-chas/podklyuchenie-stiralnoy-mashiny/03-connected-lg.png",
      alt: "Подключение стиральной машины — установленная стиральная машина LG",
    },
  ],
  "ustanovka-stiralnoy-mashiny": [
    {
      src: "/works/master-na-chas/ustanovka-stiralnoy-mashiny/01-back-panel.png",
      alt: "Установка стиральной машины на готовые коммуникации — задняя панель и шланги",
    },
    {
      src: "/works/master-na-chas/ustanovka-stiralnoy-mashiny/02-connected-lg.png",
      alt: "Установка стиральной машины на готовые коммуникации — подключенная машина LG",
    },
    {
      src: "/works/master-na-chas/ustanovka-stiralnoy-mashiny/03-master-work.png",
      alt: "Установка стиральной машины на готовые коммуникации — мастер подключает коммуникации",
    },
  ],
  "podklyuchenie-posudomoechnoy-mashiny": [
    {
      src: "/works/master-na-chas/podklyuchenie-posudomoechnoy-mashiny/01-built-in-open.png",
      alt: "Подключение посудомоечной машины — встраиваемая посудомойка с открытой дверью",
    },
    {
      src: "/works/master-na-chas/podklyuchenie-posudomoechnoy-mashiny/02-drain-hose.png",
      alt: "Подключение посудомоечной машины — подключение сливного шланга под мойкой",
    },
    {
      src: "/works/master-na-chas/podklyuchenie-posudomoechnoy-mashiny/03-water-hose.png",
      alt: "Подключение посудомоечной машины — подключение шланга подачи воды",
    },
  ],
  "ustanovka-vytyazhki": [
    {
      src: "/works/master-na-chas/ustanovka-vytyazhki/01-hansa-chimney.png",
      alt: "Установка вытяжки — купольная вытяжка Hansa с воздуховодом",
    },
    {
      src: "/works/master-na-chas/ustanovka-vytyazhki/02-duct-options.png",
      alt: "Установка вытяжки — гибкий и плоский воздуховод",
    },
    {
      src: "/works/master-na-chas/ustanovka-vytyazhki/03-bosch-built-in.png",
      alt: "Установка вытяжки — встраиваемая вытяжка Bosch в шкафу",
    },
  ],
  "ustanovka-vozduhootvoda-gofra": [
    {
      src: "/works/master-na-chas/ustanovka-vozduhootvoda-gofra/01-heater-duct.png",
      alt: "Установка воздухоотвода (гофра) — гибкий воздуховод к вентканалу",
    },
    {
      src: "/works/master-na-chas/ustanovka-vozduhootvoda-gofra/02-ceiling-manifold.png",
      alt: "Установка воздухоотвода (гофра) — распределительный короб с гофрами",
    },
    {
      src: "/works/master-na-chas/ustanovka-vozduhootvoda-gofra/03-frame-routing.png",
      alt: "Установка воздухоотвода (гофра) — разводка гофр в каркасе",
    },
  ],
  "ustanovka-vozduhootvoda-korob": [
    {
      src: "/works/master-na-chas/ustanovka-vozduhootvoda-korob/01-metal-ceiling-duct.png",
      alt: "Установка воздухоотвода (короб) — металлический короб на подвесах",
    },
    {
      src: "/works/master-na-chas/ustanovka-vozduhootvoda-korob/02-cabinet-plastic-duct.png",
      alt: "Установка воздухоотвода (короб) — пластиковый короб над шкафами",
    },
    {
      src: "/works/master-na-chas/ustanovka-vozduhootvoda-korob/03-hood-wall-duct.png",
      alt: "Установка воздухоотвода (короб) — короб от вытяжки к вентканалу",
    },
  ],
  "ustanovka-vstroennogo-holodilnika": [
    {
      src: "/works/master-na-chas/ustanovka-vstroennogo-holodilnika/01-side-by-side.png",
      alt: "Установка встроенного холодильника — встраиваемый холодильник Side-by-Side",
    },
    {
      src: "/works/master-na-chas/ustanovka-vstroennogo-holodilnika/02-bottom-freezer.png",
      alt: "Установка встроенного холодильника — холодильник с нижней морозильной камерой",
    },
    {
      src: "/works/master-na-chas/ustanovka-vstroennogo-holodilnika/03-grey-kitchen.png",
      alt: "Установка встроенного холодильника — встраиваемый холодильник в серой кухне",
    },
  ],
  "ustanovka-kanalnogo-ventilyatora": [
    {
      src: "/works/master-na-chas/ustanovka-kanalnogo-ventilyatora/01-inline-fan-clamp.png",
      alt: "Установка канального вентилятора — монтаж вентилятора в воздуховод",
    },
    {
      src: "/works/master-na-chas/ustanovka-kanalnogo-ventilyatora/02-ceiling-centrifugal.png",
      alt: "Установка канального вентилятора — потолочный центробежный вентилятор",
    },
    {
      src: "/works/master-na-chas/ustanovka-kanalnogo-ventilyatora/03-bkk-duct-fan.png",
      alt: "Установка канального вентилятора — канальный вентилятор BKK 250",
    },
  ],
  "demontazh-posudomoechnoy-mashiny": [
    {
      src: "/works/master-na-chas/demontazh-posudomoechnoy-mashiny/01-water-hose.png",
      alt: "Демонтаж посудомоечной машины — отключение шланга подачи воды",
    },
    {
      src: "/works/master-na-chas/demontazh-posudomoechnoy-mashiny/02-drain-disconnect.png",
      alt: "Демонтаж посудомоечной машины — отсоединение сливного шланга",
    },
    {
      src: "/works/master-na-chas/demontazh-posudomoechnoy-mashiny/03-built-in-open.png",
      alt: "Демонтаж посудомоечной машины — встраиваемая посудомоечная машина",
    },
  ],
  "demontazh-vytyazhki": [
    {
      src: "/works/master-na-chas/demontazh-vytyazhki/01-hansa-removal.png",
      alt: "Демонтаж вытяжки — снятие купольной вытяжки Hansa",
    },
    {
      src: "/works/master-na-chas/demontazh-vytyazhki/02-bosch-built-in.png",
      alt: "Демонтаж вытяжки — встраиваемая вытяжка Bosch в шкафу",
    },
    {
      src: "/works/master-na-chas/demontazh-vytyazhki/03-duct-types.png",
      alt: "Демонтаж вытяжки — гибкий и плоский воздуховод",
    },
  ],
  "demontazh-stiralnoy-mashiny": [
    {
      src: "/works/master-na-chas/demontazh-stiralnoy-mashiny/01-back-panel.png",
      alt: "Демонтаж стиральной машины — задняя панель и шланги",
    },
    {
      src: "/works/master-na-chas/demontazh-stiralnoy-mashiny/02-connected-lg.png",
      alt: "Демонтаж стиральной машины — стиральная машина LG перед снятием",
    },
    {
      src: "/works/master-na-chas/demontazh-stiralnoy-mashiny/03-master-work.png",
      alt: "Демонтаж стиральной машины — мастер отключает коммуникации",
    },
  ],
  "demontazh-boylera": [
    {
      src: "/works/master-na-chas/demontazh-boylera/01-electrolux-horizontal.png",
      alt: "Демонтаж бойлера — горизонтальный бойлер Electrolux",
    },
    {
      src: "/works/master-na-chas/demontazh-boylera/02-slim-wall-heater.png",
      alt: "Демонтаж бойлера — плоский настенный водонагреватель",
    },
    {
      src: "/works/master-na-chas/demontazh-boylera/03-installation-options.png",
      alt: "Демонтаж бойлера — варианты установки бойлеров",
    },
  ],
  "ustanovka-vodonagrevatelya": [
    {
      src: "/works/master-na-chas/ustanovka-vodonagrevatelya/01-slim-wall-heater.png",
      alt: "Установка водонагревателя — настенный бойлер с подключением",
    },
    {
      src: "/works/master-na-chas/ustanovka-vodonagrevatelya/02-installation-options.png",
      alt: "Установка водонагревателя — варианты монтажа бойлера",
    },
    {
      src: "/works/master-na-chas/ustanovka-vodonagrevatelya/03-horizontal-electrolux.png",
      alt: "Установка водонагревателя — горизонтальный бойлер Electrolux",
    },
  ],
  "sborka-tumby-pod-rakovinu": [
    {
      src: "/works/master-na-chas/sborka-tumby-pod-rakovinu/01-corner-cabinet.png",
      alt: "Сборка тумбы под раковину — сборка каркаса угловой тумбы",
    },
    {
      src: "/works/master-na-chas/sborka-tumby-pod-rakovinu/02-frame-mount.png",
      alt: "Сборка тумбы под раковину — крепление каркаса к стене",
    },
    {
      src: "/works/master-na-chas/sborka-tumby-pod-rakovinu/03-vanity-assembled.png",
      alt: "Сборка тумбы под раковину — готовая тумба с раковиной",
    },
  ],
  "ustanovka-polotentsesushitelya": [
    {
      src: "/works/master-na-chas/ustanovka-polotentsesushitelya/01-wrench-install.png",
      alt: "Установка полотенцесушителя — подключение к стояку ключом",
    },
    {
      src: "/works/master-na-chas/ustanovka-polotentsesushitelya/02-ladder-valves.png",
      alt: "Установка полотенцесушителя — лестничный полотенцесушитель с кранами",
    },
    {
      src: "/works/master-na-chas/ustanovka-polotentsesushitelya/03-serpentine-riser.png",
      alt: "Установка полотенцесушителя — М-образный полотенцесушитель на стояке",
    },
  ],
  "perenos-polotentsesushitelya": [
    {
      src: "/works/master-na-chas/perenos-polotentsesushitelya/01-wrench-install.png",
      alt: "Перенос полотенцесушителя — подключение к стояку ключом",
    },
    {
      src: "/works/master-na-chas/perenos-polotentsesushitelya/02-ladder-valves.png",
      alt: "Перенос полотенцесушителя — лестничный полотенцесушитель с кранами",
    },
    {
      src: "/works/master-na-chas/perenos-polotentsesushitelya/03-serpentine-riser.png",
      alt: "Перенос полотенцесушителя — М-образный полотенцесушитель на стояке",
    },
  ],
  "demontazh-polotentsesushitelya": [
    {
      src: "/works/master-na-chas/demontazh-polotentsesushitelya/01-wrench-install.png",
      alt: "Демонтаж полотенцесушителя — отключение от стояка ключом",
    },
    {
      src: "/works/master-na-chas/demontazh-polotentsesushitelya/02-ladder-valves.png",
      alt: "Демонтаж полотенцесушителя — лестничный полотенцесушитель с кранами",
    },
    {
      src: "/works/master-na-chas/demontazh-polotentsesushitelya/03-serpentine-riser.png",
      alt: "Демонтаж полотенцесушителя — М-образный полотенцесушитель на стояке",
    },
  ],
  "ustanovka-radiatora-otopleniya": [
    {
      src: "/works/master-na-chas/ustanovka-radiatora-otopleniya/01-diagonal-connect.png",
      alt: "Установка радиатора отопления — диагональное подключение к трубам",
    },
    {
      src: "/works/master-na-chas/ustanovka-radiatora-otopleniya/02-thermostatic-valve.png",
      alt: "Установка радиатора отопления — термостатический клапан на радиаторе",
    },
    {
      src: "/works/master-na-chas/ustanovka-radiatora-otopleniya/03-under-window.png",
      alt: "Установка радиатора отопления — радиатор под окном с байпасом",
    },
  ],
  "demontazh-radiatora-otopleniya": [
    {
      src: "/works/master-na-chas/demontazh-radiatora-otopleniya/01-diagonal-connect.png",
      alt: "Демонтаж радиатора отопления — радиатор с диагональным подключением",
    },
    {
      src: "/works/master-na-chas/demontazh-radiatora-otopleniya/02-thermostatic-valve.png",
      alt: "Демонтаж радиатора отопления — радиатор с термостатическим клапаном",
    },
    {
      src: "/works/master-na-chas/demontazh-radiatora-otopleniya/03-under-window.png",
      alt: "Демонтаж радиатора отопления — радиатор под окном с байпасом",
    },
  ],
  "sverlenie-otverstiy": [
    {
      src: "/works/master-na-chas/sverlenie-otverstiy/01-diamond-foundation.png",
      alt: "Сверление отверстий — алмазная резка проёма в фундаменте",
    },
    {
      src: "/works/master-na-chas/sverlenie-otverstiy/02-core-drill-rig.png",
      alt: "Сверление отверстий — алмазное бурение стены установкой",
    },
    {
      src: "/works/master-na-chas/sverlenie-otverstiy/03-brick-wall-drill.png",
      alt: "Сверление отверстий — сверление в кирпичной стене",
    },
  ],
  "germetizatsiya-shvov": [
    {
      src: "/works/master-na-chas/germetizatsiya-shvov/01-floor-joint-seal.png",
      alt: "Герметизация швов — герметизация шва бетонного пола лентой",
    },
    {
      src: "/works/master-na-chas/germetizatsiya-shvov/02-log-seam-caulk.png",
      alt: "Герметизация швов — нанесение герметика на швы сруба",
    },
  ],
  "zamena-smesitelya": [
    {
      src: "/works/master-na-chas/zamena-smesitelya/01-bath-mixer-wrench.png",
      alt: "Замена смесителя — монтаж смесителя на ванне ключом",
    },
    {
      src: "/works/master-na-chas/zamena-smesitelya/02-wall-mixer-install.png",
      alt: "Замена смесителя — установка настенного смесителя",
    },
    {
      src: "/works/master-na-chas/zamena-smesitelya/03-kitchen-faucet.png",
      alt: "Замена смесителя — установка кухонного смесителя",
    },
  ],
  "zamena-rozetki-ili-vyklyuchatelya": [
    {
      src: "/works/master-na-chas/zamena-rozetki-ili-vyklyuchatelya/01-outlet-replace.png",
      alt: "Замена розетки или выключателя — замена розетки с прозвонкой",
    },
    {
      src: "/works/master-na-chas/zamena-rozetki-ili-vyklyuchatelya/02-socket-wiring.png",
      alt: "Замена розетки или выключателя — подключение проводов розетки",
    },
    {
      src: "/works/master-na-chas/zamena-rozetki-ili-vyklyuchatelya/03-switch-install.png",
      alt: "Замена розетки или выключателя — установка механизма выключателя",
    },
  ],
  "ustanovka-lyustry-ili-svetilnika": [
    {
      src: "/works/master-na-chas/ustanovka-lyustry-ili-svetilnika/01-chandelier-mount.png",
      alt: "Установка люстры или светильника — монтаж люстры к потолку",
    },
    {
      src: "/works/master-na-chas/ustanovka-lyustry-ili-svetilnika/02-recessed-light.png",
      alt: "Установка люстры или светильника — встраиваемый светильник в потолок",
    },
    {
      src: "/works/master-na-chas/ustanovka-lyustry-ili-svetilnika/03-ceiling-spotlights.png",
      alt: "Установка люстры или светильника — потолочные споты",
    },
  ],
};

/** Галереи услуг ремонта квартир (опционально — иначе шаблонные фото категории) */
export const REMONT_KVARTIR_OFFER_GALLERIES: Partial<
  Record<string, readonly ServiceOfferGalleryImage[]>
> = {
  "kosmeticheskiy-remont": [
    {
      src: "/works/remont-kvartir/kosmeticheskiy-remont/01-sage-room.png",
      alt: "Косметический ремонт — комната после покраски и укладки ламината",
    },
    {
      src: "/works/remont-kvartir/kosmeticheskiy-remont/02-living-sofa.png",
      alt: "Косметический ремонт — гостиная с новой отделкой стен и пола",
    },
    {
      src: "/works/remont-kvartir/kosmeticheskiy-remont/03-dark-floor-room.png",
      alt: "Косметический ремонт — готовая комната с тёмным полом и светильниками",
    },
  ],
  "kapitalnyy-remont": [
    {
      src: "/works/remont-kvartir/kapitalnyy-remont/01-demolition-frame.png",
      alt: "Капитальный ремонт — демонтаж отделки и монтаж каркаса стен",
    },
    {
      src: "/works/remont-kvartir/kapitalnyy-remont/02-plaster-ladder.png",
      alt: "Капитальный ремонт — штукатурка и подготовка поверхностей",
    },
    {
      src: "/works/remont-kvartir/kapitalnyy-remont/03-rough-in-bath.png",
      alt: "Капитальный ремонт — черновые работы, плитка и санузел",
    },
  ],
  "remont-pod-klyuch": [
    {
      src: "/works/remont-kvartir/remont-pod-klyuch/01-living-marble.png",
      alt: "Ремонт под ключ — готовая гостиная с акцентной стеной",
    },
    {
      src: "/works/remont-kvartir/remont-pod-klyuch/02-open-plan.png",
      alt: "Ремонт под ключ — квартира с открытой планировкой",
    },
    {
      src: "/works/remont-kvartir/remont-pod-klyuch/03-studio-bedroom.png",
      alt: "Ремонт под ключ — готовая спальня с мебелью и отделкой",
    },
  ],
  "remont-vannoy-komnaty": [
    {
      src: "/works/remont-kvartir/remont-vannoy-komnaty/01-beige-shower.png",
      alt: "Ремонт ванной комнаты — душевая зона с плиткой и подсветкой",
    },
    {
      src: "/works/remont-kvartir/remont-vannoy-komnaty/02-marble-vanity.png",
      alt: "Ремонт ванной комнаты — ванная с мраморной плиткой и тумбой",
    },
    {
      src: "/works/remont-kvartir/remont-vannoy-komnaty/03-wood-accent.png",
      alt: "Ремонт ванной комнаты — санузел с деревянной акцентной стеной",
    },
  ],
  "remont-kuhni": [
    {
      src: "/works/remont-kvartir/remont-kuhni/01-grey-hex.png",
      alt: "Ремонт кухни — современная кухня с шестигранным фартуком",
    },
    {
      src: "/works/remont-kvartir/remont-kuhni/02-green-marble.png",
      alt: "Ремонт кухни — кухня с зелёными фасадами и мраморным фартуком",
    },
    {
      src: "/works/remont-kvartir/remont-kuhni/03-dark-wood.png",
      alt: "Ремонт кухни — тёмная кухня с деревянной столешницей",
    },
  ],
  "remont-komnaty": [
    {
      src: "/works/remont-kvartir/remont-komnaty/01-studio-zones.png",
      alt: "Ремонт комнаты — зонирование спальни и гостиной",
    },
    {
      src: "/works/remont-kvartir/remont-komnaty/02-teen-room.png",
      alt: "Ремонт комнаты — современная комната с рабочей зоной",
    },
    {
      src: "/works/remont-kvartir/remont-komnaty/03-grey-workspace.png",
      alt: "Ремонт комнаты — комната с акцентной стеной и рабочим столом",
    },
  ],
  "remont-gostinoy": [
    {
      src: "/works/remont-kvartir/remont-gostinoy/01-concrete-media.png",
      alt: "Ремонт гостиной — зона ТВ с бетонной отделкой стен",
    },
    {
      src: "/works/remont-kvartir/remont-gostinoy/02-white-tv-wall.png",
      alt: "Ремонт гостиной — гостиная с белой стенкой под телевизор",
    },
    {
      src: "/works/remont-kvartir/remont-gostinoy/03-wood-panel.png",
      alt: "Ремонт гостиной — гостиная с деревянной панелью и подсветкой",
    },
  ],
  "remont-spalni": [
    {
      src: "/works/remont-kvartir/remont-spalni/01-beige-bedroom.png",
      alt: "Ремонт спальни — светлая спальня с мягким изголовьем",
    },
    {
      src: "/works/remont-kvartir/remont-spalni/02-fluted-wall.png",
      alt: "Ремонт спальни — спальня с реечной акцентной стеной",
    },
    {
      src: "/works/remont-kvartir/remont-spalni/03-mural-bedroom.png",
      alt: "Ремонт спальни — спальня с панно и подсветкой изголовья",
    },
  ],
  "remont-prihozhey": [
    {
      src: "/works/remont-kvartir/remont-prihozhey/01-hex-entry.png",
      alt: "Ремонт прихожей — прихожая с шестигранной плиткой и шкафом",
    },
    {
      src: "/works/remont-kvartir/remont-prihozhey/02-white-niche.png",
      alt: "Ремонт прихожей — белая прихожая с нишей и зеркалом",
    },
    {
      src: "/works/remont-kvartir/remont-prihozhey/03-grey-hallway.png",
      alt: "Ремонт прихожей — серая прихожая с банкеткой и зеркалом",
    },
  ],
  "remont-balkona": [
    {
      src: "/works/remont-kvartir/remont-balkona/01-brick-lounge.png",
      alt: "Ремонт балкона — лоджия с зоной отдыха и кирпичной отделкой",
    },
    {
      src: "/works/remont-kvartir/remont-balkona/02-cabinet-balcony.png",
      alt: "Ремонт балкона — балкон со шкафом и отделкой стен",
    },
    {
      src: "/works/remont-kvartir/remont-balkona/03-outdoor-deck.png",
      alt: "Ремонт балкона — открытый балкон с настилом и зоной отдыха",
    },
  ],
  "remont-novostroyki": [
    {
      src: "/works/remont-kvartir/remont-novostroyki/01-entry-hallway.png",
      alt: "Ремонт новостройки — готовая прихожая в новой квартире",
    },
    {
      src: "/works/remont-kvartir/remont-novostroyki/02-living-classic.png",
      alt: "Ремонт новостройки — гостиная с чистовой отделкой",
    },
    {
      src: "/works/remont-kvartir/remont-novostroyki/03-green-bath.png",
      alt: "Ремонт новостройки — ванная комната после чистовой отделки",
    },
  ],
  "remont-odnokomnatnoy-kvartiry": [
    {
      src: "/works/remont-kvartir/remont-odnokomnatnoy-kvartiry/01-wood-bath.png",
      alt: "Ремонт однокомнатной квартиры — санузел с деревянной отделкой",
    },
    {
      src: "/works/remont-kvartir/remont-odnokomnatnoy-kvartiry/02-living-storage.png",
      alt: "Ремонт однокомнатной квартиры — гостиная со шкафами и зоной ТВ",
    },
    {
      src: "/works/remont-kvartir/remont-odnokomnatnoy-kvartiry/03-marble-living.png",
      alt: "Ремонт однокомнатной квартиры — гостиная с акцентной стеной",
    },
  ],
};
