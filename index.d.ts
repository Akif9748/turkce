interface Ornek {
    ornek: string | null;
    yazar: string | null;
}

interface Cikti {
    kelime: string | null;
    anlam: string | null;
    lisan: string | null;
    ornek: Ornek | null;
    atasozu: string | null;
    anlamlar: string[];
    ornekler: Ornek[];
    atasozleri: string[];
}

/**
 * Nesne yönelimli, en kusursuz kolay TDK api modülü.
 * @param {String} kelime Aranacak kelime
 * @returns {Cikti} Sonuç
 */
export default function (kelime: string): Promise<Cikti>;
