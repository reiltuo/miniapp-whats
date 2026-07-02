# Chat automatizado para chamada de vídeo

Site independente com experiência visual inspirada em aplicativos de mensagens, atendimento identificado como automatizado, confirmação de maioridade e checkout PIX pela NexusPag.

## Ofertas

* Oferta principal: R$ 39,90
* Primeiro downsell após 30 segundos sem pagamento: R$ 19,95
* Downsell final após 2 minutos sem pagamento: R$ 9,98

## Publicação

Este projeto deve ser publicado em um repositório e projeto Vercel separados do site de vídeos. Cadastre no projeto novo, somente no ambiente `Production`:

```text
NEXUSPAG_API_KEY
NEXUSPAG_WEBHOOK_SECRET
```

Na NexusPag, configure o webhook usando o domínio do projeto novo:

```text
https://SEU-NOVO-DOMINIO/api/webhooks/nexuspag
```
