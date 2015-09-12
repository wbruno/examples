--
-- Estrutura da tabela `usuario`
--
CREATE TABLE IF NOT EXISTS `usuario` (
  `idUsuario` int(10) NOT NULL AUTO_INCREMENT,
  `nomeUsuario` varchar(200) NOT NULL,
  PRIMARY KEY (`idUsuario`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;
--
-- Extraindo dados da tabela `usuario`
--
INSERT INTO `usuario` (`idUsuario`, `nomeUsuario`) VALUES
(1, 'William'),
(2, 'Bruno');
