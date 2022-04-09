CREATE TABLE EMPRESA_EMPREGADO (
	ID_EMPREGADO INTEGER,
	ID_EMPRESA INTEGER,
	FOREIGN KEY(ID_EMPREGADO) REFERENCES EMPREGADO (ID_EMPREGADO),
	FOREIGN KEY(ID_EMPRESA) REFERENCES EMPRESA(ID_EMPRESA)
);

CREATE TABLE EMPREGADO_FILHOS (
	ID_EMPREGADO INTEGER,
	ID_FILHO INTEGER,
	FOREIGN KEY(ID_EMPREGADO) REFERENCES EMPREGADO (ID_EMPREGADO),
	FOREIGN KEY(ID_FILHO) REFERENCES FILHO(ID_FILHO)
);

CREATE TABLE EMPREGADO_RH_FILHOS (
	ID_EMPREGADO_RH INTEGER,
	ID_FILHO_EMPREGADO_RH INTEGER,
	FOREIGN KEY(ID_EMPREGADO_RH) REFERENCES EMPREGADO_RH (ID_EMPREGADO_RH),
	FOREIGN KEY(ID_FILHO_EMPREGADO_RH) REFERENCES FILHO_EMPREGADO_RH(ID_FILHO_EMPREGADO_RH)
);