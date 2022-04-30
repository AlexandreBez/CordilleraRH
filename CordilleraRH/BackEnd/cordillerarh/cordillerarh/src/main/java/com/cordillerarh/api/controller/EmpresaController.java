package com.cordillerarh.api.controller;

import java.util.List;

import javax.validation.Valid;

import com.cordillerarh.api.model.components.Empresa;
import com.cordillerarh.api.model.container.EmpresaJPA;

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
@RequestMapping("/mainhub/empresa")
public class EmpresaController {

    private final EmpresaJPA empresaRepository;

    @Autowired
    public EmpresaController(EmpresaJPA empresaRepository){
        this.empresaRepository = empresaRepository;
    }

    // findById
    @GetMapping("{id}")
    @ResponseStatus(HttpStatus.FOUND)
    public Empresa findByIdEmpresa(@PathVariable Integer id){
        return empresaRepository.findById(id).orElseThrow( 
            () -> new ResponseStatusException(HttpStatus.NOT_FOUND)
        );
    };

    // Select all 
    @GetMapping()
    public List<Empresa> obterTodosEmpresa(){
        return empresaRepository.findAll();
    }

    // Save 
    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public Empresa salvarEmpresa(@RequestBody @Valid Empresa empresa){
        return empresaRepository.save(empresa);
    }

    // update
    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateEmpresa(@PathVariable Integer id, @RequestBody @Valid Empresa empresa){ 
    	empresaRepository
                .findById(id)
                .map( empresaExistente -> {
                	empresa.setId_empresa(empresaExistente.getId_empresa());
                    empresaRepository.save(empresa);
                    return empresaExistente;
                }).orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Empresa não encontrada") );
    }


    // delete    
    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletaEmpresa(@PathVariable Integer id){
        empresaRepository
            .findById(id)
            .map( c -> { 
                empresaRepository.delete(c);
                return Void.TYPE;
            })
            .orElseThrow( 
            		() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Empresa não encontrada") 
            );
    }
}
