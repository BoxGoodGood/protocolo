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


## Ajustes de Anima\u00e7\u00e## Ajustes de Animação - Fade-in e Borda

- [x] Acelerar fade-in nos botões de opção
- [x] Sincronizar fade-in com mudança de cor da borda


## Efeito de Digita\u00e7\u00## Efeito de Digitação - Novo Texto e Cursor

- [x] Alterar texto para nova frase
- [x] Ajustar velocidade para 35ms por letra
- [x] Adicionar cursor piscando ao final

## Efeito de Digita\u00e7\u00## Efeito de Digitação - Tempo Total de 7 Segundos

- [x] Calcular velocidade ideal para 7 segundos totais
- [x] Ajustar velocidade do efeito para leitura confortável
- [x] Atualizar ProcessingScreen com nova velocidade

## Efeito de Digita\u00e7\u00## Efeito de Digitação - Palavra por Palavra

- [x] Alterar de caractere por caractere para palavra por palavra
- [x] Manter tempo total de 10 segundos

## Simplifica\u00e7\u00e3o da P\u00e1## Simplificação da Página de Processamento

- [x] Remover efeito de digitação
- [x] Manter apenas texto "Analisando suas respostas"
- [x] Configurar delay de 3 segundos
- [x] Avançar automaticamente para página de vídeodeo


## Simplifica\u00e7\u00e3## Simplificação da Página de Resultados

- [x] Remover headline "Seu Plano Personalizado"
- [x] Remover caixa com texto "Olá! 👋 Assista ao vídeo..."
- [x] Manter apenas texto explicativo sobre o vídeoeddeo


## Corre\u00e7\u00e3o da P\u00## Correção da Página de Resultados - Botão e Texto

- [x] Corrigir posicionamento do botão de voltar
- [x] Centralizar mais o texto explicativo
- [x] Atualizar texto para nova versão
- [x] Destacar "passo a passo validado" em azul
- [x] Destacar "autonomia de sono" em azul


## Ajustes da P\u00e1## Ajustes da Página de Resultados - Botão e Texto de CTA

- [x] Remover botão de voltar da página de resultados
- [x] Atualizar texto para "o acesso será liberado após, a explicação do vídeo ⏳"
- [x] Criar botão pulsante em verde
- [x] Alterar texto do botão para "Receba o acesso agora por R$ 47,90"
- [x] Botão aparecer apenas após vídeo terminart\u00e3o aparecer apenas ap\u00f3s v\u00eddeo terminar


## Adi\u00e7\u00e## Adição de Imagens na Seção "Você Sabia!"

- [x] Fazer upload das imagens para Supabase Storage
- [x] Atualizar YouKnewSection com URLs das imagens
- [x] Testar exibição das imagensu00e3o das imagens


## Remo\u00e7\u00e3o de Se\u00e7\u00e3o de Caixas de Seguran\u00e7a

- - [x] Remover seção com caixas "100% Seguro", "Privado" e "Rápido""R\u00e1pido"


## Corre\u00e7\u00e3## Correção de Layout das Imagens em Mobile

- [x] Corrigir altura das imagens
- [x] Ajustar object-fit para melhor exibição
- [x] Testar em diferentes tamanhos de tela


## Substitui\u00e7\u00e3o de Imagens na Se\u00e7\u00e3o \"Voc\u00## Substituição de Imagens na Seção "Você Sabia!"

- [x] Fazer upload da nova imagem
- [x] Substituir as duas imagens anteriores por uma única
- [x] Testar exibição em todos os dispositivos

## Substitui\u00e7\u00e3o de Imagem## Substituição de Imagem Acima da Headline

- [x] Fazer upload da nova imagem de mãe com bebê
- [x] Substituir ícone anterior pela nova imagem
- [x] Testar exibição em todos os dispositivos


## Corre\u00e7\u00f5es ## Correções de Detalhes

- [x] Remover opção "No carrinho ou passeando de carro" do quiz
- [x] Corrigir recarga automática na página final do vídeo do v\u00eddeo


## Integra\u00e7\## Integração da VSL e Barra de Progresso Falsa

- [ ] Integrar URL do vídeo VSL (YouTube/Vimeo)
- [x] Implementar barra de progresso falsa
- [x] Configurar comportamento: 50% rápido, depois desacelera
- [x] Sincronizar com tempo real do vídeou00eddeo


## Integra\u00e7\u00## Integração da VSL do Vimeo

- [x] Ajustar VideoPlayer para formato vertical 9:16
- [x] Integrar URL do Vimeo (ID: 1159249817)
- [x] Testar reprodução e barra de progresso


## Reorganiza\u00e7\u00e3o da P\u00e1gi## Reorganização da Página de Resultados - VSL e Pós-Vídeo

- [x] Mostrar apenas header e VSL durante reprodução
- [x] Adicionar conteúdo pós-vídeo: "seu acesso foi liberado"
- [x] Adicionar setas azuis apontando para baixo
- [x] Adicionar botão "QUERO O PROTOCOLO + BÔNUS POR R$ 47,90"
- [x] Adicionar checklist de segurança (3 itens)
- [x] Reorganizar seção "Você Sabia!" no finalr se\u00e7\u00e3o \"Voc\u00ea Sabia!\" no final
