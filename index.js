const fetch = global.fetch || require("node-fetch");

/**
 * Nesne yönelimli, en kusursuz kolay TDK api modülü.
 * @async
 * @param {String} kelime TDK'de aranacak kelime
 * @returns {Promise<Object>} Çıktı varsa Çıktı döndürür
 */

module.exports = async kelime => {

    if (!kelime) throw TypeError("Kelime parametresi boş geçilemez.");

    try {
        const response = await fetch("https://sozluk.gov.tr/gts?ara=" + encodeURI(kelime.toLocaleLowerCase("tr")), {
            headers: { "User-Agent": "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" }
        }).then(res => res.json());

        if (response.error) return null;

        const [sonuc] = response;

        if (!sonuc) return null;
        const { anlamlarListe, atasozu, lisan = null } = sonuc;

        const anlamlar = anlamlarListe?.map(anlam => anlam.anlam) || [];
        const ornekler = anlamlarListe[0]?.orneklerListe?.map(ornek => ({ ornek: ornek?.ornek || null, yazar: ornek?.yazar[0]?.tam_adi || null })) || [];
        const atasozleri = atasozu?.map(atasozu => atasozu?.madde) || [];
        return {
            kelime: sonuc.madde,
            anlam: anlamlar[0],
            lisan,
            ornek: ornekler[0] || null,
            atasozu: atasozleri[0] || null,
            anlamlar,
            ornekler,
            atasozleri
        }

    } catch (e) {
        return e;
    }


}