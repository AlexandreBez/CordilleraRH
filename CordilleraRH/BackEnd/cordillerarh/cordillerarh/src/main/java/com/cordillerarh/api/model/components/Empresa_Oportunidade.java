package com.cordillerarh.api.model.components;

import javax.persistence.CascadeType;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Table(name = "EMPRESA_OPORTUNIDADE")
public class Empresa_Oportunidade {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_empresa_oportunidade;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "id_oportunidade")
    private Oportunidade id_oportunidade;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "id_empresa")
    private Empresa id_Empresa;

    public Empresa_Oportunidade() {
    }

    public Empresa_Oportunidade(Integer id_empresa_oportunidade, Oportunidade id_oportunidade, Empresa id_Empresa) {
        this.id_empresa_oportunidade = id_empresa_oportunidade;
        this.id_oportunidade = id_oportunidade;
        this.id_Empresa = id_Empresa;
    }

    /**
     * @return Integer return the id_empresa_oportunidade
     */
    public Integer getId_empresa_oportunidade() {
        return id_empresa_oportunidade;
    }

    /**
     * @param id_empresa_oportunidade the id_empresa_oportunidade to set
     */
    public void setId_empresa_oportunidade(Integer id_empresa_oportunidade) {
        this.id_empresa_oportunidade = id_empresa_oportunidade;
    }

    /**
     * @return Oportunidade return the id_oportunidade
     */
    public Oportunidade getId_oportunidade() {
        return id_oportunidade;
    }

    /**
     * @param id_oportunidade the id_oportunidade to set
     */
    public void setId_oportunidade(Oportunidade id_oportunidade) {
        this.id_oportunidade = id_oportunidade;
    }

    /**
     * @return Empresa return the id_Empresa
     */
    public Empresa getId_Empresa() {
        return id_Empresa;
    }

    /**
     * @param id_Empresa the id_Empresa to set
     */
    public void setId_Empresa(Empresa id_Empresa) {
        this.id_Empresa = id_Empresa;
    }

}