package com.cordillerarh.api.model.container;

import java.time.LocalDate;
import java.util.List;

import com.cordillerarh.api.model.components.Empregado;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface EmpregadoJPA extends JpaRepository<Empregado, Integer>{
    
	// buscar por nome para a pagina inicial 
    @Query(
    		"select nome, cpf, email, contato "
    		+ "from empregado e "
    		+ "where e.nome like upper(%:nome%) "
    		+ "order by nome asc"
    )
    public List<Empregado> findByName(@Param("nome") String nome);
	
    // buscar por cpf para a pagina inicial
    @Query(
    		"select nome, cpf, email, contato "
    		+ "from empregado e "
    		+ "where e.cpf = :cpf "
    		+ "order by nome asc"
    )
    public List<Empregado> findByCPF(@Param("cpf") String cpf);
    
    // buscar por pispasep para a pagina inicial
    @Query(
    		"select nome, cpf, email, contato "
    		+ "from empregado e "
    		+ "where e.pispasep = :pisPasep "
    		+ "order by nome asc"
    )
    public List<Empregado> findByPisPasep(@Param("pisPasep") String pisPasep);
    
    // buscar por cargo para a pagina inicial
    @Query(
    		"select nome, cpf, email, contato "
    		+ "from empregado e "
    		+ "where e.cargo like upper(%:cargo%)"
    		+ "order by nome asc"
    )
    public List<Empregado> findByCargo(@Param("cargo") String cargo);
    
    // buscar por data de entrada para a pagina inicial
    @Query(
    		"select nome, cpf, email, contato "
    		+ "from empregado e "
    		+ "where e.data_entrada = :dataEntrada "
    		+ "order by nome asc"
    )
    public List<Empregado> findByDataEntrada(@Param("dataEntrada") LocalDate dataEntrada);
    
    // buscar por data de desligamento para a pagina inicial
    @Query(
    		"select nome, cpf, email, contato "
    		+ "from empregado e "
    		+ "where e.data_desligamento = :dataDesligamento "
    		+ "order by nome asc"
    )
    public List<Empregado> findByDataDesligamento(@Param("dataDesligamento")LocalDate dataDesligamento);
    
    //---------------------------------------------------------
    
    // buscar todos os dados quando selecionado
    @Query(
    		"select "
    		+ "from empregado e "
    		+ "where e.data_desligamento = :dataDesligamento "
    		+ "order by nome asc"
    )
    public List<Empregado> selectAllEmpregado(@Param("dataDesligamento")LocalDate dataDesligamento);
}