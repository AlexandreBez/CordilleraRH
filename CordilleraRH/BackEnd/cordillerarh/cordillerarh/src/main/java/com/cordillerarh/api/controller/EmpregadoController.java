package com.cordillerarh.api.controller;

import java.util.List;

import javax.validation.Valid;

import com.cordillerarh.api.model.components.Empregado;
import com.cordillerarh.api.model.container.EmpregadoJPA;

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
@RequestMapping("/mainhub/empregados")
public class EmpregadoController {
    
    private final EmpregadoJPA empregadoRepository;

    @Autowired
    public EmpregadoController(EmpregadoJPA empregadoRepository){
        this.empregadoRepository = empregadoRepository;
    }

    @GetMapping("/filter/{cpf}")
    public List<Empregado> findByCPF(@PathVariable String cpf){

    }

    // try to find by ID of employee and if not find then throw a NOT_FOUND exception
    @GetMapping("{id}")
    @ResponseStatus(HttpStatus.FOUND)
    public Empregado findByIdEmpregado(@PathVariable Integer id){

    };

    // Bring all the employes
    @GetMapping()
    public List<Empregado> obterTodosEmpregados(){

    }

    // Save employee
    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public Empregado salvarEmpregado(@RequestBody @Valid Empregado empregado){

    }

    // update
    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public void atualizarEmpregado(@PathVariable Integer id, @RequestBody @Valid Empregado empregado){ 

    }

    // delete 
    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletarEmpregado(@PathVariable Integer id){

    }
}