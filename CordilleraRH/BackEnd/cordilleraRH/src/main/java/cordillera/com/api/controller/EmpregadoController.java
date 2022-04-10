package cordillera.com.api.controller;

import java.util.List;

import javax.validation.Valid;

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

import cordillera.com.api.model.components.Empregado;
import cordillera.com.api.model.container.EmpregadoJPA;

@RestController
@RequestMapping("/mainhub/empregados")
public class EmpregadoController {
    
    private final EmpregadoJPA empregadoRepository;

    @Autowired
    public EmpregadoController(EmpregadoJPA empregadoRepository){
        this.empregadoRepository = empregadoRepository;
    }

    // find by id
    @GetMapping("{id}")
    @ResponseStatus(HttpStatus.FOUND)
    public Empregado findById(@PathVariable Integer id){
        return empregadoRepository.findById(id).orElseThrow( 
            () -> new ResponseStatusException(HttpStatus.NOT_FOUND)
        );
    };

    // select all
    @GetMapping()
    public List<Empregado> obterTodos(){
        return empregadoRepository.findAll();
    }

    // Save 
    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public Empregado salvarEmpregado(@RequestBody @Valid Empregado empregado){
        return empregadoRepository.save(empregado);
    }

    // update
    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateEmpregado(@PathVariable Integer id, @RequestBody @Valid Empregado empregado){ 
            empregadoRepository
                .findById(id)
                .map( empregadoExistente -> {
                    empregado.setId_empregado(empregadoExistente.getId_empregado());
                    empregadoRepository.save(empregado);
                    return empregadoExistente;
                }).orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente não encontrado") );
    }


    // delete     
    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletaEmpregado(@PathVariable Integer id){
        empregadoRepository
            .findById(id)
            .map( c -> { 
                empregadoRepository.delete(c);
                return Void.TYPE;
            })
            .orElseThrow( 
            		() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente não encontrado") 
            );
    }
}