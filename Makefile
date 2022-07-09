watch_api:
	cd api && yarn watch
run_api:
	swa start dist --api-location api
build_react:
	yarn build

build_api:
	cd api && yarn build