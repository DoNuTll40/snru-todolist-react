# React + Vite

### **สิ่งที่ใช้ใน repo นี้**

### AXIOS [Open Website](https://axios-http.com/)

คำสั่งติดตั้ง

``` powershell
npm i axios
```

วิธีเรียกใช้งาน
- เรียกใช้งานในไฟล์หลัก

``` javascript
import axios from 'axios';
```

### Tailwind CSS [Open Website](https://tailwindcss.com/docs/installation)

คำสั่งติดตั้ง ณ ที่นี้ใช้ **Framework** ตัว **Vite**

``` powershell
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

จากนั้นนำ ตัวนี้ ไปวาง ในไฟล์ของ - **tailwind.config.js**

``` javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} 
```

นำส่วนนี้ไปวางไว้ใน ไฟล์ **CSS** เพื่อเรียกใช้งาน

``` css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Font Awesome [Open Website](https://fontawesome.com/)

คำสั่งติดตั้ง

``` powershell
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/react-fontawesome@latest
```

ชุด icon free

``` powershell
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons
```

วิธีใช้งาน เอาไปไว้ใน ไฟล์หลัก เช่น **[App.jsx](./src/App.jsx)**

``` javascript
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
```

การเรียกใช้ icon

``` javascript
import { ชื่อ icon } from '@fortawesome/free-solid-svg-icons' 
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

# คำสั่งในการ repush repo git
```bash
git add .
git commit -m "แล้วแต่จะตั้ง"
git push
```
