package com.cordillerarh.api.model.container;

import com.cordillerarh.api.model.components.Filho_Empregado;

import org.springframework.data.jpa.repository.JpaRepository;

public interface FilhoJPA extends JpaRepository<Filho_Empregado, Integer>{
    
}