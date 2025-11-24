# 🔗 Configuração de Webhook Sanity → Vercel

Este guia explica como configurar o webhook para atualização automática do blog quando você publica posts no Sanity.

---

## 🎯 O Que o Webhook Faz?

Quando você **publica ou atualiza um post** no Sanity Studio, o webhook:
1. Notifica o Vercel
2. Dispara um novo deploy automático
3. ⏱️ **Site atualizado em ~30 segundos**

---

## 🔐 Passo 1: Configurar Secret no Vercel

### Via Dashboard (Recomendado):

1. Acesse: https://vercel.com/fernansoares-projects/bytepaulistav2/settings/environment-variables

2. Clique em **"Add Variable"**

3. Configure:
   - **Name:** `SANITY_WEBHOOK_SECRET`
   - **Value:** `4cc68f100960bf2e5999c0539426780f54d64f223984fcc502b3b399d280ef2d`
   - **Environment:** Marque **Production**, **Preview** e **Development**

4. Clique em **"Save"**

### Via CLI (Alternativa):

```bash
cd /Users/fesbarbosa/bytepaulistav2

# Adicionar variável no Vercel
echo "4cc68f100960bf2e5999c0539426780f54d64f223984fcc502b3b399d280ef2d" | vercel env add SANITY_WEBHOOK_SECRET production

# Redeploy para aplicar
vercel --prod
```

---

## 🎨 Passo 2: Configurar Webhook no Sanity

### 1️⃣ Acesse o Sanity Management:

👉 https://www.sanity.io/manage/personal/project/a6xg83wz

### 2️⃣ No menu lateral, clique em **"API"**

### 3️⃣ Role até a seção **"Webhooks"**

### 4️⃣ Clique em **"Create webhook"**

### 5️⃣ Configure o Webhook:

**Nome:**
```
Vercel Deploy - BytePaulista
```

**URL:**
```
https://bytepaulistav2-fernansoares-projects.vercel.app/api/revalidate
```

**Dataset:**
- Selecione: `production`

**Trigger on:**
- ✅ **Create**
- ✅ **Update**
- ✅ **Delete**

**Filter (opcional):**
```groq
_type == "post"
```
*(Isso garante que só posts disparam o webhook, não categorias ou autores)*

**HTTP method:**
- Selecione: `POST`

**HTTP Headers:**

Clique em **"Add header"** e configure:

| Key | Value |
|-----|-------|
| `x-sanity-webhook-secret` | `4cc68f100960bf2e5999c0539426780f54d64f223984fcc502b3b399d280ef2d` |

**API version:**
```
2024-01-01
```

**Projection (opcional):**
```groq
{
  _id,
  _type,
  "slug": slug.current,
  title
}
```

### 6️⃣ Clique em **"Save"**

---

## ✅ Passo 3: Testar o Webhook

### No Sanity Management:

1. Na página do webhook que você criou
2. Role até **"Recent deliveries"**
3. Clique em **"Trigger"** para fazer um teste manual
4. Você deve ver:
   - ✅ **Status: 200 OK**
   - ✅ **Response:** `{ "revalidated": true, ... }`

### No Sanity Studio:

1. Edite qualquer post
2. Clique em **"Publish"**
3. Aguarde ~30 segundos
4. Acesse o site: https://bytepaulistav2-fernansoares-projects.vercel.app/blog
5. ✅ **Post atualizado deve aparecer!**

---

## 🔍 Monitorar Webhooks

### No Sanity:

1. Vá em **API → Webhooks**
2. Clique no webhook criado
3. Veja **"Recent deliveries"** para:
   - ✅ Webhooks bem-sucedidos (200)
   - ❌ Webhooks que falharam (4xx, 5xx)

### No Vercel:

1. Acesse: https://vercel.com/fernansoares-projects/bytepaulistav2
2. Vá em **"Deployments"**
3. Você verá novos deploys aparecendo quando publicar posts

---

## 🐛 Troubleshooting

### ❌ Webhook retorna 401 (Unauthorized)

**Causa:** Secret incorreto ou não configurado

**Solução:**
1. Verifique se `SANITY_WEBHOOK_SECRET` está no Vercel
2. Confirme que o header `x-sanity-webhook-secret` tem o mesmo valor
3. Faça um redeploy: `vercel --prod`

### ❌ Webhook retorna 500 (Internal Server Error)

**Causa:** Erro no código do endpoint

**Solução:**
1. Verifique logs no Vercel: https://vercel.com/fernansoares-projects/bytepaulistav2/logs
2. Procure por erros no endpoint `/api/revalidate`

### ✅ Webhook OK mas site não atualiza

**Causa:** Deploy não foi disparado ou cache do navegador

**Solução:**
1. Limpe cache do navegador: `Ctrl+Shift+R` / `Cmd+Shift+R`
2. Verifique se novo deploy apareceu no Vercel
3. Aguarde 1-2 minutos para propagação

---

## 📊 Resumo dos Valores

**Webhook Secret:**
```
4cc68f100960bf2e5999c0539426780f54d64f223984fcc502b3b399d280ef2d
```

**URL do Endpoint:**
```
https://bytepaulistav2-fernansoares-projects.vercel.app/api/revalidate
```

**Header Required:**
```
x-sanity-webhook-secret: 4cc68f100960bf2e5999c0539426780f54d64f223984fcc502b3b399d280ef2d
```

---

## 🚀 Resultado Final

Após configurar:

1. **Você publica um post no Sanity** → 🟢
2. **Sanity chama o webhook** → 🟢
3. **Vercel recebe a notificação** → 🟢
4. **Novo deploy é disparado** → 🟢
5. **Site atualizado em ~30s** → 🎉

**Não precisa mais fazer deploy manual!** 🎊

---

## 📞 Suporte

Se tiver problemas, verifique:
- ✅ Secret configurado no Vercel
- ✅ Webhook criado no Sanity
- ✅ URL correta do endpoint
- ✅ Header com secret correto
- ✅ Logs no Vercel para erros

---

**Criado em:** 24/11/2025  
**Autor:** BytePaulista DevOps Team  
**Versão:** 1.0

