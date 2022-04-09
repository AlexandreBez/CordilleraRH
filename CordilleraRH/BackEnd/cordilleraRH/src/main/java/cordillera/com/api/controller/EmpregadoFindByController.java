package cordillera.com.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import cordillera.com.api.model.components.Empregado;
import cordillera.com.api.model.container.EmpregadoJPA;

@RestController
@RequestMapping("/Empregado")
public class EmpregadoFindByController {
    
    private final EmpregadoJPA empregadoRepository;

    @Autowired
    public EmpregadoFindByController(EmpregadoJPA empregadoRepository){
        this.empregadoRepository = empregadoRepository;
    }

    @GetMapping("{id}")
    public Empregado acharPorId(@PathVariable Integer id){
        return empregadoRepository.findById(id).orElseThrow( 
            () -> new ResponseStatusException(HttpStatus.NOT_FOUND)
        );
    };
}