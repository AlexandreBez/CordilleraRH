package com.cordillerarh.api.model.container;
import com.cordillerarh.api.model.components.Empresa_Oportunidade;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface Empresa_OportunidadeJPA extends JpaRepository<Empresa_Oportunidade, Integer>{
    
	@Query(
		"select o from Oportunidade o"
		+ "join "	
	)
	public List<Empresa_Oportunidade> listOportunidadeAndEmpresa();
}