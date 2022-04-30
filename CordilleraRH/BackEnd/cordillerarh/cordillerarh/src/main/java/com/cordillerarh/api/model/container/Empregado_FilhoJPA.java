package com.cordillerarh.api.model.container;

import com.cordillerarh.api.model.components.Empregado_Filho;

import org.springframework.data.jpa.repository.JpaRepository;

public interface Empregado_FilhoJPA extends JpaRepository<Empregado_Filho, Integer>{
    
}