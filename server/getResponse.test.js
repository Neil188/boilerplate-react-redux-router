const path = require('path');
const getResponse = require('./getResponse');

test('should call res.sendFile() with index.html', () => {
    const sendFile = jest.fn();
    const res = {
        sendFile,
    };
    getResponse({}, res);
    expect(sendFile.mock.calls).toHaveLength(1);
    const { base } = path.parse(sendFile.mock.calls[0][0]);
    expect(base).toBe('index.html');
});
