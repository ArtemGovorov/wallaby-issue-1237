const Joi = require('joi');

const schema = Joi.array().items(Joi.func().min(2));

function issue1237(fn) {
    const obj = [fn];
    const valid = Joi.validate(obj, schema);

    return valid.error.annotate();
}

module.exports = issue1237;
