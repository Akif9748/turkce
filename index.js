const fetch = global.fetch || require("node-fetch");

/**
 * Nesne yönelimli, en kusursuz kolay TDK api modülü.
 * @async
 * @param {String} kelime TDK'de aranacak kelime
 * @param {String} [ua] Custom User-Agent
 * @returns {Promise<Object>} Çıktı varsa Çıktı döndürür
 */

module.exports = async (kelime, ua = "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)") => {
    if (!kelime || typeof kelime !== "string") throw TypeError("Kelime parametresi boş geçilemez.");

    const raw = await fetch("https://sozluk.gov.tr/gts?ara=" + encodeURI(kelime.toLocaleLowerCase("tr")), {
        headers: { "User-Agent": ua }
    }).then(res => res.json());

    if (raw.error) return null;
    const [sonuc] = raw;
    if (!sonuc) return null;

    return {
        kelime: sonuc.madde,
        lisan: sonuc.lisan,
        anlamlar: sonuc.anlamlarListe?.map(anlam => anlam?.anlam).filter(Boolean) || [],
        ornekler: sonuc.anlamlarListe?.map(anlam => anlam?.orneklerListe).flat().filter(Boolean)
            .map(ornek => ({ ornek: ornek?.ornek, yazar: ornek?.yazar?.[0]?.tam_adi })) || [],
        atasozleri: sonuc.atasozu?.map(atasozu => atasozu?.madde).filter(Boolean) || [],
        raw
    }

}