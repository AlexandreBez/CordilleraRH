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

import cordillera.com.api.model.components.Empregado_RH_Filhos;
import cordillera.com.api.model.container.EmpregadoRH_FilhosJPA;

@RestController
@RequestMapping("/mainhub/empregadoRH_filhos")
public class Empregado_RH_FilhosController {

    private final EmpregadoRH_FilhosJPA empregadoRHFilhosRepository;

    @Autowired
    public Empregado_RH_FilhosController(EmpregadoRH_FilhosJPA empregadoRHFilhosRepository){
        this.empregadoRHFilhosRepository = empregadoRHFilhosRepository;
    }

    // find by id
    @GetMapping("{id}")
    @ResponseStatus(HttpStatus.FOUND)
    public Empregado_RH_Filhos findByIdEmpregadoRHFilho(@PathVariable Integer id){
        return empregadoRHFilhosRepository.findById(id).orElseThrow( 
            () -> new ResponseStatusException(HttpStatus.NOT_FOUND)
        );
    };

    // selectAll
    @GetMapping()
    public List<Empregado_RH_Filhos> obterTodosEmpregadoRHFilhos(){
        return empregadoRHFilhosRepository.findAll();
    }

    // Save
    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public Empregado_RH_Filhos salvarEmpregadoFilhos(@RequestBody @Valid Empregado_RH_Filhos empregadoRHFilhos){
        return empregadoRHFilhosRepository.save(empregadoRHFilhos);
    }

    // update
    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateEmpregadoRHFilhos(@PathVariable Integer id, @RequestBody @Valid Empregado_RH_Filhos empregadoRHFilhos){ 
    	empregadoRHFilhosRepository
                .findById(id)
                .map( empregadosFilhosAtualizado -> {
                    empregadoRHFilhos.setId_empregado_RH_Filho(empregadosFilhosAtualizado.getId_empregado_RH_Filho());
                    empregadoRHFilhosRepository.save(empregadoRHFilhos);
                    return empregadosFilhosAtualizado;
                }).orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Filho(a) não encontrado") );
    }


    // delete 
    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletaEmpregadoRHFilho(@PathVariable Integer id){
    	empregadoRHFilhosRepository
            .findById(id)
            .map( c -> { 
            	empregadoRHFilhosRepository.delete(c);
                return Void.TYPE;
            })
            .orElseThrow( 
            		() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Filho(a) não encontrado") 
            );
    }
}
