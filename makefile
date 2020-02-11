NAME := raspi-clock
OWNER := jaspeterson
PKG := github.com/${OWNER}/${NAME}
DOCKER_URL := docker.pkg.github.com

# version:
# use the git tag, if this commit
# doesn't have a tag, use the git hash
VERSION := $(shell git rev-parse HEAD)
ifneq ($(shell git describe --exact-match --tags HEAD 2> /dev/null),)
	VERSION = $(shell git describe --exact-match --tags HEAD)
endif

# go stuff
PKG_LIST := $(go list ${PKG}/...)

# docker stuff
IMAGE := ${DOCKER_URL}/${OWNER}/${NAME}:${VERSION}

.PHONY: all deps deploy docker-linux-arm

all: clean deps dist/${NAME}-linux-arm

deps:
	@go mod download

docker-linux-arm: dist/${NAME}-linux-arm dist/clock-dist
	@echo Building container ${IMAGE}-linux-arm
	@cp dist/${NAME}-linux-arm dist/${NAME}
	@docker build -f dockerfile -t ${IMAGE}-linux-arm dist
	@rm -f dist/${NAME}

deploy: docker-linux-amd64 docker-linux-arm
	@echo Logging into Github Package Registry
	@docker login ${DOCKER_URL} -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD}

	@echo Pushing container ${IMAGE}-linux-arm
	@docker push ${IMAGE}-linux-arm

dist/clock-dist:
	@cd clock && npm install && npm run-script build
	@mkdir -p dist
	@mv clock/dist dist/clock-dist

clean:
	@go clean
	@rm -rf dist/

dist/${NAME}-linux-arm:
	@echo Building go binary for linux/arm
	@mkdir -p dist
	@env CGO_ENABLED=0 GOOS=linux GOARCH=arm go build -v -o dist/${NAME}-linux-arm ${PKG}