package com.cordillerarh.api.model.components;

import java.math.BigDecimal;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonFormat;

import org.hibernate.validator.constraints.br.CPF;
import org.hibernate.validator.constraints.br.TituloEleitoral;

@Entity
@Table(name = "EMPREGADO")
public class Empregado {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_EMPREGADO")
    private Integer id_empregado;

    @Column(name = "NOME")
    @NotNull(message = "{campo.nome.vazio}")
    private String nome;

    @Column(name = "CPF")
    @NotNull(message = "{campo.cpf.vazio}")
    @CPF(message = "{campo.cpf.invalido}")
    private String cpf;

    @Column(name = "SEXO")
    @NotNull(message = "{campo.sexo.vazio}")
    private String sexo;

    @Column(name = "IDADE")
    @NotNull(message = "{campo.idade.vazio}")
    private String idade;

    @Column(name = "DATA_NASCIMENTO")
    @NotNull(message = "{campo.dataNascimento.vazio}")
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate dataNascimento;

    @Column(name = "NACIONALIDADE")
    @NotNull(message = "{campo.nacionalidade.vazio}")
    private String nacionalidade;

    @Column(name = "NOME_PAI")
    private String nomePai;

    @Column(name = "NOME_MAE")
    @NotNull(message = "{campo.nomeMae.vazio}")
    private String nomeMae;

    @Column(name = "QUANTIDADE_FILHOS")
    @NotNull(message = "{campo.quantidadeFilhos.vazio}")
    private Integer quantidadeFilhos;

    // ---------------------------------------

    @Column(name = "CEP")
    @NotNull(message = "{campo.cep.vazio}")
    private String cep;

    @Column(name = "PAIS")
    @NotNull(message = "{campo.pais.vazio}")
    private String pais;

    @Column(name = "ESTADO")
    @NotNull(message = "{campo.estado.vazio}")
    private String estado;

    @Column(name = "CIDADE")
    @NotNull(message = "{campo.cidade.vazio}")
    private String cidade;

    @Column(name = "RUA")
    @NotNull(message = "{campo.rua.vazio}")
    private String rua;

    @Column(name = "NUMERO")
    @NotNull(message = "{campo.numero.vazio}")
    private String numero;

    // --------------------------------------

    @Column(name = "EMAIL_PESSOAL")
    @NotNull(message = "{campo.email.vazio}")
    private String emailPessoal;

    @Column(name = "EMAIL_PROFISSIONAL")
    @NotNull(message = "{campo.email.vazio}")
    private String emailProfissional;

    @Column(name = "CONTATO")
    @NotNull(message = "{campo.contato.vazio}")
    private String contato;

    @Column(name = "CONTATO_SECONDARIO")
    @NotNull(message = "{campo.contato.vazio}")
    private String contatoSecondario;

    // --------------------------------------
    
    @Column(name = "REGISTRO_NASCIMENTO")
    @NotNull(message = "{campo.registroNascimento.vazio}")
    private String registroNascimento; 

    @Column(name = "CIDADE_NASCIMENTO")
    @NotNull(message = "{campo.cidadeNascimento.vazio}")
    private String cidadeNascimento;

    @Column(name = "REGISTRO_CASAMENTO")
    private String registroCasamento;

    // --------------------------------------

    @Column(name = "CARTEIRA_MOTORISTA")
    private String carteiraMotorista;

    @Column(name = "CATEGORIA")
    private String categoria;

    // --------------------------------------

    @Column(name = "TITULO_ELEITORAL")
    @NotNull(message = "{campo.tituloEleitoral.vazio}")
    @TituloEleitoral(message = "{campo.tituloEleitoral.invalido}")
    private String tituloEleitoral;

    @Column(name = "ZONA")
    @NotNull(message = "{campo.zona.vazio}")
    private String zona;

    @Column(name = "SECAO")
    @NotNull(message = "{campo.secao.vazio}")
    private String secao;

    // ---------------------------------------

    @Column(name = "NOME_FACULDADE")
    private String nomeFaculdade;

    @Column(name = "MATRICULA_FACULDADE")
    private String matriculaFaculdade;

    // ---------------------------------------

    @Column(name = "PIS_PASEP")
    @NotNull(message = "{campo.pisPasep.vazio}")
    private String pisPasep;

    @Column(name = "NUMERO_CARTEIRA_TRABALHO")
    @NotNull(message = "{campo.numeroCarteiraTrabalho.vazio}")
    private String numeroCarteiraTrabalho;

    @Column(name = "SERIE_CARTEIRA_TRABALHO")
    @NotNull(message = "{campo.serieCarteiraTrabalho.vazio}")
    private String serieCarteiraTrabalho;

    @Column(name = "UF_CARTEIRA_TRABALHO")
    @NotNull(message = "{campo.ufCarteiraTrabalho}")
    private String ufCarteiraTrabalho;   
    
    // ---------------------------------------

    @Column(name = "CARGO")
    @NotNull(message = "{campo.cargo.vazio}")
    private String cargo;
    
    @Column(name = "SALARIO")
    @NotNull(message = "{campo.salario.vazio}")
    private BigDecimal salario;

    @Column(name = "DATA_ENTRADA")
    @NotNull(message = "{campo.dataEntrada.vazio}")
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate dataEntrada;

    @Column(name = "DATA_DESLIGAMENTO")
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate dataSaida;

    public Empregado(){};

    public Empregado(Integer id_empregado, @NotNull(message = "{campo.nome.vazio}") String nome,
            @NotNull(message = "{campo.cpf.vazio}") @CPF(message = "{campo.cpf.invalido}") String cpf,
            @NotNull(message = "{campo.sexo.vazio}") String sexo,
            @NotNull(message = "{campo.idade.vazio}") String idade,
            @NotNull(message = "{campo.dataNascimento.vazio}") LocalDate dataNascimento,
            @NotNull(message = "{campo.nacionalidade.vazio}") String nacionalidade, String nomePai,
            @NotNull(message = "{campo.nomeMae.vazio}") String nomeMae,
            @NotNull(message = "{campo.quantidadeFilhos.vazio}") Integer quantidadeFilhos,
            @NotNull(message = "{campo.cep.vazio}") String cep, @NotNull(message = "{campo.pais.vazio}") String pais,
            @NotNull(message = "{campo.estado.vazio}") String estado,
            @NotNull(message = "{campo.cidade.vazio}") String cidade,
            @NotNull(message = "{campo.rua.vazio}") String rua,
            @NotNull(message = "{campo.numero.vazio}") String numero,
            @NotNull(message = "{campo.email.vazio}") String emailPessoal,
            @NotNull(message = "{campo.email.vazio}") String emailProfissional,
            @NotNull(message = "{campo.contato.vazio}") String contato,
            @NotNull(message = "{campo.contato.vazio}") String contatoSecondario,
            @NotNull(message = "{campo.registroNascimento.vazio}") String registroNascimento,
            @NotNull(message = "{campo.cidadeNascimento.vazio}") String cidadeNascimento, String registroCasamento,
            String carteiraMotorista, String categoria,
            @NotNull(message = "{campo.tituloEleitoral.vazio}") @TituloEleitoral(message = "{campo.tituloEleitoral.invalido}") String tituloEleitoral,
            @NotNull(message = "{campo.zona.vazio}") String zona,
            @NotNull(message = "{campo.secao.vazio}") String secao, String nomeFaculdade, String matriculaFaculdade,
            @NotNull(message = "{campo.pisPasep.vazio}") String pisPasep,
            @NotNull(message = "{campo.numeroCarteiraTrabalho.vazio}") String numeroCarteiraTrabalho,
            @NotNull(message = "{campo.serieCarteiraTrabalho.vazio}") String serieCarteiraTrabalho,
            @NotNull(message = "{campo.ufCarteiraTrabalho}") String ufCarteiraTrabalho,
            @NotNull(message = "{campo.cargo.vazio}") String cargo,
            @NotNull(message = "{campo.salario.vazio}") BigDecimal salario,
            @NotNull(message = "{campo.dataEntrada.vazio}") LocalDate dataEntrada, LocalDate dataSaida) {
        this.id_empregado = id_empregado;
        this.nome = nome;
        this.cpf = cpf;
        this.sexo = sexo;
        this.idade = idade;
        this.dataNascimento = dataNascimento;
        this.nacionalidade = nacionalidade;
        this.nomePai = nomePai;
        this.nomeMae = nomeMae;
        this.quantidadeFilhos = quantidadeFilhos;
        this.cep = cep;
        this.pais = pais;
        this.estado = estado;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero;
        this.emailPessoal = emailPessoal;
        this.emailProfissional = emailProfissional;
        this.contato = contato;
        this.contatoSecondario = contatoSecondario;
        this.registroNascimento = registroNascimento;
        this.cidadeNascimento = cidadeNascimento;
        this.registroCasamento = registroCasamento;
        this.carteiraMotorista = carteiraMotorista;
        this.categoria = categoria;
        this.tituloEleitoral = tituloEleitoral;
        this.zona = zona;
        this.secao = secao;
        this.nomeFaculdade = nomeFaculdade;
        this.matriculaFaculdade = matriculaFaculdade;
        this.pisPasep = pisPasep;
        this.numeroCarteiraTrabalho = numeroCarteiraTrabalho;
        this.serieCarteiraTrabalho = serieCarteiraTrabalho;
        this.ufCarteiraTrabalho = ufCarteiraTrabalho;
        this.cargo = cargo;
        this.salario = salario;
        this.dataEntrada = dataEntrada;
        this.dataSaida = dataSaida;
    }

    /**
     * @return Integer return the id_empregado
     */
    public Integer getId_empregado() {
        return id_empregado;
    }

    /**
     * @param id_empregado the id_empregado to set
     */
    public void setId_empregado(Integer id_empregado) {
        this.id_empregado = id_empregado;
    }

    /**
     * @return String return the nome
     */
    public String getNome() {
        return nome;
    }

    /**
     * @param nome the nome to set
     */
    public void setNome(String nome) {
        this.nome = nome;
    }

    /**
     * @return String return the cpf
     */
    public String getCpf() {
        return cpf;
    }

    /**
     * @param cpf the cpf to set
     */
    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    /**
     * @return String return the sexo
     */
    public String getSexo() {
        return sexo;
    }

    /**
     * @param sexo the sexo to set
     */
    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    /**
     * @return String return the idade
     */
    public String getIdade() {
        return idade;
    }

    /**
     * @param idade the idade to set
     */
    public void setIdade(String idade) {
        this.idade = idade;
    }

    /**
     * @return LocalDate return the dataNascimento
     */
    public LocalDate getDataNascimento() {
        return dataNascimento;
    }

    /**
     * @param dataNascimento the dataNascimento to set
     */
    public void setDataNascimento(LocalDate dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    /**
     * @return String return the nacionalidade
     */
    public String getNacionalidade() {
        return nacionalidade;
    }

    /**
     * @param nacionalidade the nacionalidade to set
     */
    public void setNacionalidade(String nacionalidade) {
        this.nacionalidade = nacionalidade;
    }

    /**
     * @return String return the nomePai
     */
    public String getNomePai() {
        return nomePai;
    }

    /**
     * @param nomePai the nomePai to set
     */
    public void setNomePai(String nomePai) {
        this.nomePai = nomePai;
    }

    /**
     * @return String return the nomeMae
     */
    public String getNomeMae() {
        return nomeMae;
    }

    /**
     * @param nomeMae the nomeMae to set
     */
    public void setNomeMae(String nomeMae) {
        this.nomeMae = nomeMae;
    }

    /**
     * @return Integer return the quantidadeFilhos
     */
    public Integer getQuantidadeFilhos() {
        return quantidadeFilhos;
    }

    /**
     * @param quantidadeFilhos the quantidadeFilhos to set
     */
    public void setQuantidadeFilhos(Integer quantidadeFilhos) {
        this.quantidadeFilhos = quantidadeFilhos;
    }

    /**
     * @return String return the cep
     */
    public String getCep() {
        return cep;
    }

    /**
     * @param cep the cep to set
     */
    public void setCep(String cep) {
        this.cep = cep;
    }

    /**
     * @return String return the pais
     */
    public String getPais() {
        return pais;
    }

    /**
     * @param pais the pais to set
     */
    public void setPais(String pais) {
        this.pais = pais;
    }

    /**
     * @return String return the estado
     */
    public String getEstado() {
        return estado;
    }

    /**
     * @param estado the estado to set
     */
    public void setEstado(String estado) {
        this.estado = estado;
    }

    /**
     * @return String return the cidade
     */
    public String getCidade() {
        return cidade;
    }

    /**
     * @param cidade the cidade to set
     */
    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    /**
     * @return String return the rua
     */
    public String getRua() {
        return rua;
    }

    /**
     * @param rua the rua to set
     */
    public void setRua(String rua) {
        this.rua = rua;
    }

    /**
     * @return String return the numero
     */
    public String getNumero() {
        return numero;
    }

    /**
     * @param numero the numero to set
     */
    public void setNumero(String numero) {
        this.numero = numero;
    }

    /**
     * @return String return the emailPessoal
     */
    public String getEmailPessoal() {
        return emailPessoal;
    }

    /**
     * @param emailPessoal the emailPessoal to set
     */
    public void setEmailPessoal(String emailPessoal) {
        this.emailPessoal = emailPessoal;
    }

    /**
     * @return String return the emailProfissional
     */
    public String getEmailProfissional() {
        return emailProfissional;
    }

    /**
     * @param emailProfissional the emailProfissional to set
     */
    public void setEmailProfissional(String emailProfissional) {
        this.emailProfissional = emailProfissional;
    }

    /**
     * @return String return the contato
     */
    public String getContato() {
        return contato;
    }

    /**
     * @param contato the contato to set
     */
    public void setContato(String contato) {
        this.contato = contato;
    }

    /**
     * @return String return the contatoSecondario
     */
    public String getContatoSecondario() {
        return contatoSecondario;
    }

    /**
     * @param contatoSecondario the contatoSecondario to set
     */
    public void setContatoSecondario(String contatoSecondario) {
        this.contatoSecondario = contatoSecondario;
    }

    /**
     * @return String return the registroNascimento
     */
    public String getRegistroNascimento() {
        return registroNascimento;
    }

    /**
     * @param registroNascimento the registroNascimento to set
     */
    public void setRegistroNascimento(String registroNascimento) {
        this.registroNascimento = registroNascimento;
    }

    /**
     * @return String return the cidadeNascimento
     */
    public String getCidadeNascimento() {
        return cidadeNascimento;
    }

    /**
     * @param cidadeNascimento the cidadeNascimento to set
     */
    public void setCidadeNascimento(String cidadeNascimento) {
        this.cidadeNascimento = cidadeNascimento;
    }

    /**
     * @return String return the registroCasamento
     */
    public String getRegistroCasamento() {
        return registroCasamento;
    }

    /**
     * @param registroCasamento the registroCasamento to set
     */
    public void setRegistroCasamento(String registroCasamento) {
        this.registroCasamento = registroCasamento;
    }

    /**
     * @return String return the carteiraMotorista
     */
    public String getCarteiraMotorista() {
        return carteiraMotorista;
    }

    /**
     * @param carteiraMotorista the carteiraMotorista to set
     */
    public void setCarteiraMotorista(String carteiraMotorista) {
        this.carteiraMotorista = carteiraMotorista;
    }

    /**
     * @return String return the categoria
     */
    public String getCategoria() {
        return categoria;
    }

    /**
     * @param categoria the categoria to set
     */
    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    /**
     * @return String return the tituloEleitoral
     */
    public String getTituloEleitoral() {
        return tituloEleitoral;
    }

    /**
     * @param tituloEleitoral the tituloEleitoral to set
     */
    public void setTituloEleitoral(String tituloEleitoral) {
        this.tituloEleitoral = tituloEleitoral;
    }

    /**
     * @return String return the zona
     */
    public String getZona() {
        return zona;
    }

    /**
     * @param zona the zona to set
     */
    public void setZona(String zona) {
        this.zona = zona;
    }

    /**
     * @return String return the secao
     */
    public String getSecao() {
        return secao;
    }

    /**
     * @param secao the secao to set
     */
    public void setSecao(String secao) {
        this.secao = secao;
    }

    /**
     * @return String return the nomeFaculdade
     */
    public String getNomeFaculdade() {
        return nomeFaculdade;
    }

    /**
     * @param nomeFaculdade the nomeFaculdade to set
     */
    public void setNomeFaculdade(String nomeFaculdade) {
        this.nomeFaculdade = nomeFaculdade;
    }

    /**
     * @return String return the matriculaFaculdade
     */
    public String getMatriculaFaculdade() {
        return matriculaFaculdade;
    }

    /**
     * @param matriculaFaculdade the matriculaFaculdade to set
     */
    public void setMatriculaFaculdade(String matriculaFaculdade) {
        this.matriculaFaculdade = matriculaFaculdade;
    }

    /**
     * @return String return the pisPasep
     */
    public String getPisPasep() {
        return pisPasep;
    }

    /**
     * @param pisPasep the pisPasep to set
     */
    public void setPisPasep(String pisPasep) {
        this.pisPasep = pisPasep;
    }

    /**
     * @return String return the numeroCarteiraTrabalho
     */
    public String getNumeroCarteiraTrabalho() {
        return numeroCarteiraTrabalho;
    }

    /**
     * @param numeroCarteiraTrabalho the numeroCarteiraTrabalho to set
     */
    public void setNumeroCarteiraTrabalho(String numeroCarteiraTrabalho) {
        this.numeroCarteiraTrabalho = numeroCarteiraTrabalho;
    }

    /**
     * @return String return the serieCarteiraTrabalho
     */
    public String getSerieCarteiraTrabalho() {
        return serieCarteiraTrabalho;
    }

    /**
     * @param serieCarteiraTrabalho the serieCarteiraTrabalho to set
     */
    public void setSerieCarteiraTrabalho(String serieCarteiraTrabalho) {
        this.serieCarteiraTrabalho = serieCarteiraTrabalho;
    }

    /**
     * @return String return the ufCarteiraTrabalho
     */
    public String getUfCarteiraTrabalho() {
        return ufCarteiraTrabalho;
    }

    /**
     * @param ufCarteiraTrabalho the ufCarteiraTrabalho to set
     */
    public void setUfCarteiraTrabalho(String ufCarteiraTrabalho) {
        this.ufCarteiraTrabalho = ufCarteiraTrabalho;
    }

    /**
     * @return String return the cargo
     */
    public String getCargo() {
        return cargo;
    }

    /**
     * @param cargo the cargo to set
     */
    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    /**
     * @return BigDecimal return the salario
     */
    public BigDecimal getSalario() {
        return salario;
    }

    /**
     * @param salario the salario to set
     */
    public void setSalario(BigDecimal salario) {
        this.salario = salario;
    }

    /**
     * @return LocalDate return the dataEntrada
     */
    public LocalDate getDataEntrada() {
        return dataEntrada;
    }

    /**
     * @param dataEntrada the dataEntrada to set
     */
    public void setDataEntrada(LocalDate dataEntrada) {
        this.dataEntrada = dataEntrada;
    }

    /**
     * @return LocalDate return the dataSaida
     */
    public LocalDate getDataSaida() {
        return dataSaida;
    }

    /**
     * @param dataSaida the dataSaida to set
     */
    public void setDataSaida(LocalDate dataSaida) {
        this.dataSaida = dataSaida;
    }

}