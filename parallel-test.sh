#!/bin/bash

curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "name": "Bob"
}' 'http://0.0.0.0:3000/v1/publish' && echo " - done1" &
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "name": "Frank"
}' 'http://0.0.0.0:3000/v1/publish' && echo " - done2" &
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "name": "Sally"
}' 'http://0.0.0.0:3000/v1/publish' && echo " - done3" &

wait
