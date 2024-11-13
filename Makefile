install:
	npm ci

brain-games:
	node bin/brain-games.js
	node bin/brain-even.js
	node bin/brain-calc.js
	node bin/brain-gsd.js
	node bin/brain-progression.js
	node bin/brain-prime.js

publish:
	npm publish --dry-run

lint:
	npx eslint .