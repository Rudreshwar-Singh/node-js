// commonJS , every file is module (by default)
// modules- encapsulated code (only share minimum)


const names = require('./4-names')
const sayhi=require('./5-utlis')
const data=require('./6-alternative-flabour')
require('./7-mind-grenade')

sayhi('susan')
sayhi(names.john)
sayhi(names.peter)    