package com.cordillerarh.api.model.components;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "FILHO_EMPREGADO")
public class Filho_Empregado {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_FILHO")
    private Integer id_Filho;

    @Column(name = "NOME")
    @NotNull(message = "{campo.nome.vazio}")
    private String nome;

    @Column(name = "IDADE")
    @NotNull(message = "{campo.idade.vazio}")
    private String idade;
    
    @Column(name = "REGISTRO_NASCIMENTO")
    @NotNull(message = "{campo.registroNascimento.vazio}")
    private String registroNascimento; 

    @Column(name = "DATA_NASCIMENTO")
    @NotNull(message = "{campo.dataNascimento.vazio}")
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate dataNascimento;

    public Filho_Empregado(){}

    public Filho_Empregado(Integer id_Filho, @NotNull(message = "{campo.nome.vazio}") String nome,
            @NotNull(message = "{campo.idade.vazio}") String idade,
            @NotNull(message = "{campo.registroNascimento.vazio}") String registroNascimento,
            @NotNull(message = "{campo.dataNascimento.vazio}") LocalDate dataNascimento) {
        this.id_Filho = id_Filho;
        this.nome = nome;
        this.idade = idade;
        this.registroNascimento = registroNascimento;
        this.dataNascimento = dataNascimento;
    };

    /**
     * @return Integer return the id_Filho
     */
    public Integer getId_Filho() {
        return id_Filho;
    }

    /**
     * @param id_Filho the id_Filho to set
     */
    public void setId_Filho(Integer id_Filho) {
        this.id_Filho = id_Filho;
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

}