Pra esse projeto eu fiz a autenticação utilizando o token disponibilizado no teste.
Depois eu validei a tokenização com o método post de acordo com a documentação

Resumo do fluxo:
*A API foi autenticada utilizando client_id e client_secret, gerando um token de acesso.
*validei a tokenização de um cartão com dados válidos, testando status code, campos obrigatórios, e a conformidade com o contrato.
*E Utilizei POJOs para separar a lógica de autenticação e tokenização.
