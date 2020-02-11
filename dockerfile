FROM resin/rpi-raspbian:latest
MAINTAINER Joseph Peterson <jaspeterson97@gmail.com>

COPY clock /clock
COPY clock-dist/ /clock-dist

ENTRYPOINT [ "/clock" ]