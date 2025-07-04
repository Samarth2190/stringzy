export function formatNumber(num: string | number, thousendsSeperator: '.' | ',' = ',') {
  const numStr = num.toString();
  return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, thousendsSeperator);
}
