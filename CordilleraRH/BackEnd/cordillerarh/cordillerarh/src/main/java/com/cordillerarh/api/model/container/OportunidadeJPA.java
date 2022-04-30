package com.cordillerarh.api.model.container;

import com.cordillerarh.api.model.components.Oportunidade;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface OportunidadeJPA extends JpaRepository<Oportunidade, Integer>{
    
	@Query("select o from Oportunidade o where o.data_postada = :dataPostada")
	public List<Oportunidade> findByDataPostada(@Param("dataPostada") LocalDate dataPostada);
	
	@Query("select o from Oportunidade o where o.cargo like %:cargo%")
	public List<Oportunidade> findByDataCargo(@Param("cargo") String cargo);
}