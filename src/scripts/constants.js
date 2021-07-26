export const tarifs = Object.freeze({
    taxes: 0.2,
    water: 0.3,
    internet: 0.4,
    security: 0.5,
    exchange: 0.6,
});

export const services = Object.freeze({
    'Налоги': taxes_pay,
    'Холодная вода': water_pay,
    'Интернет': internet_pay,
    'Охрана': security_pay,
    'Обмен валют': exchange_pay,
});

export const services1 = Object.freeze({
    'taxes': taxes_pay,
    'water': water_pay,
    'internet': internet_pay,
    'security': security_pay,
    'exchange': exchange_pay,
});

export const payTo = Object.freeze({
    'taxes': 'Оплата налогов',
    'water': 'Оплата холодного водоснабжения',
    'internet': 'Оплата за интернет',
    'security': 'Оплата за охрану',
    'exchange': 'Обмен валют',
});