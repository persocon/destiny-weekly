.PHONY: help watch dist php-server test test-watch

WEBPACK_CMD = node_modules/.bin/webpack
WEBPACK_ARGS = --config webpack.config.js --progress --colors --display-error-details
WEBPACK_ARGS_DIST = --config webpack.config.prod.js --progress --colors --display-error-details
KARMA_CMD = node_modules/.bin/karma
KARMA_ARGS =  start karma.config.js

NO_COLOR=\033[0m
CYAN=\033[36;1m
CLOUD="☁"
ARROW="➜"

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

dist: ## Build for Production
	@echo "${CLOUD} ${CYAN}Copying images${NO_COLOR} ${ARROW}"
	cp -R src/public/images/ dist/public/images/
	@echo "${CLOUD} ${CYAN}Copying API${NO_COLOR} ${ARROW}"
	cp -R src/api/ dist/api/
	@echo "${CLOUD} ${CYAN}Copying index file${NO_COLOR} ${ARROW}"
	cp src/index.html dist/index.html
	@echo "${CLOUD} ${CYAN}Webpack Building${NO_COLOR} ${ARROW}"
	$(WEBPACK_CMD) $(WEBPACK_ARGS_DIST)
	@echo "${CLOUD} ${CYAN}Compacting for distribution${NO_COLOR} ${ARROW}"
	zip -r dist/dist.zip dist/api/ dist/public/ dist/index.html
	@echo "${CLOUD} ${CYAN}DONE!${NO_COLOR} ${ARROW}"

test: ## Singlerun tests
	$(KARMA_CMD) $(KARMA_ARGS)

test-watch: ## Starts Test Watch
	$(KARMA_CMD) $(KARMA_ARGS) --watch


php-server: ## Starts PHP-Server
	cd src && php -S localhost:8888
