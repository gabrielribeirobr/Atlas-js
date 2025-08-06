# 🌍 Geo Atlas

**Geo Atlas** is a front-end project that uses the [REST Countries API](https://restcountries.com/) to display geographical information about continents and their countries. It provides a clean, responsive, and interactive interface where users can explore countries by continent and view details like flags, currencies, and neighboring nations.

---
🖥️ **Live Demo**: [Click here to open the Geo.Atlas](https://gabrielribeirobr.github.io/Atlas-js/)
---
## 📸 Preview

<table>
  <tr>
    <td valign="top">
      <img src="https://github.com/gabrielribeirobr/Atlas-js/blob/main/public/img/screenshots/index.png" alt="index" width="100%"/>
    </td>
    <td valign="top">
      <img src="https://github.com/gabrielribeirobr/Atlas-js/blob/main/public/img/screenshots/continents.png" alt="continent" width="100%"/>
    </td>
    <td valign="top">
      <img src="https://github.com/gabrielribeirobr/Atlas-js/blob/main/public/img/screenshots/countries.png" alt="country" width="100%"/>
    </td>
  </tr>
</table>

---

## 🚀 Features

- Browse continents and see all countries within them
- Alphabetical sorting of countries
- View official flag and name of each country
- Display of official currency (name and symbol)
- Clickable cards that lead to a detailed country view (optional future feature)
- Responsive design for mobile and desktop

---

## 🛠️ Technologies Used

- HTML5
- SCSS (with mobile-first approach)
- JavaScript (Vanilla)
- [REST Countries API v3.1](https://restcountries.com/)
- Bootstrap (for optional layout/grid)

---

## 📂 Folder Structure

📁 src<br/>
┣ 📁 css<br/>
┃ ┗ 📄 main.css / main.scss<br/>
┣ 📁 js<br/>
┃ ┣ 📄 index.js<br/>
┃ ┣ 📄 country.js<br/>
┃ ┗ 📄 continent.js<br/>
┗ 📁 scss<br/>
┃  ┣ 📄 _variables.scss<br/>
┃  ┗📄  main.scss<br/>
📄 index.html<br/>
📄 country.html<br/>
📄 continent.html<br/>



## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/gabrielribeirobr/Atlas-js
cd atlas
```
2. Install dependencies
```bash
npm install
```
3. Run project
```bash
npm start
```
