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

import cordillera.com.api.model.components.Empregado_Filhos;
import cordillera.com.api.model.container.Empregado_FilhosJPA;

@RestController
@RequestMapping("/mainhub/empregado_filho")
public class Empregado_FilhosController {

    private final Empregado_FilhosJPA empregadosFilhosRepository;

    @Autowired
    public Empregado_FilhosController(Empregado_FilhosJPA empregadosFilhosRepository){
        this.empregadosFilhosRepository = empregadosFilhosRepository;
    }

    // find by id
    @GetMapping("{id}")
    @ResponseStatus(HttpStatus.FOUND)
    public Empregado_Filhos findByIdEmpregadoFilho(@PathVariable Integer id){
        return empregadosFilhosRepository.findById(id).orElseThrow( 
            () -> new ResponseStatusException(HttpStatus.NOT_FOUND)
        );
    };

    // selectAll
    @GetMapping()
    public List<Empregado_Filhos> obterTodosEmpregadoFilhos(){
        return empregadosFilhosRepository.findAll();
    }

    // Save
    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public Empregado_Filhos salvarEmpregadoFilhos(@RequestBody @Valid Empregado_Filhos empregadoFilhos){
        return empregadosFilhosRepository.save(empregadoFilhos);
    }

    // update
    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateEmpregadoFilhos(@PathVariable Integer id, @RequestBody @Valid Empregado_Filhos empregadoFilhos){ 
    	empregadosFilhosRepository
                .findById(id)
                .map( empregadosFilhosatualizado -> {
                    empregadoFilhos.setId_empregadoFilho(empregadosFilhosatualizado.getId_empregadoFilho());
                    empregadosFilhosRepository.save(empregadoFilhos);
                    return empregadosFilhosatualizado;
                }).orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Filho(a) não encontrado") );
    }


    // delete 
    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletaEmpregadoFilho(@PathVariable Integer id){
    	empregadosFilhosRepository
            .findById(id)
            .map( c -> { 
            	empregadosFilhosRepository.delete(c);
                return Void.TYPE;
            })
            .orElseThrow( 
            		() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Filho(a) não encontrado") 
            );
    }

}
