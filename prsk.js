(function() {
  const songs = [...document.querySelectorAll('tr')]
    .map(row => {
      const link = row.querySelector('a.a-link');
      const tds = [...row.querySelectorAll('td.center')];
      if (!link || tds.length < 5) return null;

      return {
        name: link.textContent.trim(),
        EXPERT: tds[2].textContent.trim() === '-' ? null : tds[2].textContent.trim(),
        MASTER: tds[3].textContent.trim() === '-' ? null : tds[3].textContent.trim(),
        APPEND: tds[4].textContent.trim() === '-' ? null : tds[4].textContent.trim()
      };
    })
    .filter(Boolean)
    .slice(1); // ミク, ルカ, MEIKO,KAITOのデータが入っちゃうので削除してます

  const blob = new Blob([JSON.stringify(songs, null, 2)], { type: 'application/json' });
  const a = Object.assign(document.createElement('a'), {
    href: URL.createObjectURL(blob),
    download: 'prsk-songs.json'
  });
  document.body.appendChild(a);
  a.click();
  a.remove();
  console.log('JSONでダウンロードします');
})();
