#Build the app in two steps
FROM golang:alpine as builder

#establish the working directory on the container
WORKDIR /app/server 
# copy the contents of current folder to the workdir of the container
COPY ./ .
# get dependencies
RUN go get -d -v . 

#TODO: read into this command more
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -a -installsuffix cgo -ldflags="-w -s" -o backend

#Step 2: copy & run the compiled executable on scratch image
FROM scratch

# COPY --from=builder ./app/server/keys.txt keys.txt
# COPY --from=builder ./app/server/config.yaml config.yaml
COPY --from=builder ./app/server/backend backend
EXPOSE 8080

ENTRYPOINT ["./backend"]