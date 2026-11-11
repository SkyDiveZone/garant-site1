"use client";

import type { EkbPage } from "@/lib/ekb2/pages";
import { useMemo, useState } from "react";

export function EkbPricebook({ page }: { page: EkbPage }) {
  const [query, setQuery] = useState("");
  const [chip, setChip] = useState("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return page.groups
      .map((group) => {
        const groupOk = chip === "all" || group.id === chip;
        const items = group.items.filter((item) => {
          if (!groupOk) return false;
          if (!q) return true;
          return item.nameKey.includes(q) || item.name.toLowerCase().includes(q);
        });
        return { ...group, items };
      })
      .filter((group) => group.items.length > 0);
  }, [chip, page.groups, query]);

  return (
    <section className="section pricebook" id="price">
      <div className="price-head">
        <h2>Прайс</h2>
        <p className="fine">
          Цены действующего прайса Екатеринбурга, указаны как «от». Итог мастер называет до начала
          работы.
        </p>
      </div>
      <label className="finder">
        <input
          type="search"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setChip("all");
          }}
          placeholder={page.searchPlaceholder}
          aria-label="Поиск по прайсу"
        />
      </label>
      <div className="chips">
        {page.chips.map((item) => (
          <button
            key={item.id}
            type="button"
            className={chip === item.id ? "on" : undefined}
            onClick={() => {
              setChip(item.id);
              if (item.id === "all") setQuery("");
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="groups">
        {filtered.map((group) => (
          <article key={group.id} className="group" data-group={group.id}>
            <h3>{group.title}</h3>
            {group.items.map((item) => (
              <div key={item.nameKey} className="price" data-name={item.nameKey}>
                <span>{item.name}</span>
                <b>{item.price}</b>
              </div>
            ))}
          </article>
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="empty">Такой строки нет. Позвоните — назовём цену по телефону.</p>
      )}
    </section>
  );
}
