package com.cordillerarh.api.model.container;

import com.cordillerarh.api.model.components.Empresa_Empregado;

import org.springframework.data.jpa.repository.JpaRepository;

public interface Empresa_EmpregadoJPA extends JpaRepository<Empresa_Empregado, Integer>{
    
}