# turkce
Kolay TDK api modülü.

### Avantajları:
- Diğer modüller gibi `node-fetch` hatası yok.

## Kurulum
[![NPM](https://nodei.co/npm/turkce.png)](https://npmjs.org/package/turkce)

## Örnek kullanım
```js
const turkce = require("turkce");

// then
turkce("kelime").then(console.log).catch(console.error);

// async / await
(async () => {
  try {
    const sonuc = await turkce("kelime");
    console.log(sonuc);
  } catch (e) {
    console.error(e);
  }

})();

/*
{
  kelime: 'kelime',
  lisan: 'Arapça kelime',
  anlamlar: [
    'Bir veya birkaç heceden oluşan, anlamı ses birliği; söz, sözcük, lügat'
  ],
  ornekler: [
    {
      ornek: 'Tayyare kelimesine alışan millet, uçak kelimesine de alışır.',
      yazar: 'Orhan Veli Kanık'
    }
  ],
  atasozleri: [ 'kelimeleri tartarak konuşmak', 'kelimenin tam anlamıyla' ],
  raw: [{
    madde_id: '43528',
    kac: '0',
    kelime_no: '29158',
    ... direkt çıktılar
  }]
}*/
```
## API:
### turkce(kelime, useragent?)
- Useragent varsayılan olarak GoogleBot'dur.

## Yapımcı
* [GitHub](https://github.com/Akif9748) 
* [NPM](https://www.npmjs.com/~akif9748)
* [Discord](https://discord.com/users/539506680140922890) | akif9748