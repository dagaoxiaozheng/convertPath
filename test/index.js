const fs = require('fs')
const SVGParser = require('../lib/index.js')

const parse = SVGParser.parse('./test/scatter-symbol.svg', {
  plugins: [
    {
      convertUseToGroup: false, // at first
    },
    {
      convertShapeToPath: true,
    },
    {
      removeGroups: true,
    },
    {
      convertTransfromforPath: true,
    },
    {
      viewBoxTransform: true, // at last
    },
  ],
})

const result = parse.toSimpleSvg()
console.log(result)

const paths = parse.getPathAttributes()
console.log(paths)

fs.writeFileSync('./test/result.svg', result, 'utf-8')
