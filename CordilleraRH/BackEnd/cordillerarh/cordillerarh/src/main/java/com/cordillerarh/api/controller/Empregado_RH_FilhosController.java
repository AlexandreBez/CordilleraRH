package com.cordillerarh.api.controller;

import java.io.Serializable;

import com.cordillerarh.api.model.container.EmpregadoRH_FilhosJPA;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/mainhub/empregadoRH_filhos")
public class Empregado_RH_FilhosController implements Serializable{
	
	private static final long serialVersionUID = 1L;

    private final EmpregadoRH_FilhosJPA empregadoRHFilhosRepository;

    @Autowired
    public Empregado_RH_FilhosController(EmpregadoRH_FilhosJPA empregadoRHFilhosRepository){
        this.empregadoRHFilhosRepository = empregadoRHFilhosRepository;
    }

}
