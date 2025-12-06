# 📄 Document Assistant - Paradox Inc Test Task

> **Live Demo:** [https://paradox-inc-test-task.vercel.app/](https://paradox-inc-test-task.vercel.app/)

A modern document management and AI chat interface built as a test task for the Frontend Junior position at Paradox Inc.

## 🎯 Task Overview

This project implements a document management system with real-time chat functionality according to the following requirements:

### ✅ Completed Requirements

#### 1. Documents Page

- ✅ Table with columns: File Name, Version, Size, Upload Date
- ✅ "Details" button for each document
- ✅ Data fetched from JSONPlaceholder API (`/posts`)
- ✅ First 10 elements mapped to document structure
- ✅ Responsive table design with Material-UI

#### 2. Document Details Modal

- ✅ Opens on document click
- ✅ Displays all document fields
- ✅ "Analyze" button implementation
- ✅ Mock API endpoint `/api/analyze`
- ✅ Success notification after analysis
- ✅ Loading state during analysis

#### 3. Chat Page

- ✅ WebSocket integration (`wss://ws.postman-echo.com/raw`)
- ✅ Message input field
- ✅ Message list with scroll
- ✅ User messages aligned right
- ✅ Assistant messages aligned left
- ✅ Echo WebSocket for instant responses
- ✅ Real-time message delivery

#### 4. Navigation

- ✅ Header menu with "Documents" and "Chat" links
- ✅ Active route highlighting
- ✅ Smooth page transitions with progress bar

## 🛠️ Tech Stack

**Required Technologies:**

- ✅ **React** - UI library
- ✅ **Next.js 16** - React framework with App Router
- ✅ **TypeScript** - Type safety
- ✅ **Material-UI (MUI)** - UI component library
- ✅ **Axios** - HTTP client for API requests

**Additional Technologies:**

- **Tailwind CSS** - Utility-first styling
- **WebSocket** - Real-time communication
- **React Toastify** - Notifications
- **Lucide React** - Icon library
- **ESLint** - Code linting

## 📦 Installation & Setup

### Prerequisites

- Node.js 18+
- npm/yarn/pnpm

### Local Development

1. **Clone the repository:**

```bash
git clone https://github.com/mossimka/paradox-inc-test-task.git
cd paradox-inc-test-task/document-assistant
```

2. **Install dependencies:**

```bash
npm install
```

3. **Set up environment variables:**

```bash
cp .env.example .env
```

Edit `.env`:

```env
NEXT_PUBLIC_WS_URL=wss://ws.postman-echo.com/raw
NEXT_PUBLIC_API_URL=
```

4. **Run development server:**

```bash
npm run dev
```

5. **Open in browser:**

```
http://localhost:3000
```

### 🐳 Docker Deployment

**Build and run with Docker Compose:**

```bash
docker compose up --build -d
```

**Access application:**

```
http://localhost:3000
```

**Stop containers:**

```bash
docker compose down
```

## 📁 Project Structure

```
document-assistant/
├── src/
│   ├── app/                         # Next.js App Router
│   │   ├── api/analyze/            # Document analysis API
│   │   ├── chat/                   # Chat page
│   │   ├── documents/              # Documents page
│   │   ├── layout.tsx              # Root layout
│   │   └── page.tsx                # Home page
│   ├── components/                  # React components
│   │   ├── chat/                   # Chat components
│   │   │   ├── ChatContainer.tsx
│   │   │   └── MessageContainer.tsx
│   │   ├── docs/                   # Document components
│   │   │   ├── DocumentsTable.tsx
│   │   │   └── DocumentModal.tsx
│   │   ├── sections/               # Page sections
│   │   │   ├── DocumentsSection.tsx
│   │   │   └── ChatSection.tsx
│   │   ├── utils/                  # Utility components
│   │   │   └── ProgressBar.tsx
│   │   ├── Header.tsx              # Navigation header
│   │   └── Footer.tsx              # Footer
│   ├── hooks/                       # Custom hooks
│   │   └── useWebsocket.ts         # WebSocket hook
│   ├── services/                    # API services
│   │   └── documentsService.ts     # Axios API calls
│   ├── utils/                       # Utility functions
│   │   └── mapDocuments.ts         # Data mapping
│   ├── types/                       # TypeScript types
│   │   └── documents.ts
│   ├── theme/                       # MUI theme
│   │   └── theme.ts
│   ├── constants/                   # App constants
│   │   └── routes.ts
│   └── styles/                      # Global styles
│       ├── globals.css
│       └── variables.css
├── public/                          # Static assets
│   ├── fonts/
│   └── images/
├── Dockerfile                       # Docker configuration
├── docker-compose.yaml              # Docker Compose setup
└── package.json
```

## 🔧 Available Scripts

```bash
# Development server (with Turbopack)
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint

# Type check
npm run type-check
```

## 📡 API Implementation

### External API - Documents

**Endpoint:** `GET https://jsonplaceholder.typicode.com/posts`

**Data Mapping:**

```typescript
{
  id: post.id,
  fileName: post.title,
  version: "1.0",
  size: random(100-500) + "KB",
  uploadDate: randomDate(),
  content: post.body
}
```

### Internal API - Analysis

**Endpoint:** `POST /api/analyze`

**Request:**

```json
{
  "documentId": 1
}
```

**Response:**

```json
{
  "status": "success",
  "message": "Анализ документа завершен",
  "documentId": 1
}
```

**Implementation:**

- 2-second simulated delay
- Success/error notifications
- Loading state handling

## 🌐 WebSocket Integration

**WebSocket URL:** `wss://ws.postman-echo.com/raw`

**Features:**

- Automatic connection on component mount
- Real-time bidirectional communication
- Echo server returns sent messages
- Reconnection handling
- Connection status indicators

**Message Flow:**

1. User types message
2. Sent via WebSocket
3. Echo server responds
4. Displayed as assistant message

## 🎨 Styling Architecture

### Material-UI Theme

Custom theme with:

- Primary color: `#1976d2`
- Typography: Roboto font family
- Responsive breakpoints
- Component customization

### Tailwind CSS

Utility classes for:

- Layout and spacing
- Responsive design
- Quick styling

### CSS Modules

Component-scoped styles:

- `DocumentModal.module.css`
- Prevents style conflicts
- Maintainable structure

## 📱 Responsive Design

**Breakpoints:**

- Mobile: `< 600px`
- Tablet: `600px - 960px`
- Desktop: `> 960px`

**Features:**

- Mobile-first approach
- Adaptive table layout
- Responsive navigation
- Touch-friendly UI

## 🎓 Code Quality

### TypeScript

- Strict type checking
- Interface definitions
- Type-safe API calls
- No `any` types (except where necessary)

### Clean Code Principles

- Component composition
- Single Responsibility
- DRY (Don't Repeat Yourself)
- Meaningful naming
- Code documentation

### ESLint Configuration

- Next.js recommended rules
- TypeScript rules
- Consistent code style

## 🚀 Deployment

**Deployed on:** [Vercel](https://vercel.com)

**Live URL:** [https://paradox-inc-test-task.vercel.app/](https://paradox-inc-test-task.vercel.app/)

## 📝 Task Compliance Checklist

- ✅ **Documents Page** with table (File Name, Version, Size, Date, Details button)
- ✅ **JSONPlaceholder API** integration with first 10 posts
- ✅ **Data modeling** from posts to documents
- ✅ **Modal window** with document details
- ✅ **Analyze button** with API call
- ✅ **Mock API** `/api/analyze` endpoint
- ✅ **Chat page** with WebSocket
- ✅ **Message input** field
- ✅ **Message list** with proper alignment
- ✅ **Echo WebSocket** integration
- ✅ **Navigation menu** (Documents, Chat)
- ✅ **React** framework
- ✅ **Next.js** implementation
- ✅ **TypeScript** usage
- ✅ **Material-UI** library
- ✅ **Axios** for HTTP requests
- ✅ **Clean code** structure

## 🐛 Known Limitations

- WebSocket uses echo service (messages echo back)
- Document data is mocked from JSONPlaceholder
- No user authentication
- No persistent storage
- Analysis is simulated with delay

## 👨‍💻 Author

**Maxim Sarsekeyev**

- GitHub: [@mossimka](https://github.com/mossimka)
- Project: [paradox-inc-test-task](https://github.com/mossimka/paradox-inc-test-task)
- Live Demo: [https://paradox-inc-test-task.vercel.app/](https://paradox-inc-test-task.vercel.app/)

## 📄 License

This project was created as a test task for Paradox Inc Frontend Junior Position and is for demonstration purposes only.

---
