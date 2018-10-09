const handleListen = require('./handleListen');

test('should call log and return message', () => {
    const port = 3000;
    const log = jest.fn();
    const expected = `Server has started on port ${port.toString()}!`;
    handleListen(log, port);
    expect(log.mock.calls).toHaveLength(1);
    expect(log.mock.calls[0][0]).toBe(expected);
});
