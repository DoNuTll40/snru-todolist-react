# React + Vite

สิ่งที่ใช้ใน repo นี้.

ได้แก่.

- : [Font Awesome](https://fontawesome.com/)

``` powershell
npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/react-fontawesome
```

``` powershell
// ชุด icon free
npm install --save @fortawesome/free-solid-svg-icons
```





# How to Deploy full repo

เข้าไปที่ไฟล์ ./vite.config.js/

``` javascript

export default defineConfig({
  plugins: [react()],
  base: "ชื่อ repo ชองเรา"
})

```

สร้างโฟล์เดอร์ .github/workflows/deploy.yml ใน projects ของเราเลย.

จากนั้น copy and paste ลงไปในไฟล์ deply.yml แล้ว save.

  ``` yaml
  name: Deploy

  on:
  push:
    branches:
      - main

  jobs:
  build:
    name: Build
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repo
        uses: actions/checkout@v2

      - name: Setup Node
        uses: actions/setup-node@v1
        with:
          node-version: 16

      - name: Install dependencies
        uses: bahmutov/npm-install@v1

      - name: Build project
        run: npm run build

      - name: Upload production-ready build files
        uses: actions/upload-artifact@v2
        with:
          name: production-files
          path: ./dist

  deploy:
    name: Deploy
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
      - name: Download artifact
        uses: actions/download-artifact@v2
        with:
          name: production-files
          path: ./dist

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
  ```

# คำสั่งในการส่งขึ้น repo git
```bash
git add .

git commit -m "แล้วแต่จะตั้ง"

git push

```
