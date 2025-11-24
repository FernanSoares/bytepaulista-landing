# Vercel Deployment Troubleshooting

## 🐛 Problemas Comuns e Soluções

### 1. Variáveis de Ambiente Faltando

**Sintoma:** Build falha com erro "Cannot read properties of undefined"

**Solução:**
```bash
# Adicione no Vercel Dashboard (Settings → Environment Variables):
PUBLIC_SANITY_PROJECT_ID=a6xg83wz
PUBLIC_SANITY_DATASET=production
PUBLIC_SANITY_API_VERSION=2024-01-01
```

### 2. Node Version Mismatch

**Sintoma:** "Unsupported Node.js version"

**Solução:**
- ✅ Já configurado: `.node-version` com `20`
- ✅ Já configurado: `svelte.config.js` com `runtime: 'nodejs20.x'`
- ✅ Já configurado: `package.json` com `"node": ">=20.0.0"`

### 3. Adapter Incorreto

**Sintoma:** "Could not detect a supported production environment"

**Solução:**
- ✅ Já configurado: `@sveltejs/adapter-vercel` instalado
- ✅ Já configurado: `svelte.config.js` usando adapter correto

### 4. Build Timeout

**Sintoma:** Build excede tempo limite (10 min para plano gratuito)

**Possíveis Causas:**
- Dependências muito grandes
- Build lento do Shiki highlighter
- Network issues ao buscar dados do Sanity

### 5. Import/Export Errors

**Sintoma:** "Cannot find module" ou "SyntaxError: Unexpected token"

**Verificar:**
- Todos os imports estão corretos
- Não há imports circulares
- Todos os arquivos TypeScript/JavaScript têm sintaxe válida

### 6. Sanity Client Errors

**Sintoma:** Erro ao buscar dados do Sanity durante build

**Verificar:**
- Project ID está correto
- Dataset existe e tem conteúdo
- API está acessível (não bloqueada por CORS)

## 📋 Checklist de Deploy

- [x] Node version configurada (20.x)
- [x] Adapter Vercel instalado
- [x] Build local funciona (`npm run build`)
- [ ] Variáveis de ambiente configuradas no Vercel
- [ ] Posts publicados no Sanity Studio
- [ ] Git push para main branch
- [ ] Deploy automático disparado

## 🔧 Comandos Úteis

```bash
# Testar build localmente
npm run build

# Ver logs do último deploy
vercel ls

# Inspecionar deployment específico
vercel inspect <url>

# Adicionar variável de ambiente
vercel env add VARIABLE_NAME production

# Forçar redeploy
vercel --prod
```

## 📞 Próximos Passos

1. Verificar logs completos no dashboard do Vercel
2. Identificar linha exata do erro
3. Aplicar correção específica
4. Fazer novo push e aguardar deploy

