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
@Table(name = "OPORTUNIDADE_INTERNA")
public class Oportunidade_Interna {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_OPORTUNIDADE_INTERNA")
    private Integer id_oportunidade_interna;

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

    public Oportunidade_Interna() {
    }

    public Oportunidade_Interna(Integer id_oportunidade_interna,
            @NotNull(message = "{campo.dataPublicado.vazio}") LocalDate data_publicado_interno,
            @NotNull(message = "{campo.cargo.vazio}") String cargo_interno,
            @NotNull(message = "{campo.requisito.vazio}") String requisitos_interno, String observacao_interno) {
        this.id_oportunidade_interna = id_oportunidade_interna;
        this.data_publicado_interno = data_publicado_interno;
        this.cargo_interno = cargo_interno;
        this.requisitos_interno = requisitos_interno;
        this.observacao_interno = observacao_interno;
    }

    /**
     * @return Integer return the id_oportunidade_interna
     */
    public Integer getId_oportunidade_interna() {
        return id_oportunidade_interna;
    }

    /**
     * @param id_oportunidade_interna the id_oportunidade_interna to set
     */
    public void setId_oportunidade_interna(Integer id_oportunidade_interna) {
        this.id_oportunidade_interna = id_oportunidade_interna;
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