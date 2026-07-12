# Mini app de chamada de vídeo

Este projeto agora simula uma chamada de vídeo em tela cheia, com visual inspirado em uma chamada de vídeo mobile.

## Como trocar o vídeo da chamada

Coloque o vídeo escolhido dentro da pasta:

```text
assets
```

Depois renomeie o arquivo para:

```text
call-video.mp4
```

O código já está apontando para este caminho:

```js
const CALL_VIDEO_SRC = "assets/call-video.mp4";
```

Se quiser usar outro nome de arquivo, altere essa linha em:

```text
app.js
```

## Fluxo atual

1. A pessoa confirma que tem 18 anos ou mais.
2. Aparece uma tela de chamada recebida.
3. Ao tocar em atender, abre a chamada em tela cheia.
4. O vídeo configurado em `assets/call-video.mp4` começa a tocar.
5. A tela mostra timer de chamada, miniatura da câmera do usuário e controles visuais.

## Arquivos principais

```text
index.html
styles.css
app.js
assets/profile.jpeg
assets/call-video.mp4
```

## Publicação

Depois de adicionar o vídeo, publique normalmente pela Vercel ou faça commit e push para o GitHub conectado ao projeto.
