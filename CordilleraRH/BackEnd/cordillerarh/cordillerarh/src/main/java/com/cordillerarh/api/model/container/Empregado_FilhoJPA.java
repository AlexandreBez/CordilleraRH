package com.cordillerarh.api.model.container;

import com.cordillerarh.api.model.components.Empregado_Filho;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface Empregado_FilhoJPA extends JpaRepository<Empregado_Filho, Integer>{
    
	@Query("select f.nome, ")
	public List<Empregado_Filho> selectFilhoEmpregado();
}