
## Getting Started

First, run the development server:

```bash
npm install && npm run dev
# or
yarn && yarn dev
```

### knowledge contained in the project
- Routing private/public roles for route access
- layout: + header/footer & main content
          + multi layout (MainLayout, EmptyLayout, Layout)
- React hook
- handle api with axios && SWR
- cache api local storage
 
#### Routes private http://localhost:3000 & http://localhost:3000/profile
- rule: logged

#### Route public http://localhost:3000/blog

#### Route http://localhost:3000/login
- rule: not logged in


##### DEMO
![](https://github.com/lvh082000/study-nextjs/blob/main/demo.gif)