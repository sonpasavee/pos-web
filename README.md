# 🍽️ POS Web - ระบบสั่งอาหารออนไลน์

ระบบจัดการสั่งอาหารแบบ Client-Side Rendering (CSR) ที่ใช้ Nuxt 4 พัฒนาข้อมูลแบบ real-time ผ่าน LINE LIFF และ Socket.io

---

## 📋 สารบัญ
- [คุณสมบัติหลัก](#-คุณสมบัติหลัก)
- [เทคโนโลยีที่ใช้](#-เทคโนโลยีที่ใช้)
- [ขั้นตอนการติดตั้ง](#-ขั้นตอนการติดตั้ง)
- [โครงสร้างโปรเจค](#-โครงสร้างโปรเจค)
- [คำสั่งที่ใช้งาน](#-คำสั่งที่ใช้งาน)
- [Configuration](#-configuration)
- [Resources](#-resources)

---

## ✨ คุณสมบัติหลัก

- ✅ **LINE LIFF Integration** - เชื่อมต่อกับ LINE Platform
- ✅ **Real-time Updates** - อัพเดตข้อมูลแบบ real-time ผ่าน Socket.io
- ✅ **State Management** - จัดการ State ด้วย Pinia
- ✅ **Tailwind CSS** - Responsive Design พร้อม Utility-first styling
- ✅ **TypeScript** - Type-safe code development
- ✅ **Auto Imports** - Nuxt auto-imports composables, components, utils
- ✅ **Mobile Optimized** - ปรับปรุงให้เหมาะสำหรับมือถือ

---

## 🛠 เทคโนโลยีที่ใช้

| เทคโนโลยี | เวอร์ชัน | วัตถุประสงค์ |
|---------|---------|----------|
| **Nuxt** | ^4.4.7 | Framework หลัก |
| **Vue** | ^3.5.35 | UI Framework |
| **Pinia** | ^3.0.4 | State Management |
| **Tailwind CSS** | ^4.3.0 | Styling |
| **LINE LIFF** | ^2.29.0 | LINE Platform Integration |
| **Socket.io** | ^4.8.3 | Real-time Communication |
| **TypeScript** | - | Type Safety |

---

## 📦 ขั้นตอนการติดตั้ง

### 1. Clone Repository
```bash
git clone <repository-url>
cd pos-web
```

### 2. ติดตั้ง Dependencies
ใช้ npm (แนะนำ):
```bash
npm install
```

หรือใช้ package manager อื่น:
```bash
# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

### 3. ตั้งค่า Environment Variables
สร้างไฟล์ `.env` หรือ `.env.local` ในรูท directory:
```env
NUXT_PUBLIC_API_URL=http://localhost:3001
NUXT_PUBLIC_LIFF_ID=your_line_liff_id_here
NUXT_PUBLIC_SOCKET_URL=http://localhost:3001
```

> ⚠️ เปลี่ยน `your_line_liff_id_here` เป็น LIFF ID จากการสร้าง LIFF app ใน LINE Developers Console

### 4. เตรียมโปรเจค (Optional)
```bash
npm run postinstall
```

---

## 📁 โครงสร้างโปรเจค

```
pos-web/
├── app.vue                 # Root component
├── nuxt.config.ts          # Nuxt configuration
├── tailwind.config.ts      # Tailwind CSS config
├── tsconfig.json           # TypeScript config
├── package.json            # Dependencies
│
├── app/                    # Pages & Layouts
│   └── app.vue
│
├── pages/                  # Route pages
│   ├── index.vue           # หน้าหลัก (Home)
│   ├── menu/
│   │   └── index.vue       # หน้าเมนู (/menu)
│   └── order/
│       └── index.vue       # หน้ารายการสั่ง (/order)
│
├── components/             # Reusable Vue components
│
├── composables/            # Composable functions (auto-imported)
│   └── useCounter.ts       # Example composable
│
├── stores/                 # Pinia stores (auto-imported)
│   └── auth.ts             # Authentication store
│
├── plugins/                # Nuxt plugins
│   └── liff.client.ts      # LINE LIFF plugin
│
├── middleware/             # Route middleware
│   └── auth.ts             # Authentication middleware
│
├── types/                  # TypeScript type definitions
│   └── index.ts
│
├── assets/                 # Static assets
│   └── css/
│       └── main.css        # Global styles
│
├── public/                 # Public static files
│   └── robots.txt
│
└── .gitignore              # Git ignore rules
```

### โครงสร้างแต่ละ Directory:

#### 📄 `pages/` - Routing Pages
- ไฟล์ `.vue` ที่นี่จะกลายเป็น routes โดยอัตโนมัติ
- `pages/index.vue` → `/`
- `pages/menu/index.vue` → `/menu`
- `pages/order/index.vue` → `/order`

#### 🔧 `composables/` - Composition Functions
- Reusable logic ที่ใช้ใหม่ได้หลายครั้ง
- Auto-imported ให้ใช้ได้เลย เช่น `useAuth()`, `useFetch()`

#### 🏪 `stores/` - Pinia State Management
- Central state management
- Auto-imported และสามารถใช้ได้ใน components

#### 🔌 `plugins/` - Nuxt Plugins
- เรียก plugins เมื่อ app initialize
- `.client.ts` = client-side only

#### 🛡️ `middleware/` - Route Protection
- ตรวจสอบ permissions ก่อน routing
- ตัวอย่าง: authentication check

#### 📝 `types/` - TypeScript Definitions
- Custom type definitions
- Interfaces และ types ที่ใช้ทั่วโปรเจค

#### 🎨 `assets/` - Global Styles & Assets
- CSS, images, fonts
- Import ลงใน components ได้

---

## 🚀 คำสั่งที่ใช้งาน

### Development
```bash
# รัน dev server
npm run dev
```
เข้าไปที่ `http://localhost:3000` ในเบราว์เซอร์

### Build
```bash
# Build ให้เป็น production
npm run build
```
ผลลัพธ์จะอยู่ใน `.nuxt/` directory

### Preview Build
```bash
# ดูตัวอย่าง build ที่ production
npm run preview
```

### Generate Static Site
```bash
# Generate static HTML (for static hosting)
npm run generate
```

---

## ⚙️ Configuration

### Nuxt Config (`nuxt.config.ts`)

```typescript
// SSR - disabled (CSR mode)
ssr: false

// Pinia state management module
modules: ['@pinia/nuxt']

// Tailwind CSS plugin
vite: {
  plugins: [tailwindcss()],
}

// Runtime configuration
runtimeConfig: {
  public: {
    apiUrl: '',
    liffId: '',
    socketUrl: '',
  },
}

// Global CSS
css: ['~/assets/css/main.css']

// Head metadata
app: {
  head: {
    title: 'สั่งอาหาร',
    meta: [...]
  }
}
```

### Environment Variables

ตั้งค่าผ่าน `.env` file:

```env
# API Backend
NUXT_PUBLIC_API_URL=http://localhost:3001

# LINE LIFF Configuration
NUXT_PUBLIC_LIFF_ID=1234567890-abcdefg

# Socket.io Server
NUXT_PUBLIC_SOCKET_URL=http://localhost:3001
```

---

## 💡 วิธีใช้งาน Features

### 1. ใช้ Store (Pinia)
```typescript
// composables/useAuth.ts
import { useAuthStore } from '~/stores/auth'

export default function useAuth() {
  const authStore = useAuthStore()
  
  const login = (token: string) => {
    authStore.setCustomerToken(token)
  }

  return { login }
}
```

### 2. ใช้ Composable
```vue
<script setup>
const { login } = useAuth()
</script>
```

### 3. ใช้ LINE LIFF
```typescript
// plugins/liff.client.ts
import liff from '@line/liff'

export default defineNuxtPlugin(async () => {
  if (import.meta.client) {
    await liff.init({ liffId: 'YOUR_LIFF_ID' })
  }
})
```

### 4. Socket.io Real-time
```typescript
import io from 'socket.io-client'

const socket = io('http://localhost:3001')

socket.on('order-update', (data) => {
  console.log('Order updated:', data)
})
```

---

## 🔗 Resources

- [Nuxt Documentation](https://nuxt.com)
- [Vue 3 Documentation](https://vuejs.org)
- [Pinia Documentation](https://pinia.vuejs.org)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [LINE Developers Documentation](https://developers.line.biz)
- [Socket.io Documentation](https://socket.io)

---

## 📝 Notes

- โปรเจคนี้ใช้ **CSR mode** (Client-Side Rendering) เพราะ `ssr: false`
- Mobile-optimized สำหรับมือถือ (meta viewport)
- ถ้าคุณต้องการ SSR ให้เปลี่ยน config และติดตั้ง dependencies เพิ่มเติม

---

## 📧 Support

หากมีปัญหา ติดต่อได้ที่:
- 📱 LINE: @yourlineid
- 💬 GitHub Issues: Create an issue

---

**Happy Coding! 🎉**

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
"# pos-web" 
