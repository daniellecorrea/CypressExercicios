# Cypress - Cucumber (Exercícios)

Este projeto contém exercícios de automação de testes utilizando **Cypress** integrado com **Cucumber**, aplicando os conceitos de **BDD (Behavior Driven Development)**.

---

## 📝 Funcionalidades Testadas

### Feature: Autenticar usuário
- **Como** um usuário registrado no sistema  
- **Eu quero** realizar autenticação  
- **Para que** eu possa acessar a minha área restrita  

#### Cenários implementados:
1. **Autenticar usuário com sucesso**
   - Dado que o usuário acessa a página de autenticação
   - E informa login e senha válidos
   - Quando solicita acesso
   - Então é redirecionado para a área restrita

2. **Autenticar usuário com credenciais inválidas**
   - Dado que o usuário acessa a página de autenticação
   - E informa login e senha inválidos
   - Quando solicita acesso
   - Então recebe mensagem de erro informando acesso negado

3. **Autenticar usuário sem informar credenciais**
   - Dado que o usuário acessa a página de autenticação
   - E não informa login e senha
   - Quando solicita acesso
   - Então recebe mensagem de erro informando que as credenciais são obrigatórias

---

## 📚 Conceitos Utilizados

### Cypress
O **Cypress** é um framework de testes end-to-end moderno, rápido e confiável para aplicações web. Ele permite testar a aplicação no mesmo ambiente do navegador, garantindo mais realismo nos testes.

### Cucumber
O **Cucumber** é uma ferramenta que permite escrever testes de aceitação no formato **Gherkin**, uma linguagem legível por humanos. Ele conecta as especificações de negócio com a automação.

### BDD (Behavior Driven Development)
O **BDD** é uma metodologia de desenvolvimento que visa integrar times técnicos e de negócio, através de especificações escritas em linguagem natural. Os cenários descritos em Gherkin são exemplos claros disso.

---

## 📊 Evidências dos Testes
As evidências podem ser geradas em relatórios automatizados com:
- **Mochawesome**
- **Allure Report**
- Screenshots e vídeos (nativos do Cypress).

---

## ⚙️ Integração Contínua (CI) e Entrega Contínua (CD)

- **CI (Continuous Integration):** a cada push no repositório, os testes são executados automaticamente para validar se a aplicação continua íntegra.
- **CD (Continuous Delivery/Deployment):** garante que, após a validação dos testes, a aplicação pode ser entregue em produção de forma automatizada.

---

## 🔗 Referências
- [Documentação oficial do Cypress](https://www.cypress.io/)
- [Documentação oficial do Cucumber](https://cucumber.io/docs/)
- [O que é BDD](https://martinfowler.com/bliki/BDD.html)
- [CI/CD com GitHub Actions](https://docs.github.com/en/actions/automating-builds-and-tests/about-continuous-integration)

---

## 🚀 Como executar o projeto

```na pasta do projeto
# Instalar dependências
npm install

# Executar os testes em modo interativo
npx cypress open

# Executar os testes em modo headless (terminal)
npx cypress run
```

---

👨‍💻 **Autor:** Exercícios desenvolvidos para estudo de automação de testes.
