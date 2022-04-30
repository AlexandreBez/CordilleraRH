package com.cordillerarh.api.controller;

import java.io.Serializable;

import com.cordillerarh.api.model.container.Empresa_EmpregadoJPA;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/mainhub/empresa_empregado")
public class Empresa_EmpregadoController implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private final Empresa_EmpregadoJPA empresaEmpregadoRepository;

    @Autowired
    public Empresa_EmpregadoController(Empresa_EmpregadoJPA empresaEmpregadoRepository){
        this.empresaEmpregadoRepository = empresaEmpregadoRepository;
    }

}