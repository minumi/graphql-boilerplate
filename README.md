# GrpahQL with TypeScript, TypeORM

It's a bolierplate to kick off for GrpahQL.  

## Features

- [x] sayHello => test API 
- [x] sayGoodbye => test API 
- [ ] getUsers => WIP
- [ ] signinUser => WIP
- [ ] signupUser => WIP
- [ ] uploadImage => WIP

## `yarn dev`

Execute it when you start to develop it.  

There is an example.  

`http://localhost:3000/playground`
```graphql
query {
  sayHello {
    ok
    greeting
  }
  sayGoodbye {
    ok
    greeting
  }
}
```
