const issue1237 = require('./issue_1237');

it('will not pass in wallaby', () => {
    const result = issue1237();

    expect(result).toMatchSnapshot();
});
