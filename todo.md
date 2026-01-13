# Quiz Sono Infantil - TODO

## Funcionalidades Obrigatórias

- [x] Schema do Supabase com tabela de leads
- [x] 6 perguntas sobre sono do bebê
- [x] Barra de progresso visual
- [x] Tela de processamento com animação
- [x] Página de resultados preparada para VSL
- [x] Salvar respostas no Supabase automaticamente
- [x] Design mobile-first com paleta pastel (azul bebê, rosa suave, lavanda)
- [x] Fontes arredondadas
- [x] Botões grandes otimizados para polegar
- [x] Estrutura preparada para Pixel do Facebook
- [x] Estrutura preparada para Pixel do Google
- [x] Sistema de delay para CTA após vídeo
- [x] Testar fluxo completo
- [x] Otimizar para mobile

## Notas de Implementação

- Perguntas do quiz:
  1. Qual a idade do seu bebê?
  2. Quantas vezes seu bebê acorda à noite?
  3. Como seu bebê costuma adormecer na maioria das vezes?
  4. Seu bebê tem uma rotina de sono estabelecida?
  5. Como você se sente sobre a situação de sono do seu bebê?
  6. Já tentou outros métodos para melhorar o sono?

- Cores: Azul bebê (#B8E5F5), Rosa suave (#F5B8D8), Lavanda (#E8D5F2)
- Fontes: Arredondadas (Poppins, Nunito)
- Hospedagem de vídeo: Supabase Storage
- Delay de CTA: Configurável (sugestão: 3-4 minutos)


## Alterações Solicitadas

- [x] Alterar headline para "O seu bebê só dorme no peito ou no colo? Responda 5 perguntas e descubra o erro de rotina que está te deixando presa a um ciclo de exaustão."
- [x] Remover checklist de benefícios da página inicial
- [x] Barra de progresso mostrando apenas percentual (sem número de perguntas)
- [x] Limitar a 4 opções de resposta por pergunta
- [x] Avanço automático para próxima pergunta ao clicar na opção


## Novas Alterações Solicitadas

- [x] Atualizar pergunta 1 com novas opções de idade (exterogestão, regressões, ansiedade de separação)
- [x] Atualizar pergunta 2 com emojis 3D e novas opções de acordadas
- [x] Atualizar pergunta 3 com apenas 3 opções
- [x] Atualizar pergunta 4 com apenas 3 opções
- [x] Atualizar pergunta 5 com novo foco em impacto do cansaço
- [x] Adicionar seção "Você Sabia!" com espaço para imagens de reportagens


## Ajustes Finais de UX e Design

- [x] Reformular pergunta 2: emojis 3D em destaque (somente emoji, sem texto)
- [x] Adicionar opção "Sozinho no berço (mas acorda logo em seguida)" na pergunta 3
- [x] Remover captura de email do quiz
- [x] Centralizar todos os textos
- [x] Aplicar estilo de destaque nas caixas de opção (similar ao sleep-escape-quiz)


## Novas Alterações - Interatividade e Imagem

- [x] Adicionar botão com seta para voltar em cada página
- [x] Implementar fade in ao passar mouse nas opções
- [x] Aplicar cor de borda #4466ff ao passar mouse nas opções
- [x] Substituir emoji da primeira seção pela imagem enviada


## Ajustes Finais - Tamanho e Estilo

- [x] Reduzir tamanho do botão voltar em 40%
- [x] Sincronizar fade-in com a borda no hover
- [x] Adicionar borda ao botão "Começar o Quiz Agora"
- [x] Inserir texto na página de processamento


## Novas Alterações - Interatividade e Efeito de Digitação

- [x] Adicionar borda azul ao hover do botão "Começar o Quiz Agora"
- [x] Criar componente com efeito de digitação
- [x] Remover texto "Estamos preparando seu plano personalizado"
- [x] Inserir novo texto com efeito de digitação
- [x] Programar avanço automático 1s após completar digitação


## Ajustes Finais - Texto, Cor e Velocidade

- [x] Mudar texto do botão para "Começar Agora"
- [x] Alterar cor da headline para #4868f6
- [x] Melhorar contraste do botão
- [x] Diminuir velocidade do efeito de digitação


## Ajustes Finais - Efeito de Digitação e Opções

- [x] Aumentar velocidade do efeito de digitação (mais lento e suave)
- [x] Aumentar tempo de espera para 2s após completar o texto
- [x] Remover opção "Só dorme de forma picada" da pergunta 2


## Correção de Fluxo - Aguardar Texto Completo

- [x] Corrigir TypingEffect para aguardar texto completo antes de disparar onComplete


## Ajustes de Tipografia - Headlines

- [x] Separar headline em H1 e subtítulo com fonte menor
