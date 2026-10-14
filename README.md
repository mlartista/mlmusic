# 🎵 ML Music - Clone do Spotify

Bem-vindo ao **ML Music**, um sistema de streaming de música profissional e moderno.

## 🚀 Como visualizar o projeto localmente

Como este é um projeto Next.js completo, ele precisa ser executado em um ambiente de desenvolvimento para funcionar (com servidor e banco de dados).

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado (versão 18 ou superior).
- Um terminal (CMD, PowerShell ou Terminal do Mac/Linux).

### Passo a Passo
1. **Abra a pasta do projeto** no seu terminal:
   ```bash
   cd "caminho/para/a/pasta/ml-music"
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Configure o Banco de Dados**:
   Crie um arquivo `.env` na raiz do projeto e adicione sua URL do PostgreSQL:
   ```env
   DATABASE_URL="postgresql://usuario:senha@localhost:5432/mlmusic?schema=public"
   NEXTAUTH_SECRET="qualquer-string-aleatoria-e-segura"
   ```

4. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```

5. **Acesse no navegador**:
   Abra [http://localhost:3000](http://localhost:3000)

---

## 🌐 Como publicar (Colocar o site na internet)

Para que qualquer pessoa possa acessar o seu ML Music, siga estes passos:

### 1. GitHub (Armazenamento do Código)
- Crie uma conta no [GitHub](https://github.com).
- Crie um novo repositório chamado `ml-music`.
- Envie seu código para lá usando o Git.

### 2. Vercel (Hospedagem Gratuita e Rápida)
A Vercel é a empresa que criou o Next.js e é a melhor forma de publicar seu app:
- Acesse [vercel.com](https://vercel.com) e faça login com seu GitHub.
- Clique em **"Add New"** $\rightarrow$ **"Project"**.
- Importe o repositório `ml-music`.
- Nas configurações de **Environment Variables**, adicione as mesmas variáveis do seu arquivo `.env` (DATABASE\_URL e NEXTAUTH\_SECRET).
- Clique em **Deploy**.

### 3. Banco de Dados na Nuvem
Para que o site funcione online, você precisa de um banco de dados que não esteja no seu PC. Recomendo:
- [Neon.tech](https://neon.tech) (PostgreSQL gratuito e excelente para Next.js).
- [Supabase](https://supabase.com) (Outra alternativa poderosa).
- Após criar a conta, copie a "Connection String" e cole no campo `DATABASE_URL` da Vercel.
Atualização de build
Update Final
