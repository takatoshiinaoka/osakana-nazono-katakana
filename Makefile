init:
	yarn
	cd api && yarn

watch_api:
	cd api && yarn watch
build_api:
	cd api && yarn build

build_react:
	yarn build
run_app_with_api: build_react
	yarn run swa start dist --api-location api
