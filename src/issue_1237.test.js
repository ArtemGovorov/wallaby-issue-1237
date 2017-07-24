const issue1237 = require('./issue_1237');

it('will not pass in wallaby', () => {
    const fn = require('./__sandbox__/test_file')
    const result = issue1237(fn);

    expect(result).toMatchSnapshot();
});
