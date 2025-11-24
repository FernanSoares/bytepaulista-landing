# 🎨 Guia de Configuração do Sanity.io

## 📝 Passo a Passo para Configurar

### 1️⃣ **Criar Conta no Sanity**

1. Acesse: https://www.sanity.io/
2. Clique em **"Get started"**
3. Faça login com GitHub (recomendado)

---

### 2️⃣ **Criar Projeto**

Execute no terminal:

```bash
cd /Users/fesbarbosa/bytepaulistav2
npx sanity init
```

**Durante a instalação:**

- ✅ **Select project to use**: Create new project
- ✅ **Project name**: `BytePaulista Blog`
- ✅ **Use the default dataset configuration?**: Yes
- ✅ **Project output path**: `.` (ponto - diretório atual)
- ✅ **Select project template**: Clean project with no predefined schemas

---

### 3️⃣ **Obter Project ID**

Após criar o projeto, você receberá:

```
✅ Success! Now what?
Project ID: abc12345
```

**Copie esse Project ID!**

---

### 4️⃣ **Configurar Variáveis de Ambiente**

Crie o arquivo `.env` na raiz do projeto:

```bash
# Sanity Configuration
PUBLIC_SANITY_PROJECT_ID=abc12345
PUBLIC_SANITY_DATASET=production
PUBLIC_SANITY_API_VERSION=2024-01-01
```

⚠️ **Importante**: Substitua `abc12345` pelo seu Project ID real!

---

### 5️⃣ **Atualizar sanity.config.ts**

Abra `sanity.config.ts` e substitua:

```typescript
projectId: "seu-project-id", // ❌ REMOVER

projectId: "abc12345", // ✅ SEU PROJECT ID
```

---

### 6️⃣ **Iniciar o Sanity Studio**

```bash
npm run sanity
```

O Studio abrirá em: **http://localhost:3333**

---

### 7️⃣ **Fazer Login no Studio**

1. Acesse: http://localhost:3333
2. Clique em **"Sign in"**
3. Faça login com a mesma conta do Sanity

---

### 8️⃣ **Criar Primeiro Post**

1. No Studio, clique em **"Post"**
2. Clique em **"+"** para criar novo post
3. Preencha:
   - **Título**: Digite o título
   - **Slug**: Clique em "Generate" ao lado do campo
   - **Descrição**: Descrição curta
   - **Imagem**: Arraste e solte uma imagem
   - **Categorias**: Crie categorias antes (opcional)
   - **Conteúdo**: Use o editor visual
   - **Publicado**: Marque ✅ para publicar

4. Clique em **"Publish"** (botão verde)

---

### 9️⃣ **Deploy do Studio (Opcional)**

Para ter o Studio online:

```bash
npm run sanity:deploy
```

Você receberá uma URL tipo:

```
https://bytepaulista.sanity.studio/
```

Agora você pode editar posts de qualquer lugar! 🌍

---

## 🎯 **Comandos Úteis**

```bash
# Iniciar Studio local
npm run sanity

# Deploy do Studio
npm run sanity:deploy

# Iniciar site
npm run dev
```

---

## 📚 **Como Usar**

### **Editor Visual:**

- **B** - Negrito
- **I** - Itálico
- **Link** - Adicionar links
- **Imagem** - Upload de imagens
- **Código** - Blocos de código com syntax highlighting
- **H1, H2, H3** - Títulos

### **Categorias:**

1. Crie categorias em **"Categoria"**
2. Depois associe aos posts

### **Autores:**

1. Crie autores em **"Autor"**
2. Associe ao post

---

## ✅ **Checklist de Configuração**

- [ ] Conta criada no Sanity.io
- [ ] Projeto criado com `npx sanity init`
- [ ] Project ID copiado
- [ ] Arquivo `.env` criado com o Project ID
- [ ] `sanity.config.ts` atualizado
- [ ] Studio rodando em http://localhost:3333
- [ ] Login feito no Studio
- [ ] Primeiro post criado e publicado
- [ ] Site rodando e mostrando posts

---

## 🚀 **Próximos Passos**

Após configurar, você terá:

- ✅ Editor visual profissional
- ✅ Upload de imagens drag & drop
- ✅ Syntax highlighting em código
- ✅ Preview em tempo real
- ✅ Categorização de posts
- ✅ Multi-autores
- ✅ Rascunhos e publicação

---

## 💡 **Dicas**

1. **Rascunhos**: Deixe "Publicado" desmarcado para salvar como rascunho
2. **Imagens**: Use imagens otimizadas (WebP, até 2MB)
3. **Slug**: Sempre use slugs SEO-friendly (sem-espacos-nem-acentos)
4. **Backup**: O Sanity faz backup automático de tudo

---

## ❓ **Problemas Comuns**

### **Studio não abre:**

```bash
# Mata processos rodando na porta 3333
lsof -ti:3333 | xargs kill -9

# Tenta novamente
npm run sanity
```

### **Erro de autenticação:**

```bash
# Faz login novamente
npx sanity login
```

### **Posts não aparecem no site:**

- Verifique se o post está marcado como "Publicado"
- Verifique o `.env` com o Project ID correto
- Reinicie o servidor (`npm run dev`)

---

## 📞 **Suporte**

- Documentação: https://www.sanity.io/docs
- Discord: https://slack.sanity.io/
- YouTube: https://www.youtube.com/@sanity-io

---

**Bom trabalho! Agora você tem um CMS profissional! 🎉**
