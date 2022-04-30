package com.cordillerarh.api.controller;

import java.util.List;

import javax.validation.Valid;

import com.cordillerarh.api.model.components.EmpregadoRH;
import com.cordillerarh.api.model.container.EmpregadoRHJPA;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/mainhub/empregadosRH")
public class EmpregadoRHController {

    private final EmpregadoRHJPA empregadoRHRepository;

    @Autowired
    public EmpregadoRHController(EmpregadoRHJPA empregadoRHRepository){
        this.empregadoRHRepository = empregadoRHRepository;
    }

    // findById
    @GetMapping("{id}")
    @ResponseStatus(HttpStatus.FOUND)
    public EmpregadoRH findByIdRH(@PathVariable Integer id){
        return empregadoRHRepository.findById(id).orElseThrow( 
            () -> new ResponseStatusException(HttpStatus.NOT_FOUND)
        );
    };

    // Select all 
    @GetMapping()
    public List<EmpregadoRH> obterTodosRH(){
        return empregadoRHRepository.findAll();
    }

    // Save 
    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public EmpregadoRH salvarEmpregadoRH(@RequestBody @Valid EmpregadoRH empregadoRH){
        return empregadoRHRepository.save(empregadoRH);
    }

    // update
    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateEmpregadoRH(@PathVariable Integer id, @RequestBody @Valid EmpregadoRH empregadoRH){ 
            empregadoRHRepository
                .findById(id)
                .map( empregadoExistente -> {
                    empregadoRH.setId_empregado_RH(empregadoExistente.getId_empregado_RH());
                    empregadoRHRepository.save(empregadoRH);
                    return empregadoExistente;
                }).orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente não encontrado") );
    }


    // delete    
    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletaEmpregadoRH(@PathVariable Integer id){
        empregadoRHRepository
            .findById(id)
            .map( c -> { 
                empregadoRHRepository.delete(c);
                return Void.TYPE;
            })
            .orElseThrow( 
            		() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente não encontrado") 
            );
    }

}
