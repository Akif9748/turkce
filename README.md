# turkce
Nesne-yönelimli, en kusursuz kolay TDK api modülü.

### Avantajları:
- Diğer modüller gibi `node-fetch` hatası yok.
- Nesne yönelimli.

## Kurulum
```sh
npm i turkce
```

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
  anlam: 'Anlamlı ses veya ses birliği, söz, sözcük, lügat',
  lisan: 'Arapça kelime',
  ornek: {
    ornek: 'Tayyare kelimesine alışan millet, uçak kelimesine de alışır.',
    yazar: 'Orhan Veli Kanık'
  },
  atasozu: 'kelimeleri tartarak konuşmak',
  anlamlar: [ 'Anlamlı ses veya ses birliği, söz, sözcük, lügat' ],
  ornekler: [
    {
      ornek: 'Tayyare kelimesine alışan millet, uçak kelimesine de alışır.',
      yazar: 'Orhan Veli Kanık'
    }
  ],
  atasozleri: [ 'kelimeleri tartarak konuşmak', 'kelimenin tam anlamıyla' ]
}*/
```


# Yapımcı
* [GitHub](https://github.com/Akif9748) 
* [NPM](https://www.npmjs.com/~akif9748)
* [Discord](https://discord.com/users/539506680140922890) | Akif#7304

