const questions = [
    {
        type: 'input',
        name: 'logotext',
        message: 'Please enter three characters for your Logo',
    },
    {
        type: 'input',
        name: 'colour',
        message: 'Please choose what colour you want your logo to be',
    },
    {
        type: 'input',
        name: 'text',
        message: 'Please choose what colour you want your Logo text to be',
    },
    {
        type: 'list',
        name: 'shape',
        choices: ['Circle', 'Triangle', 'Square'],
    },
]

module.exports = questions;