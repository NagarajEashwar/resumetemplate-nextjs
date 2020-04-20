<p align="center">
  <a href="https://www.nextjs.org/">
    <img src="src/public/static/nextjs-black-logo.svg" width="80" height="28">
  </a>
</p>
<h1 align="center">
  Resume Template
</h1>


##  Quick Setup

#### *Set-up Locally*
In your terminal, navigate to where you would like this blog to live, then run 
```bash
#clone the repo
git clone https://github.com/NagarajEashwar/resumetemplate-nextjs.git

#navigate to the directory
cd resumetemplate-nextjs

#install dependencies & run dev server with yarn 
yarn install
yarn develop

```
This will start a dev server, navigate to localhost:3000 to check it out.

## Project Structure 

- Site-level configuration is stored in `data/config.json`. 
- Edit styles within each component or page file within the `<style jsx>` tags. 
- Global styles live in the `Meta` component. 
- `public/static/` is where you images live and will get uploaded.
- `pages` is where you page components live. 
- The pages & template are comprised of components from `components`.
