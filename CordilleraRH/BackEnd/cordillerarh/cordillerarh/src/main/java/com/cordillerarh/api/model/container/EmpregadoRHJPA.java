package com.cordillerarh.api.model.container;

import com.cordillerarh.api.model.components.EmpregadoRH;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface EmpregadoRHJPA extends JpaRepository<EmpregadoRH, Integer>{
	
    // buscar por nome para a pagina inicial
    @Query(
    		"select nome, cpf, email, contato "
    		+ "from EmpregadoRH e "
    		+ "where e.nome like upper(%:nome%) "
    		+ "order by nome asc"
    )
    public List<EmpregadoRH> findByName(@Param("nome") String nome);
	
    // buscar por cpf para a pagina inicial
    @Query(
    		"select nome, cpf, email, contato "
    		+ "from EmpregadoRH e "
    		+ "where e.cpf = :cpf "
    		+ "order by nome asc"
    )
    public List<EmpregadoRH> findByCPF(@Param("cpf") String cpf);
    
    // buscar por pispasep para a pagina inicial
    @Query(
    		"select nome, cpf, email, contato "
    		+ "from EmpregadoRH e "
    		+ "where e.pispasep = :pisPasep "
    		+ "order by nome asc"
    )
    public List<EmpregadoRH> findByPisPasep(@Param("pisPasep") String pisPasep);
    
    // buscar por cargo para a pagina inicial
    @Query(
    		"select nome, cpf, email, contato "
    		+ "from EmpregadoRH e "
    		+ "where e.cargo like upper%:cargo% "
    		+ "order by nome asc"
    )
    public List<EmpregadoRH> findByCargo(@Param("cargo") String cargo);
    
    // buscar por data de entrada para a pagina inicial
    @Query(
    		"select nome, cpf, email, contato "
    		+ "from EmpregadoRH e "
    		+ "where e.data_entrada = :dataEntrada "
    		+ "order by nome asc"
    )
    public List<EmpregadoRH> findByDataEntrada(@Param("dataEntrada") LocalDate dataEntrada);
    
    // buscar por data de saida para a pagina inicial
    @Query(
    		"select nome, cpf, email, contato "
    		+ "from EmpregadoRH e "
    		+ "where e.data_desligamento = :dataDesligamento "
    		+ "order by nome asc")
    public List<EmpregadoRH> findByDataDesligamento(@Param("dataDesligamento")LocalDate dataDesligamento);

    //-------------------------------------------------------
    
    
}