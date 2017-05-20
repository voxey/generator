"use strict"

module.exports.GenerateChunk = function(x, y, z, seed) {
    var data = new Array(16 * 16 * 16);
    for (var j = 0; j < 16; j++) {
        for (var i = 0; i < 16; i++) {
            for (var k = 0; k < 16; k++) {
                if (j < 2) data[j * 256 + i * 16 + j] = 1;
                else data[j * 256 + i * 16 + j] = 0;
            }
        }
    }
    return new Uint32Array(data);
}