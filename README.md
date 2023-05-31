# pouco.design

Bem-vindo(a) ao `pouco.design`! Este é um Design System construído principalmente para o ecossistema React. Utilizamos várias ferramentas e tecnologias para proporcionar uma experiência de desenvolvimento eficiente e produtiva.

## 🚀 Começando

Esta seção contém informações sobre o processo de desenvolvimento no contexto do `pouco.design`. 

## 🎨 Compilação de Tokens

No `pouco.design`, utilizamos o plugin [Figma Studio](https://tokens.studio/) para compilar os tokens vindos do Figma. Estes tokens representam os elementos visuais do Design System, como cores, tipografia e espaçamento. Em seguida, traduzimos esses tokens para componentes por meio do [Style Dictionary](https://amzn.github.io/style-dictionary/).

## 🔍 Facilitando a busca de Tokens

Para facilitar a utilização dos tokens durante o desenvolvimento, adotamos o [Stitches](https://stitches.dev/). O Stitches é uma biblioteca que oferece autocompletar de tipos TypeScript, permitindo que os desenvolvedores tenham acesso rápido aos tokens relacionados a cada propriedade CSS. Isso ajuda a garantir consistência e a evitar erros ao escrever os estilos dos componentes.

## 🧩 Exemplo de Componente

Aqui está um exemplo simples de como escrevemos nosso componente `Button` utilizando o Stitches:

```typescript title="Button.tsx"
import { styled } from "../stitches.config";

const Button = styled('button', {
    border: '0 none transparent',
    fontSize: '$fontSizeSm',
    lineHeight: '$lineHeightTight',
    borderRadius: '$borderRadiusNone',
    padding: '$spacingSquishXs',
    fontFamily: '$fontFamilyHighlight',
    fontWeight: '$fontWeightMedium',
    color: '$colorNeutral05',
    backgroundColor: '$colorBrandPrimary03',
    '&:active': {
        backgroundColor: '$colorBrandPrimary02'
    }
});
```

Neste exemplo, utilizamos os tokens definidos no nosso sistema de design para estilizar o componente `Button`, garantindo a consistência visual.

## 🛠️ Configuração

### Docker

Se preferir, você pode utilizar nossa imagem Docker para ter acesso a esta documentação e ao Storybook. Para isso, siga os passos a seguir:

1. Execute o seguinte comando para criar a imagem Docker:
```bash
docker build -f Dockerfile.dev . -t pouco-design
```

2. Em seguida, execute o seguinte comando para executar o container:
```bash
docker run -p 443:443 pouco-design
```

### Configuração Manual

Se preferir realizar a configuração manualmente, siga os passos abaixo:

1. Certifique-se de ter o [PNPM](https://pnpm.io/) e o [Turbo](https://turbo.build/) instalados em seu ambiente.

2. Execute o seguinte comando para instalar as dependências:
```bash
pnpm i
```

3. Por fim, execute o seguinte comando para realizar o build dos tokens:
```bash
pnpm --filter tokens run build
```

Essas configurações são necessárias para o ambiente de desenvolvimento do `pouco.design` e garantem que você tenha acesso a todas as funcionalidades e recursos disponíveis.

Obrigado por escolher o pouco.design para sua jornada de desenvolvimento. Estamos ansiosos para ver o que você vai construir!