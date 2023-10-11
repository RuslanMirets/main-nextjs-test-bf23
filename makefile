build:
	echo "Deployment starting..."
	git pull
	yarn || exit
	yarn codegen || exit
	BUILD_DIR=temp yarn build || exit
	if [ ! -d "temp" ]; then \
	echo '\033[31m temp directory does not exist!\033[0m'; \
	exit 1; \
	fi
	rm -rf .next
	if [ ! -d ".next" ]; then \
	mkdir .next; \
	fi
	mv temp/* .next
	rm -rf temp
	pm2 reload main-nextjs
	echo "Deployment done."