# React + Vite
# 🎟️ Coding Conf Ticket UI – Component Library & Demo

## 📁 Folder Structure

```
project-root/
├── components/           # Component library
│   ├── Button/
│   ├── Input/
│   ├── TicketCard/
│   └── UploadAvatar/
│
├── demos/                # Demo pages
│   ├── TicketGenerator.js
│   └── index.js
│
├── App.js
├── App.css
└── README.md
```

---

## 🚀 How to Use the Components

### Step 1: Clone the Repository
```bash
git clone https://github.com/AnkurKalita1/Ticket-UI.git
cd Ticket-page
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Import and Use Components

Each component is self-contained and reusable. Example:

```js
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import UploadAvatar from './components/UploadAvatar/UploadAvatar';
import TicketCard from './components/TicketCard/TicketCard';
```

Use them in your form:
```js
<Button text="Generate Ticket" onClick={handleClick} />
<Input label="Email" value={email} onChange={handleChange} />
<UploadAvatar onFileSelect={handleUpload} />
<TicketCard name="John" email="john@example.com" github="johnhub" avatar={avatarFile} />
```

---

## 💻 How to Run the Demo

### Step 1: Start the React App
```bash
npm start
```

### Step 2: Visit in Browser
Open your browser and go to:
```
http://localhost:3000
```

You’ll see the **Coding Conf Ticket Generator** demo page with live component usage.

---

## 📄 Demos Included

### `demos/index.js`
Simple hello world or intro page.

### `demos/TicketGenerator.js`
Complete working demo with:
- Input fields
- Avatar upload
- Ticket preview generation

---

## 📦 Component Features
- Reusable and self-contained
- No inline styles (CSS modules)
- Max 200 lines per component
- No external UI libraries used

---

Feel free to fork, extend, and customize this library for your design needs!
