package com.cordillerarh.api.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import com.cordillerarh.api.model.components.Empregado;
import com.cordillerarh.api.model.container.EmpregadoJPA;
import com.fasterxml.jackson.annotation.JsonFormat;

@Service
public class EmpregadoService {

	@Autowired
    private EmpregadoJPA empregadoRepository;
    
	// basico do JPA
	@Transactional(readOnly = false)
    public void saveEmpregado(Empregado empregado) {
    	empregadoRepository.save(empregado);
    }
	
	@Transactional(readOnly = false)
	public void deleteEmpregado(Integer id) {
		empregadoRepository.deleteById(id);
	}
	
	@Transactional(readOnly = false)
	public void editEmpregado(Integer id, Empregado empregado) {
    	empregadoRepository
        	.findById(id)
        	.map( 
        		empregadoAtualizado -> {
        			
        			empregado.setId_empregado(empregadoAtualizado.getId_empregado());
        			empregadoRepository.save(empregado);
        			return empregadoAtualizado;
        		}
        	)
        	.orElseThrow( 
        			() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Empregado não encontrado") 
        	);
	}
	
	// ------------------------------------------------------
	
	// customizados
	
	@Transactional(readOnly = true)
	public List<Empregado> findByNome(String nome) {
		return empregadoRepository.findByName(nome.toUpperCase());
	}
	
	@Transactional(readOnly = true)
	public List<Empregado> findByCPF(String cpf) {
		return empregadoRepository.findByCPF(cpf);
	}
	
	@Transactional(readOnly = true)
	public List<Empregado> findByPisPasep(String pisPasep) {
		return empregadoRepository.findByPisPasep(pisPasep);
	}
	
	@Transactional(readOnly = true)
	public List<Empregado> findByCargo(String cargo) {
		return empregadoRepository.findByCargo(cargo.toUpperCase());
	}
	
	@Transactional(readOnly = true)
	@JsonFormat(pattern = "dd/MM/yyyy")
	public List<Empregado> findByDataEntrada(LocalDate data) {
		return empregadoRepository.findByDataEntrada(data);
	}
	
	@Transactional(readOnly = true)
	@JsonFormat(pattern = "dd/MM/yyyy")
	public List<Empregado> findByDataDesligamento(LocalDate data) {
		return empregadoRepository.findByDataDesligamento(data);
	}
	
}
