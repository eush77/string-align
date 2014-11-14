# string-align [![Build Status][travis-badge]][travis] [![Code Climate][codeclimate-badge]][codeclimate] [![Dependency Status][david-badge]][david]

[![npm](https://nodei.co/npm/string-align.png)](https://nodei.co/npm/string-align/)

[travis]: https://travis-ci.org/eush77/string-align
[travis-badge]: https://travis-ci.org/eush77/string-align.svg
[codeclimate]: https://codeclimate.com/github/eush77/string-align
[codeclimate-badge]: https://codeclimate.com/github/eush77/string-align/badges/gpa.svg
[david]: https://david-dm.org/eush77/string-align
[david-badge]: https://david-dm.org/eush77/string-align.png

Align string with whitespace. Whitespace character defaults to ascii space.

## Examples

```js
> align('foo', 7, 'center')
'  foo  '

> align('foo', 7, 'left')
'foo    '

> align('foo', 7, 'right')
'    foo'

> align('-=', 7, 'fill')
'-=-=-=-'

> align('foo', 7, 'center', '_')
'__foo__'

> align(7, {
    width: 4,
    alignment: 'right',
    placeholder: 0
  })
'0007'
```

## API

### stringAlign(string, width, [alignment], [placeholder])

### stringAlign(string, options)

If `string` or `placeholder` is not a string, it is converted to.

| Option      | Type                               | Required? | Default    |
| :---------- | :--------------------------------- | :-------: | :--------- |
| width       | number                             | Yes       |            |
| alignment   | "center", "left", "right", "fill"  | No        | `"center"` |
| placeholder | string                             | No        | `" "`      |

## Install

```shell
npm install string-align
```

## License

MIT