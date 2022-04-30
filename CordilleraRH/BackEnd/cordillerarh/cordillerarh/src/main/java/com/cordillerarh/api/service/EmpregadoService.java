package com.cordillerarh.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import com.cordillerarh.api.model.components.Empregado;
import com.cordillerarh.api.model.container.EmpregadoJPA;

@Service
public class EmpregadoService {

	@Autowired
    private EmpregadoJPA empregadoRepository;
    
      
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
	
	
	
}
