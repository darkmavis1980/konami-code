async function sha1(str: string) {
  const enc = new TextEncoder();
  const hash = await crypto.subtle.digest('SHA-1', enc.encode(str));
  return Array.from(new Uint8Array(hash))
    .map(v => v.toString(16).padStart(2, '0'))
    .join('');
}

export const konamiCode = async (callback: () => void) => {
  // ↑ ↑ ↓ ↓ ← → ← → B A
  let keys = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a',
  ];

  const encKeys = await Promise.all(keys.map(async (key: string) => await sha1(key)));

  const log: string[] = [];
  document.addEventListener('keydown', async (e) => {
    log.push(await sha1(e.key));
    if (log.length > encKeys.length) {
      log.shift();
    }
    if (log.join('') === encKeys.join('')) {
      callback();
    }
  });
}