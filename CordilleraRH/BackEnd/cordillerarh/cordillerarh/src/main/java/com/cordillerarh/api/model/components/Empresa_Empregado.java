package com.cordillerarh.api.model.components;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "EMPRESA_EMPREGADO")
public class Empresa_Empregado {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID_EMPRESA_EMPREGADO")
    private Integer id_EmpresaEmpregado;
    
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "id_empregado")
    private Empregado id_Empregado;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "id_empresa")
    private Empresa id_Empresa;

    public Empresa_Empregado(){}

    public Empresa_Empregado(Integer id_EmpresaEmpregado, Empregado id_Empregado, Empresa id_Empresa) {
        this.id_EmpresaEmpregado = id_EmpresaEmpregado;
        this.id_Empregado = id_Empregado;
        this.id_Empresa = id_Empresa;
    };

    /**
     * @return Integer return the id_EmpresaEmpregado
     */
    public Integer getId_EmpresaEmpregado() {
        return id_EmpresaEmpregado;
    }

    /**
     * @param id_EmpresaEmpregado the id_EmpresaEmpregado to set
     */
    public void setId_EmpresaEmpregado(Integer id_EmpresaEmpregado) {
        this.id_EmpresaEmpregado = id_EmpresaEmpregado;
    }

    /**
     * @return Empregado return the id_Empregado
     */
    public Empregado getId_Empregado() {
        return id_Empregado;
    }

    /**
     * @param id_Empregado the id_Empregado to set
     */
    public void setId_Empregado(Empregado id_Empregado) {
        this.id_Empregado = id_Empregado;
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