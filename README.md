# 📋 Sistema To-Do List (Atividade M1)

Projeto de um sistema de gerenciamento de tarefas (To-Do List), desenvolvido como atividade avaliativa (50% M1) da disciplina de Implantação e Integração de Software.

## 🎯 Objetivo

Desenvolver uma aplicação web completa que permita:
- ✅ Listar tarefas
- ✅ Adicionar novas tarefas
- ✅ Remover tarefas existentes

---

## 🧱 Tecnologias Utilizadas

| Camada         | Tecnologia           |
|----------------|----------------------|
| Frontend       | Next.js              |
| Backend        | NestJS + Prisma ORM  |
| Banco de Dados | MySQL via Docker     |
| CI/CD          | Jenkins + Docker Hub |
| Orquestração   | Docker Compose       |

---

## 🖥️ Como rodar localmente (sem Docker)

### 🔹 Backend

```bash
cd backend
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run start:dev

### 🔹 Frontend
cd frontend
npm install
npm run dev

🐳 Como rodar com Docker Compose
# Na raiz do projeto:
docker compose up --build -d
Acesse:

🟦 Frontend: http://localhost:3000

🟨 Backend API: http://localhost:3001/todos

🧩 Banco de Dados: MySQL localhost:3306 (senha: admin123)


