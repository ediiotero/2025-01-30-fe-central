## To pull latest code from repo:
- git pull


## How to run local json server
- `npm install json-server`
- make a db.json file in the root folder
- add starter data:
```
{
  "articles": [
    {
      "id": 1,
      "title": "Getting Started with React",
      "author": "Jessica Shoemaker"
    },
    {
      "id": 2,
      "title": "Fursuits",
      "author": "David Sath"
    },
    {
      "title": "testing",
      "author": "testing author",
      "id": 3
    }
  ]
}
```
- run server with `npx json-server db.json`
- You should be able to make a `GET` call to `http://localhost:3000/articles`
- Testing branch