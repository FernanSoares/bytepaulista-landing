# Como Funciona o Blog no Vercel

## ✅ Resposta Rápida

**SIM**, seu blog vai funcionar no Vercel e mostrar novos posts automaticamente quando você publicar no Sanity!

## Como Funciona

### Modo Atual (Sem Configuração Adicional)

1. **Você publica um post no Sanity** 📝
2. **O Sanity atualiza seu banco de dados** 💾
3. **Quando alguém visita seu blog** 👤
   - O Vercel faz uma requisição ao Sanity
   - O Sanity retorna os dados (pode usar cache CDN)
   - O Vercel renderiza a página com os dados atualizados
   - **Resultado**: Post aparece automaticamente! 🎉

**Delay**: Alguns segundos a poucos minutos devido ao cache do Sanity CDN

### Modo Otimizado (Com Webhooks) - Opcional

Com webhooks configurados (ver `WEBHOOK_SETUP.md`):

1. **Você publica um post no Sanity** 📝
2. **Sanity envia um webhook para o Vercel** 🔔
3. **Vercel invalida o cache instantaneamente** ⚡
4. **Próxima visita já mostra o novo post** 🎉

**Delay**: Praticamente instantâneo (segundos)

## O Que Foi Configurado

### 1. Cliente Sanity Otimizado

```typescript
// src/lib/sanity/client.ts
useCdn: !dev  // CDN desabilitado em dev, habilitado em produção
```

**Benefício**: 
- ✅ Em **desenvolvimento**: vê mudanças instantaneamente
- ✅ Em **produção**: usa CDN para velocidade

### 2. Endpoint de Webhook (Opcional)

```typescript
// src/routes/api/revalidate/+server.ts
```

Este endpoint permite que o Sanity notifique o Vercel quando houver mudanças.

## Como Deployar no Vercel

### Primeira vez:

1. Faça commit das suas mudanças:
   ```bash
   git add .
   git commit -m "feat: adicionar suporte a webhooks"
   git push
   ```

2. No Vercel Dashboard:
   - Import seu repositório do GitHub
   - Configure as variáveis de ambiente:
     - `PUBLIC_SANITY_PROJECT_ID`
     - `PUBLIC_SANITY_DATASET`
     - `SANITY_WEBHOOK_SECRET` (opcional, para webhooks)
   - Deploy!

### Próximos deploys:

O Vercel vai fazer deploy automático a cada push no GitHub!

## Quando os Posts Aparecem?

### ✅ Cenário 1: Sem Webhooks (Configuração Atual)
- Você publica → **Aguarda alguns segundos** → Post aparece

### ⚡ Cenário 2: Com Webhooks (Configuração Opcional)
- Você publica → **Instantâneo** → Post aparece

### 🔄 Cenário 3: Forçar Atualização Manual
- Faça um novo deploy no Vercel
- Ou aguarde o cache expirar (~60 segundos)

## Testando Localmente

```bash
npm run dev
```

Com a nova configuração, mudanças no Sanity aparecem instantaneamente em dev!

## Checklist de Deploy

- [ ] Variáveis de ambiente configuradas no Vercel
- [ ] Código commitado e pushed para o GitHub
- [ ] Projeto importado no Vercel
- [ ] Deploy realizado com sucesso
- [ ] Teste: publique um post e aguarde alguns segundos

## Opcional: Configurar Webhooks

Se quiser atualizações instantâneas, siga o guia: `WEBHOOK_SETUP.md`

## Dúvidas Comuns

### "Meu post não aparece!"
- ✅ Verifique se o post está **publicado** (não rascunho) no Sanity
- ✅ Aguarde 30-60 segundos para o cache invalidar
- ✅ Limpe o cache do navegador (Ctrl+Shift+R)
- ✅ Verifique os logs do Vercel para erros

### "Quanto tempo leva para atualizar?"
- Sem webhooks: **30 segundos a 2 minutos**
- Com webhooks: **5-10 segundos**
- Cache do navegador pode adicionar delay

### "Posso forçar uma atualização?"
- Sim! Faça um novo deploy no Vercel
- Ou configure webhooks para atualizações automáticas

## Recursos

- [Guia de Webhooks](./WEBHOOK_SETUP.md)
- [Roadmap do Projeto](./ROADMAP.md)

