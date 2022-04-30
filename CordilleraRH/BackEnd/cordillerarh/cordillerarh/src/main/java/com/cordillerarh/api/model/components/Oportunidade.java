package com.cordillerarh.api.model.components;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonFormat;

@Table(name = "OPORTUNIDADE")
public class Oportunidade {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_OPORTUNIDADE")
    private Integer id_oportunidade;

    @Column(name = "DATA_PUBLICADO")
    @NotNull(message = "{campo.dataPublicado.vazio}")
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate data_publicado_interno;

    @Column(name = "CARGO")
    @NotNull(message = "{campo.cargo.vazio}")
    private String cargo_interno;

    @Column(name = "REQUISITOS")
    @NotNull(message = "{campo.requisito.vazio}")
    private String requisitos_interno;

    @Column(name = "OBSERVACAO")
    private String observacao_interno;

    public Oportunidade() {
    }

    public Oportunidade(Integer id_oportunidade,
            @NotNull(message = "{campo.dataPublicado.vazio}") LocalDate data_publicado_interno,
            @NotNull(message = "{campo.cargo.vazio}") String cargo_interno,
            @NotNull(message = "{campo.requisito.vazio}") String requisitos_interno, String observacao_interno) {
        this.id_oportunidade = id_oportunidade;
        this.data_publicado_interno = data_publicado_interno;
        this.cargo_interno = cargo_interno;
        this.requisitos_interno = requisitos_interno;
        this.observacao_interno = observacao_interno;
    }

    /**
     * @return Integer return the id_oportunidade
     */
    public Integer getId_oportunidade() {
        return id_oportunidade;
    }

    /**
     * @param id_oportunidade the id_oportunidade to set
     */
    public void setId_oportunidade(Integer id_oportunidade) {
        this.id_oportunidade = id_oportunidade;
    }

    /**
     * @return LocalDate return the data_publicado_interno
     */
    public LocalDate getData_publicado_interno() {
        return data_publicado_interno;
    }

    /**
     * @param data_publicado_interno the data_publicado_interno to set
     */
    public void setData_publicado_interno(LocalDate data_publicado_interno) {
        this.data_publicado_interno = data_publicado_interno;
    }

    /**
     * @return String return the cargo_interno
     */
    public String getCargo_interno() {
        return cargo_interno;
    }

    /**
     * @param cargo_interno the cargo_interno to set
     */
    public void setCargo_interno(String cargo_interno) {
        this.cargo_interno = cargo_interno;
    }

    /**
     * @return String return the requisitos_interno
     */
    public String getRequisitos_interno() {
        return requisitos_interno;
    }

    /**
     * @param requisitos_interno the requisitos_interno to set
     */
    public void setRequisitos_interno(String requisitos_interno) {
        this.requisitos_interno = requisitos_interno;
    }

    /**
     * @return String return the observacao_interno
     */
    public String getObservacao_interno() {
        return observacao_interno;
    }

    /**
     * @param observacao_interno the observacao_interno to set
     */
    public void setObservacao_interno(String observacao_interno) {
        this.observacao_interno = observacao_interno;
    }

}