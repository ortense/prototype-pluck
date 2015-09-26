# prototype-pluck
Pluck properties of the arrays

This module was inspired by the `pluck` method of [lodash]('https://lodash.com/docs#pluck').


## node.js

```js
require('prototype-pluck');

[{name:'Tony'},{name:'Matt'},{name:'Peter'}].pluck('name'); //['Tony', 'Matt', 'Peter']
[1,11,111].pluck('toString', true); //['1','11','111']
['Clint', 'Nick', 'Steve'].pluck('substring', true, 1, 4); //['lin', 'ick', 'tev']
```

## browser

```html
<script src="node_modules/prototype-pluck/min/pluck.js"></script>
<script>
[{name:'Tony'},{name:'Matt'},{name:'Peter'}].pluck('name'); //['Tony', 'Matt', 'Peter']
[1,11,111].pluck('toString', true); //['1','11','111']
['Clint', 'Nick', 'Steve'].pluck('substring', true, 1, 4); //['lin', 'ick', 'tev']
</script>
```
## TODO
- Add unit test (QUnit)

## License
MIT
