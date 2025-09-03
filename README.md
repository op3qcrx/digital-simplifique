# Web Acessível — melhorando a experiência do usuário

Este repositório contém um site **autorais** criado para o curso **Acessibilidade Web: melhorando a experiência do usuário**. É **diferente** do projeto de referência, porém mantém o foco em boas práticas de A11y.

## 🎯 Objetivo
Demonstrar, de forma simples, como aplicar recursos de acessibilidade em um site estático: semântica correta, navegação por teclado, controle de contraste e ajuste de fonte.

## 🧩 Tecnologias
- HTML5 semântico
- CSS3 com variáveis, layout responsivo e alto contraste
- JavaScript para preferências do usuário (localStorage)

## ♿ Recursos implementados
- **Landmarks semânticos**: `header`, `main`, `section`, `footer`, `nav` com rótulos acessíveis.
- **Skip link** para pular direto ao conteúdo principal.
- **Navegação por teclado**: ordem de foco lógica e destaque visível via `:focus-visible`.
- **Imagens com `alt` descritivo** e `figcaption` quando adequado.
- **Alto contraste**: botão que alterna tema e persiste a preferência.
- **Ajuste de fonte**: aumentar/diminuir/resetar (80%–180%) com persistência.
- **`aria-live="polite"`** para feedback dos controles sem interromper leitores de tela.
- **Respeito ao `prefers-reduced-motion`** para quem prefere menos animações.
- **Responsividade** para diferentes tamanhos de tela.

## ▶️ Como usar
1. Baixe o projeto e extraia o `.zip`.
2. Abra o arquivo `index.html` no navegador.
3. Use o botão **Alto contraste** e os controles **A-/A/A+** para testar.

## 📁 Estrutura
```
/
├─ index.html
├─ styles.css
├─ script.js
└─ img/
```

## 🔒 Licença
Código e SVGs deste projeto são autorais e podem ser usados livremente para fins educacionais (MIT).

---

Se quiser mudar o tema visual, abra `styles.css` e ajuste as variáveis em `:root`. 
