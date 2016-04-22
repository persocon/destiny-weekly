.PHONY: watch php-server

WEBPACK_CMD = node_modules/.bin/webpack
WEBPACK_ARGS = --config webpack.config.js --progress --colors --display-error-details

watch:
	$(WEBPACK_CMD) $(WEBPACK_ARGS) --watch

php-server:
	cd src && php -S localhost:8888

