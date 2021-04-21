#!/usr/bin/env node

// require packs
const CFonts = require('cfonts');
const columnify = require('columnify');
const boxen = require('boxen');

// define vars
const data = {
    '\x1b[4mName\x1b[0m': 'samuel',
    '\x1b[4mSuper Hero Name\x1b[0m': 'Letocart',
    '': '',
    '\x1b[4mCurrent Job\x1b[0m': 'WebDev Padawan - Full-Time',
    '\x1b[4mGitHub\x1b[0m': 'https://github.com/AnonyMouse97',
    '\x1b[4mLinkedin\x1b[0m': 'test',
}


// titles
CFonts.say('I AM|TOCART!', {
    font: 'block',
    align: 'center',
    colors: ['yellow', 'red']
});

console.log(boxen(columnify(data, {
    columnSplitter: '|',
    columns: ['SAMUEL', 'Letocart']
}),
    {
        padding: 6,
        margin: { left: 30 },
        borderStyle: 'double',
        borderColor: 'red'
    }));


//endtitle
CFonts.say("A HACKER'S CARD", {
    font: 'tiny',
    align: 'center',
    colors: ['yellow']
});

console.log(boxen('© Samuel Letocart',
    {
        margin: { left: 60 },
        borderStyle: 'double'
    }));