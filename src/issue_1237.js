const Joi = require('joi');

const schema = Joi.array().items(Joi.func().min(2));

const fn = () => 'fn';

const obj = [fn];

function issue1237() {
    const valid = Joi.validate(obj, schema);

    return valid.error.annotate();
}

module.exports = issue1237;
