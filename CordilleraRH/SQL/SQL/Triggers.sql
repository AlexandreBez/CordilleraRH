DELIMITER #

CREATE TRIGGER DADOS_UPPERCASE_EMPREGADO 
BEFORE INSERT ON EMPREGADO
FOR EACH ROW
BEGIN
	SET NEW.NOME = UPPER(NEW.NOME);
    SET NEW.SEXO = UPPER(NEW.SEXO);
    SET NEW.NACIONALIDADE = UPPER(NEW.NACIONALIDADE);
    SET NEW.NOME_PAI = UPPER(NEW.NOME_PAI);
    SET NEW.NOME_MAE = UPPER(NEW.NOME_MAE);
    SET NEW.PAIS = UPPER(NEW.PAIS);
    SET NEW.ESTADO = UPPER(NEW.ESTADO);
    SET NEW.CIDADE = UPPER(NEW.CIDADE);
    SET NEW.RUA = UPPER(NEW.RUA);
    SET NEW.CIDADE_NASCIMENTO = UPPER(NEW.CIDADE_NASCIMENTO);
    SET NEW.NOME_FACULDADE = UPPER(NEW.NOME_FACULDADE);
    SET NEW.UF_CARTEIRA_TRABALHO = UPPER(NEW.UF_CARTEIRA_TRABALHO);
    SET NEW.CARGO = UPPER(NEW.CARGO);
    SET NEW.UF_CARTEIRA_TRABALHO = UPPER(NEW.UF_CARTEIRA_TRABALHO);
END#

CREATE TRIGGER DADOS_UPPERCASE_EMPREGADO_RH
BEFORE INSERT ON EMPREGADO_RH
FOR EACH ROW
BEGIN
	SET NEW.NOME = UPPER(NEW.NOME);
    SET NEW.NACIONALIDADE = UPPER(NEW.NACIONALIDADE);
    SET NEW.NOME_PAI = UPPER(NEW.NOME_PAI);
    SET NEW.NOME_MAE = UPPER(NEW.NOME_MAE);
    SET NEW.PAIS = UPPER(NEW.PAIS);
    SET NEW.ESTADO = UPPER(NEW.ESTADO);
    SET NEW.CIDADE = UPPER(NEW.CIDADE);
    SET NEW.RUA = UPPER(NEW.RUA);
    SET NEW.CIDADE_NASCIMENTO = UPPER(NEW.CIDADE_NASCIMENTO);
    SET NEW.NOME_FACULDADE = UPPER(NEW.NOME_FACULDADE);
    SET NEW.UF_CARTEIRA_TRABALHO = UPPER(NEW.UF_CARTEIRA_TRABALHO);
    SET NEW.CARGO = UPPER(NEW.CARGO);
    SET NEW.UF_CARTEIRA_TRABALHO = UPPER(NEW.UF_CARTEIRA_TRABALHO);
END#

CREATE TRIGGER DADOS_UPPERCASE_EMPRESA
BEFORE INSERT ON EMPRESA
FOR EACH ROW
BEGIN
	SET NEW.NOME = UPPER(NEW.NOME);
    SET NEW.PAIS = UPPER(NEW.PAIS);
    SET NEW.ESTADO = UPPER(NEW.ESTADO);
    SET NEW.CIDADE = UPPER(NEW.CIDADE);
    SET NEW.RUA = UPPER(NEW.RUA);
END#

CREATE TRIGGER DADOS_UPPERCASE_FILHO_EMPREGADO
BEFORE INSERT ON FILHO
FOR EACH ROW
BEGIN
	SET NEW.NOME = UPPER(NEW.NOME);
END#

CREATE TRIGGER DADOS_UPPERCASE_FILHO_EMPREGADO_RH
BEFORE INSERT ON FILHO_EMPREGADO_RH
FOR EACH ROW
BEGIN
	SET NEW.NOME = UPPER(NEW.NOME);
END#

DELIMITER ;

