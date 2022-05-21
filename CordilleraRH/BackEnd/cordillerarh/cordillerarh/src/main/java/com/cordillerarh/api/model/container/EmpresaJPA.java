package com.cordillerarh.api.model.container;

import com.cordillerarh.api.model.components.Empresa;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface EmpresaJPA extends JpaRepository<Empresa, Integer>{
    
	// buscar por nome para a pagina inicial
	@Query(
			"select nome, cnpj "
			+ "from Empresa c "
			+ "where c.nome like upper(%:nome%) "
			+ "order by nome asc"
	)
	public List<Empresa> findByName(@Param("nome") String nome);
	
	// buscar por cnpj para a pagina inicial
	@Query(
			"select nome, cnpj "
			+ "from Empresa c "
			+ "where c.cnpj = :cnpj "
			+ "order by nome asc"
	)
	public List<Empresa> findByCnpj(@Param("cnpj") String cnpj);

	// ---------------------------------------------------
	
	
}