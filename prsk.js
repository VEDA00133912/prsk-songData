(function() {
  const parseCell = (cell) => {
    const text = cell.textContent.trim();
    return text === '-' ? null : Number(text);
  };

  const songs = [...document.querySelectorAll('tr')]
    .map(row => {
      const link = row.querySelector('a.a-link');
      const tds = [...row.querySelectorAll('td.center')];
      if (!link || tds.length < 6) return null;

      return {
        name: link.textContent.trim(),
        EASY:   parseCell(tds[0]),
        NORMAL: parseCell(tds[1]),
        HARD:   parseCell(tds[2]),
        EXPERT: parseCell(tds[3]),
        MASTER: parseCell(tds[4]),
        APPEND: parseCell(tds[5])
      };
    })
    .filter(Boolean)
    .slice(1); // ミク, ルカ, MEIKO, KAITOのデータが入っちゃうので削除してます

  const blob = new Blob([JSON.stringify(songs, null, 2)], { type: 'application/json' });
  const a = Object.assign(document.createElement('a'), {
    href: URL.createObjectURL(blob),
    download: 'prsk-songs.json'
  });
  document.body.appendChild(a);
  a.click();
  a.remove();
  console.log('ダウンロードしました');
})();
