# Configuração de Webhooks Sanity + Vercel

Este guia explica como configurar webhooks do Sanity para atualizar automaticamente seu blog no Vercel quando você publicar novos posts.

## Como funciona atualmente

✅ Seu blog **já funciona** no Vercel e mostra novos posts automaticamente, mas pode haver um pequeno delay devido ao cache do Sanity CDN.

## Configuração para atualizações instantâneas

### 1. Variáveis de Ambiente

Adicione estas variáveis no Vercel (Settings > Environment Variables):

```
PUBLIC_SANITY_PROJECT_ID=seu-project-id
PUBLIC_SANITY_DATASET=production
SANITY_WEBHOOK_SECRET=crie-uma-string-aleatoria-segura
```

💡 **Dica**: Para gerar um secret seguro, use:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 2. Configurar Webhook no Sanity Studio

1. Acesse: https://www.sanity.io/manage
2. Selecione seu projeto
3. Vá em **API** > **Webhooks**
4. Clique em **Create webhook**
5. Configure:
   - **Name**: Vercel Deploy
   - **URL**: `https://seu-site.vercel.app/api/revalidate`
   - **Dataset**: production
   - **Trigger on**: Create, Update, Delete
   - **Filter**: `_type == "post"` (apenas posts)
   - **HTTP method**: POST
   - **HTTP Headers**:
     - Key: `x-sanity-webhook-secret`
     - Value: (o mesmo secret que você colocou no Vercel)
   - **API version**: v2024-01-01

6. Salve o webhook

### 3. Testar

1. Publique um novo post no Sanity Studio
2. Verifique os logs do Vercel para confirmar que o webhook foi recebido
3. Seu blog deve atualizar instantaneamente!

## Alternativa Simples (Sem Webhooks)

Se você não quiser configurar webhooks, seu blog já funciona bem! O cache do Sanity CDN é invalidado automaticamente, mas pode levar alguns segundos/minutos.

Para forçar uma atualização imediata, você pode:
- Fazer um novo deploy no Vercel
- Ou simplesmente aguardar alguns minutos

## Modo de Desenvolvimento

Durante o desenvolvimento local, considere desabilitar o CDN para ver mudanças instantâneas:

```typescript
// src/lib/sanity/client.ts
export const client = createClient({
  // ...
  useCdn: process.env.NODE_ENV === 'production', // CDN apenas em produção
});
```

## Verificar Status

Para testar se o webhook está funcionando, você pode fazer uma requisição manual:

```bash
curl -X POST https://seu-site.vercel.app/api/revalidate \
  -H "Content-Type: application/json" \
  -H "x-sanity-webhook-secret: seu-secret" \
  -d '{"_type":"post","_id":"test"}'
```

## Problemas Comuns

### Webhook não está sendo chamado
- Verifique se o secret está correto em ambos os lugares
- Confirme se o filtro `_type == "post"` está correto
- Verifique os logs do Sanity em "Webhooks" > "Deliveries"

### Posts não aparecem imediatamente
- Aguarde alguns segundos para o cache invalidar
- Verifique se o post está publicado (não apenas rascunho)
- Limpe o cache do navegador

## Recursos Adicionais

- [Sanity Webhooks Documentation](https://www.sanity.io/docs/webhooks)
- [Vercel On-Demand ISR](https://vercel.com/docs/concepts/incremental-static-regeneration)

