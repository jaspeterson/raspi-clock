FROM gcr.io/distroless/static
MAINTAINER Joseph Peterson <jaspeterson97@gmail.com>

COPY raspi-clock /raspi-clock
COPY clock-dist/ /clock-dist

ENTRYPOINT [ "/clock" ]
