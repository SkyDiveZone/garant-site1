/** Форматирует маркетинговую цену «от X ₽» с пробелами в тысячах. */
export function formatPriceFrom(amount: number): string {
  const formatted = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return `от ${formatted} ₽`;
}
