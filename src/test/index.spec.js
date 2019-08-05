import Prod from "../prod";

const assert = require('assert');

describe('이건 true', () => {
    it('return true', ()  => {
        assert.equal(Prod.to_bool(1), true);
    });
});

describe('이건 false', () => {
    it('return false', ()  => {
        assert.equal(Prod.to_bool(0), false);
    });
});