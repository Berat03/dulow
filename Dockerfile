FROM ubuntu:latest
LABEL authors="berat"

ENTRYPOINT ["top", "-b"]