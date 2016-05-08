.PHONY: watch php-server test test-watch

WEBPACK_CMD = node_modules/.bin/webpack
WEBPACK_ARGS = --config webpack.config.js --progress --colors --display-error-details
KARMA_CMD = node_modules/.bin/karma
KARMA_ARGS =  start karma.config.js

watch:
	$(WEBPACK_CMD) $(WEBPACK_ARGS) --watch

test:
	$(KARMA_CMD) $(KARMA_ARGS)

test-watch:
	$(KARMA_CMD) $(KARMA_ARGS) --watch

php-server:
	cd src && php -S localhost:8888
