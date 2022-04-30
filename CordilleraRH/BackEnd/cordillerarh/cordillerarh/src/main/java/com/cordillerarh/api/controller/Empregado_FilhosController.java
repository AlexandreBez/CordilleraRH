package com.cordillerarh.api.controller;

import java.io.Serializable;

import com.cordillerarh.api.model.container.Empregado_FilhoJPA;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/mainhub/empregado_filho")
public class Empregado_FilhosController implements Serializable{
	
	private static final long serialVersionUID = 1L;

    // define o JPA
    private final Empregado_FilhoJPA empregadosFilhosRepository;

    @Autowired
    public Empregado_FilhosController(Empregado_FilhoJPA empregadosFilhosRepository){
        this.empregadosFilhosRepository = empregadosFilhosRepository;
    }


}
