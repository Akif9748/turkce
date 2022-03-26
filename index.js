const fetch = require("node-fetch");


/**
 * Çıktı sınıfı
 */

class Cikti {

    /**
     * Çıktı objesi
     * @param {String|null} kelime Aratılan kelime
     * @param {String|null} anlam Anlamı
     * @param {String|null} lisan Lisanı
     * @param {Ornek|null} ornek Örnek
     * @param {String|null} atasozu Hakkında bir atasözü
     * @param {[String]} anlamlar Anlamlar listesi
     * @param {[Ornek]} ornekler Örnekler listesi
     * @param {[String]} atasozleri Atasözleri listesi
     */

    constructor(kelime = null, anlam = null, lisan = null, ornek = null, atasozu = null, anlamlar = [], ornekler = [], atasozleri = []) {
        /**
         * Aratılan kelime
         */
        this.kelime = kelime;

        /**
         * Kelimenin anlamı
         */
        this.anlam = anlam;

        /**
         * Kelimenin lisanı
         */
        this.lisan = lisan;

        /**
         * Kelime hakkında örnek
         */
        this.ornek = ornek;

        /**
         * Kelime hakkında atasözü
         */
        this.atasozu = atasozu;


        /**
         * Kelimenin tüm anlamları
         */
        this.anlamlar = anlamlar;

        /**
         * Kelimenin ilk anlamının tüm örnekleri
         */
        this.ornekler = ornekler;

        /**
         * Kelime hakkında tüm atasözleri
         */
        this.atasozleri = atasozleri;
    }

}


/**
 * Örnek sınıfı
 */

class Ornek {

    /**
     * Örnek objesi
     * @param {String} ornek Örnek metni
     * @param {String|null} yazar Bulunabilirsa yazar 
     */

    constructor(ornek = null, yazar = null) {
        this.ornek = ornek;
        this.yazar = yazar;
    }
}


/**
 * Nesne yönelimli, en kusursuz kolay TDK api modülü.
 * @async
 * @param {String} kelime TDK'de aranacak kelime
 * @returns {Promise<Cikti>} Çıktı varsa Çıktı döndürür
 */

module.exports = async kelime => {

    if (!kelime) throw TypeError("Kelime parametresi boş geçilemez.");

    try {
        const response = await fetch("https://sozluk.gov.tr/gts?ara=" + encodeURI(kelime.toLocaleLowerCase("tr")), {
            headers: { method: "GET", "User-Agent": "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" }
        }).then(res => res.json());

        if (response.error) throw Error("Böyle bir kelime yok.");

        const [sonuc = null] = response;

        if (!sonuc) throw Error("API'de sonuç yok.");

        const { anlamlarListe, atasozu, lisan = null } = sonuc;

        const anlamlar = anlamlarListe?.map(anlam => anlam.anlam) ?? [];
        const ornekler = anlamlarListe[0]?.orneklerListe?.map(ornek => new Ornek(ornek?.ornek, ornek?.yazar[0]?.tam_adi)) ?? [];
        const atasozleri = atasozu?.map(atasozu => atasozu?.madde) ?? [];

        return new Cikti(sonuc.madde, anlamlar[0], lisan, ornekler[0], atasozleri[0], anlamlar, ornekler, atasozleri);
    } catch (e) {
        return e;
    }


}