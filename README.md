# nuxt-generate-parallel

Test repo for debugging parallel generate requests with nuxt.js

*UPDATE: **Solved** by creating closure on nuxt.config by returning as a function*

---

## Setup

``` bash
# install deps
npm install

# build nuxt & run hapi server
npm start
```

You'll notice there's a `/v1/publish` endpoint. This endpoint takes a JSON payload with a key of name.

## Example

``` bash
# Hit the endpoint using curl
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "name": "Bob"
}' 'http://0.0.0.0:3000/v1/publish'
```

You'll notice a Bob directory appear in dist.

## Now run 3 different requests in parallel

``` bash
# ensure bash script is executable
chmod +x ./parallel-test.sh

# run the 3 requests
./parallel-test.sh
```

Expectation is that there are now 3 directories with different content (Bob, Sally & Frank).

Issue is although 3 different directories are created the content is the same.
