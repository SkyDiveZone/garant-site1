from pathlib import Path
import re, json

src = Path(r"C:\Users\sergi\Projects\ekat-garant196-site")
out = Path(r"C:\Users\sergi\Projects\garant-master\src\lib\ekb2")
out.mkdir(parents=True, exist_ok=True)

def parse_page(name, html):
    h1 = re.search(r"<h1>(.*?)</h1>", html, re.S).group(1).strip()
    lead = re.search(r'<p class="lead">(.*?)</p>', html, re.S).group(1).strip()
    facts = re.findall(r'<ul class="facts">\s*(.*?)\s*</ul>', html, re.S)
    fact_items = re.findall(r"<li>(.*?)</li>", facts[0]) if facts else []
    placeholder = re.search(r'placeholder="([^"]+)"', html).group(1)
    chips_block = re.search(r'<div class="chips">(.*?)</div>', html, re.S).group(1)
    chips = []
    for m in re.finditer(r'<button[^>]*data-group="([^"]+)"[^>]*>(.*?)</button>', chips_block):
        chips.append({"id": m.group(1), "label": m.group(2).strip()})
    groups = []
    for gm in re.finditer(
        r'<article class="group" data-group="([^"]+)"><h3>(.*?)</h3>(.*?)</article>',
        html,
        re.S,
    ):
        gid, title, body = gm.group(1), gm.group(2), gm.group(3)
        items = []
        for im in re.finditer(
            r'<div class="price" data-name="([^"]+)"><span>(.*?)</span><b>(.*?)</b></div>',
            body,
        ):
            items.append({"nameKey": im.group(1), "name": im.group(2), "price": im.group(3)})
        groups.append({"id": gid, "title": title, "items": items})
    steps_h2 = "Как проходит выезд"
    m = re.search(
        r'<section class="section">\s*<h2>(.*?)</h2>\s*<div class="steps"',
        html,
        re.S,
    )
    if m:
        steps_h2 = m.group(1)
    steps = []
    for sm in re.finditer(
        r'<article class="step"><span>(.*?)</span><strong>(.*?)</strong><p>(.*?)</p></article>',
        html,
        re.S,
    ):
        steps.append({"num": sm.group(1), "title": sm.group(2), "text": sm.group(3)})
    reviews = []
    for rm in re.finditer(
        r'<blockquote class="review( extra)?"(?: hidden)?><p>(.*?)</p><footer>(.*?)</footer></blockquote>',
        html,
        re.S,
    ):
        reviews.append({"text": rm.group(2), "meta": rm.group(3), "extra": bool(rm.group(1))})
    return {
        "key": name,
        "h1": h1,
        "lead": lead,
        "facts": fact_items,
        "searchPlaceholder": placeholder,
        "chips": chips,
        "groups": groups,
        "stepsTitle": steps_h2,
        "steps": steps,
        "reviews": reviews,
    }

mapping = {
    "santehnik": "index.html",
    "elektrik": "elektrik.html",
    "master-na-chas": "master.html",
    "remont-kvartir": "remont.html",
}
pages = {}
for key, file in mapping.items():
    html = (src / file).read_text(encoding="utf-8")
    pages[key] = parse_page(key, html)

(out / "pages.json").write_text(json.dumps(pages, ensure_ascii=False, indent=2), encoding="utf-8")
print("ok", {k: len(v["groups"]) for k, v in pages.items()})
