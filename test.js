const turkce = require(".");

(async () => {
    try {
        const sonuc = await turkce("kelime");
        console.log(sonuc);
    } catch (e) {
        console.error(e);
    }
})();