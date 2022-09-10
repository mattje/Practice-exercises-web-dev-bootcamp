import { franc } from 'franc'

// These lines make "require" available
import { createRequire } from 'module'
const require = createRequire(import.meta.url)

const langs = require('langs')
const colors = require('colors')

const input = process.argv[2]
const langCode = franc(input)
const language = langs.where('3', langCode)

if (
    langCode === 'und' ||
    langCode === 'mis' ||
    langCode === 'mul' ||
    langCode === 'zxx'
) {
    console.log("Sorry, couldn't figure it out. Try with more text.")
} else {
    console.log(`Our best guess is: ${language.name.rainbow}`)
}
