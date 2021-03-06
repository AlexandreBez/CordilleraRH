package com.cordillerarh.api.controller;

import java.util.List;

import javax.validation.Valid;

import com.cordillerarh.api.model.components.Filho_Empregado;
import com.cordillerarh.api.model.container.FilhoJPA;

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
@RequestMapping("/mainhub/filho_empregado")
public class FilhoController {
    
    private final FilhoJPA filhoRepository;

    @Autowired
    public FilhoController(FilhoJPA filhoRepository){
        this.filhoRepository = filhoRepository;
    }

    // try to find by ID of employee and if not find then throw a NOT_FOUND exception
    @GetMapping("{id}")
    @ResponseStatus(HttpStatus.FOUND)
    public Filho_Empregado findByIdFilho(@PathVariable Integer id){
        return filhoRepository.findById(id).orElseThrow( 
            () -> new ResponseStatusException(HttpStatus.NOT_FOUND)
        );
    };

    // Bring all the employes
    @GetMapping()
    public List<Filho_Empregado> obterTodosFilhos(){
        return filhoRepository.findAll();
    }

    // Save employee
    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public Filho_Empregado salvarFilho(@RequestBody @Valid Filho_Empregado empresaEmpregado){
        return filhoRepository.save(empresaEmpregado);
    }

    // update
    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateFilho(@PathVariable Integer id, @RequestBody @Valid Filho_Empregado filho){ 
    	filhoRepository
                .findById(id)
                .map( filhoAtualizado -> {
                    filho.setId_Filho((filhoAtualizado.getId_Filho()));
                    filhoRepository.save(filho);
                    return filhoAtualizado;
                }).orElseThrow( 
                    () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Filho(a) n??o encontrado") 
                );
    }

    // delete 
    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletaEmpregado(@PathVariable Integer id){
    	filhoRepository
            .findById(id)
            .map( c -> { 
            	filhoRepository.delete(c);
                return Void.TYPE;
            })
            .orElseThrow( 
            		() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Filho(a) n??o encontrado") 
            );
    }
}