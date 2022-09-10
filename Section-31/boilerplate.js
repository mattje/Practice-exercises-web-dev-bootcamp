const fs = require('fs')
const folderName = process.argv[2] || 'Project'

// async version
// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     if (err) throw err
// })
// console.log('I COME AFTER MKDIR')

try {
    fs.mkdirSync(folderName)
    fs.writeFileSync(`${folderName}/index.html`, '')
    fs.writeFileSync(`${folderName}/styles.css`, '')
    fs.writeFileSync(`${folderName}/app.js`, '')
} catch (e) {
    console.log('error!')
    console.log(e)
}
