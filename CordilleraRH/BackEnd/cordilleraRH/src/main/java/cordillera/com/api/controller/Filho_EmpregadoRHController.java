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

import cordillera.com.api.model.components.Filho_Empregado_RH;
import cordillera.com.api.model.container.Filho_EmpregadoRHJPA;

@RestController
@RequestMapping("/mainhub/filhoEmpregadoRH")
public class Filho_EmpregadoRHController {
    
    private final Filho_EmpregadoRHJPA filhoEmpregadoRHRepository;

    @Autowired
    public Filho_EmpregadoRHController(Filho_EmpregadoRHJPA empresaEmpregadoRepository){
        this.filhoEmpregadoRHRepository = empresaEmpregadoRepository;
    }

    // find by id
    @GetMapping("{id}")
    @ResponseStatus(HttpStatus.FOUND)
    public Filho_Empregado_RH findByIdFilhoEmpregadoRH(@PathVariable Integer id){
        return filhoEmpregadoRHRepository.findById(id).orElseThrow( 
            () -> new ResponseStatusException(HttpStatus.NOT_FOUND)
        );
    };

    // select all
    @GetMapping()
    public List<Filho_Empregado_RH> obterTodosFilhoEmpregadoRh(){
        return filhoEmpregadoRHRepository.findAll();
    }

    // Save 
    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public Filho_Empregado_RH salvarFilhoEmpregadoRH(@RequestBody @Valid Filho_Empregado_RH filhoEmpregadoRH){
        return filhoEmpregadoRHRepository.save(filhoEmpregadoRH);
    }

    // update
    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateFilhoEMpregadoRH(@PathVariable Integer id, @RequestBody @Valid Filho_Empregado_RH filhoEmpregadoRH){ 
    	filhoEmpregadoRHRepository
                .findById(id)
                .map( filhoEmpregadoRHAtualizado -> {
                    filhoEmpregadoRH.setId_filhoEmpregadoRH((filhoEmpregadoRHAtualizado.getId_filhoEmpregadoRH()));
                    filhoEmpregadoRHRepository.save(filhoEmpregadoRH);
                    return filhoEmpregadoRHAtualizado;
                }).orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Filho(a) não encontrado") );
    }

    // delete 
    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletaEmpregado(@PathVariable Integer id){
    	filhoEmpregadoRHRepository
            .findById(id)
            .map( c -> { 
            	filhoEmpregadoRHRepository.delete(c);
                return Void.TYPE;
            })
            .orElseThrow( 
            		() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Empresa/Empregado não encontrado") 
            );
    }

}