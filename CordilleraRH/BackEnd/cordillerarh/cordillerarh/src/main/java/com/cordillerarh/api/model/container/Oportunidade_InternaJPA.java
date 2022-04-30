package com.cordillerarh.api.model.container;

import com.cordillerarh.api.model.components.Oportunidade_Interna;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface Oportunidade_InternaJPA extends JpaRepository<Oportunidade_Interna, Integer>{
    
	@Query("select o from Oportunidade_interna o where o.data_postada = :dataPostada")
	public List<Oportunidade_Interna> findByDataPostada(@Param("dataPostada") LocalDate dataPostada);
	
	@Query("select o from Oportunidade_interna o where o.cargo like %:cargo%")
	public List<Oportunidade_Interna> findByDataCargo(@Param("cargo") String cargo);
	
}