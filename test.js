const turkce = require(".");
const test = require('node:test');
const assert = require("node:assert");

test("kelime", async () => {
    const sonuc = await turkce("kelime");
    assert.strictEqual(sonuc.kelime, "kelime");
    assert(sonuc.raw);
});