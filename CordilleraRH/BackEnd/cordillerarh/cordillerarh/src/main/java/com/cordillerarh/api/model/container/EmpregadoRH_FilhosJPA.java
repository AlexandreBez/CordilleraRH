package com.cordillerarh.api.model.container;

import com.cordillerarh.api.model.components.EmpregadoRH_Filho;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EmpregadoRH_FilhosJPA extends JpaRepository<EmpregadoRH_Filho, Integer>{
    
}