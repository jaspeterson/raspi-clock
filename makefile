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

.PHONY: all deps deploy docker

all: clean deps dist/${NAME}

deps:
	@go mod download

docker: dist/${NAME} dist/clock-dist
	@echo Building container ${IMAGE}
	@docker build -f dockerfile -t ${IMAGE} dist

deploy: docker
	@echo Logging into Github Package Registry
	@docker login ${DOCKER_URL} -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD}

	@echo Pushing container ${IMAGE}
	@docker push ${IMAGE}

dist/clock-dist:
	@cd clock && npm install && npm run-script build
	@mkdir -p dist
	@cp -r clock/dist dist/clock-dist

clean:
	@go clean
	@rm -rf dist/

dist/${NAME}:
	@echo Building go binary for linux/arm
	@mkdir -p dist
	@env CGO_ENABLED=0 GOOS=linux GOARCH=arm go build -v -o dist/${NAME} ${PKG}