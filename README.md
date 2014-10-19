# string-align [![Build Status][travis-badge]][travis] [![Dependency Status][david-badge]][david] [![DevDependency Status][david-dev-badge]][david-dev]

[![npm](https://nodei.co/npm/string-align.png)](https://nodei.co/npm/string-align/)

[travis-badge]: https://travis-ci.org/eush77/string-align.svg
[travis]: https://travis-ci.org/eush77/string-align
[david-badge]: https://david-dm.org/eush77/string-align.png
[david]: https://david-dm.org/eush77/string-align
[david-dev-badge]: https://david-dm.org/eush77/string-align/dev-status.png
[david-dev]: https://david-dm.org/eush77/string-align#info=devDependencies

Align string with whitespace. Whitespace character defaults to ascii space.

## API

### stringAlign(string, width, [alignment], [placeholder])

### stringAlign(string, options)

If `string` or `placeholder` is not a string, it is converted to.

| Option      | Type                       | Required? | Default    |
| :---------- | :------------------------- | :-------: | :--------- |
| width       | number                     | Yes       |            |
| alignment   | "center", "left", "right"  | No        | `"center"` |
| placeholder | string                     | No        | `" "`      |

## Install

```shell
npm install string-align
```

## License

MIT