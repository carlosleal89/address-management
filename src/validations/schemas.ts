import Joi from "joi";

export const earthAddressValidator = Joi.object({
  address: Joi.string()
    .min(4)
    .max(250)
    .message('"Endereço" deve ter pelo menos 4 caracteres.' )
    .required(),
  neighborhood: Joi.string()
    .min(4)
    .message('"Bairro" deve ter pelo menos 4 caracteres.' )
    .max(250)
    .required(),
  city: Joi.string()
    .min(4)
    .message('"Cidade" deve ter pelo menos 4 caracteres.' )
    .max(250)
    .required(),
  zipCode: Joi.string()
    .min(5)
    .message('"CEP" deve ter entre 5 e 9 caracteres.' )
    .max(9)
    .required(),
  country: Joi.string()
    .min(4)
    .message('"País" deve ter pelo menos 4 caracteres.' )
    .max(250)
    .required(),
});

export const marsAddressValidator = Joi.object({
  address: Joi.string()
    .length(4)
    .message('"Endereço" deve ter 4 caracteres.' )
    .required(),
});