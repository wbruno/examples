# Teste SCUP

Create a page that requests JSON data from a preconfigured URL, and renders a sorted list of names, with links to their e-mails, and a heading title as received.
 
You can use the URLs below as references for the server response:
- Success: http://www.scup.com/outros/jobs/frontend-test-success.json
- Failure: http://www.scup.com/outros/jobs/frontend-test-failure.json 
You can use up to one JavaScript library, as long as it is used to address cross-browser issues. 
We expect a ZIP file with your resulting files. 

## proxy.php
Como a url fornecida não retorna um [jsonp válido](http://json-p.org/validator.html), eu fiz um proxy com php para poder requisitá-la.


## VanillaJS
Fiz uma versão em javascript puro, utilizando o polyfill.io para os browsers antigos

## jQuery
E outra versão utilizando jQuery

## Sem Grunt
Não adicionei Grunt