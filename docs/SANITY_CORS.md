# Configuração de CORS no Sanity

## 🚨 Problema

Ao acessar o blog no site de produção, você verá este erro no console:

```
Access to XMLHttpRequest at 'https://a6xg83wz.apicdn.sanity.io/...' 
from origin 'https://bytepaulistav2.vercel.app' 
has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

## ✅ Solução: Adicionar Origens CORS no Sanity

### Passo 1: Acesse o Sanity Management

👉 https://www.sanity.io/manage/personal/project/a6xg83wz

### Passo 2: Navegue até API Settings

1. No menu lateral, clique em **"API"**
2. Role até a seção **"CORS Origins"**

### Passo 3: Adicione as Origens

Clique em **"Add CORS Origin"** e adicione **CADA UMA** destas URLs:

#### Produção:
```
https://bytepaulistav2.vercel.app
https://bytepaulistav2-fernansoares-projects.vercel.app
https://bytepaulistav2-git-main-fernansoares-projects.vercel.app
```

#### Desenvolvimento:
```
http://localhost:5173
http://localhost:4173
```

### Passo 4: Configurações de Cada Origem

Para cada origem adicionada, marque:

- ✅ **Allow credentials** ✓

### Passo 5: Salvar

Clique em **"Save"** ou **"Add Origin"** após adicionar cada URL.

---

## 🔍 Verificação

Após adicionar as origens:

1. **Aguarde 1-2 minutos** para a configuração propagar
2. Limpe o cache do navegador (Ctrl+Shift+R / Cmd+Shift+R)
3. Recarregue a página do blog
4. Os posts devem carregar sem erros de CORS

---

## 📸 Preview da Configuração Esperada

Você deve ver algo assim na sua lista de CORS Origins:

```
Origin                                                    Credentials
─────────────────────────────────────────────────────────────────────
https://bytepaulistav2.vercel.app                        ✓ Allowed
https://bytepaulistav2-fernansoares-projects.vercel.app  ✓ Allowed
https://bytepaulistav2-git-main-fernansoares-projects... ✓ Allowed
http://localhost:5173                                     ✓ Allowed
http://localhost:4173                                     ✓ Allowed
```

---

## 🆘 Troubleshooting

### Ainda recebendo erro CORS?

1. **Verifique se salvou** todas as origens
2. **Aguarde 2-3 minutos** para propagar
3. **Limpe o cache** completamente: `Ctrl+Shift+Delete`
4. **Teste em aba anônima** para garantir que não é cache
5. **Verifique o console** para ver qual origem exata está sendo bloqueada

### Erro persiste?

Pode ser necessário adicionar **wildcards** (não recomendado para produção):

```
https://*.vercel.app
```

**Nota:** Wildcards são menos seguros, use apenas como último recurso.

---

## 📚 Documentação Oficial

- [Sanity CORS Configuration](https://www.sanity.io/docs/cors)
- [Sanity API Reference](https://www.sanity.io/docs/http-api)

