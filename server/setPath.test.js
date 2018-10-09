const path = require('path');
const setPath = require('./setPath');

const PUBLICFOLDER = 'dist';
const DUMMYPATH = 'dummy';

test('should set path to public when no other option passed', () => {
    const EXPECTED = PUBLICFOLDER;

    expect(setPath(DUMMYPATH)).toBe(EXPECTED);
});

test('should add extra options to path', () => {
    const FILE = 'test.html';
    const EXPECTED = path.join(PUBLICFOLDER, FILE);

    expect(setPath(DUMMYPATH, FILE)).toBe(EXPECTED);
});
