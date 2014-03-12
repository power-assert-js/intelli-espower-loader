# intelli-espower-loader

Handy node module for [power-assert](https://github.com/twada/power-assert "power-assert") and [espower-loader](https://github.com/twada/espower-loader " espower-loader").

## Installation

``` sh
npm install intelli-espower-loader --save-dev
```

## Usage

1. You have to set test directory to your `package.json`

``` json
{
    "name": "intelli-espower-loader",
    "description": "Make espower-lodaer config file unnecessary.",
    "version": "0.0.1",
    "repository": {
        "url": "git://github.com/azu/intelli-espower-loader.git"
    },
    "main": "lib/intelli-espower-loader.js",
    "scripts": {
        "test": "mocha test/*.js"
    },
    "directories": {
        "test": "test/"
    },
    "author": "azu",
    "license": "MIT",
    "dependencies": {
        "espower-loader": "~0.3.1",
        "packpath": "~0.1.0"
    }
}
```

``` json
"directories": {
    "test": "test/"
}
```

### run mocha with `intelli-espower-loader`

``` sh
mocah --require intelli-espower-loader
```

Run Test with [power-assert](https://github.com/twada/power-assert "power-assert") on the fly!!

![mocha](http://monosnap.com/image/GNvwDvnwXuUSvaGGZotBOeXwBATEfR.png)

![mocha with webstorm](http://monosnap.com/image/EKtgJNXyjzm32Ijiu7VubrZho4Rmc2.png)


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT