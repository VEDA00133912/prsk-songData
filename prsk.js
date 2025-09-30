(function() {
  const parseCell = (cell) => {
    const text = cell.textContent.trim();
    if (text === '-' || text === '') return null;
    if (text.endsWith('+')) {
      return Number(text.replace('+', '')) + 0.5;
    }
    return Number(text);
  };

  let songs = [...document.querySelectorAll('tbody tr')].map(row => {
    const tds = row.querySelectorAll('td');
    const link = tds[3]?.querySelector('a');
    if (!link) return null;

    return {
      number: Number(tds[0]?.textContent.trim()), // 確認のために曲番号を追加
      name: link.textContent.trim(),
      EASY:   parseCell(tds[5]),
      NORMAL: parseCell(tds[6]),
      HARD:   parseCell(tds[7]),
      EXPERT: parseCell(tds[8]),
      MASTER: parseCell(tds[9]),
      APPEND: parseCell(tds[10])
    };
  }).filter(Boolean);

  songs = songs.slice(2);

  const blob = new Blob([JSON.stringify(songs, null, 2)], { type: 'application/json' });
  const a = Object.assign(document.createElement('a'), {
    href: URL.createObjectURL(blob),
    download: 'songs.json'
  });
  document.body.appendChild(a);
  a.click();
  a.remove();

  console.log('songs.jsonをダウンロードしました');
})();
