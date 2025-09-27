Feature: Autenticar usuário
  Como um usuário registrado no sistema
  Eu quero realizar autenticação
  Para que eu possa acessar a minha área restrita

Scenario: Autenticar usuário com sucesso
  Given Eu acesso a página de autenticação
  And Eu informo meu login
  And Eu informo minha senha
  When Eu solicito acesso ao sistema
  Then Eu sou redirecionado para a área restrita

Scenario: Autenticar usuário com credenciais inválidas
  Given Eu acesso a página de autenticação
  And Eu informo um login inválido
  And Eu informo uma senha inválida
  When Eu solicito acesso ao sistema
  Then Eu recebo uma mensagem de erro informando que o acesso foi negado

Scenario: Autenticar usuário sem informar credenciais
  Given Eu acesso a página de autenticação
  And Eu não informo meu login e senha
  When Eu solicito acesso ao sistema
  Then Eu recebo uma mensagem de erro informando que as credenciais são obrigatórias