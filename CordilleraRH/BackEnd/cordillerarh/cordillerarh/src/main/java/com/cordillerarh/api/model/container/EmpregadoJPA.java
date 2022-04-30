package com.cordillerarh.api.model.container;

import java.time.LocalDate;
import java.util.List;

import com.cordillerarh.api.model.components.Empregado;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface EmpregadoJPA extends JpaRepository<Empregado, Integer>{
    
    @Query("select nome, cpf, sexo, idade, email, contato from empregado e where e.nome like %:nome% order by nome asc")
    public List<Empregado> findByName(@Param("nome") String nome);
	
    @Query("select nome, cpf, sexo, idade, email, contato from empregado e where e.cpf = :cpf order by nome asc")
    public List<Empregado> findByCPF(@Param("cpf") String cpf);
    
    @Query("select nome, cpf, sexo, idade, email, contato from empregado e where e.pispasep = :pisPasep order by nome asc")
    public List<Empregado> findByPisPasep(@Param("pisPasep") String pisPasep);
    
    @Query("select nome, cpf, sexo, idade, email, contato from empregado e where e.cargo like %:cargo% order by nome asc")
    public List<Empregado> findByCargo(@Param("cargo") String cargo);
    
    @Query("select nome, cpf, sexo, idade, email, contato from empregado e where e.data_entrada = :dataEntrada order by nome asc")
    public List<Empregado> findByDataEntrada(@Param("dataEntrada") LocalDate dataEntrada);
    
    @Query("select nome, cpf, sexo, idade, email, contato from empregado e where e.data_desligamento = :dataDesligamento order by nome asc")
    public List<Empregado> findByCPF(@Param("dataDesligamento")LocalDate dataDesligamento);
    
}