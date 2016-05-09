.PHONY: help watch php-server test test-watch

WEBPACK_CMD = node_modules/.bin/webpack
WEBPACK_ARGS = --config webpack.config.js --progress --colors --display-error-details
KARMA_CMD = node_modules/.bin/karma
KARMA_ARGS =  start karma.config.js

help:
	@IFS=$$'\n' ; \
  help_lines=(`fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//'`); \
  for help_line in $${help_lines[@]}; do \
      IFS=$$'#' ; \
      help_split=($$help_line) ; \
      help_command=`echo $${help_split[0]} | sed -e 's/^ *//' -e 's/ *$$//'` ; \
      help_info=`echo $${help_split[2]} | sed -e 's/^ *//' -e 's/ *$$//'` ; \
      printf "%-30s %s\n" $$help_command $$help_info ; \
  done

watch: ## Starts Webpack Watch
	$(WEBPACK_CMD) $(WEBPACK_ARGS) --watch

test: ## Singlerun tests
	$(KARMA_CMD) $(KARMA_ARGS)

test-watch: ## Starts Test Watch
	$(KARMA_CMD) $(KARMA_ARGS) --watch

php-server: ## Starts PHP-Server
	cd src && php -S localhost:8888
